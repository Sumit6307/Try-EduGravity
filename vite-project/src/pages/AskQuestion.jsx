import { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../utils/api';
import QueryInput from '../components/QueryInput';
import ResponseDisplay from '../components/ResponseDisplay';
import BoardSelector from '../components/BoardSelector';
import VisualCanvas from '../components/VisualCanvas';
import HistoryPanel from '../components/HistoryPanel';
import { BoardContext } from '../contexts/BoardContext';

function AskQuestion() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { board } = useContext(BoardContext);

  const handleSubmit = async () => {
    setLoading(true);
    setResponse(null);
    setError(null);
    try {
      const res = await api.post('/query', { query, board });
      setResponse(res.data);
    } catch (err) {
      const errorMsg = err.response?.data?.error || err.message || 'Failed to fetch response';
      setError(errorMsg);
      console.error('Failed to submit query:', err);
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-16"
      style={{ backgroundImage: `url(/assets/images/${board.toLowerCase()}-bg.jpg)` }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="col-span-2">
            <BoardSelector />
            <QueryInput
              query={query}
              setQuery={setQuery}
              onSubmit={handleSubmit}
              loading={loading}
            />
            {error && (
              <p className="text-red-500 mt-2">{error}</p>
            )}
            {response && !error && (
              <>
                <ResponseDisplay response={response} />
                {response.visual && <VisualCanvas visual={response.visual} />}
              </>
            )}
          </div>
          <div>
            <HistoryPanel />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AskQuestion;
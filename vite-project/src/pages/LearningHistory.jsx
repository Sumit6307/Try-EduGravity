import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../utils/api';

function LearningHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await api.get('/history');
        setHistory(res.data);
      } catch (err) {
        console.error('Failed to fetch history');
      }
      setLoading(false);
    };
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="container mx-auto p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Learning History</h2>
          {loading ? (
            <p>Loading...</p>
          ) : history.length === 0 ? (
            <p>No history found</p>
          ) : (
            <div className="space-y-4">
              {history.map((item) => (
                <div key={item._id} className="p-4 bg-gray-100 rounded-lg">
                  <p className="font-semibold">{item.query}</p>
                  <p className="text-sm text-gray-600">{new Date(item.createdAt).toLocaleString()}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default LearningHistory;
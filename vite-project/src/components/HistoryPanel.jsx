import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../utils/api';

function HistoryPanel() {
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
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-gray-100 rounded-lg"
    >
      <h3 className="text-lg font-semibold mb-2">Recent Queries</h3>
      {loading ? (
        <p>Loading...</p>
      ) : history.length === 0 ? (
        <p>No queries found</p>
      ) : (
        <ul className="space-y-2">
          {history.slice(0, 5).map((item) => (
            <li key={item._id} className="text-sm">
              {item.query} <span className="text-gray-500">({new Date(item.createdAt).toLocaleDateString()})</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default HistoryPanel;
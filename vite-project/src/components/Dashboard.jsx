import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Dashboard() {
  const navigate = useNavigate();

  const options = [
    { label: 'Ask a Question', path: '/ask' },
    { label: 'Explore Topics', path: '/explore' },
    { label: 'View History', path: '/history' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-90 rounded-lg p-8 shadow-lg max-w-2xl w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">EduAI Dashboard</h2>
        <div className="grid grid-cols-1 gap-4">
          {options.map((option) => (
            <motion.button
              key={option.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(option.path)}
              className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700"
            >
              {option.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Dashboard;
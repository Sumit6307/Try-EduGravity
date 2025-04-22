import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-white"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to EduAI</h1>
        <p className="text-xl mb-6">Your personalized AI tutor for CBSE, ICSE, and State Boards</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/dashboard')}
          className="bg-white text-blue-600 p-3 rounded-lg font-semibold"
        >
          Start Learning
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Home;
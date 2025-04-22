import { useContext } from 'react';
import { motion } from 'framer-motion';
import { BoardContext } from '../contexts/BoardContext';
import topics from '../assets/data/topics.json';

function ExploreTopics() {
  const { board } = useContext(BoardContext);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(/assets/images/${board.toLowerCase()}-bg.jpg)` }}
    >
      <div className="container mx-auto p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">{board} Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topics[board].map((topic) => (
              <motion.div
                key={topic}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gray-100 rounded-lg text-center"
              >
                {topic}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ExploreTopics;
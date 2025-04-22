import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

function ResponseDisplay({ response }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6 p-4 bg-gray-100 rounded-lg"
    >
      {response.error ? (
        <p className="text-red-500">{response.error}</p>
      ) : (
        <ReactMarkdown>{response.text}</ReactMarkdown>
      )}
    </motion.div>
  );
}

export default ResponseDisplay;
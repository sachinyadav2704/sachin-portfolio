/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const DeveloperIllustration = () => {
  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const codeLines = [
    { width: 180, delay: 0 },
    { width: 140, delay: 0.2 },
    { width: 160, delay: 0.4 },
    { width: 120, delay: 0.6 },
    { width: 200, delay: 0.8 },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
      {/* Floating tech bubbles */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute -top-8 -left-8 z-0 opacity-20"
      >
        <svg width="160" height="160" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="#2563EB" />
        </svg>
      </motion.div>

      {/* Main illustration container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 450"
          className="w-full h-auto"
        >
          {/* Laptop base */}
          <motion.rect
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            x="150"
            y="300"
            width="300"
            height="20"
            rx="3"
            fill="#E2E8F0"
          />

          {/* Laptop screen */}
          <g>
            <rect
              x="175"
              y="100"
              width="250"
              height="180"
              rx="5"
              fill="#F8FAFC"
            />
            <rect
              x="185"
              y="110"
              width="230"
              height="160"
              rx="2"
              fill="#1E40AF"
            />

            {/* Animated code lines */}
            {codeLines.map((line, i) => (
              <motion.rect
                key={i}
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: line.width }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1 + 0.3,
                  type: "spring",
                }}
                x="190"
                y={140 + i * 20}
                height="6"
                rx="3"
                fill={i > 2 ? "#93C5FD" : "#EFF6FF"}
              />
            ))}

            {/* Terminal header */}
            <rect x="185" y="110" width="230" height="25" fill="#1D4ED8" />
            <circle cx="200" cy="123" r="4" fill="#EF4444" />
            <circle cx="215" cy="123" r="4" fill="#FBBF24" />
            <circle cx="230" cy="123" r="4" fill="#10B981" />
          </g>

          {/* Developer figure */}
          <g transform="translate(400, 180) scale(0.8)">
            {/* Head */}
            <circle cx="0" cy="-40" r="25" fill="#1E293B" />

            {/* Body */}
            <path d="M0 0 L0 80 L-20 110 L20 110 L0 80" fill="#1E293B" />

            {/* Arms */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              d="M-30 30 L-60 10 L-40 -10"
              stroke="#1E293B"
              strokeWidth="8"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1 }}
              d="M30 30 L60 0 L40 -20"
              stroke="#1E293B"
              strokeWidth="8"
              fill="none"
            />

            {/* Glasses reflection */}
            <motion.rect
              animate={{ opacity: [0.8, 0.3, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
              x="-15"
              y="-50"
              width="8"
              height="4"
              fill="#FFFFFF"
              rx="2"
            />
          </g>

          {/* Floating tech icons */}
          <motion.g
            animate={{
              x: [0, -5, 0],
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            transform="translate(100, 50)"
          >
            <circle cx="0" cy="0" r="20" fill="#3B82F6" opacity="0.1" />
            <image
              href="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              x="-15"
              y="-15"
              width="30"
              height="30"
            />
          </motion.g>

          <motion.g
            animate={{
              x: [0, 5, 0],
              y: [0, -15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            transform="translate(450, 350)"
          >
            <circle cx="0" cy="0" r="20" fill="#10B981" opacity="0.1" />
            <image
              href="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              x="-15"
              y="-15"
              width="30"
              height="30"
            />
          </motion.g>
        </svg>
      </motion.div>

      {/* Pulsing animation for CTA */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg"
      >
        <span className="font-medium">const code = solveProblems();</span>
      </motion.div>
    </div>
  );
};

export default DeveloperIllustration;

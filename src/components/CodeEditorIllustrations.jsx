/* eslint-disable no-unused-vars */
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const CodeEditorIllustration = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      await controls.start("typing");
      await controls.start("cursorBlink");
    };
    sequence();
  }, [controls]);

  const codeSnippet = [
    { text: "const portfolio = {", indent: 0, color: "text-blue-400" },
    { text: "  name: 'Sachin Yadav',", indent: 2, color: "text-gray-100" },
    {
      text: "  role: 'MERN Stack Developer',",
      indent: 2,
      color: "text-gray-100",
    },
    { text: "  skills: [", indent: 2, color: "text-gray-100" },
    {
      text: "    'React', 'Node.js', 'MongoDB'",
      indent: 4,
      color: "text-emerald-300",
    },
    { text: "  ],", indent: 2, color: "text-gray-100" },
    { text: "  projects: 20+", indent: 2, color: "text-gray-100" },
    { text: "};", indent: 0, color: "text-blue-400" },
    { text: "", indent: 0 },
    {
      text: "// Let's build something amazing",
      indent: 0,
      color: "text-purple-300",
    },
    { text: "contactMe();", indent: 0, color: "text-yellow-300" },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Macbook-style window */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
        {/* Window controls */}
        <div className="flex items-center px-4 py-3 bg-gray-700">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-xs text-gray-300">portfolio.js</div>
        </div>

        {/* Code editor */}
        <div className="p-4 font-mono text-sm">
          {codeSnippet.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                typing: {
                  opacity: 1,
                  transition: { delay: index * 0.2 },
                },
              }}
              className={`flex ${line.color || "text-gray-400"}`}
            >
              <span className="opacity-50 mr-4">{index + 1}</span>
              <div style={{ marginLeft: `${line.indent * 8}px` }}>
                {line.text}
              </div>
              {index === codeSnippet.length - 1 && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="ml-1 w-2 h-5 bg-yellow-400 inline-block"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating tech stack */}
      <div className="absolute -bottom-8 -right-8 flex space-x-4">
        {["react", "nodejs", "mongodb"].map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-white p-2 rounded-full shadow-lg"
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
              className="w-8 h-8"
              alt={tech}
            />
          </motion.div>
        ))}
      </div>

      {/* Subtle background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-20 -left-20 opacity-10"
      >
        <svg width="200" height="200" viewBox="0 0 100 100">
          <path
            d="M50 0 L100 50 L50 100 L0 50 Z"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default CodeEditorIllustration;

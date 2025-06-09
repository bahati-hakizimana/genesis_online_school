import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tabs = ({ tabs }) => {
  // Step 1: Group tabs by label
  const groupedTabs = tabs.reduce((acc, tab) => {
    if (!acc[tab.label]) acc[tab.label] = [];
    acc[tab.label].push(tab.content);
    return acc;
  }, {});

  const tabLabels = Object.keys(groupedTabs);
  const [activeTab, setActiveTab] = useState(tabLabels[0]);

  return (
    <div className="mt-10 px-6">
      {/* Tab buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabLabels.map((label) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`px-6 py-2 rounded-full text-white font-semibold transition-all ${
              activeTab === label ? 'bg-green-600' : 'bg-gray-400 hover:bg-blue-500'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Cards for the active tab */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5"
        >
          {groupedTabs[activeTab].map((course, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={course.image}
                alt={course.language}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-1">{course.title}</h2>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Language of study: {course.language}</h3>
                <p className="text-sm text-gray-600 mb-2">Type: {course.type}</p>
                <p className=" text-[15px] text-gray-500 line-clamp-4">{course.description}</p>
                <div className="mt-3 text-right">
                  <span className="text-xs text-blue-600 font-medium">{course.form}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Tabs;

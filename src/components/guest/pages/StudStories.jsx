import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';

const studentStories = [
  {
    id: 1,
    name: 'Aline Uwase',
    message: 'Joining Genesis Online School was the best decision I ever made. I learned at my own pace and achieved great results!',
  },
  {
    id: 2,
    name: 'Eric Niyonzima',
    message: 'The flexibility of the courses allowed me to work part-time and still finish my studies on time. Highly recommended!',
  },
  {
    id: 3,
    name: 'Claudine Mukamana',
    message: 'I never thought online learning could be so engaging. The platform is easy to use, and the support is excellent!',
  },
  {
    id: 4,
    name: 'Jean Bosco',
    message: 'Thanks to Genesis, I was able to prepare for university while balancing family responsibilities.',
  },
];

function StudStories() {
  return (
    <div className="bg-white w-full py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center justify-center mb-12">
          <h1 className="text-[42px] md:text-[50px] text-black font-bold text-center">
            Our Students’ Stories
          </h1>
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {studentStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
                  <FaUserCircle />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{story.name}</h3>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">{story.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudStories;

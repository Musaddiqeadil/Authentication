import React from 'react'
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-6">
          Welcome
        </h2>

        {/* User Info (You can replace with dynamic user data later) */}
        <div className="mb-6">
          <p className="text-lg text-gray-300">
            <span className="font-semibold text-white">Name:</span> User Name
          </p>
          <p className="text-lg text-gray-300">
            <span className="font-semibold text-white">Your Registered Email is:</span> user@example.com
          </p>
        </div>

        {/* Logout Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Logout
        </motion.button>
      </motion.div>
    </div>
  )
}

export default HomePage


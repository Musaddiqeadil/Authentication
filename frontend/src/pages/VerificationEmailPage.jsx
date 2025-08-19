import React from 'react'
import { motion } from "framer-motion";

const VerificationEmailPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Verify Email
        </h2>

        <p className="text-gray-400 text-center mb-6">
          Enter the 6-digit code sent to your email
        </p>

        {/* 6-digit code input */}
        <motion.input
          type="text"
          maxLength={6}
          placeholder="Enter code"
          whileFocus={{ scale: 1.03 }}
          className="w-full text-center tracking-widest text-lg font-semibold 
                     px-4 py-3 rounded-lg bg-gray-700 text-white 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
        />

        {/* Verify Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Verify Email
        </motion.button>
      </motion.div>
    </div>
  )
}

export default VerificationEmailPage

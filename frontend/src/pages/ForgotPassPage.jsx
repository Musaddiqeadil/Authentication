import React from 'react'
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Forgot Password
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Enter your email to reset your password
        </p>

        {/* Email Input */}
        <motion.div whileFocus={{ scale: 1.03 }} className="relative mb-6">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        {/* Reset Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
         Send Email
        </motion.button>

        {/* Back to Login */}
        <p className="text-center text-gray-400 mt-6">
          <a href="/login" className="text-blue-500 hover:underline">
            Back to Login
          </a>
        </p>
      </motion.div>
    </div>
  )
}

export default ForgotPassPage

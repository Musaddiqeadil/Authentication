import axios from "axios";

// Your backend Render URL

  const baseURL ="https://authentication-1-aod5.onrender.com/api/auth"


// REGISTER
export const registerUser = async (userData) => {
    console.log(userData);
  try {
    const res = await axios.post(`${baseURL}/register`, userData);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err.response?.data || { message: "Something went wrong" };

  }
};

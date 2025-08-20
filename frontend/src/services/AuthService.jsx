import axios from "axios";

// Your backend Render URL
const API = axios.create({
  baseURL: "https://authentication-1-aod5.onrender.com/api",
});

// REGISTER
export const registerUser = async (userData) => {
  try {
    const res = await API.post("/register", userData);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Something went wrong" };
  }
};

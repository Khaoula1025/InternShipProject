import axios from "axios";
import { useStateContext } from "./context/ContextProvider"; 

const axiosClient = axios.create({
 baseURL: `${import.meta.env.VITE_API_BASE_URL}api`
})

axiosClient.interceptors.request.use((config) => {
 const token = localStorage.getItem('ACCESS_TOKEN');
 config.headers.Authorization = `Bearer ${token}`
 return config;
})

axiosClient.interceptors.response.use((response) => {
 // Check if the response is from a login or signup operation
 // This assumes your login/signup endpoints return a specific response structure
 // Adjust the condition based on your actual API response
 if (response.config.url.includes('/login') || response.config.url.includes('/signup')) {
    // Assuming the response contains a token and user information
    const { token, user } = response.data;
    if (token && user) {
      // Store the token in localStorage
      localStorage.setItem('ACCESS_TOKEN', token);
      // Redirect the user to the dashboard
      window.location.href = '/dashboard';
    }
 }
 return response;
}, (error) => {
 try {
    const { response } = error;
    if (response.status === 401) {
      localStorage.removeItem('ACCESS_TOKEN');
      // Optionally, redirect to login page
      window.location.href = '/login';
    }
 } catch (e) {
    console.error(e);
 }
 throw error;
});

export default axiosClient;

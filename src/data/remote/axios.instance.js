import axios from "axios";
const axiosInstance = axios.create({
    baseURL:'http://localhost:3000/api/v1/'
});

export default axiosInstance;

// instance.interceptors.request.use((config) => {
//     console.log(config);
//     return config;
// })
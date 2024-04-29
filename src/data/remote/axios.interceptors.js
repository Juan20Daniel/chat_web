import axiosInstance from "./axios.instance";
import { otherErrorRequest } from "./errors.request";
import { getTokenLocalStorage } from "../local/LocalStorage";

axiosInstance.interceptors.request.use(
    (request) => {
        const skip = ['auth'];
        if(request.url.includes(skip)) return request;
        //Recuerda mantener el token actualizado andes hacer consultas porque en caso de que este expire, dara error
        const token = getTokenLocalStorage();
        request.headers.Authorization = `JWT ${token}`;
        return request
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {    
        let existsResponse = error.hasOwnProperty('response');
        return Promise.reject(existsResponse ? error.response.data : otherErrorRequest(error.code));
    }
)
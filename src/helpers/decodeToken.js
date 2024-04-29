import { jwtDecode } from "jwt-decode";

export const decodeToken = (token) => {
    if(!token) return false;
    const result = jwtDecode(token);
    return result.data;
}
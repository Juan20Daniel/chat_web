import { jwtDecode } from "jwt-decode";
import { checkExpireToken } from "./checkExpireToken";

export const decodeToken = (token) => {
    if(!token) return false;
    const tokenDecoded = jwtDecode(token);
    if(!tokenDecoded.hasOwnProperty('exp')) return tokenDecoded.data;
    const { exp } = tokenDecoded;
    if(!checkExpireToken(exp)) return tokenDecoded.data;
    return false; 
}
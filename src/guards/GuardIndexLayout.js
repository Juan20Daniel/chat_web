import { getTokenLocalStorage } from "../data/local/LocalStorage";
import { Navigate } from "react-router-dom";

const GuardIndexLayout = ({children}) => {
    return getTokenLocalStorage() ? children : <Navigate to='/form-layout' replace />
}

export default GuardIndexLayout;
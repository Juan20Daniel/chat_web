import { getTokenLocalStorage } from "../data/local/LocalStorage";
import { Navigate } from "react-router-dom";

const GuardFormLayout = ({children}) => {
    return !getTokenLocalStorage() ? children : <Navigate to='/' replace />
}

export default GuardFormLayout;
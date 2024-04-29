import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import CentralAlertContext from "../../context/alertContext/CentralAlertContext";
import ChatContext from '../../context/chatContext/ChatContext';
import { getTokenLocalStorage } from "../../data/local/LocalStorage";
export const IndexLayoutViewModel = () => {
    const {centralAlert} = useContext(CentralAlertContext);
    const { contact } = useContext(ChatContext);
    const {windowWidth} = useWindowWidth()
    const navigate = useNavigate();
    useEffect(() => {
        if(!getTokenLocalStorage()) navigate('/form-layout/login', {replace:true});
    },[navigate]);
    return {centralAlert, windowWidth, contact}
}
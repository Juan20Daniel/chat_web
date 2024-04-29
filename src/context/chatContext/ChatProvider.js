import { useState, useEffect } from "react";
import ChatContext from "./ChatContext";
import { useWindowWidth } from '../../hooks/useWindowWidth';

export const ChatProvider = ({children}) => {
    const [ isMovil, setIsMovil ] = useState(true);
    const [ isActive, setIsActive ] = useState(false);
    const [ contact, setContact ] = useState(null);
    const { windowWidth } = useWindowWidth();
    useEffect(() => {
        if(windowWidth < 700) {
            setIsMovil(true);
        } else {
            setIsMovil(false);
        }
    },[windowWidth]);
    return (
        <ChatContext.Provider value={{isMovil, isActive, contact, setContact, setIsActive}}>
            {children}
        </ChatContext.Provider>
    )
}
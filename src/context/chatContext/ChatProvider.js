import { useState, useEffect, useCallback } from "react";
import ChatContext from "./ChatContext";
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { scrollBottom } from "../../helpers/scroll";

export const ChatProvider = ({children}) => {
    const [ isMovil, setIsMovil ] = useState(true);
    const [ isActive, setIsActive ] = useState(false);
    const [ messages, setMessages ] = useState(null);
    const [ loadingUsers, setLoadingUsers ] = useState(true);
    const [ userActive, setUserActive ] = useState({
        email: null,
        fullname: null,
        online: false,
        uid: null
    });
    const [ users, setUsers ] = useState(null);
    const { windowWidth } = useWindowWidth();
    useEffect(() => {
        if(windowWidth < 700) {
            setIsMovil(true);
        } else {
            setIsMovil(false);
        }
    },[windowWidth]);
    useEffect(() => {
        if(!messages) return;
        scrollBottom();
    },[messages]);
    const refreshUserActive = useCallback(() => {
        if(userActive.uid) {
            const newData = users?.find(user => user.uid === userActive.uid);
            setUserActive(newData);
        }
    },[users, userActive]);
    useEffect(() => {
        refreshUserActive();
    },[users, refreshUserActive]);
    return (
        <ChatContext.Provider value={{
            isMovil,
            isActive,
            users,
            userActive,
            messages,
            loadingUsers,
            setLoadingUsers,
            setMessages,
            setUserActive,
            setUsers,
            setIsActive
        }}>
            {children}
        </ChatContext.Provider>
    )
}
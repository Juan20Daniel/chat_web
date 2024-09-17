import { useContext, useEffect } from "react";
import { useSocket } from "../../hooks/useSocket";
import SocketContext from "./SocketContext";
import ChatContext from "../chatContext/ChatContext";

export const SocketProvider = ({children}) => {
    const { socket, connectionSocket, disconnectedSocket } = useSocket();
    const { setUsers, setMessages, setLoadingUsers } = useContext(ChatContext);
    useEffect(() => {
        connectionSocket();
    },[connectionSocket]);
    useEffect(() => {
        socket?.on('users', (users) => {
            console.log(users);
            setUsers(users);
            setLoadingUsers(false);
        });
    },[socket, setUsers, setLoadingUsers]);
    useEffect(() => {
        socket?.on('personal-message', (newMessage) => {
            setMessages(messages => ([...messages??[], newMessage]));
        });
    },[socket, setMessages]);
    useEffect(() => {
        socket?.io.on('error', (error) => {
            console.log(error);
            setLoadingUsers(false);
        })
    },[socket]);
    return (
        <SocketContext.Provider value={{
            socket,
            disconnectedSocket
        }}>
            {children}
        </SocketContext.Provider>
    )
}

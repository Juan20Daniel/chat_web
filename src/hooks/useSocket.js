import { useCallback, useState } from 'react';
import { getTokenLocalStorage } from '../data/local/LocalStorage';
import io from 'socket.io-client';

export const useSocket = () => {
    const [ socket, setSocket ] = useState(null);
    const connectionSocket = useCallback(() => {
        const token = getTokenLocalStorage();
        const socketTemp = io.connect('http://localhost:3000', {
            transports: ['websocket'],
            autoConnet: true,
            reconnection: false,
            forceNew: true,
            query: {
                'authorization': token
            }
        });
        setSocket(socketTemp);
    },[]);
    const disconnectedSocket = () => {
        socket.disconnect();
    }
    return {
        socket,
        connectionSocket,
        disconnectedSocket
    }
}

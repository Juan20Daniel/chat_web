import { useContext, useState, useEffect } from 'react'
import { decodeToken } from '../../helpers/decodeToken';
import { getTokenLocalStorage } from '../../data/local/LocalStorage';
import ChatContext from '../../context/chatContext/ChatContext';
import iconSend from '../../assets/iconSend.svg';
import SocketContext from '../../context/socketContext/SocketContext';
import './chatFooter.css';
var count = 0;
const ChatFooter = () => {
    const [ message, setMessage ] = useState('');
    const [ disable, setDisable ] = useState(false);
    const { userActive, messages, setMessages } = useContext(ChatContext);
    const { socket } = useContext(SocketContext);
    useEffect(() => {
        if(message === '') {
            setDisable(true);
        } else {
            setDisable(false);
        }
    },[message]);
    const sendMessage = (e) => {
        e.preventDefault();
        if(message === '') return;
        socket.emit('new-message', {
            from:decodeToken(getTokenLocalStorage()).uid,
            to:userActive.uid,
            message
        });
        const newMessage = {
            _id:count++,
            message,
            from:decodeToken(getTokenLocalStorage()).uid
        }
        setMessages([...messages, newMessage]);
        setMessage('');
    }
    return (
        <div className='footer'>
            {userActive && 
                <form className='box-input' onSubmit={sendMessage}>
                    <input
                        type='text'
                        placeholder='Ingresa un texto'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    {!disable &&
                        <button type='submit' className='box-icon-send' title='Enviar'>
                            <img src={iconSend} alt='Icon send' />
                        </button>
                    }
                </form>
            }
        </div>
    );
}

export default ChatFooter;
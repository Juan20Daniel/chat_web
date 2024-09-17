import { useContext, useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axiosInstance from '../../data/remote/axios.instance';
import ilustrationChat from '../../assets/ilustrationChat.svg'; 
import ChatContext from "../../context/chatContext/ChatContext";
import Loader from '../../components/loader/Loader';
import ChatHeader from '../../components/chatHeader/ChatHeader';
import ChatFooter from '../../components/chatFooter/ChatFooter';
import CentralAlertContext from '../../context/alertContext/CentralAlertContext';
import NotMessage from '../../components/notMessages/NotMessages';
import Message from '../../components/message/Message';
import './chatZone.css';

const ChatZone = () => {
    const [ loadMessage, setLoadMessage ] = useState(true);
    const { userActive, messages, setMessages } = useContext(ChatContext);
    const { setCentralAlert } = useContext(CentralAlertContext);
    useEffect(() => {
        const getHistiry = async () => {
            try {
                setLoadMessage(true);
                const response = await axiosInstance.get(`/messages/${userActive.uid}`);
                setMessages(response.history);
            } catch (error) {
                setMessages(null);
                setCentralAlert({
                    visible:true, 
                    typeAlert:'error', 
                    title:'Historial', 
                    desc:error.message
                });
            }finally {
                setLoadMessage(false);
            }
        }
        if(!userActive.uid) return;
        getHistiry();
    },[userActive.uid, setCentralAlert, setMessages]);
    return (
        <div className='chat'>
            {userActive.uid ?
                <>
                    <div className='main'>
                        <ChatHeader />
                        {!loadMessage ?
                            <div className='chat-content' id='messages'>  
                                {messages.map(message => (
                                    <Message key={message._id} data={message} />
                                ))}
                                {messages.length === 0 && <NotMessage />}
                            </div>
                            :
                            <div className='chat-loader'>
                                <Loader message='Cargando mensages...' />
                            </div>
                        }
                    </div>
                    <ChatFooter />
                </>
                :
                <div className='box'>
                    <LazyLoadImage
                        alt='ilustration'
                        className='image'
                        src={ilustrationChat}
                        placeholder={<div>Cargando imagen...</div>}
                    />
                    <h1>Chat Zone</h1>
                </div>
            }
        </div>
    );
}

export default ChatZone;
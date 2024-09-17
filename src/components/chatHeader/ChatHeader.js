import { useContext, useEffect, useState } from 'react';
import { IconBack } from '../../assets/IconsSvg';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import ChatContext from '../../context/chatContext/ChatContext';
import imgUser from '../../assets/iconUser.png';
import './chatHeader.css';
const ChatHeader = () => {
    const [ name, setName ] = useState('');
    const { userActive, setUserActive } = useContext(ChatContext);
    const { windowWidth } = useWindowWidth();
    useEffect(() => {
        if(userActive.fullname) {
            const arrayText = userActive.fullname.split('');
            if(arrayText.length > 10) {
                setName(arrayText.slice(0, 10).join('').concat('...'));
            } else {
                setName(userActive.fullname);
            }
        }
    },[userActive.fullname]);
    const back = () => {
        setUserActive({
            email: null,
            fullname: null,
            online: false,
            uid: null
        });
    }
    return (
        <div className='header'>
            <div className='box-btn-back'>
                {windowWidth < 700 &&
                    <button type='button' onClick={() => back()} className='btn-back' title='Volver'>
                        <IconBack />
                    </button>
                }
                <span>Tu</span>
            </div>
            <div className='box-user-active'>
                <div className='info'>
                    <p className='name' title={userActive.fullname}>{name}</p>
                    <p className='status'>{userActive.online ? 'En linea' : 'Fuera de linea'}</p>
                </div>
                <div className='box-avatar'>
                    <img src={imgUser} alt='Img user' />
                </div>
            </div>
        </div>
    );
}

export default ChatHeader;
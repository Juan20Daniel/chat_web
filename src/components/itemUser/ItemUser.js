import { useContext, useEffect, useState } from 'react';
import { useRecord } from '../../hooks/useRecordText';
import ChatContext from '../../context/chatContext/ChatContext';
import imgUser from '../../assets/iconUser.png';
import './itemUser.css';
const ItemUser = ({data}) => {
    const [ isSelected, setIsSelected ] = useState(false);
    const { setUserActive, userActive } = useContext(ChatContext);
    const { element, fullname } = useRecord(data.fullname);
    useEffect(() => {
        if(!userActive.uid) return;
        if(data.uid === userActive.uid) setIsSelected(true);
        else {
            setIsSelected(false);
        }
    },[userActive, data.uid]);
    const selectUser = async () => {
        setUserActive(data);
    }
    return (
        <li className={`item-user ${isSelected && 'selected'}`}>
            <button className='btn-select' onClick={() => selectUser()}>
                <div className='box-avatar'>
                    <img src={imgUser} alt='Img user' />
                </div>
                <div className='info'>
                    <p className='fullname' ref={element}>{fullname}</p>
                    <p className='email'>{data.email}</p>
                </div>
            </button>
        </li>
    );
}
export default ItemUser;
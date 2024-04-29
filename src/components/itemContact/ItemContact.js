import { useContext } from 'react';
import './itemContact.css';
import MenuPoint from '../menuPoint/MenuPoint';
import { ItemContactViewModel } from './ItemContactViewModel';
import { IconUserContact } from '../../assets/IconsSvg';
import ChatContext from '../../context/chatContext/ChatContext';
const ItemContact = ({data}) => {
    const { setContact } = useContext(ChatContext);
    const { openChat, stopPropagation } = ItemContactViewModel();
    return (
        <div className='item-contact' onClick={() => setContact(true)}>
            <div className='box-avatar'>
                <IconUserContact />
            </div>
            <div className='info'>
                <p className='fullname'>{data.fullname}</p>
                <span className='date-msg'>13/01/2024</span>
                <p className='message'>Hola buenos días mi nombre...</p>
                <div className='box-menu-point' onClick={stopPropagation}>
                    <MenuPoint options={['Eliminar']} />
                </div>
            </div>
        </div>
    );
}
export default ItemContact;
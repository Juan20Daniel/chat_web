import './itemUser.css';
import { IconUserContact } from '../../assets/IconsSvg';
import { ItemUserViewModel } from './ItemUserViewModel';
const ItemUser = ({data}) => {
    const { element, fullname, showBtnAdd, addContact } = ItemUserViewModel(data);
    return (
        <li className='item-user'>
            <div className='box-avatar'>
                <IconUserContact />
            </div>
            <div className='info'>
                <p className='fullname' ref={element}>{fullname}</p>
                <p className='email'>{data.email}</p>
            </div>
            {showBtnAdd ?
                <button className='btn-add' onClick={() => addContact()}>
                    Agregar
                </button>
                :
                <span className='message-added'>Agregado</span>
            }
        </li>
    );
}
export default ItemUser;
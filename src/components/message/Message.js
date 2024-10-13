import { getTokenLocalStorage } from '../../data/local/LocalStorage';
import { decodeToken } from '../../helpers/decodeToken';
import './message.css';
const uid = decodeToken(getTokenLocalStorage()).uid;
export const Message = ({data}) => {
    return (
        <div className='box-message'>
            <div className={`message ${uid === data.from && 'my-message'}`}>
                <p className='text'>{data.message}</p>
                <p className='hour'>12:39 p.m</p>
            </div>
        </div>
    );
}

export default Message;
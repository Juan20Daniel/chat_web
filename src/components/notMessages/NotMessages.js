import ilustrationNotMessage from '../../assets/ilustrationNotMessage.png';
import './notMessages.css';
const NotMessage = () => {
    return (
        <div className='box-not-messages'>
            <div className='box-center'>
                <img className='ilustration' src={ilustrationNotMessage} alt='ilustration not message' />
                <h1 className='title'>No hay mensages</h1>
            </div>
        </div>
    );
}

export default NotMessage;
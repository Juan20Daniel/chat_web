import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ChatZoneViewModel } from './ChatZoneViewModel';
import ilustrationChat from '../../assets/ilustrationChat.svg'; 
import iconSend from '../../assets/iconSend.svg';
import imgUser from '../../assets/sinh.png';
import imgHe from '../../assets/pp.jpg';
import './chatZone.css';
const ChatZone = () => {
    const { contact } = ChatZoneViewModel();
    return (
        <div className='chat'>
            {contact ?
                <div className='main'>
                    <div className='header'>
                       <div className='box-you'>
                            <div className='box-img-you'>
                                <img src={imgUser} alt='Img user' />
                            </div>
                            <span>Tu</span>
                       </div>
                       <div className='box-contact'>
                            <div className='info'>
                                <p className='name' title='Ernesto Dela Verga'>Ernesto Del...</p>
                                <p className='status'>En linea</p>
                            </div>
                            <div className='box-img-you'>
                                <img src={imgHe} alt='Img user' />
                            </div>
                       </div>
                    </div>
                    <div className='chat-content'>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                        <p>Hi</p>
                    </div>
                </div>
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
            <div className='footer'>
                {contact && 
                    <form className='box-input'>
                        <input 
                            placeholder='Ingresa un texto' 
                        />
                        <button className='box-icon-send' title='Enviar'>
                            <img src={iconSend} alt='Icon send' />
                        </button>
                    </form>
                }
            </div>
        </div>
    );
}

export default ChatZone;
import { useState, useLayoutEffect } from 'react';
import { IconX } from '../../assets/IconsSvg';
import iconUser from '../../assets/iconUserBig.png';
import './loadImageProfile.css';

const LoadImageProfile = ({user, image, setImage}) => {
    const [ imgToSave, setImgToSave ] = useState(null);
    const [ inputValue, setInputValue ] = useState('');
    const [ showBtnAction, setShowBtnAction ] = useState({visible:false, text:'', action:null});
    useLayoutEffect(() => {
        if(!image) return;
        setShowBtnAction({
            visible:true, 
            text:image !== user.avatar ? 'Guardar' : 'Eliminar', 
            action:image !== user.avatar ? 'save' : 'delete'});
        // if(image !== user.avatar) setShowBtnAction(true);
    },[user, image]);
    const handleImage = (e) => {
        const file = e.target.files[0];
        setImgToSave(file);
        if(!file) return;
        setInputValue(e.target.value)
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        }
    }
    const action = () => {
        console.log(showBtnAction)
    }
    const clearInput = () => {
        setShowBtnAction({visible:false, text:'', action:null});
        setImage(null);
        setInputValue('');
        setImgToSave(null);
    }
    return (
        <div className='load-image-profile'>
            <div className='box-img-user'>
                {!image ?
                    <>
                        <input
                            value={inputValue}
                            className='select-img' 
                            type='file' 
                            accept='image/png, image/jpg'
                            onChange={handleImage}    
                        />
                        <img className='icon-user' src={iconUser} alt='Icono user' />
                    </>
                    :
                    <>
                        <img className='img-user' src={image} alt='Img user' />
                        <button type='button' className='clear-input-img' title='Quitar' onClick={() => clearInput()}>
                            <IconX size={13} />
                        </button>
                    </>
                }
                {showBtnAction.visible && 
                    <button type='button' className='save-img' onClick={() => action()}>
                        {showBtnAction.text}
                    </button>
                }
            </div>
        </div>
    );
}

export default LoadImageProfile;
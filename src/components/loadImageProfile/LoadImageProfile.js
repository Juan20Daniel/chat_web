import { useState } from 'react';
import { IconX } from '../../assets/IconsSvg';
import iconUser from '../../assets/iconUserBig.png';
import './loadImageProfile.css';

const LoadImageProfile = ({user, image, setImage}) => {
    const [ imgToSave, setImgToSave ] = useState(null);
    const [ inputValue, setInputValue ] = useState('');
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
    const clearInput = () => {
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
            </div>
        </div>
    );
}

export default LoadImageProfile;
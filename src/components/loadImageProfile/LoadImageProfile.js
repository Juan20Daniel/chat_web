import { useState } from 'react';
import { IconX } from '../../assets/IconsSvg';
import iconUser from '../../assets/iconUserBig.png';
import iconCamera from '../../assets/iconCamera.png';
import Button from '../button/Button';
import './loadImageProfile.css';

const LoadImageProfile = ({ image, imgUser, imgfile, setImage, setImgFile}) => {
    const [ inputValue, setInputValue ] = useState('');
    const handleImage = (e) => {
        const file = e.target.files[0];
        setImgFile(file);
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
        setImgFile(null);
    }
    return (
        <div className='load-image-profile'>
            <div className='box-img-user'>
                <img className='img-user' src={!image ? iconUser : image} alt='Img user' />
                {imgfile && 
                    <button type='button' className='clear-input-img' title='Quitar' onClick={() => clearInput()}>
                        <IconX size={13} />
                    </button>
                }
                {imgUser &&
                    <>
                        {(imgUser.image && !imgfile) &&
                            <div className='box-button-remove'>
                                <Button
                                    type='button'
                                    value='Eliminar'
                                    btnColor='normal'
                                />
                            </div>
                        }
                    </>
                }
                <div className='box-btn-load-image'>
                    <label htmlFor="image_uploads" title='Cargar imagen'>
                        <img src={iconCamera} alt='icon camera'/>
                    </label>
                    <input
                        value={inputValue}
                        id='image_uploads'
                        type='file' 
                        accept='image/png, image/jpg'
                        onChange={handleImage}    
                    />
                </div>
            </div>
        </div>
    );
}

export default LoadImageProfile;
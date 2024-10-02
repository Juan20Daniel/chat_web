import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getTokenLocalStorage } from '../../data/local/LocalStorage';
import { decodeToken } from '../../helpers/decodeToken';
import imgProfile from '../../assets/sinh.png';
import MenuPoint from '../menuPoint/MenuPoint';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './profile.css';

const Profile = () => (
    <div className="profile">
        <LazyLoadImage
            alt='Img de perfil'
            width={50}
            height={50}
            src={imgProfile}
            className='img-profile'
            placeholder={<div className='loading'/>}
        />
        <h1 className="fullname">{
            decodeToken(getTokenLocalStorage()).fullname
        }
        </h1>    
        <div className='box-menu-point'>
            <MenuPoint options={['Modificar', 'Cerrar sesión']} />
        </div>
    </div>
);
export default Profile;


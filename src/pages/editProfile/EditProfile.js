import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { decodeToken } from '../../helpers/decodeToken';
import { getTokenLocalStorage } from '../../data/local/LocalStorage';
import LoadImageProfile from "../../components/loadImageProfile/LoadImageProfile";
import Section from "../../components/section/Section";
import Navbar from "../../components/navbar/Navbar";
import InputProfile from "../../components/inputProfile/InputProfile";
import Button from '../../components/button/Button';
import InputChangePassword from '../../components/inputChangePassword/InputChangePassword';
import './editProfile.css';
//Verificar que los campos sean correctos y mostrar un icono al inicio
const EditProfile = () => {
  const [ fullname, setFullname ] = useState({value:'', camp:'fullname', valid:true});
  const [ email, setEmail ] = useState({value:'', camp:'email', valid:true});
  const [ password, setPassword ] = useState({value:'', camp:'password', valid:true});
  const [ image, setImage ] = useState(null);
  const [ btnEdith, setBtnEdit ] = useState(true);
  const userRef = useRef(null);
  useLayoutEffect(() => {
    userRef.current = decodeToken(getTokenLocalStorage());
    userRef.current.avatar='https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2023/10/14123804/ias-generadoras-de-imagenes.jpg';
    setFullname(preState => ({...preState, value:userRef.current.fullname}));
    setEmail(preState => ({...preState, value:userRef.current.email}));
    setImage(userRef.current.avatar);
  },[]);

  const save = e => {
    e.preventDefault();
    if(btnEdith) return;
    console.log('saveing...');
  }
  return (
    <Section>
      <Navbar title='Editar perfil' />
      <form onSubmit={save}>
        <LoadImageProfile
          user={userRef.current}
          image={image}
          setImage={setImage}
        />
        <InputProfile
          state={fullname}
          setState={setFullname}
          fontSize={19}
          fontWeight='bold'
          exp={/^[a-zA-ZáéíóúñÁÉÍÓÚÑ ]{10,40}$/}
        />
        <InputProfile 
          state={email}
          setState={setEmail}
          value='juancarlos@gmail.com'
          textColor='#838383'
          exp={/^[a-zA-Z0-9-.]{5,40}@[a-zA-Z]{2,15}.[a-zA-Z]{2,10}(.[a-zA-Z]{2,10})?$/}
        />
        <InputChangePassword 
          state={password}
          setState={setPassword}
          exp={/^.{8,30}$/}
        />
        <div className='box-btn-edit'>
          <Button
            type='submit'
            value='Guardar'
            btnColor='success'
            disable={btnEdith}
          />
        </div>
      </form>
    </Section>
  )
}

export default EditProfile;

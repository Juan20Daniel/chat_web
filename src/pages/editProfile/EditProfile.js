import { useState, useLayoutEffect, useRef, useEffect, useCallback } from 'react';
import { decodeToken } from '../../helpers/decodeToken';
import { getTokenLocalStorage } from '../../data/local/LocalStorage';
import LoadImageProfile from "../../components/loadImageProfile/LoadImageProfile";
import Section from "../../components/section/Section";
import Navbar from "../../components/navbar/Navbar";
import InputProfile from "../../components/inputProfile/InputProfile";
import Button from '../../components/button/Button';
import InputChangePassword from '../../components/inputChangePassword/InputChangePassword';
import './editProfile.css';
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
  const compareData = useCallback(() => {
    if(userRef.current.email !== email.value) return true;
    if(userRef.current.fullname !== fullname.value) return true;
    if(userRef.current.avatar !== image) return true;
    if(password.value !== '') return true;
    return false;
  },[email.value,fullname.value,image, password.value]);
  const valid = useCallback(() => {
    if(email.valid && fullname.valid && password.valid) return true;
    return false;
  },[email.valid,fullname.valid, password.valid])
  useEffect(() => {
    if(compareData() && valid()) return setBtnEdit(false);
    setBtnEdit(true);
  },[compareData, valid]);
  const save = e => {
    e.preventDefault();
    compareData();
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
          exp={/^[a-zA-Z0-9-.]{5,40}@[a-zA-Z]{2,25}\.[a-zA-Z]{2,10}(.mx)?$/}
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

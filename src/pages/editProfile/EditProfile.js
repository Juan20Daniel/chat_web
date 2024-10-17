import { useState, useLayoutEffect, useRef, useEffect, useCallback } from 'react';
import { decodeToken } from '../../helpers/decodeToken';
import { getTokenLocalStorage, saveTokenLocalStorage } from '../../data/local/LocalStorage';
import axiosInstance from '../../data/remote/axios.instance';
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
  const [ imgfile, setImgFile ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ btnEdith, setBtnEdit ] = useState(true);
  const userRef = useRef(null);
  const loadUser = useCallback(() => {
    userRef.current = decodeToken(getTokenLocalStorage());
    setFullname(preState => ({...preState, value:userRef.current.fullname}));
    setEmail(preState => ({...preState, value:userRef.current.email}));
    setImage(userRef.current.image);
  },[]);
  useLayoutEffect(() => {
    loadUser();
  },[loadUser]);
  //Función para verificar si se habilita el botón de enviar
  const compareData = useCallback(() => {
    if(userRef.current.email !== email.value) return true;
    if(userRef.current.fullname !== fullname.value) return true;
    if(password.value !== '') return true;
    if(imgfile) return true;
    return false;
  },[email.value,fullname.value,imgfile, password.value]);
  //Función para verificar si los campos editados son validos
  const valid = useCallback(() => {
    if(email.valid && fullname.valid && password.valid) return true;
    return false;
  },[email.valid,fullname.valid, password.valid]);
  useEffect(() => {
    if(compareData() && valid()) return setBtnEdit(false);
    setBtnEdit(true);
  },[compareData, valid]);
  const update = async e => {
    e.preventDefault();
    if(btnEdith) return;
    const formData = new FormData();
    if(userRef.current.image !== image) formData.append('image', imgfile);
    if(userRef.current.email !== email.value) formData.append('email', email.value);
    if(userRef.current.fullname !== fullname.value) formData.append('fullname', fullname.value);
    if(password.value !== '') formData.append('email', email.value);
    try {
      setIsLoading(true);
      const response = await axiosInstance.put('/users',formData, {
        'Content-Type':'multipart/form-data'
      });
      saveTokenLocalStorage(response.token);
      loadUser();
      if(compareData() && valid()) return setBtnEdit(false);
      setBtnEdit(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Section>
      <Navbar title='Editar perfil' />
      <form onSubmit={update}>
        <LoadImageProfile
          image={image}
          imgUser={userRef.current}
          imgfile={imgfile}
          setImage={setImage}
          setImgFile={setImgFile}
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
            colorSpinner='white'
            isLoading={isLoading}
          />
        </div>
      </form>
    </Section>
  )
}

export default EditProfile;

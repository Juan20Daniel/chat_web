import { useState, useLayoutEffect, useRef } from 'react';
import { decodeToken } from '../../helpers/decodeToken';
import { getTokenLocalStorage } from '../../data/local/LocalStorage';
import LoadImageProfile from "../../components/loadImageProfile/LoadImageProfile";
import Section from "../../components/section/Section";
import Navbar from "../../components/navbar/Navbar";
import InputProfile from "../../components/inputProfile/InputProfile";
import Button from '../../components/button/Button';
import './editProfile.css';
const EditProfile = () => {
  const [ fullname, setFullname ] = useState({value:'', camp:'fullname', valid:false});
  const [ email, setEmail ] = useState({value:'', camp:'email', valid:false});
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
        />
        <InputProfile 
          state={email}
          setState={setEmail}
          value='juancarlos@gmail.com'
          textColor='#838383'
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

import { Link } from 'react-router-dom';
import { Form } from '../../components/form/Form';
import { InputGroup } from '../../components/inputGroup/InputGroup';
import { Button } from '../../components/button/Button';
import { IconEmail, IconUser, IconPassword } from '../../assets/IconsSvg'; 
import { SiginViewModel } from './SiginViewModel';
const Sigin = () => {
  const { 
    fullname, 
    email, 
    password, 
    confirmPass,
    isLoading,
    sigin, 
    setFullname, 
    setEmail,
    setPassword,
    setConfirmPass,
    verifyPaswords
  } = SiginViewModel();

  return (
    <Form submit={sigin} title='Bienvenido' desc='Crea tu cuenta para que puedas comensar a enviar mensages'>
      <InputGroup
        type='text'
        placeholder='Nombre completo'
        camp={fullname}
        getValue={setFullname}
        exp={/^[a-zA-ZáÁúÚíÍéÉóÓñÑ ]{20,50}$/g}
      >
        <IconUser color={fullname.status === "normal" ? '#838383':'#AC3636'} />
      </InputGroup>
      <InputGroup
        type='email'
        placeholder='Correo'
        camp={email}
        getValue={setEmail}
        exp={/^[a-zA-Z0-9.,_-]{5,30}@[a-zA-Z0-9-_]{3,15}\.[a-zA-Z.]{3,10}$/g}
      >
        <IconEmail color={email.status === "normal" ? '#838383':'#AC3636'} />
      </InputGroup>
      <InputGroup
        type='password'
        placeholder='Contraseña'
        camp={password}
        getValue={setPassword}
        exp={/^.{5,40}$/g}
        verifyPaswords={verifyPaswords}
      >
        <IconPassword color={password.status === "normal" ? '#838383':'#AC3636'} />
      </InputGroup>
      <InputGroup
        type='password'
        placeholder='Confirmar contraseña'
        camp={confirmPass}
        getValue={setConfirmPass}
        verifyPaswords={verifyPaswords}
      >
        <IconPassword color={confirmPass.status === "normal" ? '#838383':'#AC3636'} />
      </InputGroup>
      <div className='box-btn-access'>
        <Button 
          type='submit' 
          value='Entrar'
          btnColor='success'
          colorSpinner='#ffffff'
          isLoading={isLoading}
        />
      </div>
      <Link to='/form-layout/login' className='link-basic'>Iniciar sesión</Link>
    </Form>
  )
}

export default Sigin;
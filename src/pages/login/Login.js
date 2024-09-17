import { Link } from 'react-router-dom'; 
import { Form } from '../../components/form/Form';
import { InputGroup } from '../../components/inputGroup/InputGroup';
import Button from '../../components/button/Button';
import { IconEmail, IconPassword } from '../../assets/IconsSvg';
import { LoginViewModel } from './LoginViewModel';
import './login.css';
const Login = () => {
  const { email, password, isLoading, setEmail, setPassword, login } = LoginViewModel();
  return (
    <Form submit={login} title='Bienvenido' desc='Inicia sesión con tu correo electrónico y contraseña'>
       <InputGroup
        type='email'
        placeholder='Correo'
        name='email'
        camp={email}
        getValue={setEmail}
        exp={/^[a-zA-Z0-9.,_-]{5,30}@[a-zA-Z0-9-_]{3,15}\.[a-zA-Z.]{3,10}$/g}
      >
        <IconEmail color={email.status === "normal" ? '#838383':'#AC3636'} />
      </InputGroup>
      <InputGroup
        type='password'
        placeholder='Contraseña'
        name='password'
        camp={password}
        getValue={setPassword}
        exp={/^.{5,40}$/g}
      >
        <IconPassword color={password.status === "normal" ? '#838383':'#AC3636'} />
      </InputGroup>
      <Link to='/form-layout/recover-pass' className='restaurer-pass'>Recuperar contraseña</Link>
      <div className='box-btn-access'>
        <Button
          type='submit'
          value='Entrar'
          btnColor='success'
          colorSpinner='#ffffff'
          isLoading={isLoading}
        />
      </div>
      <Link to='/form-layout/sigin' className='link-basic'>Crear cuenta</Link>
    </Form>
  )
}

export default Login;
import { Link } from 'react-router-dom';
import { Form } from '../../components/form/Form';
import { InputGroup } from '../../components/inputGroup/InputGroup';
import { Button } from '../../components/button/Button';
import { RecoverPassViewModel } from './RecoverPassViewModel';
import { IconEmail } from '../../assets/IconsSvg';
const RecoverPass = () => {
  const { email, setEmail, recoverPass } = RecoverPassViewModel();
  return (
    <Form submit={recoverPass} title='Recuperar contraseña' desc='Te enviaremos un mensage al correo registrado en tu cuenta.'>
      <InputGroup 
        type='email'
        placeholder='Correo'
        camp={email}
        getValue={setEmail}
      >
        <IconEmail color={email.status === "normal" ? '#838383':'#AC3636'} />
      </InputGroup>
      <div className='box-btn-access'>
        <Button 
          type='submit' 
          value='Enviar'
          btnColor='success'
        />
      </div>
      <Link to='/form-layout/login' className='link-basic'>Iniciar sesión</Link>
    </Form>
  )
}

export default RecoverPass;
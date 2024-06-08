import { Link } from 'react-router-dom';
import { Form } from '../../components/form/Form';
import { InputGroup } from '../../components/inputGroup/InputGroup';
import { Button } from '../../components/button/Button';
import { UpdatedPassViewModel } from './UpdatedPassViewModel';
import { IconPassword } from '../../assets/IconsSvg';
const UpdatePass = () => {
  const { password, confirmpass, isLoading, form, recoverPass, navigate, setPassord, setConfirmpass, verifyPaswords } = UpdatedPassViewModel();
  return (
    <>
      {form ? 
        <Form submit={recoverPass} title='Cambiar contraseña' desc='Ahora puedes cambiar la contraseña de tu cuenta, recuerda colocar una contraseña segura y confiable.'>
          <InputGroup 
            type='password'
            placeholder='Nueva contraseña'
            camp={password}
            getValue={setPassord}
            exp={/^.{5,40}$/g}
            verifyPaswords={verifyPaswords}
          >
            <IconPassword color={password.status === "normal" ? '#838383':'#AC3636'} />
          </InputGroup>
          <InputGroup 
            type='password'
            placeholder='Confirmar contraseña'
            camp={confirmpass}
            getValue={setConfirmpass}
            exp={/^.{5,40}$/g}
            verifyPaswords={verifyPaswords}
          >
            <IconPassword color={confirmpass.status === "normal" ? '#838383':'#AC3636'} />
          </InputGroup>
          <div className='box-btn-access'>
            <Button 
              type='submit' 
              value='Guardar'
              btnColor='success'
              colorSpinner='white'
              isLoading={isLoading}
            />
          </div>
          <Link to='/form-layout/login' className='link-basic'>Iniciar sesión</Link>
        </Form> 
      :
        <Form title='Cambio de contraseña' desc='Lo sentimos pero la solicitud a expirado o no es válida, favor de hacer la solicitud nuevamente.'>
          <div className='box-btn-access'>
            <Button 
              type='button' 
              value='OK'
              btnColor='success'
              action={() => navigate('/form-layout/login', {replace:true})}
            />
          </div>
        </Form> 
      }
    </>
  )
}

export default UpdatePass;
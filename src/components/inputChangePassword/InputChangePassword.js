import { useState } from 'react';
import {IconShowPass, IconNotShowPass} from '../../assets/IconsSvg';
import './inputChangePassword.css';
export const InputChangePassword = ({state, setState, exp}) => {
    const [ showPass, setShowPass ] = useState(false);
    const handleChange = (e) => {
        setState({
            ...state, 
            value:e.target.value,
            valid:exp.test(e.target.value)
        });
    }
    return (
        <div className='box-input-chenge-pass'>
            <div className='box-position'>
                <input type={showPass ? 'text' : 'password' } placeholder='Nueva contraseña' onChange={handleChange} />
                {state.value !== '' &&
                    <button className='btn-show-pass' title='Ver contraseña' onClick={() => setShowPass(!showPass)}>
                        {showPass 
                            ? <IconShowPass size={17} />
                            : <IconNotShowPass size={17} />
                        }
                    </button>
                }
            </div>
            {(!state.valid && state.value !== '') &&<p>La contraseña no es válida</p>}
        </div>
    );
}

export default InputChangePassword;
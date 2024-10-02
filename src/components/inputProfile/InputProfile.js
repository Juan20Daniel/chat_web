import React from 'react';
import { IconX } from '../../assets/IconsSvg';
import './inputProfile.css';
const InputProfile = ({state, setState, fontSize=16, fontWeight='normal', textColor='black', exp}) => {
    const handleChange = (e) => {
        setState({
            ...state, 
            value:e.target.value,
            valid:exp.test(e.target.value)
        });
    }
    return (
        <div className='box-input-profile'>
            <div className='box-icon'>
                {!state.valid && <IconX size={10} color='red' />}
            </div>
            <input 
                type='text'
                value={state.value}
                onChange={handleChange}
                style={{
                    fontSize:fontSize,
                    fontWeight:fontWeight,
                    color:textColor
                }}
            />
        </div>
    );
}
export default React.memo(InputProfile);
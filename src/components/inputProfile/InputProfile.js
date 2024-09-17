import React from 'react';
import './inputProfile.css';
const InputProfile = ({state, setState, fontSize=16, fontWeight='normal', textColor='black'}) => {
    return (
        <div className='box-input-profile'>
            <input 
                type='text'
                value={state.value}
                onChange={(e) => setState({...state, value:e.target.value})}
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
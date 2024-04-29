import { useState } from 'react'

export const InputGruopViewModel = (camp, getValue, exp, verifyPaswords) => {
    const [ visiblePass, setVisiblePass ] = useState('password');
    const showPass = () => {
        setVisiblePass(e => e === 'password' ? 'text' : 'password');
    }
    const checkValue = () => {
        if(exp) {
            if(exp.test(camp.valueCamp)) {
                getValue({ ...camp, valid:true });
            } else {
                getValue({ ...camp, valid:false });
            }
        }
        if(verifyPaswords) verifyPaswords();
    }
    return { visiblePass, showPass, checkValue }
}

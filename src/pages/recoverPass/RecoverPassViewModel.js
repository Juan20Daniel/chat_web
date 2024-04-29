import { useState } from 'react';

export const RecoverPassViewModel = () => {
    const [ email, setEmail ] = useState({valueCamp:'', name:'email', valid:false, status:'normal'});
    const recoverPass = e => {
        console.log(e);
    }
    return {email, setEmail, recoverPass}
}

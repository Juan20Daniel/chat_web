import { useState, useContext } from 'react';
import CentralAlertContext from '../../context/alertContext/CentralAlertContext';
import axiosInstance from '../../data/remote/axios.instance';
export const RecoverPassViewModel = () => {
    const [ email, setEmail ] = useState({valueCamp:'', name:'email', valid:false, status:'normal'});
    const [ isLoading, setIsLoading ] = useState(false);
    const { setCentralAlert } = useContext(CentralAlertContext);

    const recoverPass = async e => {
        e.preventDefault();
        if(!verifyInformation()) return;
        try {
            setIsLoading(true);
            const result = await axiosInstance.post(`/auth/request-reset-password`,{email:email.valueCamp});
            setCentralAlert({
                visible:true, 
                typeAlert:'success', 
                title:'Mensage enviado', 
                desc:result.message
            });
            setEmail({valueCamp:'', name:'email', valid:false, status:'normal'});
        } catch (error) {
            setCentralAlert({
                visible:true, 
                typeAlert:'error', 
                title:'Error al recuperar la contraseña', 
                desc:error.message
            });
        }finally {
            setIsLoading(false);
        }
    }
    const verifyInformation = () => {
        setEmail({...email, status:email.valid ? 'normal' : 'error'});
        if(email.valid) return true;
        setCentralAlert({
            visible:true, 
            typeAlert:'error', 
            title:'Error al recuperar la contraseña', 
            desc:'El correo ingresado, no es válido, favor de verificarlo.'
        });
        return false;
    }
    return {email, isLoading, setEmail, recoverPass}
}

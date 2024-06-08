import { useState, useContext, useLayoutEffect } from 'react';
import CentralAlertContext from '../../context/alertContext/CentralAlertContext';
import axiosInstance from '../../data/remote/axios.instance';
import { useLocation, useNavigate } from 'react-router-dom';
import { decodeToken } from '../../helpers/decodeToken';
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}
export const UpdatedPassViewModel = () => {
    const [ password, setPassord ] = useState({valueCamp:'', name:'password', valid:false, status:'normal'});
    const [ confirmpass, setConfirmpass ] = useState({valueCamp:'', name:'confirmpass', valid:false, status:'normal'});
    const [ isLoading, setIsLoading ] = useState(false);
    const [ form, setForm ] = useState(false);
    const { setCentralAlert } = useContext(CentralAlertContext);
    const navigate = useNavigate();
    const  query = useQuery();
    const token = query.get('token');
    useLayoutEffect(() => {
        if(!token) {
            navigate('/form-layout/login', {replace:true});
        } else {
            const result = decodeToken(token);
            if(!result) setForm(false);
            else {
                setForm(true)
            }
        }
    },[token, navigate]);
    
    const recoverPass = async e => {
        e.preventDefault();
        if(!verifyInformation()) return;
        try {
            setIsLoading(true);
            const result = await axiosInstance.put(`/auth/update-password`,{token, password:password.valueCamp});
            setCentralAlert({
                visible:true, 
                typeAlert:'success', 
                title:'Actualización de contraseña', 
                desc:result.message
            });
            setPassord({valueCamp:'', name:'password', valid:false, status:'normal'});
            setConfirmpass({valueCamp:'', name:'confirmpass', valid:false, status:'normal'});
        } catch (error) {
            console.log(error);
            setCentralAlert({
                visible:true, 
                typeAlert:'error', 
                title:'Error al cambiar la contraseña', 
                desc:error.message
            });
        }finally {
            setIsLoading(false);
        }
    }
    const verifyInformation = () => {
        setPassord({...password, status:password.valid ? 'normal' : 'error'});
        setConfirmpass({...confirmpass, status:confirmpass.valid ? 'normal' : 'error'});
        if([password.valid, confirmpass.valid].includes(false)) {
            setCentralAlert({
                visible:true, 
                typeAlert:'error', 
                title:'Error al cambiar la contraseña', 
                desc:'La contrseña no es válida, verifica que sean iguales y que este con la estructura correcta.'
            });
            return false;
        }
        return true;
    }
    const verifyPaswords = () => {
        if(confirmpass.valueCamp === '') return;
        if(confirmpass.valueCamp.length <= 4) return setConfirmpass({ ...confirmpass, valid:false });
        if(confirmpass.valueCamp !== password.valueCamp) return setConfirmpass({ ...confirmpass, valid:false });
        setConfirmpass({ ...confirmpass, valid:true });
    }
    return {password, confirmpass, isLoading, form, setPassord, setConfirmpass, recoverPass, navigate, verifyPaswords}
}

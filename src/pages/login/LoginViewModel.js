import { useState, useContext } from 'react';
import { saveTokenLocalStorage } from '../../data/local/LocalStorage';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../data/remote/axios.instance';
import CentralAlertContext from '../../context/alertContext/CentralAlertContext';
export const LoginViewModel = () => {
    const [ email, setEmail ] = useState({valueCamp:'', name:'email', valid:false, status:'normal'});
    const [ password, setPassword ] = useState({valueCamp:'', name:'password', valid:false, status:'normal'});
    const { setCentralAlert } = useContext(CentralAlertContext);
    const [ isLoading, setIsLoading ] = useState(false);
    const navigate = useNavigate();
    const login = async e => {
        e.preventDefault();
        if(!verifyInformation()) return;
        try {
            setIsLoading(true);
            const result = await axiosInstance.get(`/auth/${email.valueCamp}/${password.valueCamp}`);
            saveTokenLocalStorage(result.token);
            resetInputs();
            setIsLoading(false);
            navigate('/', {replace:true});
        } catch (error) {
            activeAlert(error.message);
            setIsLoading(false);
        }
    }
    const verifyInformation = () => {
        setEmail({...email, status:email.valid ? 'normal' : 'error'});
        setPassword({...password, status:password.valid ? 'normal' : 'error'});
        if(!email.valid || !password.valid) {
            activeAlert('Hay un error en uno de los campos, favor de colocar la estructura correcta');
            return false;
        }
        return true;
    }
    const resetInputs = () => {
        setEmail({valueCamp:'', name:'email', valid:false, status:'normal'});
        setPassword({valueCamp:'', name:'password', valid:false, status:'normal'});
    }
    const activeAlert = (desc) => {
        setCentralAlert({
            visible:true, 
            typeAlert:'error', 
            title:'Error al entrar en la aplicación', 
            desc
        });
    }
    return { email, password, isLoading, setEmail, setPassword, login }
}

import { useState, useContext } from 'react';
import CentralAlertContext from '../../context/alertContext/CentralAlertContext';
import axiosInstance from '../../data/remote/axios.instance';
import { saveTokenLocalStorage } from '../../data/local/LocalStorage';
import { useNavigate } from 'react-router-dom';
export const SiginViewModel = () => {
    const [ fullname, setFullname ] = useState({valueCamp:'', name:'fullname', valid:false, status:'normal'});
    const [ email, setEmail ] = useState({valueCamp:'', name:'email', valid:false, status:'normal'});
    const [ password, setPassword ] = useState({valueCamp:'', name:'password', valid:false, status:'normal'});
    const [ confirmPass, setConfirmPass ] = useState({valueCamp:'', name:'confirmPass',  valid:false, status:'normal'});
    const { setCentralAlert } = useContext(CentralAlertContext);
    const [ isLoading, setIsLoading ] = useState(false);
    const navigate = useNavigate();
    const sigin = async e => {
        e.preventDefault();
        if(!verifyInformation()) return;
        const user = {fullname:fullname.valueCamp, email:email.valueCamp, password:password.valueCamp}
        try {
            setIsLoading(true);
            const result = await axiosInstance.post('/users', user);
            saveTokenLocalStorage(result.token);
            setIsLoading(false);
            resetInputs();
            navigate('/',{replace:true});
        } catch (error) {
            activeAlert(error.message);
            setIsLoading(false);
        }
    }
    const verifyInformation = () => {
        setFullname({...fullname, status:fullname.valid ? 'normal' : 'error'});
        setEmail({...email, status:email.valid ? 'normal' : 'error'});
        setPassword({...password, status:password.valid ? 'normal' : 'error'});
        setConfirmPass({...confirmPass, status:confirmPass.valid ? 'normal' : 'error'});
        if([fullname.valid, email.valid, password.valid, confirmPass.valid].includes(false)) {
            activeAlert('Hay un error en uno de los campos, favor de colocar la estructura correcta');
            return false;
        }
        return true;
    }
    const activeAlert = (desc) => {
        setCentralAlert({
            visible:true, 
            typeAlert:'error', 
            title:'Error al crear la cuenta', 
            desc
        });
    }
    const resetInputs = () => {
        setFullname({valueCamp:'', name:'fullname', valid:false, status:'normal'});
        setEmail({valueCamp:'', name:'email', valid:false, status:'normal'});
        setPassword({valueCamp:'', name:'password', valid:false, status:'normal'});
        setConfirmPass({valueCamp:'', name:'confirmPass',  valid:false, status:'normal'});
    }
    const verifyPaswords = () => {
        if(confirmPass.valueCamp === '') return;
        if(confirmPass.valueCamp.length <= 4) return setConfirmPass({ ...confirmPass, valid:false });
        if(confirmPass.valueCamp !== password.valueCamp) return setConfirmPass({ ...confirmPass, valid:false });
        setConfirmPass({ ...confirmPass, valid:true });
    }
    return { 
        fullname, 
        email, 
        password, 
        confirmPass,
        isLoading,
        sigin, 
        setFullname, 
        setEmail,
        setPassword,
        setConfirmPass,
        verifyPaswords
    }
}

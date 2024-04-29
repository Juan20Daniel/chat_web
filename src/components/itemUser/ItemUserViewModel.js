import { useContext, useState } from 'react';
import axiosInstance from '../../data/remote/axios.instance';
import { useRecord } from '../../hooks/useRecordText';
import CentralAlertContext from '../../context/alertContext/CentralAlertContext';
export const ItemUserViewModel = (data) => {
    const [ showBtnAdd, setShowBtnAdd ] = useState(true);
    const { element, fullname } = useRecord(data.fullname);
    const { setCentralAlert, setAction, setIsLoading } = useContext(CentralAlertContext);
    const saveNewContact = async () => {
        try {
            setIsLoading(true);
            const result = await axiosInstance.post('/contacts', {idContact:data.idUser});
            setIsLoading(false);
            setShowBtnAdd(false);
            setCentralAlert({
                visible:true, 
                typeAlert:'success', 
                title: result.message, 
                desc:`El usuario ${data.fullname} se ha agregado a tus contactos.`
            });
        } catch (error) {
            setIsLoading(false);
            setCentralAlert({
                visible:true, 
                typeAlert:'error', 
                title: 'Error al intantar agregar el contacto', 
                desc:error.message
            });
        }
    }
    const addContact = () => {
        setAction({method:saveNewContact})
        setCentralAlert({
            visible:true, 
            typeAlert:'confirm', 
            title:'Nuevo contacto', 
            desc:`¿Seguro que quieres agregar a tus contactos a ${data.fullname}?`
        });
    }
    return {
        element,
        fullname,
        showBtnAdd,
        addContact
    }
}
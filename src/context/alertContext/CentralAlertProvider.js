import { useState } from 'react';
import AlertContext from './CentralAlertContext';

export const CentralAlertProvider = ({children}) => {
    const [ action, setAction ] = useState({method:null});
    const [ isLoading, setIsLoading ] = useState(false);
    const [ centralAlert, setCentralAlert ] = useState({
        visible:false,
        typeAlert:'', 
        title:'', 
        desc:''
    });
    const closeCentralAlert = () => {
        setAction({method:null});
        setIsLoading(false);
        setCentralAlert({
            visible:false, 
            typeAlert:'', 
            title:'', 
            desc:''
        });
    }
    return (
        <AlertContext.Provider value={{action, isLoading, centralAlert, closeCentralAlert, setCentralAlert, setAction, setIsLoading}}>
            {children}
        </AlertContext.Provider>
    )
}

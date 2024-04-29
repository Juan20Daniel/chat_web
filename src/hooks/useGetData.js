import { useEffect, useRef, useState } from 'react';
import axiosInstance from '../data/remote/axios.instance';
const typeData = {
    users:'usuarios',
    contacts:'contactos'
}
export const useGetData = (nameRequest) => {
    const [ data, setData ] = useState([]);
    const [ offset, setOffset ] = useState(0);
    const [ hasMore, setHasMore ] = useState(true);
    const [ thereAreData, setThereAreData ] = useState(true);
    const [ notResult, setNotResult ] = useState({ilustration:'', message:'', method:null});
    const elementUlRef = useRef();
    const elementLiRef = useRef();
    //Mostramos un mensage en caso de que no haya datos
    useEffect(() => {
        if(hasMore || !elementUlRef.current) return;
        if(elementUlRef.current.children.length <= 1) {
            setNotResult({
                ilustration:'users',
                message:`No se encontraron ${typeData[nameRequest]}, intenta mas tarde.`,
                method:null
            });
            setThereAreData(false);
        }
    },[hasMore, nameRequest]);
    //Obtenemos los datos
    useEffect(() => {
        const OnIntersection = async (entries, observer) => {
            const firstEntries = entries[0];
            if(!firstEntries.isIntersecting) return;
            const result = await getData(nameRequest, offset);
            if(!result) {
                setNotResult({
                    ilustration:'serverDown',
                    message:`Parece que hubo un problema al intentar consultar los ${typeData[nameRequest]}.`,
                    method:tryAgan
                });
                setThereAreData(false);
                return setHasMore(false);
            }
            if(result.length > 0) {
                setData(data => [ ...data, ...result ]);
                setOffset(offset => offset + 10);
            } else {
                observer.disconnect();
                setHasMore(false);
            }
        }
        if(!elementLiRef.current) return;
        const observer = new IntersectionObserver(OnIntersection);
        observer.observe(elementLiRef.current);
        return () => {
            observer.disconnect();
        }
    },[offset, hasMore, nameRequest]);
    const getData = async (nameRequest, countOffset) => {
        try {
            const result = await axiosInstance.get(`/${nameRequest}/${countOffset}`);
            return result[nameRequest];
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    const tryAgan = () => {
        setThereAreData(true);
        setHasMore(true);
    }
    return {data, notResult, elementLiRef, elementUlRef, hasMore, thereAreData}
}

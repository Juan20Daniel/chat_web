import { useContext } from 'react';
import { decodeToken } from '../../helpers/decodeToken';
import { getTokenLocalStorage } from '../../data/local/LocalStorage';
import ItemUser from '../itemUser/ItemUser';
import ChatContext from '../../context/chatContext/ChatContext';
import Loader from '../loader/Loader';
import NotResults from '../notResults/NotResults';
import './users.css';
const idUser = decodeToken(getTokenLocalStorage()).uid;
const Users = () => {
    const { users, loadingUsers } = useContext(ChatContext);
    console.log(users)
    return (
        <div className='box-users'>
            {!loadingUsers ?
                <>
                    {users?.filter(user => user.uid !== idUser).map(user => (
                        <ItemUser
                            key={user.uid}
                            data={user}
                        />
                    ))}
                    {users?.length === 1 && 
                        <NotResults 
                            ilustration='users'
                            message='No hay Usuarios'
                        />
                    }
                    {!users && 
                        <NotResults 
                            ilustration='serverDown'
                            message='Error de conexión con el servidor'
                        />
                    }
                </>
                :
                <div className='box-loader-users'>
                    <Loader message='Cargando usuarios...' />
                </div>
            }
        </div>
    );
}

export default Users;
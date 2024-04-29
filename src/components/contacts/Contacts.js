import { useNavigate } from 'react-router-dom';
import { ContactsViewModel } from './ContactsViewModel';
import iconGroup from '../../assets/iconGroup.svg';
import ItemContact from '../itemContact/ItemContact';
import NotResults from '../notResults/NotResults';
import './contacts.css';

const Contacts = () => {
    const {data, elementLiRef, notResult, elementUlRef, hasMore, thereAreData} = ContactsViewModel();
    console.log(data)
    const navigate = useNavigate();
    const goto = () => navigate('/users');
    return (
        <div className='contacts'>
            <div className='header'>
                <img src={iconGroup} alt='Icono de grupo' />
                <p>Mis contactos</p>
            </div>
            <div className='content'>
                {thereAreData ?
                    <ul ref={elementUlRef}>
                        {data.map(contact => (
                            <ItemContact key={contact.idUser} data={contact} />
                        ))}
                        <li className="load-users" ref={elementLiRef}>
                            {hasMore && <p>Cargando...</p>}
                        </li>
                    </ul>
                    :
                    <NotResults
                        ilustration={notResult.ilustration}
                        message={notResult.message}
                        action={notResult.method}
                    />
                }
            </div>
            <div className='footer'>
                <button onClick={() => goto()}>Nuevo contacto</button>
            </div>
        </div>
    );
}
export default Contacts;
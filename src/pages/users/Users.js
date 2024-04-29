import Navbar from "../../components/navbar/Navbar";
import ItemUser from '../../components/itemUser/ItemUser';
import NotResults from "../../components/notResults/NotResults";
import Section from "../../components/section/Section";
import { UsersViewModel } from "./UsersViewModel";
import './users.css';
const Users = () => {
  const {data, elementLiRef, notResult, elementUlRef, hasMore, thereAreData } = UsersViewModel();
  return (
    <Section>
      <Navbar title="Nuevo Contacto" />
      {thereAreData ?
        <ul className="items" ref={elementUlRef}>
          {data.map(user => (
            <ItemUser key={user.idUser} data={user} />
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
    </Section>
  )
}
export default Users;
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import ChatZone from '../chatZone/ChatZone';
import MyCount from '../myCount/MyCount';
import ChatContext from '../../context/chatContext/ChatContext';
import EditProfile from '../editProfile/EditProfile';
const Home = () => {
  const { userActive } = useContext(ChatContext);
  const { windowWidth } = useWindowWidth();
  return (
    <>
      <Routes>
        <Route path='/' element={(windowWidth < 700 && userActive.uid) ? <ChatZone /> : <MyCount />} />
        <Route path='/edit-profile' element={<EditProfile />} />
      </Routes>
      {windowWidth >= 700 &&
        <Routes>
        <Route path='/*' element={<ChatZone />} />
        </Routes>
      }
    </>
  );
}
export default Home;
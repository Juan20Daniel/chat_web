import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import MyCount from "../../pages/myCount/MyCount";
import EditProfile from '../../pages/editProfile/EditProfile';
import Users from "../../pages/users/Users";
import ChatContext from '../../context/chatContext/ChatContext';
import './slider.css';

export const Slider = ({ user }) => {
  const { isActive } = useContext(ChatContext);
  return (
    <div className={`slider ${!isActive && "hide-slider"}`}>
      <Routes>
        <Route path="/" element={<MyCount user={user} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/edith-profile" element={<EditProfile />} />
      </Routes>
    </div>
  );
}
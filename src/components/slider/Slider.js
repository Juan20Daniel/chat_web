import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../../pages/home/Home";
import EditProfile from '../../pages/editProfile/EditProfile';
import Users from "../../pages/users/Users";
import './slider.css';
import ChatContext from '../../context/chatContext/ChatContext';

export const Slider = ({ user }) => {
  const { isActive } = useContext(ChatContext);
  return (
    <div className={`slider ${!isActive && "hide-slider"}`}>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/edith-profile" element={<EditProfile />} />
      </Routes>
    </div>
  );
}
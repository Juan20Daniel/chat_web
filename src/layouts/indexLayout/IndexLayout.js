import { Routes, Route } from 'react-router-dom';
import { IndexLayoutViewModel } from "./IndexLayoutViewModel";
import ChatZone from '../../pages/chatZone/ChatZone';
import Home from '../../pages/home/Home';
import Users from '../../pages/users/Users';
import GuardIndexLayout from '../../guards/GuardIndexLayout';
import CentralAlert from '../../components/centralAlert/CentralAlert';
import './indexLayout.css';
const IndexLayout = () => {
  const { centralAlert, windowWidth, contact } = IndexLayoutViewModel();
  return (
    <GuardIndexLayout>
      <div className='index-layout'>
        <Routes>
          <Route path='/' element={(windowWidth < 700 && contact) ? <ChatZone /> : <Home />} />
          <Route path='/users' element={<Users />} />
        </Routes>
        {windowWidth >= 700 &&
          <Routes>
            <Route path='/*' element={<ChatZone />} />
          </Routes>
        }
        {centralAlert.visible && <CentralAlert />}
      </div>
    </GuardIndexLayout>
  )
}

export default IndexLayout;
      




// import { HomeLayoutViewModel } from "./HomeLayoutViewModel";
// import { ChatZone } from "../../components/chatZone/ChatZone";
// import { ChatProvider } from "../../context/chatContext/ChatProvider";
// import { Slider } from "../../components/slider/Slider";
// import CentralAlert from "../../components/centralAlert/CentralAlert";
// import './homeLayout.css';
// const HomeLayout = () => {
//   const { user, centralAlert } = HomeLayoutViewModel();
//   return (
//     <ChatProvider>
//       <section className='home-layout'>
//         {centralAlert.visible && <CentralAlert />}
//         <Slider user={user} />
//         <ChatZone />
//       </section>
//     </ChatProvider>
//   )
// }

// export default HomeLayout;
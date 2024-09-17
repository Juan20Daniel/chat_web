import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SocketProvider } from '../../context/socketContext/SocketProvider';
import { ChatProvider } from '../../context/chatContext/ChatProvider';
import { getTokenLocalStorage } from "../../data/local/LocalStorage";
import CentralAlertContext from "../../context/alertContext/CentralAlertContext";
import GuardIndexLayout from '../../guards/GuardIndexLayout';
import Home from '../../pages/home/Home';
import CentralAlert from '../../components/centralAlert/CentralAlert';
import './indexLayout.css';
const IndexLayout = () => {
  const {centralAlert} = useContext(CentralAlertContext);
  const navigate = useNavigate();
  useEffect(() => {
    if(!getTokenLocalStorage()) navigate('/form-layout/login', {replace:true});
},[navigate]);
  return (
    <GuardIndexLayout>
      <ChatProvider>
        <SocketProvider>
          <div className='index-layout'>
            <Home />
            {centralAlert.visible && <CentralAlert />}
          </div>
        </SocketProvider>
      </ChatProvider>
    </GuardIndexLayout>
  )
}

export default IndexLayout;
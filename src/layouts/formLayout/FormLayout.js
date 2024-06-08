import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/login/Login';
import RecoverPass from '../../pages/recoverPass/RecoverPass';
import Sigin from '../../pages/sigin/Sigin';
import ilustration from '../../assets/ilustration.svg';
import CentralAlert from '../../components/centralAlert/CentralAlert';
import CentralAlertContext from '../../context/alertContext/CentralAlertContext';
import GuardFormLayout from '../../guards/GuardFormLayout';
import UpdatePass from '../../pages/updatePass/UpdatePass';
import './formLayout.css';
const FormLayout = () => {
  const { centralAlert } = useContext(CentralAlertContext);
  return (
    <GuardFormLayout>
      <section className='form-layout'>
        <div className='box-form'>
          <div className='box-ilustration'>
            <img src={ilustration} alt="Ilustration" />
          </div>
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='sigin' element={<Sigin />} />
            <Route path='recover-pass' element={<RecoverPass />} />
            <Route path='reset-password' element={<UpdatePass />} />
            <Route path='*' element={<Navigate to='login' replace/>}/>
          </Routes>
        </div>
        {centralAlert.visible && <CentralAlert />}
      </section>
    </GuardFormLayout>
  )
}

export default FormLayout;
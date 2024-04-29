import { useContext } from 'react';
import './centralAlert.css';
import { Button } from '../button/Button';
import ilustrationError from '../../assets/ilustrationError.png';
import ilustrationQuestion from '../../assets/ilustrationQuestion.png';
import ilustrationSuccess from '../../assets/ilustrationSuccess.png';
import CentralAlertContext from '../../context/alertContext/CentralAlertContext';
const ilustrations = {
  error:ilustrationError,
  confirm:ilustrationQuestion,
  success:ilustrationSuccess
}
const CentralAlert = () => {
  const { centralAlert, action, isLoading, closeCentralAlert } = useContext(CentralAlertContext);
  return (
    <div className='central-alert'>
      <div className='alert'>
        <img className="ilustration" src={ilustrations[centralAlert.typeAlert]} alt='Ilustration' />
        <h1 className='title'>{centralAlert.title}</h1>
        <p className='desc'>{centralAlert.desc}</p>
          {(centralAlert.typeAlert === "error" || centralAlert.typeAlert === "success") && 
            <div className='btn-alert'>
              <Button 
                type="button"
                value="OK"
                btnColor={centralAlert.typeAlert}
                action={closeCentralAlert}
              />
            </div>
          }
          {centralAlert.typeAlert === "confirm" &&
            <div className='box-btns-alert'>
              <div className='btn-alert'>
                <Button 
                  type="button"
                  value="No"
                  btnColor="cancel"
                  action={closeCentralAlert}
                />
              </div>
              <div className='btn-alert'>
                <Button 
                  type="button"
                  value="Si"
                  isLoading={isLoading}
                  btnColor={centralAlert.typeAlert}
                  action={action.method}
                  colorSpinner="#ffffff"
                />
              </div>
            </div>
          }
      </div>
    </div>
  )
}
export default CentralAlert;
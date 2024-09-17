import Button from '../button/Button';
import ilustrationUsers from '../../assets/ilustrationUsers.png';
import ilustrationServerDown from '../../assets/ilustrationServerDown.png';
import './notResults.css';
const ilustrations = {
  users:ilustrationUsers,
  serverDown:ilustrationServerDown
}
const NotResults = ({ ilustration, message, action }) => {
  return (
    <div className='not-results'>
      <img src={ilustrations[ilustration]} alt='Ilustración' className='ilustration'/>
      <p className='message'>{message}</p>
      {action && 
        <div className='box-btn'>
          <Button 
            type='button'
            value='Volver a intentar'
            btnColor='success'
            action={action}
          />
        </div>
      }
    </div>
  );
}
export default NotResults;
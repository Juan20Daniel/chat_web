import Spinner from '../spinner/Spinner'
import './loadPage.css';
const LoadPage = () => {
  return (
    <div className='load-page'>
        <Spinner size={40} color='#1E611A' />
        <span className='text'>Cargando...</span>
    </div>
  );
}
export default LoadPage;
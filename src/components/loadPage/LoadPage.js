import Loader from '../loader/Loader';
import './loadPage.css';
const LoadPage = () => {
  return (
    <div className='load-page'>
      <Loader message='Cargando...' />
    </div>
  );
}
export default LoadPage;
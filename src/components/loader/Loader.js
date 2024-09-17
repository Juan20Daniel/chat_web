import Spinner from '../spinner/Spinner';
import './loader.css';
const Loader = ({message}) => (
    <div className='spiner-box'>
        <Spinner size={40} color="#000000" />
        <span>{message}</span>
    </div>
);
export default Loader;
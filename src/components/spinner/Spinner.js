import CircularProgress from '@mui/material/CircularProgress';
import './spinner.css';
const Spinner = ({size, color}) => {
    return (
        <CircularProgress size={size} sx={{color}} />
    );
}
export default Spinner;
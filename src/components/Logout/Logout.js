import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/auth-operations';
import Icons from '../Icons';

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(authOperations.logout())}>
      <Icons name="exit" size="18" />
    </button>
  );
};
export default Logout;

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/auth';

function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuthContext();

  useEffect(() => {
      logout();
      navigate("/");
  }, []);
}

export default Logout;
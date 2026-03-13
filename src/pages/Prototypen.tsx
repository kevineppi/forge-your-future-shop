import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Prototypen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 301 Redirect to the full Rapid Prototyping landing page
    navigate('/rapid-prototyping', { replace: true });
  }, [navigate]);

  return null;
};

export default Prototypen;

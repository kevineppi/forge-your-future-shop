import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrototypingGuide = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 301 Redirect to the merged page
    navigate('/rapid-prototyping', { replace: true });
  }, [navigate]);

  return null;
};

export default PrototypingGuide;
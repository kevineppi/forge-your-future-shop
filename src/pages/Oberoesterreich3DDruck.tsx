import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const Oberoesterreich3DDruck = () => {
  useEffect(() => {
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, follow');
  }, []);
  return <Navigate to="/" replace />;
};

export default Oberoesterreich3DDruck;

import { Navigate } from "react-router-dom";

// Probeteile page redirects to contact - service temporarily unavailable
// due to WKO compliance requirements (series production not permitted)
const Probeteile = () => {
  return <Navigate to="/kontakt" replace />;
};

export default Probeteile;

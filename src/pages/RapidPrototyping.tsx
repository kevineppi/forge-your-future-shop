import { Navigate } from "react-router-dom";

// Rapid Prototyping page redirects to contact - service temporarily unavailable
// due to WKO compliance requirements (no functional parts allowed)
const RapidPrototyping = () => {
  return <Navigate to="/kontakt" replace />;
};

export default RapidPrototyping;

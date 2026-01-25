import { Navigate } from "react-router-dom";

// Redirect to material guide - page content no longer WKO compliant
const Maschinenbau = () => {
  return <Navigate to="/ratgeber/material-guide" replace />;
};

export default Maschinenbau;
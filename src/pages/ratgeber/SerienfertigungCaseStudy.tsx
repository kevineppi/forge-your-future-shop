import { Navigate } from "react-router-dom";

// Redirect to material guide - page content no longer WKO compliant
const SerienfertigungCaseStudy = () => {
  return <Navigate to="/ratgeber/material-guide" replace />;
};

export default SerienfertigungCaseStudy;
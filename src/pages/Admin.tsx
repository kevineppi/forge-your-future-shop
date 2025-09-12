import Navigation from "@/components/Navigation";
import AdminDashboard from "@/components/AdminDashboard";
import Footer from "@/components/Footer";

const Admin = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AdminDashboard />
      <Footer />
    </div>
  );
};

export default Admin;
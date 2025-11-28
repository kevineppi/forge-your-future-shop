import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import AdminDashboard from "@/components/AdminDashboard";
import KnowledgeBaseManager from "@/components/KnowledgeBaseManager";
import { SeedKnowledgeButton } from "@/components/SeedKnowledgeButton";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DiscountCodeManager } from "@/components/DiscountCodeManager";

const Admin = () => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/auth");
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
            <TabsTrigger value="discounts">Rabattcodes</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="mt-6">
            <AdminDashboard />
          </TabsContent>
          <TabsContent value="knowledge" className="mt-6">
            <div className="mb-4">
              <SeedKnowledgeButton />
            </div>
            <KnowledgeBaseManager />
          </TabsContent>
          <TabsContent value="discounts" className="mt-6">
            <DiscountCodeManager />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
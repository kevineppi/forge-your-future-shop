import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogSidebar from "@/components/blog/BlogSidebar";

const Blog = () => {
  useEffect(() => {
    // Update document title for blog page
    document.title = "3D-Druck Blog | Expertenwissen & Tipps | ekdruck e.U.";
  }, []);

  return (
    <>
      <SEOHead 
        title="3D-Druck Blog | Expertenwissen & Tipps | ekdruck e.U."
        description="Entdecken Sie unser 3D-Druck Blog mit Expertenwissen, Tipps & Trends. FDM 3D-Druck Tutorials, Materialien Guide und Brancheneinblicke aus Österreich."
        keywords="3d-druck blog, fdm 3d-druck tipps, 3d-druck tutorial, 3d-druck materialien guide, rapid prototyping blog, 3d-druck trends österreich"
        path="/blog"
        type="blog"
      />
      <StructuredData type="blog" />
      <div className="min-h-screen bg-background">
        <Navigation />
        <BlogHero />
        <main className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <BlogGrid />
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
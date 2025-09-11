import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Upload
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    timeline: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Contact us for a free consultation 
            and custom quote for your 3D printing project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Mail className="mr-3 h-5 w-5 text-primary" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">hello@3dforge.com</p>
                <p className="text-muted-foreground">quotes@3dforge.com</p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Phone className="mr-3 h-5 w-5 text-primary" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">123 Innovation Drive</p>
                <p className="text-muted-foreground mb-2">Tech City, TC 12345</p>
                <p className="text-sm text-muted-foreground">By appointment only</p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Clock className="mr-3 h-5 w-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9AM - 6PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">10AM - 4PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Quote</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Type</label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-input rounded-md bg-background"
                      >
                        <option value="">Select project type</option>
                        <option value="prototype">Prototype</option>
                        <option value="production">Small Batch Production</option>
                        <option value="custom">Custom Part</option>
                        <option value="design">Design Service</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-input rounded-md bg-background"
                      >
                        <option value="">Select timeline</option>
                        <option value="rush">Rush (24-48 hours)</option>
                        <option value="standard">Standard (3-5 days)</option>
                        <option value="extended">Extended (1-2 weeks)</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, including materials, quantity, and any special requirements..."
                      rows={4}
                    />
                  </div>

                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground mb-2">
                      Upload your 3D files (STL, OBJ, 3MF)
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Max file size: 50MB. Multiple files supported.
                    </p>
                    <Button variant="outline">
                      Choose Files
                    </Button>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
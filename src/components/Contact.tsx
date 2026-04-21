import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { managerInfo, siteInfo } from "@/constants";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real application, you would send this data to a backend
    toast({
      title: "Message Sent!",
      description: "We'll review your request and reply as soon as possible.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi, I'd like to arrange a pickup with Makkah Laundry Near Haram.",
    );
    window.open(
      `https://wa.me/${managerInfo.onlyNumber.whatsApp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get in Touch With {siteInfo.name}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ask about pickup timing, care options, or a new order and our team
            will guide you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a
                        href={`tel:+${managerInfo.onlyNumber.phoneNumber}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {managerInfo.phoneNumber}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a
                        href={`mailto:${managerInfo.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {managerInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        Ajyad District
                        <br />
                        Makkah, Saudi Arabia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1855.312843271923!2d39.8202008857488!3d21.42186292841074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b679347f05%3A0x50f5f4304df897e6!2sHilton%20Suites%20Jabal%20Omar%20Makkah!5e0!3m2!1sen!2sbd!4v1771903409889!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${siteInfo.name} location`}
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up animate-delay-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder={managerInfo.phoneNumber}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us what items you need cleaned and where pickup is needed..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

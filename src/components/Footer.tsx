import { siteInfo, managerInfo } from "@/constants";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
  Sparkles,
  Truck,
  ShieldCheck,
} from "lucide-react";
import WhatsAppIcon from "./icons/Whatsapp";
import { useNavigate, useLocation } from "react-router-dom";
import logo_dark from "@/assets/dark-logo-hs.webp";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/#" + sectionId);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "Pricing", id: "pricing" },
    { label: "How It Works", id: "how-it-works" },
    { label: "About Us", path: "/about" },
  ];

  const servicesLinks = [
    { label: "Regular Laundry", id: "pricing" },
    { label: "Dry Cleaning", id: "services" },
    { label: "Ihram Care", id: "pricing" },
    { label: "Ironing & Pressing", id: "pricing" },
    { label: "Express Delivery", id: "services" },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ];

  const trustBadges = [
    { icon: Truck, label: "15 Min Pickup" },
    { icon: Clock, label: "24/7 Available" },
    { icon: ShieldCheck, label: "No Hidden Fees" },
  ];

  return (
    <footer className="relative">
      {/* Pre-Footer CTA Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800">
        <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-primary-950/40 blur-3xl" />
        <div className="container relative mx-auto px-4 py-12 sm:py-14">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-start gap-4 max-w-xl">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-white">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
                  Fresh Clothes, Delivered to Your Door
                </h3>
                <p className="text-primary-50/90 text-sm sm:text-base">
                  Book your first pickup in under a minute — we'll handle the
                  rest. Spotless results with no hassle.
                </p>
              </div>
            </div>
            <button
              id="generate_lead_footer"
              onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all bg-white text-primary-700 hover:bg-primary-50 hover:shadow-2xl w-full lg:w-auto px-8 py-4 h-auto rounded-xl shadow-lg text-base sm:text-lg"
            >
              <WhatsAppIcon size={22} />
              Book Now on WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative bg-[#0a120b] text-white pt-20 pb-10 overflow-hidden">
        {/* Decorative Ambient Glows */}
        <div className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="space-y-6">
              <a href="/">
                <img
                  src={logo_dark}
                  alt={`${siteInfo.shortName} Laundry Logo`}
                  className="h-[80px] w-auto object-contain brightness-110"
                />
              </a>

              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base max-w-sm">
                At {siteInfo.siteTitle}, we provide reliable, fast, and
                high-quality laundry services across the holy city of Makkah.
                Trust us to care for your garments with professionalism and
                attention to detail.
              </p>

              <div className="flex space-x-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="bg-white/5 hover:bg-primary border border-white/5 p-3 rounded-xl text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em] border-l-2 border-primary pl-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() =>
                        link.path
                          ? navigate(link.path)
                          : scrollToSection(link.id!)
                      }
                      className="text-zinc-400 hover:text-primary flex items-center group transition-colors text-left text-sm"
                    >
                      <ChevronRight
                        size={14}
                        className="mr-2 group-hover:translate-x-1 transition-transform text-primary/50"
                      />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em] border-l-2 border-primary pl-4">
                Our Services
              </h4>
              <ul className="space-y-3">
                {servicesLinks.map((service) => (
                  <li key={service.label}>
                    <button
                      onClick={() => scrollToSection(service.id)}
                      className="text-zinc-400 hover:text-primary flex items-center group transition-colors text-left text-sm"
                    >
                      <ChevronRight
                        size={14}
                        className="mr-2 group-hover:translate-x-1 transition-transform text-primary/50"
                      />
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em] border-l-2 border-primary pl-4">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-primary/10 p-2.5 rounded-lg text-primary border border-primary/10 transition-colors">
                    <MapPin size={18} />
                  </div>
                  <p className="text-zinc-400 text-sm leading-snug">
                    {managerInfo.address}
                  </p>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-primary/10 p-2.5 rounded-lg text-primary border border-primary/10 transition-colors">
                    <Phone size={18} />
                  </div>
                  <p className="text-zinc-400 text-sm">
                    {managerInfo.phoneNumber}
                  </p>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-primary/10 p-2.5 rounded-lg text-primary border border-primary/10 transition-colors">
                    <Mail size={18} />
                  </div>
                  <p className="text-zinc-400 text-sm truncate">
                    {managerInfo.email}
                  </p>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-primary/10 p-2.5 rounded-lg text-primary border border-primary/10 transition-colors">
                    <Clock size={18} />
                  </div>
                  <p className="text-zinc-400 text-sm">Open 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative w-full h-[360px] rounded-3xl group border border-white/5 overflow-hidden mb-12 shadow-2xl shadow-primary/10">
            <div className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-white/10 rounded-3xl" />
            <iframe
              src={siteInfo.mapEmbedUrl}
              className="w-full h-full rounded-3xl border-0 transition-transform duration-700 group-hover:scale-[1.01]"
              title={`${siteInfo.shortName} Laundry Location`}
            />
          </div>

          {/* Trust Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pb-10">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-zinc-400 text-sm"
              >
                <Icon size={16} className="text-primary" />
                {label}
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-white/5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-zinc-500 text-xs">
                © {currentYear} {siteInfo.siteTitle}. All rights reserved.
              </p>
              <div className="flex justify-center space-x-6 text-[11px] font-bold uppercase tracking-widest">
                <a
                  href="/privacy-policy"
                  className="text-zinc-500 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href="/terms-of-service"
                  className="text-zinc-500 hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

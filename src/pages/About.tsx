import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { Users, Heart, Leaf, Clock, Award, Target } from "lucide-react";
import aboutServiceImage from "@/assets/about_zam.webp";
import { managerInfo, siteInfo } from "@/constants";

const About = () => {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About {siteInfo.name}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Laundry pickup, washing, and garment finishing for people staying
              and living around central Makkah
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={aboutServiceImage}
                alt="Professional laundry service in Makkah"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Laundry Support Built Around Real Schedules
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {siteInfo.name} is a pickup-and-delivery laundry service for
                guests, families, and residents who want clean clothes returned
                without wasting time in traffic or hotel queues.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Because we serve areas close to Haram and the surrounding hotel
                districts, our service is built for tight schedules, changing
                plans, and the need for quick, clear pickup coordination.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We focus on practical garment care: washing, drying, pressing,
                folding, and returning items in a condition that feels ready for
                the next part of your day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Service Approach
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We aim to make laundry feel easy, dependable, and well-organized
              for anyone who needs clean garments near Haram without adding more
              friction to the day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Fast Coordination
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Pickup timing is confirmed quickly so garments can move into
                cleaning without unnecessary delay.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Careful Finishing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We focus on clean washing, sensible stain handling, and a neat
                final presentation when your order is returned.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Responsible Product Choices
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Product and process choices are made with fabric care and
                practical day-to-day use in mind.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Team Focused on Garment Care and Clear Communication
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our team works to keep the process straightforward, from the
                first WhatsApp message to the final return of your garments.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-success/5 p-8 rounded-2xl border border-border"
              >
                <Users className="w-10 h-10 text-success mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Garment-Care Experience
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Orders are handled by people who understand sorting, washing,
                  pressing, and how to communicate timing clearly.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Familiar with common fabric-care requirements
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Respectful handling of guest and traditional garments
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Clear support for international visitors
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-success/5 to-primary/5 p-8 rounded-2xl border border-border"
              >
                <Award className="w-10 h-10 text-success mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Service Confidence
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We take consistency seriously and review customer concerns
                  quickly whenever an order needs attention.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Clear pricing before processing
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Help available if an order needs review
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Pickup and return arranged around your availability
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-success">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Target className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Book Your Next Laundry Pickup?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              If you need washing, pressing, folding, or urgent turnaround near
              Haram, send us your location and we will help arrange the best
              option.
            </p>
            <a
              href={`https://wa.me/${managerInfo.onlyNumber.whatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Message Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;

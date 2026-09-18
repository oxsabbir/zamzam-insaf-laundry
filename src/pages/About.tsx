import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { Users, Heart, Leaf, Clock, Award, Target } from "lucide-react";
import aboutServiceImage from "@/assets/about-laundry-hs.webp";
import { managerInfo } from "@/constants";

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
              About Makkah Laundry HS
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Making laundry simple for residents and guests throughout Makkah
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
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover object-top"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Makkah Laundry HS is a trusted pickup-and-delivery laundry
                provider, looking after residents, guests, and visitors across
                the city with consistency and care.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Base in the Aziziyah district, close to the heart of the holy
                city, we understand the rhythms of Umrah and Hajj guests as well
                as the everyday needs of local families. Our service is built to
                fit your schedule, whether you're visiting for a few days or
                living here full-time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With express pickup in around 15 minutes, availability around
                the clock, and attentive garment care, we take the hassle out of
                laundry so you can get on with your day in Makkah.
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
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To deliver laundry care that respects your time, your fabrics, and
              the environment, so you can focus on what matters most during
              your time in Makkah.
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
                Speed & Convenience
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Pickup within about 15 minutes, with express options as fast as
                1 hour for those truly urgent moments.
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
                Premium Care
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every garment gets gentle, professional treatment using quality
                products and modern equipment.
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
                Eco-Friendly
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We use environmentally safe cleaning products that are gentle on
                fabrics and kind to our planet.
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
                Skilled Team, Service First
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our trained crew knows just how much trust you're placing in us
                — especially with your personal belongings during a journey like
                Hajj or Umrah.
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
                  Trained Professionals
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Each member of the team is trained in fabric care, stain
                  handling, and friendly service.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Skilled in professional laundry techniques
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Mindful of cultural and religious sensitivities
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Multilingual support for international guests
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
                  Quality Guarantee
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We stand behind every order with a full satisfaction promise.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Refund if you're not fully satisfied
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Free re-clean whenever needed
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Clear pricing without hidden charges
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
              Ready to See the Difference?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Join thousands of satisfied guests who trust us with their laundry
              across Makkah. Let us handle your wardrobe while you enjoy your
              stay.
            </p>
            <a
              href={`https://wa.me/${managerInfo.onlyNumber.whatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Try Our Service Today
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;

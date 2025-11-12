import WhatsAppIcon from "./icons/Whatsapp";

export default function PilgrimGuide() {
  return (
    <section
      className="py-8 sm:py-16 bg-gradient-to-br from-muted/20 to-primary/10"
      aria-labelledby="guide-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <header className="text-center mb-8 sm:mb-12">
          <h2
            id="guide-heading"
            className="text-2xl sm:text-4xl font-bold mb-4 text-foreground"
          >
            📖 Pilgrim's Laundry Guide
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Essential laundry tips for Hajj &amp; Umrah visitors - helping you
            focus on worship, not wardrobe
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/20">
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">🕋</div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                How to Wash Ihram Clothes Properly
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Ihram garments require special care to maintain their purity and
                white appearance. Use gentle detergents, cold water, and avoid
                harsh chemicals.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Hand wash or gentle machine cycle
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Use mild, fragrance-free detergent
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Air dry in shade to prevent yellowing
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Iron on low heat if needed
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/20">
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">👔</div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                Abaya &amp; Thobe Care Guide
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Traditional Islamic garments need professional care to maintain
                their elegance and dignity throughout your pilgrimage.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Dry cleaning recommended for embroidered abayas
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Thobes can be machine washed and pressed
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  5-hour turnaround for urgent needs
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Special pressing for crisp appearance
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/20">
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">⏰</div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                Laundry Timing for Pilgrims
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Plan your laundry around your worship schedule. We offer
                flexible timing to fit your Hajj or Umrah itinerary.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Same-day service: Drop before 10 AM
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Express 5-hour: For between rituals
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  1-hour emergency: For urgent needs
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Night pickup available 24/7
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/20">
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">🧳</div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                What to Pack for Hajj/Umrah
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Smart packing reduces laundry needs. Here's what experienced
                pilgrims recommend for clothing.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  3-4 sets of Ihram (2 white towels each)
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  2-3 thobes/abayas for regular wear
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Comfortable sandals (easy to remove)
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Light undergarments (quick-dry fabric)
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/20">
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                Complete Makkah Laundry Price Guide
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Transparent pricing helps you budget. Hotel laundry costs 3x
                more - here's what you should expect to pay.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Regular wash: 13-15 SAR/kg
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-red-500">✗</span>
                <span className="text-muted-foreground">
                  Hotel laundry: 40-60 SAR/kg (avoid!)
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Our service: FREE pickup &amp; delivery
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Average load: 3-5 kg (45-65 SAR total)
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/20">
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">🌡️</div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                Keeping Clothes Fresh in Makkah
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Makkah's hot climate means clothes need frequent washing. Here's
                how to stay fresh during your pilgrimage.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Change Ihram after Tawaf (sweating is normal)
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Use hotel hangers to air-dry between wears
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Request pickup before going to Haram
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-muted-foreground">
                  Fresh clothes ready when you return
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-card text-card-foreground shadow-sm mt-8 sm:mt-12 max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/40">
          <div className="p-6 text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">
              Need Help with Your Laundry?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Our team understands the unique needs of pilgrims. WhatsApp us for
              personalized laundry advice.
            </p>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg hover:shadow-xl transition-all h-10 px-4 py-2 w-full sm:w-auto">
              <WhatsAppIcon />
              Ask a Laundry Question
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

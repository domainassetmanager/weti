import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const comparableSales = [
  { domain: "lola.com", price: "$550,000" },
  { domain: "refi.com", price: "$500,000" },
  { domain: "bico.com", price: "$350,000" },
  { domain: "fora.com", price: "$285,000" },
  { domain: "miri.com", price: "$199,995" },
];

const Index = () => {
  const [showSales, setShowSales] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showDecline, setShowDecline] = useState(false);

  const handleContactClick = () => {
    setShowSales(true);
  };

  const handleBudgetMatch = () => {
    setShowSales(false);
    setShowContact(true);
  };

  const handleBudgetMismatch = () => {
    setShowSales(false);
    setShowDecline(true);
  };

  const resetDialogs = () => {
    setShowSales(false);
    setShowContact(false);
    setShowDecline(false);
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      
      <div className="max-w-4xl w-full text-center space-y-12 animate-fade-in relative z-10">
        {/* Domain showcase */}
        <div className="space-y-6">
          <div className="inline-block">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight mb-2 animate-glow">
              Weti.com
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            A Premium <span className="text-primary font-semibold">CVCV</span> Domain
          </p>
        </div>

        {/* Key features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Premium</h3>
            <p className="text-sm text-muted-foreground">Four-letter CVCV pattern domain</p>
          </div>
          
          <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Memorable</h3>
            <p className="text-sm text-muted-foreground">Short, catchy, and brandable</p>
          </div>
          
          <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Pronounceable</h3>
            <p className="text-sm text-muted-foreground">Easy to say, spell, and remember</p>
          </div>
          
          <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="text-4xl mb-3">🌐</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Versatile</h3>
            <p className="text-sm text-muted-foreground">Can be used in any industry</p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-6">
          <Button
            onClick={handleContactClick}
            size="lg"
            className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Comparable Sales Dialog */}
      <Dialog open={showSales} onOpenChange={resetDialogs}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl text-foreground">Comparable Sales</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Premium four-letter domain sales
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-3 py-4">
            {comparableSales.map((sale) => (
              <div
                key={sale.domain}
                className="flex justify-between items-center p-4 rounded-lg bg-secondary/50 border border-border/50"
              >
                <span className="font-semibold text-foreground">{sale.domain}</span>
                <span className="text-primary font-bold">{sale.price}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 space-y-3">
            <p className="text-base font-semibold text-foreground text-center mb-4 bg-primary/10 p-3 rounded-lg border border-primary/30">
              Is your budget in a similar price range?
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleBudgetMatch}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Yes, Continue
              </Button>
              <Button
                onClick={handleBudgetMismatch}
                variant="outline"
                className="border-border hover:bg-secondary"
              >
                No
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Information Dialog */}
      <Dialog open={showContact} onOpenChange={resetDialogs}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl text-foreground">Get in Touch</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Contact us to discuss acquiring the domain
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-6 space-y-4">
            <div className="p-6 rounded-lg bg-secondary/50 border border-primary/30 text-center space-y-3">
              <div className="text-4xl mb-2">📧</div>
              <p className="text-sm text-muted-foreground mb-2">Email us at:</p>
              <a
                href="mailto:domainassetmanager@gmail.com"
                className="text-primary hover:text-primary/80 font-semibold text-lg break-all transition-colors"
              >
                domainassetmanager@gmail.com
              </a>
            </div>
            
            <div className="p-4 rounded-lg bg-primary/10 border-2 border-primary/40">
              <p className="text-sm font-semibold text-foreground leading-relaxed">
                <strong className="text-primary">⚠️ Please note:</strong> If your inquiry doesn't include a solid offer in comparable sales price range, you are unlikely to receive a response.
              </p>
            </div>
          </div>

          <Button
            onClick={resetDialogs}
            variant="outline"
            className="w-full border-border hover:bg-secondary"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>

      {/* Decline Dialog */}
      <Dialog open={showDecline} onOpenChange={resetDialogs}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl text-foreground">Thank You</DialogTitle>
          </DialogHeader>
          
          <div className="py-6 text-center space-y-4">
            <div className="text-5xl mb-4">🙏</div>
            <p className="text-muted-foreground leading-relaxed">
              We appreciate your interest. At this time, we are only considering offers within the comparable price range shown.
            </p>
            <p className="text-sm text-muted-foreground/80">
              Your interest is respectfully declined.
            </p>
          </div>

          <Button
            onClick={resetDialogs}
            variant="outline"
            className="w-full border-border hover:bg-secondary"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Index;

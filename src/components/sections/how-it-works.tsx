import { Card, CardContent } from "@/components/ui/card";

export function HowItWorks() {
  const steps = [
    "Platform collects fees from trades and services",
    "100% of profits are used to increase token value",
    "Token price automatically adjusts upward",
    "Holders can redeem tokens at any time for profit",
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border border-border/50 bg-gradient-to-br from-card/95 via-blue-500/5 to-blue-500/10 backdrop-blur-sm hover:from-card hover:to-blue-500/20 transition-all duration-300"
            >
              <CardContent className="flex items-center p-6">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary font-bold">
                  {index + 1}
                </div>
                <p className="text-lg">{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
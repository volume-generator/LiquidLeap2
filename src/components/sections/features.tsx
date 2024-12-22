import { FeatureCard } from "@/components/ui/feature-card";
import { Lock, Droplets, Timer } from "lucide-react";

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={Lock}
            title="Secure Trading"
            description="Built on advanced blockchain technology with audited smart contracts ensuring your assets stay safe."
          />
          <FeatureCard
            icon={Droplets}
            title="Instant Liquidity"
            description="Deep liquidity pools and efficient market making ensure minimal slippage on all trades."
          />
          <FeatureCard
            icon={Timer}
            title="Flexible Redemption"
            description="Redeem your LEAP tokens anytime at market price with zero lockup periods."
          />
        </div>
      </div>
    </section>
  );
}
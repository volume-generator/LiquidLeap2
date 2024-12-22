import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Coins, Users } from "lucide-react";

export function Tokenomics() {
  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Tokenomics</h2>
          <p className="text-xl text-muted-foreground">
            LEAP token holders directly benefit from the platform's success through
            our unique profit-sharing model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-border/50 bg-gradient-to-br from-card/95 via-blue-500/5 to-blue-500/10 backdrop-blur-sm hover:from-card hover:to-blue-500/20 transition-all duration-300">
            <CardHeader>
              <PieChart className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Profit Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                100% of platform profits are used to increase the token's value,
                creating a direct correlation between platform success and holder
                returns.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/50 bg-gradient-to-br from-card/95 via-blue-500/5 to-blue-500/10 backdrop-blur-sm hover:from-card hover:to-blue-500/20 transition-all duration-300">
            <CardHeader>
              <Coins className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Value Appreciation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                As trading volume grows, platform profits automatically drive up the
                token price, ensuring passive income for all holders.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/50 bg-gradient-to-br from-card/95 via-blue-500/5 to-blue-500/10 backdrop-blur-sm hover:from-card hover:to-blue-500/20 transition-all duration-300">
            <CardHeader>
              <Users className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Fair Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Profits are distributed equally among all token holders through the
                price mechanism, creating a truly democratic reward system.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
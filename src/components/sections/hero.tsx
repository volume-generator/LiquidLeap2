import { Button } from "@/components/ui/button";
import { TokenInput } from "@/components/ui/token-input";
import { MarketStat } from "@/components/ui/market-stat";
import { ArrowUpDown, TrendingUp, PieChart } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [amount, setAmount] = useState("");

  return (
    <section className="pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500 mb-6">
          The Future of DeFi Trading
        </h1>
        <p className="text-xl text-muted-foreground">
          LEAP is the native token powering the next generation of decentralized
          exchange. Trade, stake, and earn with unparalleled efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mx-auto mb-12">
        <MarketStat
          title="Current Price"
          value="$1.31"
          change="+12.5% (24h)"
          icon={TrendingUp}
        />
        <MarketStat
          title="Market Cap"
          value="$130.7M"
          icon={PieChart}
        />
      </div>

      <div className="w-full max-w-md mx-auto bg-gradient-to-br from-card/95 via-blue-500/5 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg">
        <div className="space-y-4">
          <TokenInput
            label="You pay"
            balance="0.00"
            token="USDT"
            tokenIcon="💵"
            type="number"
            placeholder="0.0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10"
            >
              <ArrowUpDown className="w-4 h-4" />
            </Button>
          </div>

          <TokenInput
            label="You receive"
            balance="0.00"
            token="LEAP"
            tokenIcon="🔷"
            type="number"
            placeholder="0.0"
            value={amount ? String(Number(amount) / 1.31) : ""}
            readOnly
          />

          <div className="text-sm text-muted-foreground text-center">
            1 LEAP = 1.31 USDT
          </div>

          <Button className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90">
            Buy LEAP
          </Button>

          <div className="text-xs text-muted-foreground text-center">
            Transaction fee: 0.3%
          </div>
        </div>
      </div>
    </section>
  );
}
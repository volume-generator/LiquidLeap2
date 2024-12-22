import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MarketStatProps {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  className?: string;
}

export function MarketStat({ title, value, change, icon: Icon, className }: MarketStatProps) {
  return (
    <Card className={cn(
      "border border-border/50 bg-gradient-to-br from-card/95 via-blue-500/5 to-blue-500/10 backdrop-blur-sm hover:from-card hover:to-blue-500/20 transition-all duration-300",
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-primary/10">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {change && (
              <p className={cn(
                "text-sm",
                change.startsWith("+") ? "text-green-500" : "text-red-500"
              )}>
                {change}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
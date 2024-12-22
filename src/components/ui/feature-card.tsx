import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group border border-border/50 bg-gradient-to-br from-card/95 via-blue-500/5 to-blue-500/10 backdrop-blur-sm hover:from-card hover:to-blue-500/20 transition-all duration-300">
      <CardContent className="p-6">
        <div className="mb-4 p-2 rounded-lg bg-primary/10 w-fit">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
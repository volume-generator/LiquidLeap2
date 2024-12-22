import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface TokenInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  balance: string;
  token: string;
  tokenIcon: string;
}

export function TokenInput({
  label,
  balance,
  token,
  tokenIcon,
  className,
  ...props
}: TokenInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm">{label}</span>
        <span className="text-sm text-muted-foreground">
          Balance: {balance} {token}
        </span>
      </div>
      <div className="relative">
        <Input
          {...props}
          className={cn("pr-20 font-medium", className)}
        />
        <div className="absolute inset-y-0 right-3 flex items-center gap-2">
          <span className="text-muted-foreground">{tokenIcon}</span>
          <span>{token}</span>
        </div>
      </div>
    </div>
  );
}
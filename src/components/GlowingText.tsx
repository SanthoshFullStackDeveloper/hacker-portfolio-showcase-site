
import { cn } from '@/lib/utils';

interface GlowingTextProps {
  children: React.ReactNode;
  className?: string;
}

const GlowingText = ({ children, className }: GlowingTextProps) => {
  return (
    <span className={cn(
      "text-[#00ff00] drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]",
      className
    )}>
      {children}
    </span>
  );
};

export default GlowingText;

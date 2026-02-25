import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  color: string;
}

const SkillCards = ({ name, icon: Icon, color }: SkillCardProps) => {
  const isWhite = color.toLowerCase() === "#ffffff";
  const displayColor = isWhite ? "var(--foreground)" : color;
  const glowColor = isWhite ? "#888888" : color;

  return (
    <div className="flex-shrink-0 mx-3 group cursor-pointer">
      <div className="relative">
        {/* Enhanced hover glow effect */}
        <div 
          className="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-md"
          style={{ 
            background: `radial-gradient(circle, ${glowColor}50, ${glowColor}10, transparent 60%)`
          }}
        ></div>
        
        {/* Main card with enhanced styling */}
        <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-4 w-32 h-24 flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-card/90 group-hover:border-accent/30 group-hover:shadow-lg">
          {/* Icon container with enhanced glow */}
          <div 
            className="relative p-2 rounded-xl mb-2 transition-all duration-300 group-hover:scale-110"
            style={{ 
              background: `linear-gradient(135deg, ${glowColor}15, ${glowColor}05)`,
              boxShadow: `0 4px 20px ${glowColor}15, inset 0 1px 0 ${glowColor}20`
            }}
          >
            <Icon 
              size={20} 
              className="transition-all duration-300"
              style={{ 
                filter: `drop-shadow(0 0 6px ${glowColor}50)`,
                color: displayColor
              }}
            />
          </div>
          
          {/* Skill name with better contrast */}
          <h3 className="text-foreground font-medium text-center text-xs leading-tight tracking-wide">
            {name}
          </h3>
          
          {/* Enhanced animated underline */}
          <div 
            className="w-4 h-0.5 rounded-full mt-1.5 opacity-50 group-hover:opacity-90 group-hover:w-8 transition-all duration-300"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
              boxShadow: `0 0 10px ${glowColor}60`
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCards;
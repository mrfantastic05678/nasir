import {
  Zap,
  Palette,
  Code2,
  FileText,
  Server,
  Database,
  Globe,
  Atom,
  FileCode2,
  Coffee,
  Leaf,
  Container,
  GitBranch,
  Cloud,
  Circle,
  Gem,
  HardDrive,
  Smile,
  PenTool,
  LockKeyhole,
  LayoutDashboard,
  Move,
  TrainFront,
  ShieldCheck,
  Triangle,
  Users2,
  Layers3,
  CircleDot,
  Link2,
} from "lucide-react";
import SkillCards from "./ui/SkillCards";

const SkillSlider = () => {
  const skills = [
    // AI & Automation (Primary Focus)
    { name: "Python", icon: Code2, color: "#FFD43B" },
    { name: "n8n", icon: Zap, color: "#FF6B35" },
    { name: "LangChain", icon: Link2, color: "#3178C6" },
    { name: "Pinecone", icon: CircleDot, color: "#5AD1D1" },
    { name: "Vector DB", icon: Layers3, color: "#512DA8" },
    { name: "Crew AI", icon: Users2, color: "#6366F1" },
    { name: "Hugging Face", icon: Smile, color: "#FFBF00" },

    // Full-Stack Development
    { name: "Next.js", icon: Triangle, color: "#00D9FF" },
    { name: "React", icon: Atom, color: "#61DAFB" },
    { name: "TypeScript", icon: FileCode2, color: "#3178C6" },
    { name: "Node.js", icon: Server, color: "#68A063" },
    { name: "Tailwind CSS", icon: Palette, color: "#06B6D4" },
    { name: "JavaScript", icon: Coffee, color: "#F7DF1E" },

    // Backend & Database
    { name: "PostgreSQL", icon: Database, color: "#336791" },
    { name: "Prisma ORM", icon: Gem, color: "#0078E9" },
    { name: "SQLite", icon: HardDrive, color: "#0078D4" },
    { name: "MongoDB", icon: Leaf, color: "#47A248" },
    { name: "Redis", icon: Circle, color: "#DC382D" },

    // CMS & Platform
    { name: "Sanity CMS", icon: FileText, color: "#F03E2F" },
    { name: "WordPress", icon: Globe, color: "#00749C" },
    { name: "Supabase", icon: ShieldCheck, color: "#3ECF8E" },

    // DevOps & Deployment
    { name: "Vercel", icon: Triangle, color: "#FFFFFF" },
    { name: "Docker", icon: Container, color: "#2496ED" },
    { name: "Git", icon: GitBranch, color: "#F05032" },
    { name: "AWS", icon: Cloud, color: "#FF9900" },
    { name: "Railway", icon: TrainFront, color: "#8A63D2" },

    // UI & Tools
    { name: "Framer Motion", icon: Move, color: "#0055FF" },
    { name: "ShadCN/UI", icon: LayoutDashboard, color: "#6366F1" },
    { name: "Clerk Auth", icon: LockKeyhole, color: "#3D5AFE" },
    { name: "Figma", icon: PenTool, color: "#F24E1E" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Fade overlays */}
      <div className="absolute left-0 top-0 w-14 lg:w-32 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-14 lg:w-32 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>

      {/* Top row - sliding right */}
      <div className="mb-8 relative">
        <div className="w-max flex flex-nowrap animate-infinite-scroll-right">
          {[...skills, ...skills].map((skill, index) => (
            <SkillCards
              key={`top-${skill.name}-${index}`}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>

      {/* Bottom row - sliding left */}
      <div className="relative">
        <div className="w-max -ml-[5000px] lg:-ml-[500%] flex flex-nowrap animate-infinite-scroll-left flex-row-reverse">
          {[...skills, ...skills].reverse().map((skill, index) => (
            <SkillCards
              key={`bottom-${skill.name}-${index}`}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSlider;


import { Card } from '@/components/ui/card';
import { Github, Link } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard = ({ title, description, technologies, githubLink, liveLink }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-black/40 border border-[#00ff00]/20 backdrop-blur-sm hover:border-[#00ff00]/50 transition-all duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-[#00ff00]">{title}</h3>
        <p className="text-[#00ff00]/70 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs rounded-full bg-[#003300] text-[#00ff00]">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" 
               className="text-[#00ff00]/70 hover:text-[#00ff00] transition-colors">
              <Github size={20} />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer"
               className="text-[#00ff00]/70 hover:text-[#00ff00] transition-colors">
              <Link size={20} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;

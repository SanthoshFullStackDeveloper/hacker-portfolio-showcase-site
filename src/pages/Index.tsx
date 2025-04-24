
import { useEffect, useState } from 'react';
import Terminal from '@/components/Terminal';
import GlowingText from '@/components/GlowingText';
import ProjectCard from '@/components/ProjectCard';
import { Github, Linkedin, Mail, Code, Database, Server } from 'lucide-react';

const Index = () => {
  const [text, setText] = useState('');
  const fullText = '> Hello World! I am a Software Developer & Security Expert';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen matrix-bg">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Hero Section */}
        <div className="mb-20">
          <Terminal>
            <div className="space-y-4">
              <div className="text-3xl md:text-5xl font-bold">
                <GlowingText>{text}</GlowingText>
                <span className="animate-pulse">_</span>
              </div>
              <p className="text-[#00ff00]/70">Full Stack Developer | Security Specialist | Open Source Contributor</p>
            </div>
          </Terminal>
        </div>

        {/* Skills Section */}
        <section className="mb-20">
          <Terminal title="skills.sh">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-3"><Code className="inline-block mr-2" /> Programming Languages</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['JavaScript/TypeScript', 'Python', 'Java', 'C++'].map((lang) => (
                    <div key={lang} className="px-4 py-2 border border-[#00ff00]/20 rounded-md hover:border-[#00ff00]/50 transition-colors">
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-3"><Server className="inline-block mr-2" /> Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['React', 'Node.js', 'Docker', 'Kubernetes'].map((tech) => (
                    <div key={tech} className="px-4 py-2 border border-[#00ff00]/20 rounded-md hover:border-[#00ff00]/50 transition-colors">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-3"><Database className="inline-block mr-2" /> Databases</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'].map((db) => (
                    <div key={db} className="px-4 py-2 border border-[#00ff00]/20 rounded-md hover:border-[#00ff00]/50 transition-colors">
                      {db}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Terminal>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <Terminal title="about.sh">
            <div className="space-y-4">
              <p>$ cat about.txt</p>
              <div className="pl-4">
                <p>Software developer with expertise in:</p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Full Stack Development</li>
                  <li>System Architecture</li>
                  <li>Security Implementation</li>
                  <li>Cloud Infrastructure</li>
                  <li>CI/CD Implementation</li>
                </ul>
              </div>
            </div>
          </Terminal>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8"><GlowingText>Featured Projects</GlowingText></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Cloud Security Scanner"
              description="Automated security scanning tool for cloud infrastructure with real-time vulnerability detection"
              technologies={["Python", "AWS", "Docker"]}
              githubLink="https://github.com"
            />
            <ProjectCard
              title="DevOps Dashboard"
              description="Real-time monitoring system for CI/CD pipelines and infrastructure metrics"
              technologies={["React", "Node.js", "Grafana"]}
              githubLink="https://github.com"
            />
            <ProjectCard
              title="API Gateway"
              description="High-performance API gateway with built-in security features and rate limiting"
              technologies={["Go", "Redis", "Kubernetes"]}
              githubLink="https://github.com"
            />
            <ProjectCard
              title="Code Analysis Tool"
              description="Static code analysis tool for detecting security vulnerabilities in source code"
              technologies={["Python", "TypeScript", "PostgreSQL"]}
              githubLink="https://github.com"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <Terminal title="contact.sh">
            <div className="space-y-4">
              <p>$ echo $CONTACT_INFO</p>
              <div className="flex space-x-6 pl-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="text-[#00ff00]/70 hover:text-[#00ff00] transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-[#00ff00]/70 hover:text-[#00ff00] transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:your@email.com"
                   className="text-[#00ff00]/70 hover:text-[#00ff00] transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </Terminal>
        </section>
      </div>
    </div>
  );
};

export default Index;


import { useEffect, useState } from 'react';
import Terminal from '@/components/Terminal';
import GlowingText from '@/components/GlowingText';
import ProjectCard from '@/components/ProjectCard';
import { Github, Linkedin, Mail } from 'lucide-react';

const Index = () => {
  const [text, setText] = useState('');
  const fullText = '> Hello World! I am a Cyber Security Expert & Ethical Hacker';

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
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="mb-20">
          <Terminal>
            <div className="space-y-4">
              <div className="text-3xl md:text-5xl font-bold">
                <GlowingText>{text}</GlowingText>
                <span className="animate-pulse">_</span>
              </div>
              <p className="text-[#00ff00]/70">Specialized in Penetration Testing & Security Analysis</p>
            </div>
          </Terminal>
        </div>

        {/* About Section */}
        <section className="mb-20">
          <Terminal title="about.sh">
            <div className="space-y-4">
              <p>$ cat about.txt</p>
              <div className="pl-4">
                <p>I am a passionate cybersecurity professional with expertise in:</p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Penetration Testing</li>
                  <li>Vulnerability Assessment</li>
                  <li>Network Security</li>
                  <li>Malware Analysis</li>
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
              title="Security Scanner"
              description="Automated vulnerability scanner for web applications"
              technologies={["Python", "Docker", "PostgreSQL"]}
              githubLink="https://github.com"
            />
            <ProjectCard
              title="Packet Analyzer"
              description="Real-time network traffic analysis tool"
              technologies={["C++", "Wireshark", "Qt"]}
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

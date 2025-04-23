
import React from 'react';
import { Card } from '@/components/ui/card';

interface TerminalProps {
  children: React.ReactNode;
  title?: string;
}

const Terminal = ({ children, title = 'terminal@hacker:~$' }: TerminalProps) => {
  return (
    <Card className="bg-black/80 border border-[#00ff00]/20 rounded-lg overflow-hidden backdrop-blur-sm">
      <div className="flex items-center gap-2 p-3 bg-[#0a0a0a] border-b border-[#00ff00]/20">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-sm text-[#00ff00]/70">{title}</span>
      </div>
      <div className="p-4 font-mono text-[#00ff00]">
        {children}
      </div>
    </Card>
  );
};

export default Terminal;

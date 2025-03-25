import React from 'react';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Brain className="h-6 w-6 text-primary mr-2" />
            <span className="font-semibold">Vaibhav Chaudhary</span>
          </div>
          <div className="text-sm text-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Mail, Linkedin, FileText } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <section className="pt-24 border-t border-slate-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">Let's connect</h2>
          <p className="text-slate-500">I am currently available for new projects or strategic roles.</p>
        </div>
        
        <div className="flex flex-wrap gap-6">
          <a href="mailto:samar.aiza3@gmail.com" className="flex items-center gap-2 text-slate-900 font-medium hover:text-teal-600 transition-colors">
            <Mail className="w-5 h-5" /> samar.aiza3@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/samar-sajjad-505510154" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-900 font-medium hover:text-blue-600 transition-colors">
            <Linkedin className="w-5 h-5" /> LinkedIn Profile
          </a>
        </div>
      </div>
      
      <div className="mt-16 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300">
        <div className="flex items-center gap-2">
          <FileText className="w-3 h-3" />
          Writing samples available on request
        </div>
        <div>&copy; {new Date().getFullYear()}</div>
      </div>
    </section>
  );
};

export default ContactFooter;

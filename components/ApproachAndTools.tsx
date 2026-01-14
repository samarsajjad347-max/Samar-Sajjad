
import React from 'react';
import { Search, PenTool, Zap, CheckCircle } from 'lucide-react';

const ApproachAndTools: React.FC = () => {
  return (
    <section className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* SEO Approach */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <Search className="w-4 h-4" /> SEO Methodology
          </h3>
          <ul className="space-y-3">
            {["Search Intent", "Semantic Keywords", "Content Structuring", "Meta Optimization", "Readability Metrics"].map(item => (
              <li key={item} className="text-sm text-slate-600 flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-teal-500" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <PenTool className="w-4 h-4" /> Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Google Docs", "WordPress CMS", "Search Console", "Instagram", "LinkedIn", "Facebook"].map(tool => (
              <span key={tool} className="text-xs font-medium px-3 py-1.5 bg-slate-100 text-slate-500 rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <Zap className="w-4 h-4" /> Core Strengths
          </h3>
          <ul className="space-y-3">
            {[
              "Structured writing",
              "Deep research capability",
              "Multi-brand adaptation",
              "Meticulous attention to detail",
              "High-reliability delivery"
            ].map(strength => (
              <li key={strength} className="text-sm text-slate-600 italic">
                — {strength}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ApproachAndTools;

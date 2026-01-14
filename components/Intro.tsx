
import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="space-y-8 animate-in fade-in duration-700">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Samar Sajjad
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 font-medium">
          Content Writer | SEO Content Specialist | Brand Storyteller
        </p>
      </div>
      
      <div className="max-w-2xl">
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
          Currently at <span className="text-slate-900 font-semibold underline decoration-teal-500/30 underline-offset-4">Funadiq</span>. 
          Expertise in crafting SEO-optimized narratives that bridge the gap between user intent and brand voice across global and regional markets.
        </p>
      </div>

      <div className="h-px w-24 bg-slate-200"></div>
    </section>
  );
};

export default Intro;

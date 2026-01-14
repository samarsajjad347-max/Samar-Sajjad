
import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-none">
          Samar Sajjad
        </h1>
        <p className="text-xl md:text-3xl text-slate-400 font-semibold tracking-tight">
          Content Writer <span className="text-teal-500/30">|</span> SEO Specialist <span className="text-teal-500/30">|</span> Storyteller
        </p>
      </div>

      <div className="max-w-2xl border-l-2 border-teal-500/20 pl-6 py-2">
        <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-light">
          Currently at <span className="text-slate-900 font-bold underline decoration-teal-500/30 underline-offset-8">Funadiq</span>.
          I craft SEO-driven narratives that align user intent with brand voice for global markets.
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <div className="h-px flex-1 bg-gradient-to-r from-teal-500/50 to-transparent"></div>
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-300">Portfolio 2026</span>
      </div>
    </section>
  );
};

export default Intro;

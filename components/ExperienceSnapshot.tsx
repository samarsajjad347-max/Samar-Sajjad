
import React from 'react';

const ExperienceSnapshot: React.FC = () => {
  const brands = [
  "Funadiq (Global)",
  "Umrah Companions (Global)",
  "Zindigi App (Digital Payments)",
  "Nojom Al Tamam (UAE Property Services)",
  "Expert Bills Saver (UK Utility Services)"
];
  const focus = ["SEO Blogs", "Website Copy", "Social Media Strategy"];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-50 rounded-2xl p-8 border border-slate-100">
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Current Tenure</h3>
        <div>
          <p className="text-xl font-bold text-slate-900">Content Writer – Funadiq</p>
          <p className="text-slate-500">Leading content strategy for a diverse portfolio of international service brands.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-teal-600">Key Brands</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            {brands.map(b => <li key={b}>{b}</li>)}
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600">Focus Areas</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            {focus.map(f => <li key={f}>{f}</li>)}
          </ul>
        {/* Zindigi App Section */}
<div className="space-y-6 mt-8">
  <h3 className="text-xs font-bold uppercase tracking-widest text-purple-500">
    Zindigi App Project
  </h3>

  <div>
    <p className="text-xl font-bold text-slate-900">
      Content & Campaign Strategy — Zindigi (Digital Payments App)
    </p>

    <p className="text-slate-500 mt-2">
      Contributed to digital campaign messaging, app-focused content strategy,
      and user-centered communication to improve engagement, clarity, and brand positioning
      in the fintech space.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <img
      src="/assets/zindigi-1.png"
      alt="Zindigi App Screenshot 1"
      className="w-full rounded-xl border border-slate-200"
    />
    <img
      src="/assets/zindigi-2.png"
      alt="Zindigi App Screenshot 2"
      className="w-full rounded-xl border border-slate-200"
    />
  </div>
</div>

    </section>
  );
};

export default ExperienceSnapshot;

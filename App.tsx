
import React from 'react';
import Intro from './components/Intro';
import ExperienceSnapshot from './components/ExperienceSnapshot';
import CaseStudySection from './components/CaseStudySection';
import ApproachAndTools from './components/ApproachAndTools';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-teal-50 selection:text-teal-900">
      {/* Document Container: Simulating a premium editorial layout */}
      <main className="max-w-4xl mx-auto px-6 sm:px-12 py-16 md:py-24 space-y-24">
        
        {/* Section 1: Introduction */}
        <Intro />

        {/* Section 2: Experience Snapshot */}
        <ExperienceSnapshot />

        {/* Section 3: Case Studies (The Core) */}
        <CaseStudySection />

        {/* Section 4: SEO, Approach & Tools */}
        <ApproachAndTools />

        {/* Section 5: Closing & Contact */}
        <ContactFooter />

      </main>
    </div>
  );
};

export default App;

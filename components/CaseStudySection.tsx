import React from 'react';
import { Image as ImageIcon, Users, Puzzle, TrendingUp, RefreshCcw, ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  number: string;
  title: string;
  goal: string;
  work: string[];
  focusPoints: string[];
  imageLabel: string;
  visual?: React.ReactNode;
}

const BlogMockupItem = ({
  title,
  date,
  excerpt,
  bannerText,
  bannerSubtext,
  bannerColor = "#e2e8f0"
}: {
  title: string,
  date: string,
  excerpt: string,
  bannerText: string,
  bannerSubtext?: string,
  bannerColor?: string
}) => (
  <img src="/assets/funadiq.jpeg" alt="" />
);

const WebsiteMockupItem = ({ brandColor = "#1e3a8a", title, p1, p2 }: { brandColor?: string, title: string, p1: string, p2: string }) => (
  <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm space-y-4 text-left">
    <h4 className="text-xl font-bold leading-tight border-l-4 pl-4" style={{ color: brandColor, borderColor: brandColor }}>
      {title}
    </h4>
    <div className="space-y-3">
      <p className="text-[9px] text-slate-600 leading-relaxed">{p1}</p>
      <p className="text-[9px] text-slate-600 leading-relaxed">{p2}</p>
    </div>
  </div>
);

const NojomMockup = () => (
  <img src="/assets/nojom.jpeg" alt="" />
);

const EBSMockup = () => (
  <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm overflow-hidden text-[#1e3a8a] text-left">
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-1/2 space-y-4">
        <h4 className="text-2xl font-bold leading-tight">25k+ Clients And Still Expanding.</h4>
        <p className="text-[9px] text-slate-500 leading-relaxed">
          Our expertise and ability to deliver solutions on time set us apart and have helped us serve 25k+ clients and counting. From supporting SMEs with utilities management to providing human resource solutions...
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a8a] text-white text-[9px] font-bold rounded tracking-wide uppercase">
          Request a call back <ArrowRight className="w-3 h-3" />
        </div>
      </div>
      <div className="lg:w-1/2 grid grid-cols-2 gap-x-4 gap-y-6">
        <div className="space-y-1">
          <Users className="w-5 h-5 mb-2 opacity-80" />
          <h5 className="text-[10px] font-bold">Expert Advisors</h5>
          <p className="text-[7px] text-slate-400 leading-snug">Years of experience providing trusted advice to UK clients and businesses across multiple industries.</p>
        </div>
        <div className="space-y-1">
          <Puzzle className="w-5 h-5 mb-2 opacity-80" />
          <h5 className="text-[10px] font-bold">Tailored Solutions</h5>
          <p className="text-[7px] text-slate-400 leading-snug">Bespoke plans aligned with your business goals, whether for utilities, waste management, or HR.</p>
        </div>
        <div className="space-y-1">
          <TrendingUp className="w-5 h-5 mb-2 opacity-80" />
          <h5 className="text-[10px] font-bold">Business Performance</h5>
          <p className="text-[7px] text-slate-400 leading-snug">Practical solutions that help businesses focus on what matters most, while our team takes care of the rest.</p>
        </div>
        <div className="space-y-1">
          <RefreshCcw className="w-5 h-5 mb-2 opacity-80" />
          <h5 className="text-[10px] font-bold">End-to-End Service</h5>
          <p className="text-[7px] text-slate-400 leading-snug">From sourcing the right suppliers to managing the process, we handle everything without disruption.</p>
        </div>
      </div>
    </div>
  </div>
);

const SocialMediaGrid = () => (
  <div className="w-full gap-3 p-3 rounded-2xl">
    <img src="/assets/social.jpeg" alt="" />
  </div>
);

/** ✅ NEW: Zindigi mockup (uses the images you uploaded) */
const ZindigiMockup = () => (
  <div className="grid grid-cols-2 gap-4">
    <img
      src="/assets/zindigi-1.png"
      alt="Zindigi App Screenshot 1"
      className="w-full rounded-xl border border-slate-200 shadow-sm"
      loading="lazy"
    />
    <img
      src="/assets/zindigi-2.png"
      alt="Zindigi App Screenshot 2"
      className="w-full rounded-xl border border-slate-200 shadow-sm"
      loading="lazy"
    />
  </div>
);

const CaseStudy: React.FC<CaseStudyProps> = ({ number, title, goal, work, focusPoints, imageLabel, visual }) => (
  <div className="space-y-8 pb-16 border-b border-slate-100 last:border-0 last:pb-0">
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-1/2 space-y-6 text-left">
        <div className="space-y-1">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">{number}</span>
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Project Goal</h4>
            <p className="text-slate-600 leading-relaxed text-sm">{goal}</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Work Included</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                {work.map((w, i) => (
                  <li key={i} className="flex items-center gap-2 text-left">
                    <span className="w-1 h-1 bg-slate-300 rounded-full shrink-0"></span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Strategic Focus</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                {focusPoints.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-left">
                    <span className="w-1 h-1 bg-teal-400 rounded-full shrink-0"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2">
        {visual ? (
          <div className="p-2 bg-slate-50 rounded-2xl border border-slate-100 shadow-inner overflow-hidden">
            {visual}
          </div>
        ) : (
          <div className="aspect-[4/3] bg-slate-100 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center group hover:bg-slate-50 transition-colors">
            <ImageIcon className="w-8 h-8 text-slate-300 mb-2 group-hover:text-teal-400 transition-colors" />
            <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">{imageLabel}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

const CaseStudySection: React.FC = () => {
  const cases = [
    {
      number: "Case Study 01",
      title: "Blog Writing (Funadiq)",
      goal: "Position Funadiq as a thought leader in the pilgrimage travel space through high-quality, SEO-optimized blog content that targets specific traveler pain points.",
      work: ["Strategic Blog Content", "Industry Insights", "SEO-Copywriting"],
      focusPoints: ["Search Intent", "Brand Authority", "Visual Hierarchy"],
      imageLabel: "Funadiq Blog Content",
      visual: (
        <div className="space-y-4 p-2 bg-slate-100/50 rounded-lg">
          <BlogMockupItem
            title="Umrah 2026 Closing Dates Announced: What Travel Agents Need To Know"
            date="Jan 07, 2026"
            bannerText="What Travel Agents Need To Know"
            bannerSubtext="Umrah 2026 Closing Dates Announced"
            bannerColor="#ecfeff"
            excerpt="Saudi Arabia has announced the closing dates for Umrah 2026. Every year, before Hajj, Saudi Arabia closes the Umrah to make the Hajj more comfortable. It is not just a break but a..."
          />
        </div>
      )
    },
    {
      number: "Case Study 02",
      title: "Website Content (Umrah Companions)",
      goal: "Enhance user experience through clear messaging and logical information hierarchy on primary service funnels for pilgrimage packages.",
      work: ["Home sections", "Service pages", "Info blocks"],
      focusPoints: ["High Readability", "Logical Flow", "Conversion Clarity"],
      imageLabel: "Website Architecture Screenshots",
      visual: (
        <div className="p-2">
          <WebsiteMockupItem
            title="Umrah Companions – Your Trusted Partner for a Blessed Journey"
            p1="Umrah Companions, powered by Funadiq, understands that performing Umrah is a heartfelt desire for every Muslim. We offer tailored Umrah Packages 2026 to make this dream come true."
            p2="With a network of over 700 hotels in Makkah and Madinah, we ensure your pilgrimage is seamless and spiritually fulfilling."
          />
        </div>
      )
    },
    {
      number: "Case Study 03",
      title: "Website Content (Nojom Al Tamam - UAE)",
      goal: "Establish professional authority for a UAE-based property maintenance provider through clear, trust-focused service explanations.",
      work: ["Service landing pages", "Maintenance guides", "B2B proposals"],
      focusPoints: ["Regional trust", "Technical clarity", "Professional tone"],
      imageLabel: "Nojom Al Tamam Copy",
      visual: (
        <div className="p-2">
          <NojomMockup />
        </div>
      )
    },
    {
      number: "Case Study 04",
      title: "Website Content (Expert Bills Saver - UK)",
      goal: "Drive conversions for a UK utility savings platform by articulating a strong value proposition and simplifying complex bill reductions.",
      work: ["Conversion-focused copy", "UK service descriptions", "Customer FAQs"],
      focusPoints: ["Value proposition", "UK Market Tone", "Call-to-Action clarity"],
      imageLabel: "EBS Website Copy",
      visual: (
        <div className="p-2">
          <EBSMockup />
        </div>
      )
    },
    {
      number: "Case Study 05",
      title: "Social Media Content (Funadiq & Umrah Companions)",
      goal: "Leverage storytelling, AI characterization, and interactive infographics to build brand connectivity across global pilgrimage markets.",
      work: ["Visual Storyboarding", "Chatbot Scripting", "Engagement Optimization"],
      focusPoints: ["Platform Adaptation", "Narrative Consistency", "AI-Human Hybrid Content"],
      imageLabel: "Social Media Campaign Visuals",
      visual: <SocialMediaGrid />
    },

    /** ✅ NEW: Zindigi case study */
    {
      number: "Case Study 06",
      title: "App Content (Zindigi — Digital Payments)",
      goal: "Support fintech messaging by creating clear, user-first content and campaign copy that improves trust, engagement, and feature understanding across app journeys.",
      work: ["Campaign Messaging", "Feature/UX Copy Support", "Content Structuring"],
      focusPoints: ["Clarity & Trust", "User Intent", "Fintech Tone"],
      imageLabel: "Zindigi App Screens",
      visual: (
        <div className="p-2">
          <ZindigiMockup />
        </div>
      )
    }
  ];

  return (
    <section className="space-y-16">
      <div className="space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Selected Case Studies</h2>
        <div className="h-0.5 w-12 bg-teal-500"></div>
      </div>

      <div className="space-y-16">
        {cases.map((c, idx) => <CaseStudy key={idx} {...c} />)}
      </div>
    </section>
  );
};

export default CaseStudySection;

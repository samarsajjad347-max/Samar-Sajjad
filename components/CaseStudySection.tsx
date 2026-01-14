
import React from 'react';
import { Image as ImageIcon, Users, Puzzle, TrendingUp, RefreshCcw, ArrowRight, Play, Instagram, MapPin, MousePointer2, MessageSquare, Heart } from 'lucide-react';

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
  <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div className="w-full sm:w-2/5 aspect-[16/10] rounded overflow-hidden relative shrink-0 border border-slate-100 flex flex-col" style={{ backgroundColor: bannerColor }}>
      <div className="absolute top-2 left-2 flex items-center gap-1">
        <div className="w-4 h-4 bg-red-600 rounded-sm flex items-center justify-center text-[6px] text-white font-bold">ف</div>
        <span className="text-[8px] font-bold text-slate-800 uppercase tracking-tighter">Funadiq</span>
      </div>
      <div className="mt-auto p-3 space-y-1 bg-white/40 backdrop-blur-[1px]">
        <p className="text-[7px] font-bold text-slate-600 uppercase tracking-tighter">{bannerSubtext}</p>
        <p className="text-[10px] font-black text-slate-900 leading-none uppercase tracking-tighter drop-shadow-sm">
          {bannerText}
        </p>
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-between py-1 text-left">
      <div className="space-y-1">
        <h4 className="text-sm font-bold text-[#1e3a8a] leading-tight line-clamp-2">{title}</h4>
        <p className="text-[10px] text-slate-500 line-clamp-3 leading-relaxed">{excerpt}</p>
      </div>
      <div className="flex justify-between items-end mt-4">
        <span className="text-[9px] font-medium text-slate-400">{date}</span>
        <div className="px-4 py-1.5 bg-[#be185d] text-white text-[9px] font-bold rounded-md hover:bg-[#9d174d] transition-colors cursor-default">
          Read More
        </div>
      </div>
    </div>
  </div>
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
  <div className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden flex flex-col text-left">
    <div className="px-4 py-2 border-b border-slate-50 flex justify-between items-center">
      <div className="text-[10px] font-bold text-red-600">NOJOM AL TAMAM</div>
      <div className="flex gap-2 text-[8px] font-bold text-slate-700">
        <span className="text-red-600 border-b border-red-600">HOME</span>
        <span>ABOUT</span>
        <span>SERVICES</span>
        <span>CONTACT</span>
      </div>
    </div>
    <div className="flex p-4 gap-4 bg-slate-50">
      <div className="w-1/2 space-y-2">
        <h4 className="text-lg font-bold text-slate-900 leading-none">
          Your One-Stop <br/>Building <br/>
          <span className="text-red-600">Maintenance <br/>Company In <br/>Dubai</span>
        </h4>
        <p className="text-[8px] text-slate-500 leading-tight">
          Quality maintenance services you can trust, great value every time, whether it's your home, shop, or business.
        </p>
      </div>
      <div className="w-1/2 aspect-square bg-slate-200 rounded-xl relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-red-600/10"></div>
        <div className="w-2/3 h-full bg-red-600 rounded-t-full mt-4 flex flex-col items-center p-2">
           <div className="w-6 h-6 bg-slate-300 rounded-full border-2 border-white mb-2"></div>
           <div className="w-full h-1 bg-white/20 rounded"></div>
        </div>
      </div>
    </div>
  </div>
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
          <p className="text-[7px] text-slate-400 tertiary text-slate-400 leading-snug">From sourcing the right suppliers to managing the process, we handle everything without disruption.</p>
        </div>
      </div>
    </div>
  </div>
);

const SocialMediaGrid = () => (
  <div className="grid grid-cols-2 gap-3 p-3 bg-slate-100/50 rounded-2xl border border-slate-200">
    {/* Item 1: Umrah Journey Lounge Invitation */}
    <div className="aspect-[3/4] bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden relative flex flex-col p-4">
      <div className="w-8 h-8 bg-[#1e3a8a] rounded flex items-center justify-center mb-3">
        <span className="text-[8px] text-white font-black">UC</span>
      </div>
      <div className="space-y-1">
        <p className="text-[6px] font-bold text-teal-600 tracking-widest uppercase">You Are Invited To</p>
        <h4 className="text-xs font-black text-[#1e3a8a] leading-tight">THE UMRAH JOURNEY LOUNGE</h4>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-1">
        <div className="bg-slate-50 p-1 rounded border border-slate-100 flex items-center gap-1">
          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
          <span className="text-[5px] font-bold">14th - 31st OCT</span>
        </div>
        <div className="bg-slate-50 p-1 rounded border border-slate-100 flex items-center gap-1">
          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
          <span className="text-[5px] font-bold">9AM - 8PM</span>
        </div>
      </div>
      <div className="mt-auto relative w-full aspect-square bg-slate-100 rounded-t-full overflow-hidden flex items-end justify-center">
         <div className="absolute top-2 w-12 h-12 bg-black rounded flex items-center justify-center">
           <div className="w-8 h-8 border border-white/20"></div>
         </div>
         <div className="w-full h-1/2 bg-[#1e3a8a]/10 backdrop-blur-sm p-2">
            <p className="text-[6px] font-bold text-center text-[#1e3a8a]">UMRAH COMPANIONS KE SATH!</p>
         </div>
      </div>
    </div>

    {/* Item 2: Ibraheem AI Character on Phone */}
    <div className="aspect-[3/4] bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden flex flex-col items-center justify-center p-6 relative group">
       <div className="w-full aspect-[9/19] bg-slate-900 rounded-[20px] p-1.5 shadow-xl border border-slate-800 flex flex-col overflow-hidden relative">
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-black rounded-full z-10"></div>
          <div className="flex-1 bg-orange-100 rounded-[15px] overflow-hidden flex flex-col items-center justify-center relative">
             <div className="absolute top-4 left-4">
                <Play className="w-3 h-3 text-white/50" />
             </div>
             {/* Character Silhouette */}
             <div className="w-20 h-20 bg-slate-800 rounded-full border-2 border-white mb-2 overflow-hidden flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-200 rounded-full mt-4 flex flex-col items-center">
                   <div className="w-4 h-4 bg-slate-800 rounded-full mb-1"></div>
                   <div className="w-8 h-2 bg-slate-800 rounded-full"></div>
                </div>
             </div>
             <p className="text-[6px] font-bold text-slate-800 opacity-60">AI UMRAH ADVISOR</p>
          </div>
       </div>
       <div className="absolute top-4 right-4">
          <Instagram className="w-4 h-4 text-slate-300" />
       </div>
    </div>

    {/* Item 3: Chatbot Interaction Screens */}
    <div className="aspect-[3/4] bg-teal-50 rounded-lg shadow-sm border border-slate-200 overflow-hidden flex flex-col p-4 space-y-4">
       <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
          <div className="space-y-0.5">
             <p className="text-[6px] font-bold text-[#1e3a8a]">IBRAHEEM | AI UMRAH ADVISOR</p>
             <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                <p className="text-[4px] font-bold text-slate-400 uppercase">Always Connected</p>
             </div>
          </div>
       </div>
       
       <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-slate-100 space-y-2">
          <p className="text-[6px] font-black text-[#1e3a8a]">ASSALAM-O-ALAIKUM!</p>
          <p className="text-[5px] text-slate-600 leading-relaxed">
             MY NAME IS IBRAHEEM, AND I'M YOUR AI UMRAH ADVISOR. I'M HERE TO MAKE YOUR UMRAH ARRANGEMENT HASSLE FREE.
          </p>
       </div>
       
       <div className="bg-white/80 p-3 rounded-xl rounded-tr-none shadow-sm border border-slate-100 self-end">
          <p className="text-[5px] font-bold text-slate-700 italic">"Ibrahim knows everything"</p>
       </div>
    </div>

    {/* Item 4: Haram Voice Reel */}
    <div className="aspect-[3/4] bg-[#1e3a8a] rounded-lg shadow-sm border border-slate-200 overflow-hidden relative flex flex-col group">
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1591604021695-0c69b7c03381?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

       <div className="relative p-3 flex justify-between items-start">
          <div className="w-4 h-4 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
             <Instagram className="w-2.5 h-2.5 text-white" />
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded px-1.5 py-0.5 flex items-center gap-1">
             <Play className="w-2 h-2 text-white fill-white" />
             <span className="text-[5px] font-bold text-white">REEL</span>
          </div>
       </div>

       <div className="mt-auto p-4 relative space-y-3">
          <div className="bg-black/60 backdrop-blur-sm border border-white/10 p-3 rounded-lg text-center">
             <h4 className="text-[9px] font-bold text-white leading-tight">A Voice you'll Carry in your Heart Always</h4>
          </div>
          <div className="flex items-center justify-center gap-4 text-white/80">
             <div className="flex items-center gap-1">
                <Heart className="w-3 h-3 text-red-400 fill-red-400" />
                <span className="text-[8px] font-bold">18</span>
             </div>
             <div className="flex items-center gap-1">
                <MessageSquare className="w-3 h-3" />
                <span className="text-[8px] font-bold">0</span>
             </div>
          </div>
       </div>
    </div>
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
                {work.map((w, i) => <li key={i} className="flex items-center gap-2 text-left"><span className="w-1 h-1 bg-slate-300 rounded-full shrink-0"></span>{w}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Strategic Focus</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                {focusPoints.map((f, i) => <li key={i} className="flex items-center gap-2 text-left"><span className="w-1 h-1 bg-teal-400 rounded-full shrink-0"></span>{f}</li>)}
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
          <BlogMockupItem 
            title="The Technology Behind Today's Umrah Journey: A Digital Transformation Of Faith And Logistics" 
            date="Dec 03, 2025"
            bannerText="Modern Umrah Experience"
            bannerSubtext="How Technology Transforms The"
            bannerColor="#f0fdf4"
            excerpt="The Umrah journey has always been a deeply spiritual journey. Throughout the year, Makkah and Madinah take the responsibility of millions of pilgrims. Since the beginning of pilgri..."
          />
          <BlogMockupItem 
            title="The Next Big Expansion In Makkah And How It Will Shape The City's Future" 
            date="Oct 15, 2025"
            bannerText="The Next Big Expansion In Makkah"
            bannerSubtext="And How It Will Shape The City's Future"
            bannerColor="#fff7ed"
            excerpt="What is a King Salman Gate? King Salman Gate is a new urban development project announced in October 2025 by Crown Prince Muhammad Bin Salman. It's not a single gate but a gateway..."
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

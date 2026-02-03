'use client';

import { motion } from 'motion/react';
import { ExternalLink, ChevronDown, Check, ArrowRight, Shield, Lock, Eye, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import candidSeal from 'figma:asset/5a36f7b11c9d0bf970613a37a28b121b31918d77.png';
import livingWageLogo from 'figma:asset/ec17a6fe91f3b0bf97249c7bd911f4723893563c.png';

export function TrustPage() {
  const jumpLinks = [
    { label: 'Transparency', id: 'transparency' },
    { label: 'Living Wage', id: 'living-wage' },
    { label: 'What we share', id: 'public-sharing' },
    { label: 'Privacy & Data', id: 'privacy' },
    { label: 'Story Stewardship', id: 'stewardship' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight tracking-tight">
              Trust & Accountability
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mb-4">
              Trust is built in the small choices, what we share, how we listen, and how we care for people’s information and stories.
            </p>
            <p className="text-sm text-gray-400 font-medium tracking-wide uppercase mb-12">
              Last updated: February 2026
            </p>

            {/* Jump To Row */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-12 text-sm md:text-base border-t border-b border-gray-100 py-6">
              <span className="font-semibold text-gray-400 uppercase tracking-widest text-xs py-1">Jump to:</span>
              {jumpLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-[#E03694] hover:text-[#9E509F] font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Intro */}
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">What we mean by trust</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                SparkPoint exists to strengthen community well-being rooted in connection. That only works when people can count on us—especially when they share time, personal experiences, or support.
                This page explains what we make public, what we protect, and the standards we choose to hold ourselves to.
              </p>
            </div>

            {/* Trust at a Glance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Shield, text: "We do not sell personal data." },
                { icon: Heart, text: "Consent-first story practices." },
                { icon: Eye, text: "Candid Gold Seal of Transparency." },
                { icon: Check, text: "Living Wage Certified." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-gray-50/50 rounded-xl border border-gray-100">
                  <item.icon className="text-[#E03694] mb-3" size={24} />
                  <span className="text-gray-700 font-medium text-sm leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Candid Card */}
            <Card id="transparency" className="p-8 border-none shadow-sm bg-white rounded-2xl">
              <div className="mb-6">
                 <img src={candidSeal} alt="Candid Gold Seal" className="h-16 w-auto mb-6" />
                 <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Candid Gold Seal of Transparency</h2>
                 <p className="text-gray-600 mb-6 leading-relaxed">
                   We’ve earned the Gold Seal of Transparency through Candid. That seal reflects a clear standard: organizations share meaningful details—like programs, leadership, and financial documents—so supporters can understand how decisions are made and how the work is carried out.
                 </p>
                 
                 <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">What you’ll find on our profile</h3>
                 <ul className="space-y-2 mb-8">
                    {['Program focus and community work', 'Leadership and governance information', 'Financial documentation and reporting', 'Updated organizational details'].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                            <Check size={16} className="text-[#E03694] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                 </ul>

                 <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild variant="outline" className="text-sm">
                        <a href="https://app.candid.org/profile/9865154/sparkpoint--dba-sustainable-health-for-all-84-4042532" target="_blank" rel="noopener noreferrer">
                            View our Candid profile
                        </a>
                    </Button>
                    <Button asChild variant="ghost" className="text-sm text-gray-500 hover:text-[#1A1A1A]">
                        <a href="https://candid.org/claim-nonprofit-profile/how-to-earn-a-candid-seal-of-transparency/" target="_blank" rel="noopener noreferrer">
                            Learn about the Candid Seal
                        </a>
                    </Button>
                 </div>
              </div>
            </Card>

            {/* Living Wage Card */}
            <Card id="living-wage" className="p-8 border-none shadow-sm bg-white rounded-2xl">
              <div className="mb-6">
                 <img src={livingWageLogo} alt="Living Wage Certified" className="h-16 w-auto mb-6" />
                 <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Living Wage Certified</h2>
                 <p className="text-gray-600 mb-6 leading-relaxed">
                   We’re Living Wage Certified through Just Economics. Their program recognizes employers who commit to paying a wage that covers basic needs—so work can actually support a life, not just survival. Just Economics is also a WRC partner and we work closely with the group.
                 </p>
                 
                 <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Why it matters here</h3>
                 <ul className="space-y-2 mb-8">
                    {['Supports stability for staff doing community work', 'Aligns internal practices with our mission', 'Reduces pressure on families and local systems'].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                            <Check size={16} className="text-[#E03694] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                 </ul>

                 <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild variant="outline" className="text-sm">
                        <a href="https://www.justeconomicswnc.org/certified-employer/sparkpoint/" target="_blank" rel="noopener noreferrer">
                            About Living Wage Certification
                        </a>
                    </Button>
                    <Button asChild variant="ghost" className="text-sm text-gray-500 hover:text-[#1A1A1A]">
                        <a href="https://www.justeconomicswnc.org/issues/living-wage/" target="_blank" rel="noopener noreferrer">
                            What a living wage means
                        </a>
                    </Button>
                 </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Public Sharing Section - Moved ABOVE Privacy */}
      <section id="public-sharing" className="py-20 px-6 bg-gray-50/40">
        <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Eye size={24} className="text-[#E03694]" />
                </div>
                <h2 className="text-3xl font-bold text-[#1A1A1A]">What we share publicly (and why)</h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We share materials that help the community and supporters understand the work and evaluate it with context—not hype.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['Annual updates and community impact summaries', 'Program descriptions and collaboration work', 'Governance and leadership information', 'Standard nonprofit reporting (including IRS Form 990)'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                        <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                ))}
            </div>

            <div className="flex gap-4">
                <Link to="/impact">
                    <Button className="bg-[#E03694] hover:bg-[#C02674] text-white">See our Impact updates</Button>
                </Link>
                <Button variant="outline">View our IRS Form 990</Button>
            </div>
        </div>
      </section>

      {/* Privacy & Data Section */}
      <section id="privacy" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#FAFAFA] rounded-2xl p-8 md:p-12 border border-gray-100">
             <div className="flex items-center gap-3 mb-3">
                 <Shield size={28} className="text-[#1A1A1A]" />
                 <h2 className="text-3xl font-bold text-[#1A1A1A]">Privacy & Data Practices</h2>
             </div>
             <p className="text-lg text-gray-500 font-medium mb-8">We don’t treat people like “users.” We treat people like neighbors.</p>
             
             <ul className="space-y-4 mb-10">
                <li className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#E03694] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">We do not sell personal data.</span>
                </li>
                <li className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#E03694] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">We collect only what we need to respond when you reach out (name, email, message).</span>
                </li>
                <li className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#E03694] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">We use basic site analytics to improve the site (things like which pages get used).</span>
                </li>
                <li className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#E03694] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">We don’t use analytics to identify you personally.</span>
                </li>
             </ul>

             {/* Clarity Card: Storage */}
             <div className="bg-white border border-gray-200 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gray-200"></div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">How story submissions are protected</h3>
                <div className="space-y-3 text-gray-600 text-sm leading-relaxed mb-4">
                    <p>
                        Online story submissions are collected through our website platform in a secure, access-controlled environment.
                    </p>
                    <p>
                        Access is limited to staff who need it for the work.
                    </p>
                    <p>
                        Before anything is shared publicly or used for learning/research, we remove identifying details unless someone has given clear, specific permission to be named.
                    </p>
                </div>
                <a href="mailto:info@yoursparkpoint.org" className="text-xs text-gray-400 font-medium hover:text-[#E03694] transition-colors flex items-center gap-1">
                    Questions about this? Email us anytime. <ArrowRight size={12} />
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* Story Stewardship Section */}
      <section id="stewardship" className="py-20 px-6 bg-[#1A1A1A] text-white">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Story Stewardship</h2>
           <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl">
              Story is personal. We treat it that way. When people share stories through SparkPoint, we focus on consent, care, and minimizing harm.
           </p>

           <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                  <div className="h-px w-8 bg-[#FDB515] mt-3 flex-shrink-0 opacity-60" />
                  <p className="text-white/90 text-lg leading-relaxed">Story submissions are kept in a secure, access-controlled system, and access is limited to staff who need it for the work.</p>
              </div>
              <div className="flex gap-4">
                  <div className="h-px w-8 bg-[#FDB515] mt-3 flex-shrink-0 opacity-60" />
                  <p className="text-white/90 text-lg leading-relaxed">Before a story is shared publicly or used for learning/research, we remove identifying details—unless someone has clearly asked to be named.</p>
              </div>
              <div className="flex gap-4">
                  <div className="h-px w-8 bg-[#FDB515] mt-3 flex-shrink-0 opacity-60" />
                  <p className="text-white/90 text-lg leading-relaxed">We use consent in plain terms: people should understand what they’re sharing and how it may be used.</p>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
                <AccordionItem 
                    question="What is the Candid Gold Seal of Transparency?" 
                    answer="It indicates we’ve shared meaningful organizational details through Candid so supporters can better understand our work, leadership, and reporting."
                />
                <AccordionItem 
                    question="What does Living Wage Certified mean?" 
                    answer="It means we commit to paying at or above a wage designed to cover basic needs, based on standards set by Just Economics."
                />
                <AccordionItem 
                    question="Do you sell personal data?" 
                    answer="No. We do not sell personal data."
                />
                <AccordionItem 
                    question="How do you protect people’s privacy in story collection?" 
                    answer="We limit access to story submissions. Before any story is shared publicly or used for learning/research, we remove identifying details unless someone clearly asks to be named."
                />
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 border-t border-gray-100">
         <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Questions about trust, transparency, or privacy?</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                If you want to understand our practices, ask about the certifications, or clarify how stories are handled, reach out anytime.
            </p>
            
            <div className="flex flex-col items-center gap-4">
                <p className="text-lg font-medium text-[#1A1A1A]">
                    <a href="mailto:info@yoursparkpoint.org" className="hover:text-[#E03694] transition-colors">info@yoursparkpoint.org</a>
                    <span className="mx-3 text-gray-300">|</span>
                    <a href="tel:8288838050" className="hover:text-[#E03694] transition-colors">(828) 883-8050</a>
                </p>
                <Link to="/contact">
                    <Button size="lg" className="mt-4 bg-[#1A1A1A] hover:bg-[#333] text-white px-8">
                        Contact us <ArrowRight size={18} className="ml-2" />
                    </Button>
                </Link>
            </div>
         </div>
      </section>
    </div>
  );
}

function AccordionItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none"
            >
                <span className="font-bold text-lg text-[#1A1A1A]">{question}</span>
                <ChevronDown 
                    className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                />
            </button>
            <motion.div 
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                    {answer}
                </div>
            </motion.div>
        </div>
    )
}

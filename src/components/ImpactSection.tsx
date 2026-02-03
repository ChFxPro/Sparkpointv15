'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Activity, Users, TrendingUp, Target, ChevronLeft, ChevronRight, GraduationCap, Mic, Heart, Sparkles } from 'lucide-react';
import Slider from "react-slick";
import { projectId, publicAnonKey } from '../utils/supabase/info';

// Testimonials Data
const testimonials = [
  {
    quote: "Your presence on campus today was wonderful and really made a lot of students and staff smile, so we all thank you so much for your time. You made a great impact on campus.",
    author: "Marion Hawsey",
    affiliation: "BRCC Student"
  },
  {
    quote: "You made the group feel comfortable.",
    author: "GH",
    affiliation: "SparkPurpose Participant"
  },
  {
    quote: "The session exceeded our expectations!",
    author: "Alison C.",
    affiliation: "Gaia Herbs"
  },
  {
    quote: "Grounds me to remember my why so I can stay true to myself.",
    author: "GH",
    affiliation: "SparkPurpose Participant"
  },
  {
    quote: "This session got our juices flowing and opened the conversation for dialogue.",
    author: "GH",
    affiliation: "SparkPurpose Participant"
  },
  {
    quote: "Growth through understanding more about each other so that we can make informed decisions.",
    author: "GH",
    affiliation: "SparkPurpose Participant"
  },
  {
    quote: "We are a stronger team because we are better aligned, all moving in the same direction.",
    author: "GH",
    affiliation: "SparkPurpose Participant"
  },
  {
    quote: "This workshop was a reminder of how human we are… while we connect, laugh & give grace to each other.",
    author: "GH",
    affiliation: "SparkPurpose Participant"
  },
  {
    quote: "This group (SparkPoint) is one of our favorites. They put feet in motion to back up their words, all with the hope of building our community up.",
    author: "Dan Courtine",
    affiliation: "Jameson’s Joy Founder"
  },
  {
    quote: "Your dedication to enlivening community spaces for social wellness in Brevard is truly commendable and inspiring.",
    author: "Grace Champion",
    affiliation: "UNC Asheville"
  }
];

function CountUp({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// Custom Arrow Components
function CustomPrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow custom-prev`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronLeft className="w-10 h-10 text-white/60 hover:text-white transition-colors cursor-pointer" />
    </div>
  );
}

function CustomNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow custom-next`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronRight className="w-10 h-10 text-white/60 hover:text-white transition-colors cursor-pointer" />
    </div>
  );
}

import { PartnerNetworkHub } from './PartnerNetworkHub';

export function ImpactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Slick Carousel Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: true, 
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  // WRC Partner Network - 8 verified partners organized by focus area
  const partners = [
    // Top Left Quadrant: Health & Wellness (gold/violet)
    { name: 'UNC Health Pardee', focus: 'Health', color: '#FDB515', x: 25, y: 20, quadrant: 'Health & Wellness' },
    { name: 'Pisgah Health Foundation', focus: 'Wellness', color: '#9E509F', x: 15, y: 35, quadrant: 'Health & Wellness' },
    
    // Top Right Quadrant: Community Resilience (coral/pink)
    { name: 'American Red Cross', focus: 'Preparedness', color: '#F15F48', x: 75, y: 20, quadrant: 'Community Resilience' },
    { name: 'FWRD Transylvania', focus: 'Recovery', color: '#E03694', x: 85, y: 35, quadrant: 'Community Resilience' },
    
    // Bottom Left Quadrant: Equity & Access (orange/red)
    { name: 'El Centro Brevard', focus: 'Equity', color: '#F15F48', x: 15, y: 65, quadrant: 'Equity & Access' },
    { name: 'Just Economics WNC', focus: 'Economy', color: '#FDB515', x: 25, y: 80, quadrant: 'Equity & Access' },
    
    // Bottom Right Quadrant: Youth & Engagement (violet/magenta)
    { name: 'TC Strong', focus: 'Youth', color: '#9E509F', x: 75, y: 80, quadrant: 'Youth & Engagement' },
    { name: 'Hunger Coalition of Transylvania County', focus: 'Food Security', color: '#E03694', x: 85, y: 65, quadrant: 'Youth & Engagement' },
  ];

  const impactBreakdown = [
    {
      title: "Youth & Education",
      icon: GraduationCap,
      color: "#9E509F", // Purple
      stats: [
        "34+ Youth-Focused Events & Sessions",
        "~2,100 youth engagement moments",
        "6 school & college campuses served",
        "Primary partners: TC Strong, CARE"
      ]
    },
    {
      title: "Community & Adult Engagement",
      icon: Users,
      color: "#F15F48", // Coral
      stats: [
        "43+ adult/community events",
        "Community conversations, leadership talks, recovery events",
        "Coalition and partner-hosted sessions included"
      ]
    },
    {
      title: "Education, Training & Capacity Building",
      icon: Sparkles,
      color: "#FDB515", // Gold
      stats: [
        "20+ education & training sessions",
        "LEAD, SupportEd, Y2Y, workforce-aligned trainings",
        "College and community-based formats"
      ]
    },
    {
      title: "Story & Voice Infrastructure",
      icon: Mic,
      color: "#E03694", // Pink
      stats: [
        "10 story collection stops",
        "120+ verified resident interviews",
        "Countywide, multi-partner locations"
      ]
    }
  ];

  return (
    <section
      id="impact"
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
    >
      {/* Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1632580254134-94c4a73dab76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBwZW9wbGV8ZW58MXx8fHwxNzYxMDE5NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover opacity-30"
          style={{ willChange: 'transform' }}
          initial={{ y: 0 }}
          whileInView={{ y: -20 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: [0.45, 0, 0.55, 1] }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(158, 80, 159, 0.92) 0%, rgba(224, 54, 148, 0.92) 50%, rgba(253, 181, 21, 0.88) 100%)'
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* A. Hero Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white mb-12"
            style={{
              fontSize: '3.5rem',
              lineHeight: '1.2',
              letterSpacing: '-1px',
              textShadow: '0px 4px 12px rgba(0, 0, 0, 0.8), 0px 2px 6px rgba(0, 0, 0, 0.6)'
            }}
          >
            Trust built through visibility and shared success.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 1.2 }}
              className="p-8 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.92), rgba(20, 20, 20, 0.88))',
                backdropFilter: 'blur(12px)',
                border: '2px solid rgba(255, 255, 255, 0.7)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="text-white mb-2" style={{ fontSize: '4rem', fontWeight: '700', textShadow: '0 3px 8px rgba(0, 0, 0, 0.6)' }}>
                <CountUp end={7700} duration={1.5} suffix="+" />
              </div>
              <p className="text-white" style={{ fontSize: '1.25rem', textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Residents Supported
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 1.2 }}
              className="p-8 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.92), rgba(20, 20, 20, 0.88))',
                backdropFilter: 'blur(12px)',
                border: '2px solid rgba(255, 255, 255, 0.7)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="text-white mb-2" style={{ fontSize: '4rem', fontWeight: '700', textShadow: '0 3px 8px rgba(0, 0, 0, 0.6)' }}>
                <CountUp end={45} duration={1.5} suffix="+" />
              </div>
              <p className="text-white" style={{ fontSize: '1.25rem', textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Partnerships Formed
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="p-8 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.92), rgba(20, 20, 20, 0.88))',
                backdropFilter: 'blur(12px)',
                border: '2px solid rgba(255, 255, 255, 0.7)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="text-white mb-2" style={{ fontSize: '4rem', fontWeight: '700', textShadow: '0 3px 8px rgba(0, 0, 0, 0.6)' }}>
                100%
              </div>
              <p className="text-white" style={{ fontSize: '1.25rem', textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Local Volunteers
              </p>
            </motion.div>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto testimonial-slider-container">
            <style>{`
              .slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}
              .slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0}
              .slick-list:focus{outline:none}
              .slick-list.dragging{cursor:pointer;cursor:hand}
              .slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
              .slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}
              .slick-track:before,.slick-track:after{display:table;content:''}
              .slick-track:after{clear:both}
              .slick-loading .slick-track{visibility:hidden}
              .slick-slide{display:none;float:left;height:100%;min-height:1px}
              [dir='rtl'] .slick-slide{float:right}
              .slick-slide img{display:block}
              .slick-slide.slick-loading img{display:none}
              .slick-slide.dragging img{pointer-events:none}
              .slick-initialized .slick-slide{display:block}
              .slick-loading .slick-slide{visibility:hidden}
              .slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}
              .slick-arrow.slick-hidden{display:none}
              
              /* Custom Styles */
              .testimonial-slider-container .slick-dots {
                display: flex !important;
                justify-content: center;
                margin: 0;
                padding: 1rem 0;
                list-style-type: none;
              }
              .testimonial-slider-container .slick-dots li {
                margin: 0 0.25rem;
              }
              .testimonial-slider-container .slick-dots li button {
                display: block;
                width: 10px;
                height: 10px;
                padding: 0;
                border: none;
                border-radius: 100%;
                background-color: rgba(255, 255, 255, 0.25);
                text-indent: -9999px;
                cursor: pointer;
                transition: all 0.2s ease;
              }
              .testimonial-slider-container .slick-dots li.slick-active button {
                background-color: #fff;
                transform: scale(1.2);
              }

              .custom-slick-arrow {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 10;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .custom-prev { left: -60px; }
              .custom-next { right: -60px; }
            `}</style>
            
            <Slider {...sliderSettings}>
              {testimonials.map((t, i) => (
                <div key={i} className="px-16 pb-20 pt-12">
                  <div
                    className="p-12 rounded-xl relative flex flex-col items-center justify-center text-center h-full min-h-[300px]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.94), rgba(20, 20, 20, 0.90))',
                      backdropFilter: 'blur(16px)',
                      border: '2px solid rgba(255, 255, 255, 0.6)',
                      boxShadow: '0 12px 48px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div 
                      className="absolute top-6 left-6"
                      style={{
                        fontSize: '8rem',
                        lineHeight: '1',
                        color: 'white',
                        opacity: 0.2,
                        fontFamily: 'Georgia, serif',
                        fontStyle: 'italic',
                      }}
                    >
                      "
                    </div>
                    <blockquote
                      className="relative text-white mb-6 z-10"
                      style={{
                        fontSize: '1.75rem',
                        lineHeight: '1.5',
                        fontStyle: 'italic',
                        textShadow: '0 3px 8px rgba(0, 0, 0, 0.7)'
                      }}
                    >
                      {t.quote}
                    </blockquote>
                    <p className="relative text-white z-10" style={{ fontSize: '1.125rem', textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
                      <span className="font-bold">{t.author}</span>
                      <span className="opacity-75 mx-2">|</span>
                      <span className="opacity-90">{t.affiliation}</span>
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* B. Impact Overview (REPLACED SECTION) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 
              className="text-white mb-6"
              style={{
                fontSize: '3rem',
                lineHeight: '1.1',
                fontWeight: '700',
                letterSpacing: '-1px',
                textShadow: '0px 4px 12px rgba(0, 0, 0, 0.6)'
              }}
            >
              Community Impact, at County Scale
            </h2>
            <p 
              className="text-white/90"
              style={{
                fontSize: '1.25rem',
                lineHeight: '1.6',
                fontWeight: '400',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)'
              }}
            >
              In a rural county of approximately 33,000 residents, SparkPoint focuses on sustained presence, shared infrastructure, and meaningful connection across youth, families, and partners.
            </p>
          </div>

          {/* Impact At-A-Glance */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
  {[
    {
      value: 79,
      label: "Total Events & Sessions (2025)",
      note: "Includes December community-wide events and public gatherings",
    },
    {
      value: 4477,
      label: "Verified Attendance Moments",
      note: "Attendance-based count, consistent methodology (Jan–Dec)",
    },
    {
      value: 2100,
      label: "Youth Attendance (Estimated)",
      note: "School programs, VOS sessions, festivals, convocation",
      suffix: "+",
    },
    {
      value: 12,
      label: "Months of Active Programming",
      note: "January–December (full-year reporting)",
    },
  ].map((metric, index) => (
    <motion.div
      key={metric.label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 rounded-xl flex flex-col justify-between"
      style={{
        background: "linear-gradient(135deg, rgba(10, 10, 10, 0.85), rgba(30, 30, 30, 0.8))",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
      }}
    >
      <div className="mb-4">
        <div
          className="text-white mb-2"
          style={{ fontSize: "3.5rem", fontWeight: "700", lineHeight: 1 }}
        >
          <CountUp
            end={metric.value}
            duration={1.5}
            suffix={metric.suffix || ""}
          />
        </div>
        <h3 className="text-white/90 font-bold text-lg leading-tight mb-2">
          {metric.label}
        </h3>
      </div>
      <p className="text-white/60 text-sm leading-snug">
        {metric.note}
      </p>
    </motion.div>
  ))}
</div>


          {/* Impact Breakdown Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {impactBreakdown.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-8 rounded-xl h-full"
                style={{
                  background: 'rgba(10, 10, 10, 0.6)',
                  borderTop: `4px solid ${group.color}`,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="p-3 rounded-full"
                    style={{ backgroundColor: `${group.color}20`, color: group.color }}
                  >
                    <group.icon size={28} />
                  </div>
                  <h3 className="text-white text-xl font-bold">{group.title}</h3>
                </div>
                <ul className="space-y-4">
                  {group.stats.map((stat, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/90">
                      <span 
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" 
                        style={{ backgroundColor: group.color }} 
                      />
                      <span className="text-base leading-relaxed">{stat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Anchor Moments */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-2xl mb-8 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(224, 54, 148, 0.15), rgba(253, 181, 21, 0.05))',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center justify-between">
              <div className="flex-1 w-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#FDB515]/20 text-[#FDB515] border border-[#FDB515]/30">
                    <Target size={28} />
                  </div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold">Anchor Moments & Momentum</h3>
                </div>
                
                <div className="bg-black/20 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                  <p className="text-[#FDB515] font-bold text-sm uppercase tracking-wider mb-3">
                    3 Major Anchor Events
                  </p>
                  <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-y-2 gap-x-6">
                    {['Juneteenth Festival', 'Helene: One Year of Healing', 'TCS Convocation'].map((event, i) => (
                      <li key={i} className="text-white text-lg font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FDB515]" />
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-row gap-8 sm:gap-12 w-full lg:w-auto mt-4 lg:mt-0 pl-0 lg:pl-10 lg:border-l border-white/10">
                <div className="flex-1 sm:flex-none min-w-[140px]">
                  <div className="text-5xl font-bold text-white mb-2 tracking-tight" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
                    700
                  </div>
                  <div className="text-white/70 font-medium text-sm uppercase tracking-wide leading-snug">
                    Largest Event<br/>Attendance
                  </div>
                </div>
                <div className="flex-1 sm:flex-none min-w-[140px]">
                  <div className="text-5xl font-bold text-white mb-2 tracking-tight" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
                    ~13.5%
                  </div>
                  <div className="text-white/70 font-medium text-sm uppercase tracking-wide leading-snug">
                    Nov. Share of<br/>Annual Reach
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Note */}
          <div className="text-center">
            <p className="text-white/50 text-sm">
              Data shown reflects verified totals through November 2025. December 2025 activity will be added as final reporting is completed.
            </p>
          </div>
        </motion.div>

        {/* F. "Why It Matters" Panel (Retained) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-white text-center mb-12" style={{ fontSize: '2.5rem', fontWeight: '700', textShadow: '0 3px 8px rgba(0, 0, 0, 0.6)' }}>
            Why It Matters
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.90), rgba(224, 54, 148, 0.35), rgba(158, 80, 159, 0.35))',
                border: '2px solid rgba(224, 54, 148, 0.6)',
                boxShadow: '0 6px 24px rgba(224, 54, 148, 0.3)',
              }}
            >
              <div style={{ fontSize: '4rem', fontWeight: '700', color: 'white', textShadow: '0 3px 8px rgba(0, 0, 0, 0.7)' }}>51%</div>
              <p style={{ color: 'white', fontSize: '1.25rem', marginTop: '8px', textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>
                of residents report loneliness
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-8 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.90), rgba(253, 181, 21, 0.35), rgba(241, 95, 72, 0.35))',
                border: '2px solid rgba(253, 181, 21, 0.6)',
                boxShadow: '0 6px 24px rgba(253, 181, 21, 0.3)',
              }}
            >
              <div style={{ fontSize: '4rem', fontWeight: '700', color: 'white', textShadow: '0 3px 8px rgba(0, 0, 0, 0.7)' }}>37%</div>
              <p style={{ color: 'white', fontSize: '1.25rem', marginTop: '8px', textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>
                report anxiety or trauma
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-8"
            style={{ color: 'white', fontSize: '1.125rem', lineHeight: '1.7', textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)' }}
          >
            These challenges make our work more critical than ever. Through connection, 
            preparedness, and wellness programs, SparkPoint is building a resilient, 
            supported community where no one faces hardship alone.
          </motion.p>
        </motion.div>

        {/* E. Partner Network Map (Moved) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <PartnerNetworkHub />
        </motion.div>

        {/* G. Community Built in Transylvania County (Refined) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-20"
        >
          {/* Headline moved outside container */}
          <div className="text-center mb-16 px-6">
            <h3 className="text-white mb-6 leading-tight" style={{ fontSize: '3rem', fontWeight: '700', letterSpacing: '-0.02em', textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' }}>
              Community Built in Transylvania County
            </h3>
            <p className="max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.25rem', lineHeight: '1.6', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
              Shaped through lived experience, sustained partnership, and an ongoing cycle of Listen • Learn • Lead.
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto mb-16 px-6">
            {/* Diagram Container - Softened & Open */}
            <div className="relative rounded-[40px] overflow-visible" style={{
              background: 'linear-gradient(135deg, rgba(20, 20, 30, 0.92), rgba(40, 20, 35, 0.88))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 0 120px rgba(224, 54, 148, 0.1)', // Ambient glow instead of hard shadow
              minHeight: '480px'
            }}>
              
              {/* Diagram Area */}
              <div className="absolute inset-0 flex items-center justify-center p-8 overflow-hidden rounded-[40px]">
                <div className="relative w-full h-full max-w-[500px] max-h-[500px] flex items-center justify-center scale-95 md:scale-100">
                  
                  {/* 1. Outer Ring: Regional Awareness (Subtle & Open) */}
                  {/* Allowed to feel expansive but contained within the view for clarity */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none animate-[spin_120s_linear_infinite]" style={{ opacity: 0.15 }}>
                    <circle cx="50%" cy="50%" r="45%" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="6 8" strokeLinecap="round" className="origin-center" />
                  </svg>
                  
                  <div className="absolute top-[5%] left-1/2 -translate-x-1/2 text-center w-full px-4">
                    <div className="text-white/50 text-[10px] tracking-[0.25em] uppercase font-semibold mb-1">Western North Carolina</div>
                    <div className="text-white/30 text-[9px] tracking-wide">Shared learning & regional interest</div>
                  </div>

                  {/* 2. Inner Ring: Feedback Loop */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Ring Gradient */}
                    <svg className="w-full h-full animate-[spin_60s_linear_infinite]">
                      <defs>
                        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FDB515" stopOpacity="0.3" />
                          <stop offset="50%" stopColor="#E03694" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#9E509F" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                      <circle cx="50%" cy="50%" r="30%" fill="none" stroke="url(#ringGradient)" strokeWidth="1" />
                    </svg>
                    
                    {/* Nodes: Listen, Learn, Lead - Static relative to container to maintain readability */}
                    {[
                      { label: "Listen", angle: -90 },
                      { label: "Learn", angle: 30 },
                      { label: "Lead", angle: 150 }
                    ].map((node) => {
                      const radius = 30; // percent
                      const x = 50 + radius * Math.cos(node.angle * Math.PI / 180);
                      const y = 50 + radius * Math.sin(node.angle * Math.PI / 180);
                      
                      return (
                        <div 
                          key={node.label}
                          className="absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10"
                          style={{ left: `${x}%`, top: `${y}%` }}
                        >
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FDB515] shadow-[0_0_20px_rgba(253,181,21,0.5)] mb-3" />
                          <span className="text-white font-bold tracking-[0.15em] text-xs uppercase opacity-90">{node.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* 3. Central Hub - Grounded & Clear */}
                  <div 
                    className="relative z-20 w-44 h-44 rounded-full flex flex-col items-center justify-center text-center px-4 shadow-[0_0_60px_rgba(224,54,148,0.15)]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(241, 95, 72, 0.9), rgba(224, 54, 148, 0.9))',
                      border: '1px solid rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    <div className="text-white font-bold text-lg leading-tight mb-1.5 drop-shadow-md">
                      Transylvania<br/>County
                    </div>
                    <div className="text-white/80 text-[10px] font-semibold tracking-wider uppercase border-t border-white/20 pt-1.5 mt-0.5">
                      Our Home Community
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Copy Block - Reflective & Clear */}
            <div className="max-w-2xl mx-auto text-center px-4">
              <p className="text-white/80 text-lg leading-[1.8] mb-8 font-light">
                SparkPoint was built in Transylvania County—by listening deeply, learning alongside our partners, and leading only when the community asked us to.
              </p>
              <p className="text-white/80 text-lg leading-[1.8] mb-10 font-light">
                That feedback loop continues to shape our work today. As neighboring communities express interest, we remain focused on stewardship—sharing what we’ve learned while honoring the relationships and values that made this work possible.
              </p>
              <p className="text-white/50 text-base italic tracking-wide">
                Growth follows trust, not the other way around.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

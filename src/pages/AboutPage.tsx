'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import heroImage from 'figma:asset/0c7f5d615ddb7365345eec2cd86bf98d3be9ca22.png';
import teamHeroImage from 'figma:asset/c88e8fd418fa5de2d8271a01eff7835b8bc45301.png';
import jennyHeadshot from 'figma:asset/ba6e37fd64adba4fcc3b0218dcd2bb192cb23802.png';
import blueZonesImage from 'figma:asset/006b84f90bae2616433d7bda85278d8264e4e33c.png';
import sparkPointLaunchImage from 'figma:asset/ce8cfb7a67e4c9db354c1d7021333b647621f8d5.png';
import launchSocialImage from 'figma:asset/08d6097996fec1db647eccd1343a8e7ebf420b7b.png';
import launchGroupImage from 'figma:asset/bef0024c7f7aa5cba807241e9b1a543393d1afd6.png';
import studentVoiceImage from 'figma:asset/20c2a905251c86d5a4f9333b83199204b6928c7d.png';
import responseTeamImage from 'figma:asset/56901f1a91f140dcee14c66f977ed2a0bd9120ed.png';
import responseFlyerImage from 'figma:asset/238168330742171cebb538968793e34afcac231e.png';
import wellnessWorkshopImage from 'figma:asset/6188b8c6c445b647b8e4e9b74a1010513b0cc4b6.png';
import youthGroupImage from 'figma:asset/5b0388c9542f078a58f8b6be96161b02480d4b7d.png';
import regionalAuditoriumImage from 'figma:asset/ce0a67a45092b4432ec7c00f4a17cb5a77e95a50.png';
import seniorGatheringImage from 'figma:asset/2f54cc163c056ac592d9e429a8920f74d0a98f56.png';
import interviewFilmingImage from 'figma:asset/183c96a680c45035b0835db81082bdb93af69f97.png';
import sparkPointCommonsImage from 'figma:asset/63f606372ec6e500e9a7547d300fb9f0d31dae7e.png';
import mediaStudioImage from 'figma:asset/7c67e828e47be75e27ecc6de02db283be5ae7589.png';
import { Button } from '../components/ui/button';
import { TimelineGallery } from '../components/TimelineGallery';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "../components/ui/dialog";

const blueZonesPhase = {
  phaseLabel: 'Foundational Phase',
  years: '2019–2022',
  title: 'Blue Zones Project – Brevard',
  subtitle: 'Foundational community health initiative',
  achievements: [
    'Community listening and engagement',
    'Cross-sector partnerships formed',
    'Brevard certified as a Blue Zones Community'
  ],
  legalStatus: '501(c)(3) status established (2020)'
};

const timeline = [
  { 
    year: '2023', 
    milestone: 'SparkPoint Founded', 
    description: 'A countywide nonprofit built to support connection and collaboration',
    achievements: ['Founding board assembled', 'Initial partnerships formed', 'Organizational launch'],
    gallery: [
      { src: sparkPointLaunchImage, caption: 'Launch celebration', rotation: -3 },
      { src: launchSocialImage, caption: 'Community gathering', rotation: 2 },
      { src: launchGroupImage, caption: 'Team assembly', rotation: -1.5 },
      { src: studentVoiceImage, caption: 'Voice of Students', rotation: 3 }
    ]
  },
  { 
    year: '2024', 
    milestone: 'Community Response & Coordination', 
    description: 'Supporting countywide response during Hurricane Helene',
    achievements: ['Emergency response activated', '1,200+ families assisted', 'Multi-agency coordination'],
    gallery: [
      { src: responseTeamImage, caption: 'Response Volunteers', rotation: -2 },
      { src: responseFlyerImage, caption: 'Psychological First Aid', rotation: 3 }
    ]
  },
  { 
    year: '2024', 
    milestone: 'Wellness & Connection Programs Expand', 
    description: 'Building access to support beyond Brevard',
    achievements: ['6 new wellness programs', '450+ participants', 'Peer support networks'],
    gallery: [
      { src: wellnessWorkshopImage, caption: 'Board Workshop', rotation: 2 },
      { src: youthGroupImage, caption: 'Youth Connection', rotation: -2.5 }
    ]
  },
  { 
    year: '2025', 
    milestone: 'Regional Collaboration Grows', 
    description: 'Extending SparkPoint’s connective role across Western North Carolina',
    achievements: ['3 new counties reached', '15 additional partners', 'Capacity doubled'],
    gallery: [
      { src: regionalAuditoriumImage, caption: 'Regional Summit', rotation: -3 },
      { src: seniorGatheringImage, caption: 'Community Connection', rotation: 2 },
      { src: interviewFilmingImage, caption: 'Sharing Stories', rotation: 1.5 }
    ]
  },
  {
    year: '2026',
    milestone: 'Looking Ahead',
    description: 'Deepening impact and sustainable growth',
    achievements: ['Continued regional expansion', 'New strategic initiatives', 'Building long-term resilience'],
    gallery: [
      { src: sparkPointCommonsImage, caption: 'SparkPoint Commons', rotation: -2 },
      { src: mediaStudioImage, caption: 'Media Studio', rotation: 2.5 }
    ]
  }
];

const staff = [
  {
    name: 'Sarah Hankey',
    role: 'Founder / Executive Director',
    headshot: 'https://images.squarespace-cdn.com/content/v1/5e13af05d72fc96230cefbd1/1683137861973-A5A3928M7R6VONTEXI9S/Board-%26-Staff-Headshots_0010_Layer-1.png?format=2500w',
    bio: `Sarah's experience in leading Brevard through the Blue Zones Certification, coupled with her background in integrative health and education, fuels her passion for driving a sustainable program that advances community well-being. She strongly believes that good health is a fundamental right that should be within reach of everyone.\n\nAs the Director of SparkPoint, Sarah places great importance on building connections, promoting resilience, and leading with empathy. She is profoundly honored and proud to be spearheading another impactful initiative throughout Transylvania County and the broader Western North Carolina region.\n\nIn addition to her role with SparkPoint, Sarah serves on the boards of the Mary C. Jenkins Community and Cultural Center, Pisgah Forest Rotary Club, and the Transylvania County Family and Consumer Science Advisory Board. Sarah was honored to be awarded the 2023 Duke Energy Citizenship & Service Award presented by the Transylvania Chamber of Commerce.`
  },
  {
    name: 'Charlotte Shackleford, EdD',
    role: 'Co-Founder / Program Manager',
    headshot: 'https://images.squarespace-cdn.com/content/v1/5e13af05d72fc96230cefbd1/1683137862456-Y8S4IV15TVHPI1RMTY00/Board-%26-Staff-Headshots_0009_Layer-2.png?format=2500w',
    bio: `Charlotte is a longtime educator and community builder with more than 20 years of experience helping people grow and thrive. She recently completed her Doctorate in Educational Leadership from Western Carolina University, building on her background in psychology, sociology, and elementary education.\n\nCharlotte believes that strong communities are rooted in meaningful relationships. She’s passionate about promoting wellness in all areas of life — emotional, mental, and physical — and works to integrate those values into everything she does.\n\nAt SparkPoint, Charlotte brings her heart for people and her love of learning to support community well-being across Transylvania County.\n\nWhen she’s not working, you can find her outside exploring nature, spending time with friends and family, or enjoying the quiet beauty of western North Carolina.`
  },
  {
    name: 'Jeff Bannister',
    role: 'Marketing Manager',
    headshot: 'https://images.squarespace-cdn.com/content/v1/5e13af05d72fc96230cefbd1/1683137683793-B12P6RLTPAZLWDBFEQ5J/Board-%26-Staff-Headshots_0007_Layer-0.png?format=2500w',
    bio: `Jeff Bannister, formerly Vice President of the Board of Directors at SparkPoint, now brings his extensive experience in community engagement and leadership to his role overseeing Marketing and Operations. His commitment to inclusivity and cultural competence, developed during his tenure on the Board, is now pivotal in enhancing SparkPoint's outreach and operational effectiveness.\n\nJeff's unique ability to connect with diverse groups and his passion for community empowerment are key assets in driving the organization's mission forward, ensuring a significant and positive impact in the communities served.`
  },
  {
    name: 'Maggie Grimm',
    role: 'Outreach Coordinator',
    headshot: 'https://images.squarespace-cdn.com/content/v1/5e13af05d72fc96230cefbd1/acd36e55-224e-404f-8b72-5b7e0e8bcd5c/IMG_0983.jpg?format=2500w',
    bio: `As Outreach Coordinator, Maggie helps strengthen SparkPoint’s connections across the community by building partnerships, coordinating volunteers, and ensuring residents know about available programs and resources.\n\nWith a passion for community engagement and a heart for service, Maggie brings energy and creativity to the team. From planning outreach events to supporting communications and collaborations with local organizations, they play a key role in helping SparkPoint continue to grow its impact and reach.\n\nWhen Maggie isn’t at work, you can find her exploring nature with her husband and two young kids.`
  },
  {
    name: 'Jenny Carlberg',
    role: 'Development Manager',
    headshot: jennyHeadshot, 
    initials: 'JC',
    bio: `Jenny Carlberg serves as SparkPoint’s Development Manager, where she leads fundraising strategy and donor engagement to support the organization’s long-term sustainability. She joined SparkPoint in November 2025 and brings more than a decade of nonprofit experience, with a focus on fundraising and grant development.\n\nJenny holds a Master of Public Administration with a concentration in nonprofit management from the University of North Carolina at Chapel Hill. Throughout her career, he has helped organizations raise millions of dollars in support of programs that strengthen community well-being and resilience.\n\nShe is especially drawn to SparkPoint’s mission of fostering community wellness through connection and is grateful to serve the Western North Carolina community she now calls home.\n\nOutside of work, Jenny enjoys hiking, camping, and traveling with her family, practicing yoga, reading, writing, and baking for friends and neighbors. She is a mom to two young daughters and a nine-year-old dog adopted from Uganda, and after living in several countries across three continents, she is deeply happy to be putting down roots in the North Carolina mountains.`,
    imageClassName: 'scale-[1.5] origin-[35%_5%] group-hover:scale-[1.6]',
  },
  {
    name: 'Olivia Hankey',
    role: 'Content & Communications Intern',
    headshot: 'https://images.squarespace-cdn.com/content/v1/5e13af05d72fc96230cefbd1/72201284-5042-4368-b9b8-b64f85120734/Olivia-265.JPG?format=2500w',
    bio: `As a dedicated and involved high school senior aspiring to pursue a career in the communications field, Olivia is gaining real-world experience through her work with SparkPoint. She supports community outreach, reporting, and story-collecting efforts across programs and events.\n\nThis internship provides Olivia with hands-on learning opportunities and insight into the world of communications and reporting. She hopes to leverage this experience to shape a future career that meaningfully contributes to community well-being and professional growth.`
  },
  {
    name: 'Sophia DePasquale',
    role: 'Intern',
    headshot: '',
    initials: 'SD',
    bio: `Sophia joins the SparkPoint team as an intern, supporting our community programs and initiatives. Full bio coming soon.`
  }
];

const boardMembers = [
  // ... (keeping existing data if possible, but for brevity in this full file write, I will include them to ensure nothing breaks)
  {
    name: 'Dr. Ora Wells',
    role: 'Board President',
    headshot: 'https://images.squarespace-cdn.com/content/v1/5e13af05d72fc96230cefbd1/1683137865474-WN2HWBQ0ZIVNFP7T8KI1/Board-%26-Staff-Headshots_0008_Layer-4.png?format=2500w',
    bio: `As a newly retired pediatrician, Dr. Ora Wells continues his lifetime passion for wellness. He served Hendersonville Pediatrics for over 30 years, specializing in ADHD, allergies, and asthma management. Dr. Wells began his medical career at the University of North Carolina at Chapel Hill and earned his medical degree from the Medical College of Georgia. He taught pediatrics as an assistant clinical professor at Charlotte Memorial Hospital, where he also completed his residency.\n\nAfter teaching, Dr. Wells joined Hendersonville Pediatrics, where he practiced for decades. He regularly volunteers on medical trips to Haiti through Consider Haiti and is an avid supporter of Young Life. He enjoys traveling with his wife to visit their children and grandchildren, playing the bagpipes, and riding his motorcycle — and may be spotted around Brevard in his 1954 Chevy pickup.`
  },
  // ... including other board members for completeness
  {
    name: 'Mayor Maureen Copelof',
    role: 'Board Member',
    headshot: 'https://images.squarespace-cdn.com/content/v1/5e13af05d72fc96230cefbd1/1683137871267-IMP43TETWH19G6OPFXRI/Board-%26-Staff-Headshots_0005_Layer-8.png?format=2500w',
    bio: `Maureen Copelof is a retired U.S. Navy Captain with 30 years of active-duty service. After retiring, she returned to Brevard and was elected to Brevard City Council in 2017. In November 2021, she was elected Mayor of the City of Brevard.\n\nShe holds master’s degrees in both Business Administration and Political Science. An avid gardener, Maureen is deeply committed to supporting the community’s built environment and its connection to overall well-being. She served on the Brevard Blue Zones Project Steering Committee and is proud to continue that work through SparkPoint.`
  },
  {
    name: 'Dr. Morris Jenkins',
    role: 'Board Member',
    headshot: 'https://images.squarespace-cdn.com/content/v1/5e13af05d72fc96230cefbd1/1683137871937-GQL44NF4PU74CDV3MNJ4/Board-%26-Staff-Headshots_0004_Layer-7.png?format=2500w',
    bio: `Dr. Morris Jenkins earned his medical degree from Emory University and completed his residency at the Medical University of South Carolina. He practiced family medicine and hospice medicine for 41 years in Georgia, New Zealand, and Brevard, North Carolina.\n\nHe served on the medical staff of Transylvania Regional Hospital from 2009 to 2023 and retired from hospice and palliative medicine with Care Partners Transylvania in 2021. Morris and his wife Molly have lived in Brevard since 2009 and enjoy time with their two children and five grandchildren. His interests include bicycling, hiking, music (upright bass), and duplicate bridge.`
  },
  {
    name: 'Marsha Farrell',
    role: 'Board Member',
    headshot: 'https://images.squarespace-cdn.com/content/v1/5e13af05d72fc96230cefbd1/1683137690559-PK42JA6MCAPS1J0ZF3G0/Board-%26-Staff-Headshots_0003_Layer-9.png?format=2500w',
    bio: `Marsha Farrell is a retired nurse with a 44-year career, including two decades in hospice and palliative care. Her work taught her the importance of presence, purpose, and quality of life.\n\nAfter moving to Brevard in 2021, Marsha became active with the Blue Zones Project as a Purpose Workshop facilitator and Potluck Moai speaker. She is passionate about helping people advocate for their quality of life and discover what matters most. Marsha and her husband Jay are deeply involved in volunteer work throughout the community.`
  },
  {
    name: 'Saundra Lemaster',
    role: 'Board Treasurer',
    headshot: 'https://images.squarespace-cdn.com/content/v1/5e13af05d72fc96230cefbd1/1683137539381-ZH1FUEAIWBGP01Y22K72/Board-%26-Staff-Headshots_0006_Layer-6.png?format=2500w',
    bio: `Saundra Lemaster began her career in media sales after earning a degree in communications from the University of Kentucky. She has worked across newspaper, television, and radio in both sales and leadership roles.\n\nShe has supported numerous nonprofit initiatives, including pediatric cancer fundraising through Duke University and substance abuse recovery programs in Western North Carolina. Growing up in rural Kentucky shaped her compassion for underserved communities, a value she brings to her work with SparkPoint.`
  },
  {
    name: 'Carolyn Foster',
    role: 'Board Member',
    headshot: 'https://images.squarespace-cdn.com/content/v1/5e13af05d72fc96230cefbd1/1683137880538-JFXZXOR0UNEATVIFGR1P/Board-%26-Staff-Headshots_0000_Carolyn_to_Fix.png?format=2500w',
    bio: `Carolyn Foster was born, raised, and educated in New Brunswick, Canada, and began her nursing career there before becoming a traveling nurse in the United States. She settled in Brevard in 1992 and worked at Transylvania Regional Hospital for nearly 29 years.\n\nAfter retiring in 2021, Carolyn has focused on civic involvement and community wellbeing. She enjoys hiking, kayaking, traveling, and spending time with family.`
  },
  {
    name: 'Dan Mehdi',
    role: 'Board Member',
    headshot: 'https://images.squarespace-cdn.com/content/v1/5e13af05d72fc96230cefbd1/3d8e7db0-fe8e-406f-96a3-f41f3405dcfc/20240311_115122.jpg?format=2500w',
    bio: `Dan Mehdi retired from the Drug Enforcement Administration after a 21-year career, including leadership roles in national training and mentorship. A former Marine Infantry Officer, Dan carries a lifelong commitment to service and resilience.\n\nHe leads Post-Traumatic Growth workshops, serves as a peer trauma counselor, and speaks nationally and internationally about trauma recovery and leadership. SparkPoint aligns closely with his personal purpose of helping others thrive.`
  },
  {
    name: 'Shannon Meadows Allison',
    role: 'Board Member',
    headshot: 'https://images.squarespace-cdn.com/content/v1/5e13af05d72fc96230cefbd1/3ffbd890-f8a9-4f82-9fea-4ce17024fc33/image0.jpeg?format=1500w',
    bio: `Shannon Meadows Allison lives on her family��s multi-generational cattle farm in Transylvania County. Her lived experience with Ehlers-Danlos syndrome inspired her to pursue nursing and community health work.\n\nShe is a registered nurse, a Women’s Health Nurse Practitioner student at Duke University, and the founder of Meadows Collaborative Health & Consulting. Shannon is passionate about advancing health literacy, resilience, and healthcare access in rural communities.`
  }
];

const HEADLINE_WORDS = ['Listen', 'Learn', 'Lead', 'Built'];

export function AboutPage() {
  const [wordIndex, setWordIndex] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Only cycle if we haven't reached the last word ("Built")
    if (wordIndex < HEADLINE_WORDS.length - 1) {
      const intervalDuration = 1400; // Hold for ~1.4s
      const timer = setTimeout(() => {
        setWordIndex(prev => prev + 1);
      }, intervalDuration);
      return () => clearTimeout(timer);
    }
  }, [wordIndex]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative">
      {/* 1. Hero Section — Documentary Presence with Connection Anchor */}
      <section className="relative h-screen min-h-[650px] flex items-end justify-center overflow-hidden pb-4 md:pb-8 bg-[#0a0a0a]">
        {/* Full-width image */}
        <div className="absolute inset-x-0 bottom-0 top-12 z-0">
          <img
            src={heroImage}
            alt="Community members in conversation"
            className="w-full h-full object-cover object-top"
          />
          {/* Readability Layer: Strong Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ y: textY, opacity }}
            className="flex flex-col items-center justify-center"
          >
            {/* Headline Group */}
            <h1
              className="mb-2 md:mb-6 flex flex-col items-center gap-0 leading-[1.05] tracking-tight"
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 800,
                color: '#F8FAFC', // Near-white (Slate-50)
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.5)', // Deep soft shadow for readability
              }}
            >
              {/* Line 1: Animated Cycle */}
              <div className="h-[1.2em] relative flex items-center justify-center w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={HEADLINE_WORDS[wordIndex]}
                    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                    transition={{ 
                      duration: 0.45,
                      ease: "easeOut" 
                    }}
                    className="block"
                  >
                    {HEADLINE_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Line 2: Static */}
              <span className="block">Through</span>

              {/* Line 3: Static */}
              <span className="block">Connection</span>
            </h1>

            {/* Supporting Text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md antialiased"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
            >
              Strengthening Transylvania County by connecting people, partners, and care.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Story — Narrative First (Dark Theme) */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
        {/* Subtle Texture: Topographic/Organic Lines (Extremely Low Contrast) */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full" viewBox="0 0 1440 1200" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-200 100 C 400 300, 800 0, 1640 200" stroke="white" strokeWidth="1.5" />
            <path d="M-200 300 C 300 500, 900 200, 1640 400" stroke="white" strokeWidth="1.5" />
            <path d="M-200 500 C 500 700, 1000 400, 1640 600" stroke="white" strokeWidth="1.5" />
            <path d="M-200 700 C 600 900, 1100 600, 1640 800" stroke="white" strokeWidth="1.5" />
            <path d="M-200 900 C 700 1100, 1200 800, 1640 1000" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>
        
        {/* Existing Blobs for Depth (retained but tweaked) */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1a1a1a] rounded-full blur-[150px] pointer-events-none opacity-40 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#151515] rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Header as Chapter Marker */}
            <div className="mb-20 text-center md:text-left">
              <span className="block text-sm font-bold tracking-[0.2em] text-[#E03694] uppercase mb-4 opacity-90">
                Chapter One
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Our Story
              </h2>
              <div className="h-0.5 w-16 bg-gradient-to-r from-[#E03694] to-transparent mt-6 mx-auto md:mx-0 opacity-70" />
            </div>

            <div className="prose prose-lg prose-invert max-w-none text-gray-300 font-serif">
              
              {/* Part 1: Roots & Context */}
              <div className="space-y-10 mb-16">
                <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium">
                  SparkPoint grew out of several years of community-led work focused on improving health, connection, and resilience across Transylvania County.
                </p>

                <p className="leading-loose text-gray-300/90">
                  That work took shape during the Blue Zones Project in Brevard, a place-based initiative that brought residents,
                  organizations, and local leaders together to better understand what supports long-term well-being.
                  Through this process, Brevard became a certified Blue Zones Community, recognized for aligning local systems,
                  environments, and partnerships around healthier ways of living.
                </p>
              </div>

              {/* Part 2: The Insight */}
              <div className="relative pl-6 md:pl-10 border-l border-white/10 space-y-10 mb-16">
                <p className="leading-loose text-gray-300/90">
                  As the work deepened, a broader pattern became clear.
                  While the Blue Zones Project was centered in Brevard, the challenges — and the desire for connection —
                  extended well beyond city limits. Across Transylvania County, people were already doing meaningful work
                  in nonprofits, healthcare, education, local government, and neighborhoods, but often without clear pathways
                  to collaborate or share resources.
                </p>

                <p className="leading-loose text-gray-300/90">
                  Listening sessions across the county surfaced a consistent insight.
                  What was missing wasn’t effort or care.
                  It was a shared structure that could support connection, elevate community voice,
                  and make collaboration possible across organizations, sectors, and geography.
                </p>
              </div>

              {/* Part 3: Formation & Future */}
              <div className="space-y-10">
                <p className="leading-loose text-gray-300/90">
                  The Blue Zones work helped clarify what was possible, but it also revealed a limitation.
                  Sustaining and expanding that momentum required moving beyond a single town or time-bound initiative.
                  It called for an inclusive, countywide approach — one designed to grow with the community
                  and adapt as new needs and opportunities emerged.
                </p>

                <p className="leading-loose text-gray-300/90">
                  Founded in 2023, SparkPoint was shaped by community partners, educators, healthcare providers,
                  nonprofit leaders, and residents who wanted a better way to work together.
                  Our role was never to replace existing efforts, but to support alignment,
                  strengthen relationships, and help shared work extend across Transylvania County
                  and into the broader Western North Carolina region.
                </p>

                <div className="bg-white/5 p-8 rounded-lg border border-white/5 backdrop-blur-sm my-12">
                  <p className="leading-loose text-white mb-6">
                    When Hurricane Helene tested Transylvania County in 2024, those relationships mattered.
                    SparkPoint became a coordination point — helping information, volunteers, and resources move more clearly
                    through the community. The response wasn’t improvised.
                    It reflected years of listening, learning, and trust-building already in motion.
                  </p>
                </div>

                <p className="text-xl text-white/90 leading-relaxed font-medium pt-4">
                  Today, SparkPoint continues to operate through the same feedback loop that shaped its formation:
                  <br />
                  <span className="inline-block mt-4 text-[#E03694] font-bold tracking-wide">Listen. Learn. Lead.</span>
                  <br />
                  <span className="inline-block mt-4 text-gray-300 text-lg">
                    By fostering connection, supporting collaboration across sectors,
                    and keeping community voice at the center,
                    SparkPoint works to strengthen well-being, trust, and collective capacity —
                    not only in moments of crisis, but over time.
                  </span>
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Timeline / Milestones — Proof Without Noise */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#FAFAFA] via-[#F3F3F1] to-[#FAFAFA] border-t border-gray-100/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Milestones of Impact</h3>
            <p className="text-gray-500 text-lg font-medium">A history of accumulated presence.</p>
          </motion.div>

          <div className="relative ml-4 md:ml-12">
            
            {/* Foundational Phase: Blue Zones Project (2019–2022) */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-16 pl-6 border-l-[6px] border-[#1c4696]/20 bg-[#1c4696]/[0.02] rounded-r-xl overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="p-6 md:p-8 flex-1">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                       <span className="text-[#1c4696] font-bold text-sm uppercase tracking-widest bg-[#1c4696]/10 px-3 py-1 rounded-full self-start">
                         {blueZonesPhase.phaseLabel}
                       </span>
                       <span className="text-[#1c4696] font-bold text-xl tracking-tight">
                         {blueZonesPhase.years}
                       </span>
                    </div>
                    
                    <div>
                      <h4 className="text-2xl font-bold text-[#1c4696] tracking-tight mb-2">
                        {blueZonesPhase.title}
                      </h4>
                      <p className="text-[#1c4696]/80 text-lg font-medium mb-4">
                        {blueZonesPhase.subtitle}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                        {blueZonesPhase.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2 text-[#1c4696]/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#7ab1e2]" />
                            <span className="text-sm font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* 501(c)(3) Status - Metadata, not a timeline node */}
                      <div className="mt-6 pt-4 border-t border-[#1c4696]/10 flex items-center gap-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c4696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        <span className="text-[#1c4696] font-semibold text-sm">
                          {blueZonesPhase.legalStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Blue Zones Image */}
                <div className="lg:w-80 relative min-h-[240px] lg:min-h-0 bg-[#1c4696]/5">
                   <div className="absolute inset-0 mix-blend-multiply bg-[#1c4696]/10 z-10" />
                   <img 
                     src={blueZonesImage} 
                     alt="Blue Zones Project ribbon cutting" 
                     className="absolute inset-0 w-full h-full object-cover filter contrast-[0.95] sepia-[0.1]"
                   />
                </div>
              </div>
            </motion.div>

            {/* SparkPoint Timeline Spine (Starts 2023) */}
            <div className="relative">
              {/* Timeline Spine: Structural Base */}
              <div className="absolute left-0 top-2 bottom-8 w-1.5 bg-gray-200/40 rounded-full" />

              <div className="space-y-6 relative">
                {timeline.map((item, index) => {
                  const isKeyInflection = item.year === '2023';
                  const isExpanded = expandedIndex === index;
                  const isAnotherExpanded = expandedIndex !== null && !isExpanded;
                  
                  // Placeholder contexts
                  let imageContext = null;
                  // @ts-ignore
                  const realImage = item.image;
                  // @ts-ignore
                  const realImageCaption = item.imageCaption;
                  // @ts-ignore
                  const gallery = item.gallery;

                  if (item.year === '2023') imageContext = "Founding board meeting";
                  if (item.year === '2024' && item.milestone.includes("Response")) imageContext = "Emergency supply distribution";
                  if (item.year === '2024' && item.milestone.includes("Wellness")) imageContext = "Program participant gathering";
                  
                  return (
                    <motion.div
                      key={index}
                      layout="position"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className={`
                        relative pl-10 md:pl-16 pr-4 py-4 rounded-xl group cursor-pointer transition-all duration-500 ease-out
                        ${isExpanded ? 'bg-white shadow-xl shadow-gray-200/40 my-8 z-10 scale-[1.02]' : 'hover:bg-white/60 hover:shadow-sm my-0 z-0'}
                        ${isAnotherExpanded ? 'opacity-40 grayscale-[50%]' : 'opacity-100'}
                      `}
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setExpandedIndex(isExpanded ? null : index);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isExpanded}
                    >
                      {/* Active Spine Segment - Responsive */}
                      <div className={`
                        absolute left-0 top-0 bottom-0 w-1.5 rounded-full transition-all duration-500
                        ${isExpanded ? 'bg-[#E03694] shadow-[0_0_12px_rgba(224,54,148,0.4)]' : 'bg-transparent group-hover:bg-[#E03694]/20'}
                      `} />

                      {/* Timeline Dot - Interactive Anchor */}
                      <div className={`
                        absolute -left-[5px] top-8 rounded-full border-[3px] z-20 transition-all duration-500 ease-out
                        ${isExpanded 
                          ? 'w-4 h-4 bg-[#E03694] border-white ring-4 ring-[#E03694]/20 scale-125' 
                          : 'w-3.5 h-3.5 bg-white border-gray-300 group-hover:border-[#E03694] group-hover:scale-125 group-hover:ring-4 group-hover:ring-[#E03694]/10'}
                      `} />
                      
                      <div className="flex flex-col gap-2">
                        {/* Header Row */}
                        <div className="flex items-start justify-between w-full">
                           <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                            <span className={`
                              ${isKeyInflection ? 'text-[#E03694] text-2xl font-bold' : 'text-[#E03694] text-xl font-bold'}
                              md:w-32 flex-shrink-0 tracking-tight transition-colors duration-300 group-hover:text-[#E03694]
                            `}>
                              {item.year}
                            </span>
                            <h4 className={`
                              ${isKeyInflection ? 'text-2xl font-bold text-gray-900' : 'text-xl font-bold text-gray-900'}
                              tracking-tight transition-colors duration-300 group-hover:text-black
                            `}>
                              {item.milestone}
                            </h4>
                          </div>
                          
                          {/* Interaction Cue Icon */}
                          <div className={`
                            flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ml-4
                            ${isExpanded ? 'bg-[#E03694]/10 text-[#E03694] rotate-45' : 'bg-gray-100 text-gray-400 group-hover:bg-[#E03694]/5 group-hover:text-[#E03694]'}
                          `}>
                             <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300">
                               <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                             </svg>
                          </div>
                        </div>

                        {/* Expanded Content Area */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                              className="overflow-hidden relative"
                            >
                              <div className="flex flex-col lg:flex-row gap-8 pb-4 pt-6 border-t border-gray-100 mt-4">
                                {/* Content Column */}
                                <div className="flex-1 space-y-6">
                                  <p className={`
                                    text-gray-600 text-lg leading-relaxed
                                    ${isKeyInflection ? 'text-gray-800 font-medium' : ''}
                                  `}>
                                    {item.description}
                                  </p>
                                  
                                  <div className="grid grid-cols-1 gap-3">
                                    {item.achievements.map((achievement, i) => (
                                      <motion.div 
                                        key={i} 
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.15 + (i * 0.05) }}
                                        className="flex items-start gap-3 text-[15px] text-gray-500 leading-relaxed"
                                      >
                                        <div className={`
                                          mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 
                                          ${isKeyInflection ? 'bg-[#E03694]/60' : 'bg-gray-300'}
                                        `} />
                                        <span className="text-gray-700">{achievement}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>

                                {/* Image Column: Real Image, Gallery, or Placeholder */}
                                {(realImage || imageContext || gallery) && (
                                  <motion.div 
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                    className="w-full lg:w-72 flex-shrink-0 relative"
                                  >
                                    {gallery ? (
                                      <TimelineGallery images={gallery} />
                                    ) : realImage ? (
                                      <div className="aspect-[4/3] w-full rounded-lg relative overflow-hidden group/image shadow-md">
                                         <img 
                                           src={realImage} 
                                           alt={item.milestone} 
                                           className="w-full h-full object-cover transform transition-transform duration-700 group-hover/image:scale-105"
                                         />
                                         {realImageCaption && (
                                           <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
                                              <span className="text-xs text-white/90 font-medium">
                                                {realImageCaption}
                                              </span>
                                           </div>
                                         )}
                                      </div>
                                    ) : (
                                      <div className="aspect-[4/3] w-full rounded-lg bg-gray-50 border border-gray-100 relative overflow-hidden group/image shadow-inner">
                                        {/* Architectural Texture */}
                                        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                                        
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                                          <div className="w-10 h-10 rounded-full bg-gray-100 mb-3 flex items-center justify-center border border-gray-200 text-gray-300">
                                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                               <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                               <circle cx="8.5" cy="8.5" r="1.5" />
                                               <polyline points="21 15 16 10 5 21" />
                                             </svg>
                                          </div>
                                          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-1">
                                            Asset Slot
                                          </span>
                                          <span className="text-xs text-gray-400 italic font-serif">
                                            "{imageContext}"
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </motion.div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        {/* Collapsed Hint */}
                        {!isExpanded && (
                           <motion.div
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             className="flex items-center gap-2 mt-1"
                           >
                              <span className="text-sm font-medium text-gray-400 group-hover:text-[#E03694] transition-colors">
                                View details
                              </span>
                           </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Staff — Human Before Role */}
      <section className="relative bg-white border-t border-gray-100">
        {/* Team Hero Image Container */}
        <div className="relative h-[75vh] min-h-[600px] w-full overflow-hidden">
          <img 
            src={teamHeroImage} 
            alt="The SparkPoint Team" 
            className="w-full h-full object-cover object-top"
          />
          {/* Readability Layer: Soft Gradient Overlay (Black to Transparent) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          {/* Text Overlay - Positioned for connection */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-10">
             <div className="max-w-6xl mx-auto text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">Our Team</h2>
                  <p className="text-white/95 text-xl max-w-2xl leading-relaxed font-medium drop-shadow-md">
                    The people behind the work — showing up with care, consistency, and community commitment.
                  </p>
                </motion.div>
             </div>
          </div>
        </div>

        {/* Staff Grid - Natural continuation */}
        <div className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {staff.map((member) => (
                <div key={member.name} className="group">
                  <div className="aspect-[3/4] mb-6 overflow-hidden rounded-lg bg-gray-100 relative">
                    {member.headshot ? (
                      <img 
                        src={member.headshot} 
                        alt={member.name}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out filter grayscale-[20%] group-hover:grayscale-0 ${
                          // @ts-ignore
                          member.imageClassName || 'group-hover:scale-105'
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300 font-bold text-4xl">
                        {member.initials}
                      </div>
                    )}
                    {/* Subtle Bio Overlay on Hover - Non-intrusive */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black bg-transparent">
                            Read Bio
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-sm border-none">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-[#1A1A1A] mb-2">{member.name}</DialogTitle>
                            <DialogDescription className="text-[#E03694] font-medium mb-4">{member.role}</DialogDescription>
                          </DialogHeader>
                          <div className="whitespace-pre-wrap text-gray-600 leading-relaxed max-h-[60vh] overflow-y-auto pr-4">
                            {member.bio}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#E03694] font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Board — Governance & Guidance */}
      <section className="py-32 px-6 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="mb-20 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Board</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Stewards of the mission, bringing decades of experience in health, leadership, and community service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-square mb-6 overflow-hidden rounded-full bg-gray-200 relative">
                   <img 
                      src={member.headshot} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 filter grayscale-[100%] group-hover:grayscale-0"
                    />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <Dialog>
                        <DialogTrigger asChild>
                           <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                             Bio
                           </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-xl bg-white/95 backdrop-blur-sm border-none">
                           <DialogHeader>
                            <DialogTitle className="text-xl font-bold text-black mb-1">{member.name}</DialogTitle>
                            <DialogDescription className="text-[#E03694]">{member.role}</DialogDescription>
                           </DialogHeader>
                           <div className="whitespace-pre-wrap text-gray-600 text-sm leading-relaxed mt-4">
                             {member.bio}
                           </div>
                        </DialogContent>
                       </Dialog>
                     </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center">{member.name}</h3>
                <p className="text-gray-500 text-sm text-center font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

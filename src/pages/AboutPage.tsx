'use client';

import { Helmet } from 'react-helmet-async';
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
  {
    name: 'Dr. Ora Wells',
    role: 'Board President',
    headshot: 'https://images.squarespace-cdn.com/content/v1/5e13af05d72fc96230cefbd1/1683137865474-WN2HWBQ0ZIVNFP7T8KI1/Board-%26-Staff-Headshots_0008_Layer-4.png?format=2500w',
    bio: `As a newly retired pediatrician, Dr. Ora Wells continues his lifetime passion for wellness. He served Hendersonville Pediatrics for over 30 years, specializing in ADHD, allergies, and asthma management. Dr. Wells began his medical career at the University of North Carolina at Chapel Hill and earned his medical degree from the Medical College of Georgia. He taught pediatrics as an assistant clinical professor at Charlotte Memorial Hospital, where he also completed his residency.\n\nAfter teaching, Dr. Wells joined Hendersonville Pediatrics, where he practiced for decades. He regularly volunteers on medical trips to Haiti through Consider Haiti and is an avid supporter of Young Life. He enjoys traveling with his wife to visit their children and grandchildren, playing the bagpipes, and riding his motorcycle — and may be spotted around Brevard in his 1954 Chevy pickup.`
  },
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
    bio: `Shannon Meadows Allison lives on her familys multi-generational cattle farm in Transylvania County. Her lived experience with Ehlers-Danlos syndrome inspired her to pursue nursing and community health work.\n\nShe is a registered nurse, a Women’s Health Nurse Practitioner student at Duke University, and the founder of Meadows Collaborative Health & Consulting. Shannon is passionate about advancing health literacy, resilience, and healthcare access in rural communities.`
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
      <Helmet>
        <title>About SparkPoint | Built Through Connection</title>
        <meta name="description" content="SparkPoint’s mission, history, and community-centered approach." />
        <link rel="canonical" href="https://chfxpro.github.io/sparkpointv15/about" />
      </Helmet>

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
      <section className="py-20 md:py-32 px-6 relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
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
                    and empowering community voice, we are building a foundation where every person can thrive.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Timeline / Milestones */}
      <section className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#E03694] font-bold tracking-wider text-sm uppercase mb-3 block">Our Journey</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Milestones of Impact</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              From the foundational Blue Zones work to our current regional role, every step has been guided by community need.
            </p>
          </motion.div>

          {/* Phase 0: Blue Zones (Distinct Style) */}
          <div className="mb-20 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 rounded-2xl overflow-hidden border border-white/10"
            >
              {/* Blue Background with Image Blend */}
              <div className="absolute inset-0 z-0">
                <img src={blueZonesImage} alt="" className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay" />
                <div className="absolute inset-0 bg-[#0057B8] opacity-10 mix-blend-color" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a]/90 to-[#1a1a1a]/40" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 text-[#E03694] font-bold text-xl md:text-2xl pt-1">
                  {blueZonesPhase.years}
                </div>
                <div className="flex-grow">
                  <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-white mb-4 tracking-wide">
                    {blueZonesPhase.phaseLabel}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{blueZonesPhase.title}</h3>
                  <p className="text-gray-400 mb-6 italic">{blueZonesPhase.subtitle}</p>
                  
                  <ul className="space-y-3">
                    {blueZonesPhase.achievements.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E03694]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-white/10 text-sm text-gray-500">
                    {blueZonesPhase.legalStatus}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* SparkPoint Timeline */}
          <div className="max-w-5xl mx-auto space-y-32">
             {timeline.map((item, index) => (
               <div key={item.year} className="relative">
                 {/* Connector Line (except for last item) */}
                 {index < timeline.length - 1 && (
                   <div className="absolute left-1/2 top-20 bottom-[-128px] w-px bg-gradient-to-b from-[#E03694] via-[#E03694]/30 to-transparent md:block hidden" />
                 )}
                 
                 <motion.div
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8 }}
                   className="text-center mb-12"
                 >
                   <div className="inline-block text-6xl md:text-8xl font-bold text-white/5 tracking-tighter mb-4 relative z-10">
                     {item.year}
                   </div>
                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 mt-[-1rem] relative z-20">
                     {item.milestone}
                   </h3>
                   <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                     {item.description}
                   </p>
                   
                   <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                      {item.achievements.map((ach, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm md:text-base text-[#E03694] font-medium bg-[#E03694]/5 px-4 py-2 rounded-full border border-[#E03694]/20">
                          {ach}
                        </div>
                      ))}
                   </div>
                 </motion.div>

                 {/* Photo Gallery for this Year */}
                 <div className="relative z-10">
                    <TimelineGallery images={item.gallery} />
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. Team & Board — Human Scale */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Guided by a dedicated staff and a board of local leaders committed to the long-term well-being of our community.
            </p>
          </motion.div>

          {/* Staff Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {staff.map((member, index) => (
              <Dialog key={member.name}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-xl bg-gray-800">
                      {member.headshot ? (
                        <img
                          src={member.headshot}
                          alt={member.name}
                          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 ${member.imageClassName || ''}`}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a] text-white/20 text-4xl font-bold">
                          {member.initials}
                        </div>
                      )}
                      
                      {/* Name Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-[#E03694] text-sm font-medium tracking-wide uppercase">{member.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="bg-[#1a1a1a] border-white/10 text-white max-w-2xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
                      <div className="w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden flex-shrink-0 bg-gray-800">
                         {member.headshot ? (
                           <img src={member.headshot} alt={member.name} className={`w-full h-full object-cover ${member.imageClassName || ''}`} />
                         ) : (
                           <div className="w-full h-full flex items-center justify-center text-white/20 text-2xl font-bold">{member.initials}</div>
                         )}
                      </div>
                      <div>
                        <DialogTitle className="text-3xl font-bold mb-2">{member.name}</DialogTitle>
                        <DialogDescription className="text-[#E03694] font-medium uppercase tracking-wide text-sm mb-6">
                          {member.role}
                        </DialogDescription>
                        <div className="prose prose-invert prose-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
                          {member.bio}
                        </div>
                      </div>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Board Grid - Compact */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-10 border-l-4 border-[#E03694] pl-4">Board of Directors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {boardMembers.map((member, index) => (
                <Dialog key={member.name}>
                  <DialogTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="p-6 bg-white/5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer group border border-white/5"
                    >
                      <h4 className="font-bold text-white mb-1 group-hover:text-[#E03694] transition-colors">{member.name}</h4>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="bg-[#1a1a1a] border-white/10 text-white max-w-xl">
                    <DialogHeader>
                       <div className="flex gap-6 items-start">
                         <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-gray-800">
                           <img src={member.headshot} alt={member.name} className="w-full h-full object-cover" />
                         </div>
                         <div>
                           <DialogTitle className="text-xl font-bold mb-1">{member.name}</DialogTitle>
                           <p className="text-[#E03694] text-sm font-medium mb-4">{member.role}</p>
                           <DialogDescription className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                             {member.bio}
                           </DialogDescription>
                         </div>
                       </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Hero Image — "Us" */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={teamHeroImage} 
            alt="SparkPoint Team and Community" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </div>
      </section>
    </div>
  );
}

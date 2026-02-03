"use client";

import React, { useId } from "react";
import { motion } from "framer-motion";
import svgPaths from "./svg-utthy0pj0e";
import starHubImage from "figma:asset/046ca85659860578eeeab6a45f52700c54c519a3.png";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, type: "spring", stiffness: 100 },
  }),
};

const slideIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const floatAnim = {
  y: [0, -5, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

function Group() {
  return (
    <div className="absolute inset-[17.59%_31.77%]" data-name="Group">
      <div className="absolute inset-[-0.04%] pointer-events-none">
        <motion.svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 596 596"
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <g id="Group">
            <motion.path
              variants={fadeIn}
              custom={0}
              d={svgPaths.p3f1ee080}
              id="Vector"
              opacity="0.1"
              stroke="var(--stroke-0, white)"
              strokeDasharray="3.4 6.8"
              strokeWidth="0.425"
            />
            <motion.path
              variants={fadeIn}
              custom={0}
              d={svgPaths.pfda9400}
              id="Vector_2"
              opacity="0.1"
              stroke="var(--stroke-0, white)"
              strokeDasharray="3.4 6.8"
              strokeWidth="0.425"
            />
          </g>
        </motion.svg>
      </div>
    </div>
  );
}

function ListenBlob() {
  const gradId = useId();

  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 459 163">
      <path
        d={svgPaths.p1b646100}
        fill={`url(#${gradId})`}
        opacity="0.9"
        stroke="var(--stroke-0, white)"
        strokeOpacity="0.5"
        strokeWidth="1.7"
      />
      <defs>
        <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="1.19751" x2="10103.1" y1="0.85" y2="28616.1">
          <stop stopColor="#FDB515" stopOpacity="0.8" />
          <stop offset="1" stopColor="#FFCD6A" stopOpacity="0.95" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function LearnBlob() {
  const gradId = useId();

  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263 397">
      <path
        d={svgPaths.p2d651800}
        fill={`url(#${gradId})`}
        opacity="0.9"
        stroke="var(--stroke-0, white)"
        strokeOpacity="0.5"
        strokeWidth="1.7"
      />
      <defs>
        <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="0.85" x2="36299.7" y1="1.08946" y2="23965.4">
          <stop stopColor="#9E509F" stopOpacity="0.8" />
          <stop offset="1" stopColor="#B47AB5" stopOpacity="0.95" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function LeadBlob() {
  const gradId = useId();

  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263 397">
      <path
        d={svgPaths.p1fc71b80}
        fill={`url(#${gradId})`}
        opacity="0.9"
        stroke="var(--stroke-0, white)"
        strokeOpacity="0.5"
        strokeWidth="1.7"
      />
      <defs>
        <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="0.85" x2="36299.7" y1="1.08946" y2="23965.4">
          <stop stopColor="#F15F48" stopOpacity="0.8" />
          <stop offset="1" stopColor="#F58877" stopOpacity="0.95" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-1/2 left-[36.04%] right-[36.04%] top-[17.59%]" data-name="Group">
      {/* Listen connector line */}
      <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[27.78%] pointer-events-none" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.64px] right-[-0.64px] top-0">
          <motion.svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 204">
            <motion.path
              d="M0.6375 204V0"
              id="Vector"
              opacity="0.3"
              stroke="var(--stroke-0, white)"
              strokeDasharray="0.85 0.85"
              strokeWidth="1.275"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.svg>
        </div>
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="absolute inset-[17.59%_36.04%_64.88%_36.04%] cursor-pointer z-10 pointer-events-auto"
            data-name="Vector"
            initial="hidden"
            animate="visible"
            custom={0.6}
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-[-0.53%_-0.26%_-0.74%_-0.26%]">
              <ListenBlob />
            </div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="bg-[#FDB515] text-black border-none z-50">
          <p>Deep listening to community stories and needs.</p>
        </TooltipContent>
      </Tooltip>

      {/* hit-area outline (invisible) */}
      <div className="absolute inset-[17.59%_36.04%_64.88%_36.04%] pointer-events-none" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p329f5780} id="Vector" opacity="0" stroke="var(--stroke-0, #FDB515)" strokeWidth="1.7" />
        </svg>
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="absolute inset-[18.52%_47.03%_77.02%_47.03%] flex items-center justify-center cursor-pointer z-20 pointer-events-auto"
            initial="hidden"
            animate="visible"
            custom={0.7}
            variants={scaleIn}
            whileHover={{ scale: 1.1 }}
          >
            <motion.p
              animate={floatAnim}
              className="font-['Manrope',sans-serif] font-normal leading-[normal] not-italic text-[34px] text-center text-nowrap text-white whitespace-pre"
            >
              Listen
            </motion.p>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="bg-[#FDB515] text-black border-none z-50">
          <p>Deep listening to community stories and needs.</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[18.08%] left-[31.77%] right-1/2 top-[38.92%]" data-name="Group">
      {/* Learn connector */}
      <div className="absolute bottom-[38.89%] left-[39.17%] right-1/2 top-1/2 pointer-events-none" data-name="Vector">
        <div className="absolute inset-[-0.54%_-0.18%]">
          <motion.svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178 104">
            <motion.path
              d={svgPaths.p2c02dc00}
              id="Vector"
              opacity="0.3"
              stroke="var(--stroke-0, white)"
              strokeDasharray="0.85 0.85"
              strokeWidth="1.275"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.9 }}
            />
          </motion.svg>
        </div>
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="absolute inset-[38.92%_52.26%_18.08%_31.77%] cursor-pointer z-10 pointer-events-auto"
            data-name="Vector"
            initial="hidden"
            animate="visible"
            custom={0.7}
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-[-0.28%_-0.38%_-0.25%_-0.33%]">
              <LearnBlob />
            </div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="bg-[#9E509F] text-white border-none z-50">
          <p>Analyzing data and understanding systemic challenges.</p>
        </TooltipContent>
      </Tooltip>

      <div className="absolute inset-[38.92%_52.26%_18.08%_31.77%] pointer-events-none" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p14280c00} id="Vector" opacity="0" stroke="var(--stroke-0, #9E509F)" strokeWidth="1.7" />
        </svg>
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="absolute flex inset-[59.21%_61.77%_29.97%_33.27%] items-center justify-center z-20 cursor-pointer pointer-events-auto"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            custom={0.8}
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex-none h-[41px] rotate-[240deg] w-[91px]">
              <motion.p
                animate={floatAnim}
                className="font-['Manrope',sans-serif] font-normal leading-[normal] not-italic relative text-[34px] text-center text-nowrap text-white whitespace-pre"
              >
                Learn
              </motion.p>
            </div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="bg-[#9E509F] text-white border-none z-50">
          <p>Analyzing data and understanding systemic challenges.</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[18.08%] left-1/2 right-[31.77%] top-[38.92%]" data-name="Group">
      {/* Lead connector */}
      <div className="absolute bottom-[38.89%] left-1/2 right-[39.17%] top-1/2 pointer-events-none" data-name="Vector">
        <div className="absolute inset-[-0.54%_-0.18%]">
          <motion.svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178 104">
            <motion.path
              d={svgPaths.paac8b80}
              id="Vector"
              opacity="0.3"
              stroke="var(--stroke-0, white)"
              strokeDasharray="0.85 0.85"
              strokeWidth="1.275"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1, delay: 1.0 }}
            />
          </motion.svg>
        </div>
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="absolute inset-[38.92%_31.77%_18.08%_52.26%] cursor-pointer z-10 pointer-events-auto"
            data-name="Vector"
            initial="hidden"
            animate="visible"
            custom={0.8}
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-[-0.28%_-0.33%_-0.25%_-0.38%]">
              <LeadBlob />
            </div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="bg-[#F15F48] text-white border-none z-50">
          <p>Empowering local leadership and community-driven solutions.</p>
        </TooltipContent>
      </Tooltip>

      <div className="absolute inset-[38.92%_31.77%_18.08%_52.26%] pointer-events-none" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p14280c00} id="Vector" opacity="0" stroke="var(--stroke-0, #F15F48)" strokeWidth="1.7" />
        </svg>
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="absolute flex inset-[59.21%_33.27%_29.97%_61.77%] items-center justify-center z-20 cursor-pointer pointer-events-auto"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            custom={0.9}
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex-none h-[41px] rotate-[120deg] w-[91px]">
              <motion.p
                animate={floatAnim}
                className="font-['Manrope',sans-serif] font-normal leading-[normal] not-italic relative text-[34px] text-center text-nowrap text-white whitespace-pre"
              >
                Lead
              </motion.p>
            </div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="bg-[#F15F48] text-white border-none z-50">
          <p>Empowering local leadership and community-driven solutions.</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[-1.26%_37.17%_88.36%_55.72%]" data-name="Group">
      <motion.div
        className="absolute inset-[-1.26%_42.37%_90.13%_55.72%]"
        data-name="Vector"
        initial="hidden"
        animate="visible"
        custom={1.2}
        variants={scaleIn}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <circle cx="9.50002" cy="9.49998" fill="var(--fill-0, white)" id="Vector" opacity="0.3" r="9.49998" />
        </svg>
      </motion.div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[-1.26%_37.17%_88.36%_55.72%]" data-name="Group">
      <Group4 />
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="absolute inset-[9.57%_37.17%_88.36%_55.72%] flex items-center justify-center cursor-pointer z-10 pointer-events-auto"
            initial="hidden"
            animate="visible"
            custom={1.3}
            variants={slideIn}
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-['Manrope',sans-serif] font-normal leading-[normal] not-italic text-[15.3px] text-center text-nowrap text-white whitespace-pre">
              Story Collection
            </p>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="bg-[#FDB515] text-black border-none z-50">
          <p>Gathering voices from the ground up.</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[-1.26%_54.57%_88.36%_36%]" data-name="Group">
      <motion.div
        className="absolute inset-[-1.26%_56.79%_90.13%_36%]"
        data-name="Vector"
        initial="hidden"
        animate="visible"
        custom={1.2}
        variants={scaleIn}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <circle cx="9.50002" cy="9.49998" fill="var(--fill-0, white)" id="Vector" opacity="0.3" r="9.49998" />
        </svg>
      </motion.div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[-1.26%_54.57%_88.36%_36%]" data-name="Group">
      <Group7 />
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="absolute inset-[9.57%_54.57%_88.36%_36%] flex items-center justify-center cursor-pointer z-10 pointer-events-auto"
            initial="hidden"
            animate="visible"
            custom={1.3}
            variants={slideIn}
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-['Manrope',sans-serif] font-normal leading-[normal] not-italic text-[15.3px] text-center text-nowrap text-white whitespace-pre">
              Community Research
            </p>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="bg-[#FDB515] text-black border-none z-50">
          <p>Participatory action research.</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[5.05%_35.9%]" data-name="Group">
      <div className="absolute inset-[5.05%_35.9%] pointer-events-none" data-name="Vector">
        <div className="absolute inset-[-0.67%]">
          <motion.svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 472">
            <motion.path
              d={svgPaths.p18e9ef80}
              id="Vector"
              opacity="0.05"
              stroke="var(--stroke-0, white)"
              strokeDasharray="3.4 6.8"
              strokeWidth="0.425"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.05 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </motion.svg>
        </div>
      </div>
      <Group5 />
      <Group8 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[68.26%_17.26%]" data-name="Group">
      <div className="absolute inset-[68.26%_17.26%] pointer-events-none" data-name="Vector">
        <div className="absolute inset-[-0.67%]">
          <motion.svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1072 1072">
            <motion.path
              d={svgPaths.p2e7a8480}
              id="Vector"
              opacity="0.05"
              stroke="var(--stroke-0, white)"
              strokeDasharray="3.4 6.8"
              strokeWidth="0.425"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.05 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </motion.svg>
        </div>
      </div>
      <Group10 />
      <Group11 />
      <Group12 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[91.83%_32.72%_4.29%_60.09%]" data-name="Group">
      <motion.div
        className="absolute inset-[91.83%_34.47%_6.14%] left-[60.09%]"
        data-name="Vector"
        initial="hidden"
        animate="visible"
        custom={1.4}
        variants={scaleIn}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <circle cx="9.50002" cy="9.49998" fill="var(--fill-0, white)" id="Vector" opacity="0.3" r="9.49998" />
        </svg>
      </motion.div>
    </div>
  );
}

function Group11() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          className="absolute inset-[94.26%_60.86%_1.82%_29.83%] flex flex-col items-center justify-center cursor-pointer z-10 pointer-events-auto"
          data-name="Group"
          initial="hidden"
          animate="visible"
          custom={1.5}
          variants={slideIn}
          whileHover={{ scale: 1.05 }}
        >
          <p className="font-['Manrope',sans-serif] font-normal leading-[normal] not-italic text-[15.3px] text-center text-nowrap text-white whitespace-pre">
            {`Leadership &`}
          </p>
          <p className="font-['Manrope',sans-serif] font-normal leading-[normal] not-italic text-[15.3px] text-center text-nowrap text-white whitespace-pre">
            Well-Being Programs
          </p>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent className="bg-[#9E509F] text-white border-none z-50">
        <p>Building capacity for change.</p>
      </TooltipContent>
    </Tooltip>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[77.67%_34.47%_17.75%_60.09%]" data-name="Group">
      <div className="absolute bottom-[17.75%] left-[60.09%] right-[34.47%] top-[77.67%] pointer-events-none" data-name="Vector">
        <div className="absolute inset-[-0.54%_-0.77%]">
          <motion.svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 120">
            <motion.path
              d={svgPaths.p1d276a80}
              id="Vector"
              opacity="0.6"
              stroke="var(--stroke-0, #9E509F)"
              strokeDasharray="0.85 0.85"
              strokeLinecap="round"
              strokeWidth="1.275"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </motion.svg>
        </div>
      </div>
      <Group10 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[68.26%_17.26%]" data-name="Group">
      <div className="absolute inset-[68.26%_17.26%] pointer-events-none" data-name="Vector">
        <div className="absolute inset-[-0.67%]">
          <motion.svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1072 1072">
            <motion.path
              d={svgPaths.p2e7a8480}
              id="Vector"
              opacity="0.05"
              stroke="var(--stroke-0, white)"
              strokeDasharray="3.4 6.8"
              strokeWidth="0.425"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.05 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </motion.svg>
        </div>
      </div>
      <Group14 />
      <Group15 />
      <Group16 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[57.87%_21.04%_38.21%_71.77%]" data-name="Group">
      <motion.div
        className="absolute inset-[57.87%_22.79%_40.06%_71.77%]"
        data-name="Vector"
        initial="hidden"
        animate="visible"
        custom={1.4}
        variants={scaleIn}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <circle cx="9.50002" cy="9.49998" fill="var(--fill-0, white)" id="Vector" opacity="0.3" r="9.49998" />
        </svg>
      </motion.div>
    </div>
  );
}

function Group15() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          className="absolute inset-[59.01%_72.11%_37.07%_18.15%] flex flex-col items-center justify-center cursor-pointer z-10 pointer-events-auto"
          data-name="Group"
          initial="hidden"
          animate="visible"
          custom={1.5}
          variants={slideIn}
          whileHover={{ scale: 1.05 }}
        >
          <p className="font-['Manrope',sans-serif] font-normal leading-[normal] not-italic text-[15.3px] text-center text-nowrap text-white whitespace-pre">
            Community Education
          </p>
          <p className="font-['Manrope',sans-serif] font-normal leading-[normal] not-italic text-[15.3px] text-center text-nowrap text-white whitespace-pre">
            {`& Training`}
          </p>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent className="bg-[#9E509F] text-white border-none z-50">
        <p>Skill building and knowledge sharing.</p>
      </TooltipContent>
    </Tooltip>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[53.95%_34.47%_38.92%_60.09%]" data-name="Group">
      <div className="absolute bottom-[38.92%] left-[60.09%] right-[34.47%] top-[53.95%] pointer-events-none" data-name="Vector">
        <div className="absolute inset-[-0.54%_-0.77%]">
          <motion.svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 120">
            <motion.path
              d={svgPaths.pa23b8280}
              id="Vector"
              opacity="0.6"
              stroke="var(--stroke-0, #9E509F)"
              strokeDasharray="0.85 0.85"
              strokeLinecap="round"
              strokeWidth="1.275"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </motion.svg>
        </div>
      </div>
      <Group14 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[68.26%_17.26%]" data-name="Group">
      <div className="absolute inset-[68.26%_17.26%] pointer-events-none" data-name="Vector">
        <div className="absolute inset-[-0.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1072 1072">
            <path d={svgPaths.p2e7a8480} id="Vector" opacity="0.05" stroke="var(--stroke-0, white)" strokeDasharray="3.4 6.8" strokeWidth="0.425" />
          </svg>
        </div>
      </div>
      <Group18 />
      <Group19 />
      <Group20 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[57.87%_71.77%_38.21%_21.04%]" data-name="Group">
      <motion.div
        className="absolute inset-[57.87%_71.77%_40.06%_22.79%]"
        data-name="Vector"
        initial="hidden"
        animate="visible"
        custom={1.4}
        variants={scaleIn}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <circle cx="9.50002" cy="9.49998" fill="var(--fill-0, white)" id="Vector" opacity="0.3" r="9.49998" />
        </svg>
      </motion.div>
    </div>
  );
}

function Group19() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          className="absolute inset-[59.01%_18.15%_37.07%_72.11%] flex flex-col items-center justify-center cursor-pointer z-10 pointer-events-auto"
          data-name="Group"
          initial="hidden"
          animate="visible"
          custom={1.5}
          variants={slideIn}
          whileHover={{ scale: 1.05 }}
        >
          <p className="font-['Manrope',sans-serif] font-normal leading-[normal] not-italic text-[15.3px] text-center text-nowrap text-white whitespace-pre">
            Collaborative
          </p>
          <p className="font-['Manrope',sans-serif] font-normal leading-[normal] not-italic text-[15.3px] text-center text-nowrap text-white whitespace-pre">
            Initiatives
          </p>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent className="bg-[#F15F48] text-white border-none z-50">
        <p>Working together for greater impact.</p>
      </TooltipContent>
    </Tooltip>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[53.95%_60.09%_38.92%_34.47%]" data-name="Group">
      <div className="absolute bottom-[38.92%] left-[34.47%] right-[60.09%] top-[53.95%] pointer-events-none" data-name="Vector">
        <div className="absolute inset-[-0.54%_-0.77%]">
          <motion.svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 120">
            <motion.path
              d={svgPaths.p1fbc9680}
              id="Vector"
              opacity="0.6"
              stroke="var(--stroke-0, #F15F48)"
              strokeDasharray="0.85 0.85"
              strokeLinecap="round"
              strokeWidth="1.275"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </motion.svg>
        </div>
      </div>
      <Group18 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[68.26%_17.26%]" data-name="Group">
      <div className="absolute inset-[68.26%_17.26%] pointer-events-none" data-name="Vector">
        <div className="absolute inset-[-0.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1072 1072">
            <path d={svgPaths.p2e7a8480} id="Vector" opacity="0.05" stroke="var(--stroke-0, white)" strokeDasharray="3.4 6.8" strokeWidth="0.425" />
          </svg>
        </div>
      </div>
      <Group22 />
      <Group23 />
      <Group24 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[91.83%_60.09%_4.29%_32.72%]" data-name="Group">
      <motion.div
        className="absolute inset-[91.83%_60.09%_6.14%_34.47%]"
        data-name="Vector"
        initial="hidden"
        animate="visible"
        custom={1.4}
        variants={scaleIn}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <circle cx="9.50002" cy="9.49998" fill="var(--fill-0, white)" id="Vector" opacity="0.3" r="9.49998" />
        </svg>
      </motion.div>
    </div>
  );
}

function Group23() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          className="absolute inset-[94.26%_29.83%_1.82%_60.86%] flex flex-col items-center justify-center cursor-pointer z-10 pointer-events-auto"
          data-name="Group"
          initial="hidden"
          animate="visible"
          custom={1.5}
          variants={slideIn}
          whileHover={{ scale: 1.05 }}
        >
          <p className="font-['Manrope',sans-serif] font-normal leading-[normal] not-italic text-[15.3px] text-center text-nowrap text-white whitespace-pre">
            Community Resilience
          </p>
          <p className="font-['Manrope',sans-serif] font-normal leading-[normal] not-italic text-[15.3px] text-center text-nowrap text-white whitespace-pre">
            Projects
          </p>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent className="bg-[#F15F48] text-white border-none z-50">
        <p>Strengthening social safety nets.</p>
      </TooltipContent>
    </Tooltip>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[77.67%_60.09%_17.75%_34.47%]" data-name="Group">
      <div className="absolute bottom-[17.75%] left-[34.47%] right-[60.09%] top-[77.67%] pointer-events-none" data-name="Vector">
        <div className="absolute inset-[-0.54%_-0.77%]">
          <motion.svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 120">
            <motion.path
              d={svgPaths.pe5d9cb80}
              id="Vector"
              opacity="0.6"
              stroke="var(--stroke-0, #F15F48)"
              strokeDasharray="0.85 0.85"
              strokeLinecap="round"
              strokeWidth="1.275"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </motion.svg>
        </div>
      </div>
      <Group22 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[76.55%_29.56%_1.82%_60.46%]" data-name="Group">
      <div className="absolute inset-[76.55%_34.47%_10.56%_60.46%] pointer-events-none" data-name="Vector">
        <div className="absolute inset-[-0.54%_-0.77%]">
          <motion.svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 120">
            <motion.path
              d={svgPaths.p1d276a80}
              id="Vector"
              opacity="0.6"
              stroke="var(--stroke-0, #F15F48)"
              strokeDasharray="0.85 0.85"
              strokeLinecap="round"
              strokeWidth="1.275"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </motion.svg>
        </div>
      </div>
      <Group24 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[34.26%_41.15%]" data-name="Group">
      <motion.div
        className="absolute inset-[34.26%_41.15%] flex items-center justify-center z-10 pointer-events-none"
        data-name="Vector"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
      >
        <img src={starHubImage} alt="Connection Hub" className="w-full h-full object-contain" />
      </motion.div>

      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="absolute inset-[47.41%_44.62%_48.56%_44.66%] flex items-center justify-center z-20 cursor-pointer pointer-events-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
          >
            <p className="font-['Manrope',sans-serif] font-bold leading-[normal] not-italic text-[30.6px] text-center text-nowrap text-white whitespace-pre z-10">
              Connection
            </p>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="bg-[#E03694] text-white border-none z-50">
          <p>The heart of our work: building trust and relationships.</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute h-[918px] left-[319px] top-[177px] w-[1632px]" data-name="Icon">
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
      <Group6 />
      <Group9 />
      <Group13 />
      <Group17 />
      <Group21 />
      <Group25 />

      {/* sparkle dots */}
      <motion.div className="absolute inset-[31.91%_40.93%_67.63%_58.81%]" data-name="Vector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <path d={svgPaths.p37267f00} fill="var(--fill-0, #E6E6E6)" id="Vector" opacity="0.10713" />
        </svg>
      </motion.div>

      <motion.div className="absolute inset-[37.12%_42.83%_62.6%_57.01%]" data-name="Vector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <path d={svgPaths.p2d72cf00} fill="var(--fill-0, #E6E6E6)" id="Vector" opacity="0.12963" />
        </svg>
      </motion.div>

      <motion.div className="absolute inset-[50.85%_43.74%_48.78%_56.05%]" data-name="Vector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p3066f400} fill="var(--fill-0, #E6E6E6)" id="Vector" opacity="0.14787" />
        </svg>
      </motion.div>

      <motion.div className="absolute inset-[49.46%_49.87%_50.07%_49.87%]" data-name="Vector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <path d={svgPaths.p37267f00} fill="var(--fill-0, #E6E6E6)" id="Vector" opacity="0.12537" />
        </svg>
      </motion.div>

      <motion.div className="absolute inset-[51.68%_54.97%_47.95%_44.82%]" data-name="Vector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p3066f400} fill="var(--fill-0, #E6E6E6)" id="Vector" opacity="0.10287" />
        </svg>
      </motion.div>

      <motion.div className="absolute inset-[48.11%_59.6%_51.61%_40.24%]" data-name="Vector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <path d={svgPaths.p2d72cf00} fill="var(--fill-0, #E6E6E6)" id="Vector" opacity="0.08037" />
        </svg>
      </motion.div>

      <motion.div className="absolute inset-[44.41%_61.4%_55.13%_38.34%]" data-name="Vector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <path d={svgPaths.p37267f00} fill="var(--fill-0, #E6E6E6)" id="Vector" opacity="0.05787" />
        </svg>
      </motion.div>

      <motion.div className="absolute inset-[32.12%_59.88%_67.6%_39.96%]" data-name="Vector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <path d={svgPaths.p2d72cf00} fill="var(--fill-0, #E6E6E6)" id="Vector" opacity="0.14963" />
        </svg>
      </motion.div>

      <Group26 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute inset-[3.77%_40.18%_92.61%]" data-name="Container">
      <motion.div
        className="absolute font-['Manrope',sans-serif] font-bold inset-[6.2%_40.18%_92.61%_40.22%] leading-[normal] not-italic text-[68px] text-center text-nowrap text-white whitespace-pre"
        data-name="Heading"
      >
        <motion.p
          className="absolute inset-[3.77%_40.18%_94.47%_40.22%]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
        >
          Listen. Learn. Lead.
        </motion.p>
      </motion.div>
    </div>
  );
}

function FinalMessage() {
  return (
    <div className="absolute inset-[94.34%_45.01%_3.93%_43.04%]" data-name="Final Message">
      <div className="absolute inset-[94.34%_45.01%_4.87%_43.04%]" data-name="Container">
        <div className="h-[30px] opacity-70 relative shrink-0 w-[271.227px]" data-name="Paragraph">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[271.227px]">
            <motion.p
              className="absolute font-['Manrope',sans-serif] leading-[30px] left-[136.5px] not-italic text-[20px] text-center text-nowrap text-white top-0 tracking-[0.8px] translate-x-[-50%] whitespace-pre"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              Healing through Connection
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InteractiveSparkPointInfographic() {
  return (
    <TooltipProvider>
      <div className="bg-[#0E0E1A] relative w-full h-full overflow-hidden flex items-center justify-center" data-name="Interactive SparkPoint Infographic">
        <div className="relative w-[1920px] h-[1080px] shrink-0 scale-[0.28] sm:scale-[0.35] md:scale-[0.45] lg:scale-[0.6] xl:scale-[0.75] 2xl:scale-100 transition-transform origin-center">
          <Icon />
          <Container />
          <FinalMessage />
        </div>
      </div>
    </TooltipProvider>
  );
}

import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaUserSecret,
  FaFigma,
  FaTerminal,
  FaNetworkWired,
  FaPython,
  FaServer,
  FaFingerprint,
  FaLinux,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobelightroom,
  SiAdobelightroomclassic,
  SiKalilinux,
} from "react-icons/si";

import { BsCamera2 } from "react-icons/bs";

//  about data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma />,
          <SiAdobexd />,
          <SiAdobeillustrator />,
          <SiAdobeindesign />,
        ],
      },
      {
        title: "Photography",
        icons: [
          <BsCamera2 />,
          <SiAdobelightroom />,
          <SiAdobelightroomclassic />,
          <SiAdobephotoshop />,
        ],
      },
      {
        title: "Cyber Security",
        icons: [
          <FaServer />,
          <FaFingerprint />,
          <FaPython />,
          <FaNetworkWired />,
          <FaTerminal />,
          <FaUserSecret />,
          <FaLinux />,
          <SiKalilinux />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Division E - Third Place Photo Essay - Tribune Phonograph",
        stage: "2023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Creative Media/Composing - TP Printing Company",
        stage: "July 2019 - April 2021, Dec 2021 - current",
      },
      {
        title: "Legal Assistant - Piehler & Strande Sc",
        stage: "April 2021 - Dec 2021",
      },
      {
        title: "Receptionist/Marketing Consultant & Designer - Back To Bliss",
        stage: "Aug 2016 - July 2019",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Google CyberSecurity Professional Certificate",
        stage: "2024",
      },
      {
        title: "Digital Media, Info. Resources Design - UW - Stevens Point",
        stage: "2017",
      },
      {
        title: "SheCodes Web Development Plus",
        stage: "2021-2022",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left scroll-smooth scroll-auto">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[120px] w-full h-full max-w-[500px] max-h-[600px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-8">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Uniquely <span className="text-accent">defined</span> stardust
            forming <span className="text-accent">art.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[650px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Samantha Yocius is an experienced Graphic Designer, Web Developer,
            Photographer and dog Mom who is looking to transfer into the
            Technology Industry & CyberSecurity world. Samantha considers
            herself a "student of life" who is eager to build both, a beautiful
            existance in this world, and her professional development through
            continued coursework. Her hunger for knowledge makes her a unique
            individual with a vasy array of background experiences and
            information which brings different insights to projects. Her
            fascination of technology and how things work/break has directed her
            interest into the world of games and security. Meanwhile, Samantha
            maintains a healthy work-life balance and feels it is the key to a
            happy life. In her spare time, when not studying for various
            certifications, she plays with her dog, Koda, tinkers around on
            HackTheBox, learning about encryption, ethical hacking, and also
            preparing for her CompTIA Security+ exam.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-8">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* idea */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={450} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Creative Ideas
                </div>
              </div>
              {/* hours */}
              <div className="relative flex-1 after:w-[1px] after:h-full  after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Invested hours
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

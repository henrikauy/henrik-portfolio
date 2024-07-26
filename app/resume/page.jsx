"use client";

// icons
import { FaHtml5, FaCss3, FaReact, FaPython, FaGitAlt, FaAws, FaJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbSql } from "react-icons/tb";

// about data
const about = {
    title: 'About Me',
    description: 'I am a passionate and dedicated student with a deep interest in technology and software development. ' +
        'Aspiring to become a software engineer, I am committed to learning and mastering the latest technologies and ' +
        'programming languages. My journey so far has involved extensive study and hands-on projects, ' +
        'allowing me to gain a solid foundation in HTML, CSS, JavaScript, React, Python, and more. I am eager to ' +
        'leverage my skills in a professional environment, aiming to contribute to innovative projects and grow as a part of the tech community.',
    info: [
        {
            title: 'Name',
            value: 'Henrik Au-Young'
        },
        {
            title: 'Email',
            value: 'me@henrikauyoung.com'
        },
        {
            title: 'Phone',
            value: '(+61) 452 407 688'
        },
        {
            title: 'Languages',
            value: 'English, Cantonese'
        },
    ]
};

// experience data
const experience = {
    icon: '',
    title: 'My Experience',
    description: "As a student software engineer, I am still on the lookout for my first professional opportunity to immerse myself in the tech industry." +
        ' Have your company listed below by hiring me!',
    items: [
        {
            company: "Your Company.",
            position: "Developer",
            date: "near future",
        },
        {
            company: "Your Company.",
            position: "Developer",
            date: "near future",
        },
        {
            company: "Your Company.",
            position: "Developer",
            date: "near future",
        },
    ],
};

// education data
const education = {
    icon: '/assets/eculogo.svg',
    title: 'My Education',
    description: 'I am currently studying a Bachelor of Computer Science at the Edith Cowin University, ' +
        'where I have completed a range of subjects including programming, algorithms, and software engineering. ' +
        'I am also a self-taught developer, having completed online courses and personal projects to ' +
        'expand my knowledge and skills.',
    items: [
        {
            institution: 'Edith Cowin University',
            degree: 'Bachelor of Computer Science',
            date: '2020 - Present',
        },
    ],
};

// skills data
const skills = {
    title: 'My Skills',
    description: 'I have developed a range of technical skills through my studies and personal projects. ' +
        'I am proficient in both front-end development and back-end applications, ' +
        'and I am also familiar with cloud services and version control systems. ' +
        'Always eager to learn new technologies, I am currently expanding my knowledge in AI and machine learning.',
    skillList: [
        {
            name: 'Python',
            icon: FaPython
        },
        {
            name: 'HTML',
            icon: FaHtml5
        },
        {
            name: 'CSS',
            icon: FaCss3
        },
        {
            name: 'JavaScript',
            icon: FaJs
        },
        {
            name: 'SQL',
            icon: TbSql
        },
        {
            name: 'Next.js',
            icon: SiNextdotjs
        },
        {
            name: 'React',
            icon: FaReact
        },
        {
            name: 'Git',
            icon: FaGitAlt
        },
        {
            name: 'Amazon Web Services',
            icon: FaAws
        },
        {
            name: 'Tailwind CSS',
            icon: SiTailwindcss
        },
    ],
};

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';


const Resume = () => {
    return (
        // animation
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            {/* tabs */}
            <div className="container mx-auto">
                <Tabs
                    defaultValue="about"
                    className="flex flex-col xl:flex-row gap-[60px] "
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="flex flex-col gap-4">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#252526] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className='text-accent'>
                                                        {item.date}
                                                    </span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left]'>
                                                        {item.position}
                                                    </h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="flex flex-col gap-4">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#252526] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className='text-accent'>
                                                        {item.date}
                                                    </span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left]'>
                                                        {item.degree}
                                                    </h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>

                                <ul className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[150px] bg-[#252526] rounded-xl flex justify-center items-center group'>
                                                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                                                {skill.icon()}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                    
                            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                {about.info.map((item, index) => {
                                    return (
                                        <li key={index} className="flex items-center gap-4 justify-center xl:justify-start">
                                            <span className="text-accent">{item.title}:</span>
                                            <span className="text-xl">{item.value}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
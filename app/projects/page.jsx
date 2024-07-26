"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const works = [
    {
        num: "01",
        category: "Frontend",
        title: "Project 1",
        description: "A website built using next.js.",
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
        image: "/assets/images/projects/nextjs-portfolio.jpg",
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "Fullstack",
        title: "Project 2",
        description: "A fullstack web application built using Next.js and Python.",
        stack: [{ name: "Next.js" }, { name: "React" }, { name: "Django" }, { name: "MongoDB" }],
        image: "/assets/images/projects/fullstack-app.jpg",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "Python",
        title: "Project 3",
        description: "A suite of Python automation tools.",
        stack: [{ name: "Python" }],
        image: "/assets/images/projects/python-automation.jpg",
        live: "",
        github: "",
    },
    {
        num: "04",
        category: "Quant",
        title: "Trading Bot",
        description: "A trading bot that automates buying and selling of stocks.",
        stack: [{ name: "Python" }, { name: "Alpaca API" }],
        image: "/assets/images/projects/trading-bot.jpg",
        live: "",
        github: "",
    },
    {
        num: "05",
        category: "Finance",
        title: "Financial Planner",
        description: "A budgeting application made with Python.",
        stack: [{ name: "Python" }, { name: "Flask" }, { name: "SQLite" }],
        image: "/assets/images/projects/financial-planner.png",
        live: "",
        github: "",
    },
];

const Projects = () => {
    const [work, setWork] = useState(works[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setWork(works[swiper.activeIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px]">
                            {/* number */}
                            <div className="text-8xl leading-none font-extrabold">
                                {work.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {work.category} project
                            </h2>
                            {/* project description */}
                            <p className="text-white/60">
                                {work.description}
                            </p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {work.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== work.stack.length - 1 && <span className="text-white/60">,</span>}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={work.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github button */}
                                <Link href={work.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {works.map((project, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black-10 z-10">

                                            </div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image src={work.image}
                                                    fill
                                                    className="object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[44px] w-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
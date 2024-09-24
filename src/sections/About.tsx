'use client';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from '@/components/Card'
import StarIcon from '@/assets/icons/star.svg'
import BookImage from '@/assets/images/book-cover.png'


import JavascriptIcon from '@/assets/icons/square-js.svg'
import PythonIcon from '@/assets/icons/python.svg'
import ReactIcon from '@/assets/icons/react.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CSSIcon from '@/assets/icons/css3.svg'
import GitIcon from '@/assets/icons/github.svg'
import ExpressIcon from '@/assets/icons/express.svg'
import NodeIcon from '@/assets/icons/nodejs.svg'
import DjangoIcon from '@/assets/icons/django.svg'
import FlaskIcon from '@/assets/icons/flask.svg'
import VueIcon from '@/assets/icons/vue.svg'
import MatlabIcon from '@/assets/icons/matlab.svg'
import AwsIcon from '@/assets/icons/aws.svg'
import UbuntuIcon from '@/assets/icons/ubuntu.svg'
import MySqlIcon from '@/assets/icons/mysql.svg'

import { Span } from "next/dist/trace";
import { TechIcon } from "@/components/TechIcon";
import mapImage from '@/assets/images/map.jpg'
import Image from "next/image";
import smileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import {motion} from 'framer-motion';
import { useRef } from "react";

const toolboxItems =[
  {
    title:'Javascript',
    iconType:JavascriptIcon ,
  },
  {
    title:'Python',
    iconType:PythonIcon ,
  },
  {
    title:'React',
    iconType:ReactIcon ,
  },
  {
    title:'Vue',
    iconType:VueIcon ,
  },
  {
    title:'HTML5',
    iconType:HTMLIcon ,
  },
  {
    title:'CSS3',
    iconType:CSSIcon ,
  },
  {
    title:'Express',
    iconType:ExpressIcon ,
  },
  {
    title:'Nodejs',
    iconType:NodeIcon ,
  },
  {
    title:'Django',
    iconType:DjangoIcon ,
  },
  {
    title:'Flask',
    iconType:FlaskIcon ,
  },
  {
    title:'Matlab',
    iconType:MatlabIcon ,
  },
  {
    title:'AWS EC2',
    iconType:AwsIcon ,
  },
  {
    title:'Git',
    iconType:GitIcon ,
  },
  {
    title:'Ubuntu',
    iconType:UbuntuIcon ,
  },
  {
    title:'MySQL',
    iconType:MySqlIcon ,
  },

];

const hobbies = [
  {
    title:'Gaming',
    emoji:'🕹️',
    left:'5%',
    top:'5%',
  },
  {
    title:'Music',
    emoji:'🎸',
    left:'50%',
    top:'5%',
  },
  {
    title:'Reading',
    emoji:'📚',
    left:'10%',
    top:'35%',
  },
  {
    title:'Cooking',
    emoji:'🍳',
    left:'35%',
    top:'40%',
  },
  {
    title:'Cars',
    emoji:'🚗',
    left:'70%',
    top:'45%',
  },
  {
    title:'Rugby',
    emoji:'🏉',
    left:'5%',
    top:'65%',
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py28">
      <div className="container">
        <SectionHeader 
          eyebrow="About Me" 
          title="A glimpse into my world" 
          description="Learn more about who I am, what I do, and what inspires me." 
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <a href="http://ec2-3-137-151-250.us-east-2.compute.amazonaws.com/" target="_blank" rel="noopener noreferrer">
                  <Image src={BookImage} alt='Book Cover' />
                </a>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader 
                className="" 
                title="My Toolbox" 
                description="Explore the tools I use to craft exceptional digital experiences." 
              />
              <ToolboxItems 
                items={toolboxItems} 
                className='' 
                itemsWrapperClassName="animate-move-left [animation-duration:100s]"
              /> 
              <ToolboxItems 
                items={toolboxItems} 
                className='mt-6 '
                itemsWrapperClassName="animate-move-left [animation-duration:10s]"
              /> 
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 md:col-span-3 flex flex-col lg:col-span-2">
              <CardHeader 
              title="Beyond the Code" 
              description="Explore my Interests and Hobbies beyond the digital realm." 
              className="px-6 py-6" />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby =>(
                  <motion.div 
                    key={hobby.title} 
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" 
                    style={{left:hobby.left, top:hobby.top}}
                    drag 
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-2 relative lg:col-span-1">
              <Image src={mapImage} alt='Map' className="h-full w-full object-cover object-left-top"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:3s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt='Smiling' />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

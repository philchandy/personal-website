import { SectionHeader } from "@/components/SectionHeader";
import { Card } from '@/components/Card'
import StarIcon from '@/assets/icons/star.svg'
import BookImage from '@/assets/images/book-cover.png'
import JavascriptIcon from '@/assets/icons/square-js.svg'
import PythonIcon from '@/assets/icons/chrome.svg'
import ReactIcon from '@/assets/icons/react.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CSSIcon from '@/assets/icons/css3.svg'
import GitIcon from '@/assets/icons/github.svg'
import { Span } from "next/dist/trace";
import { TechIcon } from "@/components/TechIcon";
import mapImage from '@/assets/images/map.png'
import Image from "next/image";
import smileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

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
    iconType:PythonIcon ,
  },
  {
    title:'HTML5',
    iconType:HTMLIcon ,
  },
  {
    title:'CSS3',
    iconType:CSSIcon ,
  },
];

const hobbies = [
  {
    title:'Gaming',
    emoji:'🕹️'
  },
  {
    title:'Music',
    emoji:'🎸'
  },
  {
    title:'Reading',
    emoji:'📚'
  },
  {
    title:'Cooking',
    emoji:'🍳'
  },
  {
    title:'Cars',
    emoji:'🚗'
  },
  {
    title:'Rugby',
    emoji:'🏉'
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader 
          eyebrow="About Me" 
          title="A glimpse into my world" 
          description="Learn more about who I am, what I do, and what inspires me." 
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
            <div className="w-40 mx-auto mt-8">
              <Image src={BookImage} alt='Book Cover' />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader 
              className="px-6 pt-6" 
              title="My Toolbox" 
              description="Explore the tools I use to craft exceptional digital experiences." 
            />
            <ToolboxItems items={toolboxItems} className='mt-6'/> 
            <ToolboxItems 
            items={toolboxItems} 
            className='mt-6 '
            itemsWrapperClassName="-translate-x-1/2"
            /> 
          </Card>
          <Card>
            <CardHeader title="Beyond the Code" description="Explore my Interests and Hobbies beyond the digital realm." />
            <div>
              {hobbies.map(hobby =>(
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt='Map' />
            <Image src={smileMemoji} alt='Smiling' />
          </Card>
        </div>
      </div>
    </div>
  );
};

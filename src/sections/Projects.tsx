import currentAffairs from "@/assets/images/currentAffairs (1).png";
import spotifyCH from "@/assets/images/spotify-ch-mac (1).png";
import stegsafe from "@/assets/images/stegsafe.png";
import Image from "next/image";
import CheckIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg'
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    year: "2024",
    title: "Clone Hero Sync",
    results: [
      { title: "Web Application for the popular game Clone Hero that checks your spotify playlists to see if you have songs that you can play on Clone Hero" },
      { title: "React, Expressjs, Nodejs" },
      { title: "Still in Development" },
    ],
    link: "http://ec2-18-222-149-241.us-east-2.compute.amazonaws.com/",
    image: spotifyCH,
  },
  {
    year: "2023",
    title: "StegSafe",
    results: [
      { title: "Steganography web Application that hides text in pictures using LSB algorithm" },
      { title: "Introduces users to Cryptography" },
      { title: "Vue, Flask" },
    ],
    link: "http://18.119.13.211",
    image: stegsafe,
  },
  {
    year: "2024",
    title: "Current Affairs Tracker",
    results: [
      { title: "Tracks the magnitude of current events by correlating its popularity and real-world statistics" },
      { title: "Shows users how some events may have very detrimental effects in the real world but little media coverage" },
      { title: "Still in Development" },
    ],
    link: "https://current-affairs-tracker.vercel.app",
    image: currentAffairs,
  },
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-24">
    <div className="container">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradien-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          Real World Results
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl ">Featured Projects</h2>
      <p className="text-center md:text-lg max-w-md mx-auto mt-4 text-white/60 lg:text-xl">
        See How I transformed concepts into engaging digital experiences
      </p>
      <div className="mt-10 md:mt-20 flex flex-col gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card 
            key={project.title} 
            className= " border border-white/30 px-8 pt-8 md:pt-12 pb-0 md:px-10 lg:pt-16 lg:pl-20 lg:pr-0 sticky"
            style={{
              top:`calc(64px + ${projectIndex * 40}px`
            }}
          >
            <div className=" lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16"> 
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 
                inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent
                bg-clip-text">
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                  {project.title}
                </h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                      <CheckIcon className='size-5 md:size-6' />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                    <span>View</span>
                    <ArrowUpRight className='size-4' />
                  </button>
                </a>
              </div>
              <div className="relative pr-0">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
  );
};

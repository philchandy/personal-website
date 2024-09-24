"use client"

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import GrainImg from '@/assets/images/grain.jpg'
import { ContactForm } from '@/components/ContactForm';
import { useState } from 'react';

export const ContactSection = () => {
  const [compIsShown, setCompIsShown] = useState(false);


  return (
  <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
    <div className="container">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 px-8 py-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
        <div className="absolute inset-0 opacity-5 -z-10" style={{backgroundImage:`url(${GrainImg.src})`}}></div>
          {!compIsShown ? (
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
                <div className="">
                  <h2 className="font-serif text-2xl md:text-3xl">Let&apos;s Create Something Amazing</h2>
                  <p className=" text-sm mt-2 md:text-base">
                    Feel free to reach out if you&apos;re ready to bring your ideas to life or if you have any other inquiries. I&apos;d love to collaborate and help make your vision a reality!
                  </p>
                </div>
                <div className="">
                  <button 
                    className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
                    onClick={() => setCompIsShown(true)}  // This sets the state to true and displays the ContactForm
                  >
                    <span className="font-semibold">Contact Me</span>
                    <ArrowUpRightIcon className='size-4' />
                  </button>
                </div>
              </div>
          ) : (
            <ContactForm />
          )}
      </div>
    </div>
  </div>
  );
};

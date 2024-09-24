"use client"

import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("#home");

  const scrollToSection = (e:any) => {
      e.preventDefault(); // Prevent default anchor click behavior
      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      
      
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(targetId);
      }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      {["#home", "#projects", "#about", "#contact"].map((section) => (
        <Link 
          key={section}
          href={section} 
          className={`nav-item ${activeSection === section ? 'bg-white text-gray-900' : ''}`}  
          scroll={false} 
          onClick={scrollToSection}
        >
          {section.slice(1).charAt(0).toUpperCase() + section.slice(2)} {/* Capitalizes the first letter */}
        </Link>
      ))}
    </nav>
  </div>
  );
};

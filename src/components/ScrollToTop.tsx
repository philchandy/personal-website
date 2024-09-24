import ArrowUp from '@/assets/icons/arrow-up-right.svg'
import { useState, useEffect } from 'react';

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToT() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    

    const handleScroll = () => {
        // Show the button when the user scrolls down
        if (window.scrollY > 100) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
        className={`fixed bottom-0 right-0 bg-black rounded-s-full px-4 py-2 mr-6 mb-[71px] z-50 items-center text-xs flex gap-2 ...scrollToTopButton ${isVisible ? 'visible' : ''}`}
        onClick={scrollToT}
        >
            BACK TO TOP
            <ArrowUp className="inline-block h-4 w-4" />
        </button>
    );
}
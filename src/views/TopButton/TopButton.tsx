'use client';
import { useEffect, useState } from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs';

export const TopButton = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div
      className={
        scrolling ? 'fixed bottom-[0.5rem] right-[0.7rem] z-50' : 'hidden'
      }
    >
      <a href="#">
        <BsArrowUpSquareFill className="text-primary shadow-md" size={40} />
      </a>
    </div>
  );
};

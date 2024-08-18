'use client';

import { clsx } from 'clsx';
import React, { useState, useEffect } from 'react';

import { Icon } from '@/shared/components';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={clsx(
        `fixed z-40 bottom-20 right-6 transition-transform duration-500`,
        isVisible ? 'translate-x-0' : 'translate-x-20'
      )}
    >
      <button
        onClick={scrollToTop}
        className="p-4 rounded-full bg-telegram-button text-telegram-button-text hover:opacity-90 shadow-lg transition duration-300"
      >
        <Icon name="arrow-up" className="w-6 h-6" />
      </button>
    </div>
  );
};

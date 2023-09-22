'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const ManagementButton = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={() => setIsOpen((prev) => !prev)}
      className="relative"
    >
      {children}
      {isOpen && (
        <div className="absolute -left-[4.5rem] top-[1.4rem] inline-flex w-24 flex-col rounded-md bg-white shadow-[0_1px_3px_1px_rgba(0,0,0,0.25)]">
          <Link
            href={'/'}
            className="border-b border-solid border-[#D9D9D9]  px-3 py-2 text-center hover:bg-[#D8D8D8]"
          >
            신고하기
          </Link>
          <Link href={'/'} className="px-3 py-2 text-center hover:bg-[#D8D8D8]">
            차단하기
          </Link>
        </div>
      )}
    </button>
  );
};

export default ManagementButton;

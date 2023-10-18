'use client';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useClickAway } from 'react-use';

const ManagementButton = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useClickAway(buttonRef, () => {
    setIsOpen(false);
  });

  return (
    <button
      ref={buttonRef}
      onClick={() => setIsOpen((prev) => !prev)}
      className="relative"
    >
      {children}
      {isOpen && (
        <div className="shadow-float absolute -left-[4.5rem] top-[1.4rem] inline-flex w-24 flex-col rounded-md bg-white">
          <Link
            href="/"
            className="border-b border-solid border-sub-color4  px-3 py-2 text-center hover:bg-[#D8D8D8]"
          >
            신고하기
          </Link>
          <Link href="/" className="px-3 py-2 text-center hover:bg-[#D8D8D8]">
            차단하기
          </Link>
        </div>
      )}
    </button>
  );
};

export default ManagementButton;

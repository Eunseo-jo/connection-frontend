import { useEffect, useRef } from 'react';
import { CloseSVG } from '@/icons/svg';

interface MobileFullModalProps {
  handleClosed: () => void;
}

const FilterMobileModal = ({ handleClosed }: MobileFullModalProps) => {
  const overlayRef = useRef(null);

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key !== 'Escape') return;
    handleClosed();
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed bottom-0 left-0 right-0 top-0 z-modal sm:hidden"
    >
      <section className="flex h-full w-screen flex-col bg-white">
        <header className="relative flex h-24 items-center justify-center border-b border-solid border-gray-300">
          <h1 className="mt-4 text-xl font-semibold">필터</h1>
          <button className="absolute right-4 top-9" onClick={handleClosed}>
            <CloseSVG
              width="24"
              height="24"
              className="stroke-gray-500 stroke-2"
            />
          </button>
        </header>
      </section>
    </div>
  );
};

export default FilterMobileModal;

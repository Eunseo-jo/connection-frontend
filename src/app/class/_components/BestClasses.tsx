'use client';
import React, { useState } from 'react';
import { ArrowUpSVG } from '@/icons/svg';
import Accordion from '@/components/Accordion/Accordion';
import CarouselContainer from '@/components/Carousel/CarouselContainer';
import ClassPreview from '@/components/ClassPreview/ClassPreview';
import { ClassCardType } from '@/types/class';

const BestlCasses = ({ bestClassList }: { bestClassList: ClassCardType[] }) => {
  const [focus, setFocus] = useState(false);
  const [view, setView] = useState(true);

  const onFocus = () => {
    setFocus(true);
  };

  const offFocus = () => {
    setFocus(false);
  };

  return (
    <article
      className={`flex flex-col gap-2 bg-black ${view ? 'pb-5' : 'pb-3'} pt-3`}
    >
      <h1 className="flex items-center px-4 font-semibold text-white sm:px-9 lg:text-lg xl:px-16">
        오늘의 인기 클래스
        <button onClick={() => setView((prev) => !prev)}>
          <ArrowUpSVG
            className={`h-6 w-6 fill-white duration-300 sm:h-9 sm:w-9 ${
              !view && '-rotate-180'
            }`}
          />
        </button>
      </h1>

      <Accordion isOpen={view}>
        <div className="relative px-4 sm:px-9 xl:px-12">
          <CarouselContainer
            move={true}
            priority={6}
            gap={16}
            showCurrentElement={false}
            movePause={focus}
            mobileShowCurrentElement={false}
            itemStyle="h-[14rem] w-[13rem]"
            carouselContainerStyle="overflow-hidden"
          >
            {bestClassList.map((classData) => {
              const data = {
                ...classData,
                darkMode: true,
                smallView: true,
              };
              return (
                <div
                  key={classData.id}
                  onMouseOver={onFocus}
                  onMouseLeave={offFocus}
                  className="w-full max-w-[13rem] xl:max-w-[33.7rem]"
                >
                  <ClassPreview
                    {...data}
                    touchEndEvent={offFocus}
                    touchStartEvent={onFocus}
                  />
                </div>
              );
            })}
          </CarouselContainer>
        </div>
      </Accordion>
    </article>
  );
};

export default BestlCasses;

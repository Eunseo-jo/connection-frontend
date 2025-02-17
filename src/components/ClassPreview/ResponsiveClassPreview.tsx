'use client';
import { useRouter } from 'next-nprogress-bar';
import { useState } from 'react';
import { StarSVG } from '@/icons/svg';
import CarouselContainer from '../Carousel/CarouselContainer';
import ProfileImage from '../Profile/ProfileImage';
import { ClassCardType } from '@/types/class';

const ResponsiveClassPreview = (props: ClassCardType) => {
  const {
    id,
    status,
    date,
    title,
    genre,
    review,
    price,
    profile,
    imgURL,
    darkMode = false,
    touchStartEvent,
    touchEndEvent,
  } = props;

  const [focus, setFocus] = useState(false);
  const router = useRouter();

  return (
    <div
      onMouseLeave={() => setFocus(false)}
      onMouseOver={() => setFocus(true)}
      onClick={() => router.push(`/class/${id}`)}
      className={`flex h-full w-full cursor-pointer flex-col font-medium ${
        darkMode && 'text-white'
      }`}
    >
      <div
        className={`relative aspect-[328/212] w-full overflow-hidden rounded-lg ${
          darkMode && 'border border-solid border-white'
        }`}
      >
        <CarouselContainer
          imgURL={imgURL}
          move={focus}
          carouselContainerStyle="flex h-full w-full"
          itemStyle="relative w-full overflow-hidden"
          arrow={imgURL.length > 1 && focus}
          showCurrentElement={focus}
          touchStartEvent={touchStartEvent}
          touchEndEvent={touchEndEvent}
        />

        <div className="z-5 absolute top-0 flex h-[3.5rem] w-full items-baseline gap-2 whitespace-nowrap rounded-lg bg-gradient-to-b from-[rgba(32,32,35,0.5)] to-[rgba(32,32,35,0)] pl-2.5 pt-2.5 text-sm font-semibold text-white">
          <span className="rounded-md border border-solid bg-black/[.7] px-[0.33rem] py-[0.18rem]">
            {status}
          </span>
          <span className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            {date}
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between">
        <h1 className="w-5/6 truncate text-base font-semibold leading-5">
          {title}
        </h1>
        {review.count > 0 && (
          <div
            className={`flex items-center gap-1 text-gray-100 ${
              darkMode ? 'text-white' : ''
            }`}
          >
            <StarSVG width={13} height={12} className="fill-sub-color1" />
            {review?.average}
          </div>
        )}
      </div>
      <span className="mt-1 text-xs text-gray-500">
        {genre.length > 1 ? genre[0] + ' 외 ' + (genre.length - 1) : genre[0]}
      </span>
      <div
        className={`mt-0.5 flex items-center justify-between text-base  ${
          darkMode ? 'text-white' : 'text-gray-100'
        }`}
      >
        <p className="text-lg font-bold">{price.toLocaleString()}원</p>

        <div
          onClick={(event) => {
            event.stopPropagation();
            router.push(`/instructor/${profile.id}`);
          }}
          className="cursor-pointer"
        >
          <ProfileImage
            size="xsmall"
            src={profile?.src || null}
            nickname={profile.nickname}
          />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveClassPreview;

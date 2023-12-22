'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { StarSVG } from '@/icons/svg';
import ImagesViewer from './ImagesViewer';
import Like from '../Like/Like';
import Rating from '../Review/Rating';
import Review from '../Review/Review';
import { Instructors } from '@/types/types';

const InstructorCard = ({
  name,
  address,
  genres,
  imgURL,
  average,
  teamAffiliation,
  href,
}: Instructors) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  const offFocus = () => {
    setFocus(false);
  };

  return (
    <div
      onMouseOver={onFocus}
      onMouseLeave={offFocus}
      className="relative h-full w-full overflow-hidden rounded-md shadow-horizontal"
    >
      <figcaption
        className={`pointer-events-none absolute z-10 hidden h-10 w-full items-center justify-center xl:flex ${
          focus ? 'bg-black' : 'bg-white'
        }`}
      >
        <h1 className={`text-lg font-bold ${focus && 'text-zinc-50'}`}>
          {name}
        </h1>
      </figcaption>

      <div className="pointer-events-auto absolute right-1 top-1 z-10">
        <Like id="" type="instructor" />
      </div>

      <Link href={href}>
        <ImagesViewer imgURL={imgURL} focus={focus} />
      </Link>

      {!focus && (
        <>
          <div className="absolute bottom-[5rem] flex w-full justify-center">
            {imgURL.map((img, index) => {
              return (
                <span
                  key={img + index}
                  className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${
                    index === 0 ? 'bg-white' : 'bg-neutral-500'
                  }`}
                />
              );
            })}
          </div>

          <figcaption className="pointer-events-none absolute bottom-0 z-10 flex h-[4.625rem] w-full flex-col justify-center bg-white/[.75] px-2 xl:items-center">
            <div className="hidden pb-2 pt-1 xl:block">
              <Review average={average} />
            </div>
            <div className="flex w-full justify-between xl:hidden">
              <p className="text-lg font-semibold">{name}</p>
              <div className="flex gap-1">
                <StarSVG
                  width={16}
                  height={15}
                  className="translate-y-1 fill-sub-color1"
                />
                5.0
              </div>
            </div>
            <div className="flex gap-x-2 text-sm xl:grid xl:grid-cols-2">
              <h2 className="whitespace-nowrap text-right">{address}</h2>
              <h2 className="flex-grow truncate">{teamAffiliation}</h2>
            </div>
            <div className="flex w-full gap-2 truncate text-sm xl:justify-center">
              {genres.map((genre, index) => (
                <p key={genre + index}>{genre}</p>
              ))}
            </div>
          </figcaption>
        </>
      )}
    </div>
  );
};

export default InstructorCard;
//수정 할 부분 map key, 마진

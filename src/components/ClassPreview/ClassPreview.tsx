'use client';
import Link from 'next/link';
import { useRouter } from 'next-nprogress-bar';
import { useState } from 'react';
import ClassDates from './ClassDates';
import ResponsiveClassPreview from './ResponsiveClassPreview';
import CarouselContainer from '../Carousel/CarouselContainer';
import Like from '../Like/Like';
import ProfileImage from '../Profile/ProfileImage';
import { Review } from '../Review';
import { ClassCardType } from '@/types/class';

const ClassPreview = (props: ClassCardType) => {
  const {
    id,
    status,
    date,
    title,
    imgURL,
    location,
    genre,
    type,
    review,
    price,
    profile,
    isLiked,
    darkMode = false,
    smallView = false,
  } = props;
  const [focus, setFocus] = useState(false);
  const router = useRouter();
  const getStatusStyles =
    status === '모집중'
      ? 'border-gray-500 text-inherit'
      : 'border-gray-500 text-gray-500';

  return (
    <>
      <div
        onMouseLeave={() => setFocus(false)}
        onMouseOver={() => setFocus(true)}
        onClick={() => router.push(`/class/${id}`)}
        className={`hidden h-[13.5rem] w-full min-w-[20.5rem] cursor-pointer whitespace-nowrap rounded-lg bg-white p-3.5 shadow-horizontal hover:z-10 hover:scale-[1.02] ${
          smallView ? '' : 'xl:flex'
        }`}
      >
        <CarouselContainer
          imgURL={imgURL}
          move={focus}
          arrow={imgURL.length > 1 && focus}
          showCurrentElement={focus}
          carouselContainerStyle="flex h-full w-full"
          itemStyle="relative mr-4 h-full w-[18.6rem] overflow-hidden lg:w-full"
        />

        <div className="flex w-full flex-col text-gray-100">
          <div className="mb-1 flex w-full items-center">
            <div
              className={`flex h-6 w-14 items-center justify-center border-2 border-solid text-sm font-bold ${getStatusStyles}`}
            >
              {status}
            </div>

            <ClassDates id={id} />

            <span className="text-sm">{date}</span>
            <div className="ml-auto">
              <Like type="class" id={id} isLiked={isLiked} />
            </div>
          </div>

          <Link
            href={`/class/${id}`}
            className="mb-1 line-clamp-1 w-full text-lg font-bold leading-normal text-black hover:underline"
          >
            {title}
          </Link>

          <div className="mb-2 flex w-full flex-wrap gap-x-3 text-sm">
            <span>{displayFirstElement(location)}</span>
            <span>{displayFirstElement(genre)}</span>
            <span>{type}</span>
          </div>

          {review.count > 0 && (
            <Review average={review.average} count={review.count} />
          )}

          <div className="mt-auto flex w-full items-center justify-between text-sm">
            <p className="text-lg font-bold text-black text-gray-100">
              {price.toLocaleString()}원
            </p>

            <div
              onClick={(event) => {
                event.stopPropagation();
                router.push(`/instructor/${profile.id}`);
              }}
              className="cursor-pointer"
            >
              <ProfileImage
                src={profile?.src || null}
                nickname={profile.nickname}
                size="xsmall"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`h-full w-full ${smallView ? '' : 'xl:hidden'} `}>
        <ResponsiveClassPreview {...props} />
      </div>
    </>
  );
};

export default ClassPreview;

const displayFirstElement = <T extends { toString(): string }>(
  arr: T[],
): string => {
  return arr.length > 1
    ? `${arr[0].toString()} 외 ${arr.length - 1}`
    : arr[0].toString();
};

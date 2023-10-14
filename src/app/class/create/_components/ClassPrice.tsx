'use client';
import { ChangeEvent, useState } from 'react';
import ClassInfo from './ClassPrice/ClassInfo';
import CouponButton from './ClassPrice/CouponButton';
import CouponCreator from './ClassPrice/CouponCreator';
import AppliedCouponDisplay from './ClassPrice/AppliedCouponDisplay';
import { couponGET } from '@/types/coupon';
import { dummyCouponList } from '@/constants/dummy';

const ClassPrice = () => {
  const [classPrice, setClassPrice] = useState(0);
  const [isCouponSectionOpen, setIsCouponSectionOpen] = useState(false);
  const [couponList, setCouponList] = useState<couponGET[] | []>(
    dummyCouponList,
  ); //추후 적용 api로 받아올 예정

  const toggleCouponSection = () => {
    setIsCouponSectionOpen((prev) => !prev);
  };

  const changeClassPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (isNaN(value)) {
      return;
    } else {
      setClassPrice(value);
    }
  };

  return (
    <>
      <ClassInfo changeClassPrice={changeClassPrice} />

      <section className="flex flex-col gap-7 border-y border-solid border-sub-color1 py-5">
        <CouponButton
          isCouponSectionOpen={isCouponSectionOpen}
          toggleCouponSection={toggleCouponSection}
        />

        <CouponCreator isCouponSectionOpen={isCouponSectionOpen} />

        {isCouponSectionOpen && <hr className="border-sub-color2" />}

        <AppliedCouponDisplay
          isCouponSectionOpen={isCouponSectionOpen}
          couponList={couponList}
          classPrice={classPrice}
        />
      </section>
    </>
  );
};

export default ClassPrice;

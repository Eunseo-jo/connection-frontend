import { cookies } from 'next/headers';
import createParams from '@/utils/createParams';
import { IcouponsData, IgetFunction } from '@/types/coupon';
import { FetchError } from '@/types/types';

const END_POINT = process.env.NEXT_PUBLIC_API_END_POINT;

export const getCouponList = async (
  data: IgetFunction,
  type: 'lecturer' | 'user',
): Promise<IcouponsData | null> => {
  const cookieStore = cookies();
  const authorization = cookieStore.get(
    type === 'lecturer' ? 'lecturerAccessToken' : 'userAccessToken',
  )?.value;
  const params = createParams(data);

  const headers: Record<string, string> = {
    Authorization: `Bearer ${authorization}`,
    'Content-Type': 'application/json',
  };

  const response = await fetch(`${END_POINT}/coupons/${type}?${params}`, {
    cache: type === 'lecturer' ? 'no-store' : 'default',
    method: 'GET',
    credentials: 'include',
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json();
    const error: FetchError = new Error(errorData.message || '');
    error.status = response.status;
    throw error;
  }

  const resData = await response.json();

  const { couponList: itemList, totalItemCount } = resData.data;

  return { itemList: itemList ?? [], totalItemCount };
};

export const getClassCouponList = async (
  lectureId: string,
  userState: boolean,
) => {
  try {
    const cookieStroe = cookies();
    const authorization = cookieStroe.get('userAccessToken')?.value;

    //추후 백엔드 상의 후 토큰 필요 로직, 필요 없는 로직

    const headers: Record<string, string> = userState
      ? {
          Authorization: `Bearer ${authorization}`,
          'Content-Type': 'application/json',
        }
      : { 'Content-Type': 'application/json' };

    const response = await fetch(`${END_POINT}/coupons/lectures/${lectureId}`, {
      cache: 'no-store',
      method: 'GET',
      credentials: 'include',
      headers,
    });

    if (!response.ok) {
      throw new Error(`쿠폰 목록 불러오기: ${response.status}`);
    }

    const resData = await response.json();

    return resData.data.couponList;
  } catch (error) {
    console.error(error);
  }
};

import createParams from '@/utils/createParams';
import {
  IgetCouponLists,
  IgetFunction,
  createCouponData,
  updateCouponData,
  userCouponGET,
} from '@/types/coupon';
import { FetchError } from '@/types/types';

export const createNewCoupon = async (data: createCouponData) => {
  try {
    const response = await fetch(`/api/coupon/new`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const error: FetchError = new Error(errorData.message || '');
      error.status = response.status;
      throw error;
    }

    const responseData = await response.json();
    return responseData.data.coupon;
  } catch (error) {
    console.error('쿠폰 생성 오류', error);
    throw error;
  }
};

export const getCouponLists = async (
  data: IgetFunction,
  type: 'lecturer' | 'user',
  signal?: AbortSignal,
): Promise<IgetCouponLists> => {
  const params = createParams(data);

  try {
    const response = await fetch(`/api/coupon/getCouponList?${params}`, {
      method: 'GET',
      credentials: 'include',
      signal,
      headers: {
        'Content-Type': 'application/json',
        type,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      const error: FetchError = new Error(errorData.message || '');
      error.status = response.status;
      throw error;
    }

    const resData = await response.json();

    return {
      item:
        type === 'user'
          ? (resData.data.couponList as userCouponGET[]).map((coupon) => ({
              ...coupon,
              ...coupon.lectureCoupon,
            }))
          : resData.data.couponList ?? [],
      count: resData.data.totalItemCount,
    };
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw error;
    }
    console.error('쿠폰 조회 오류', error);
    throw error;
  }
};

export const getPrivateCode = async (couponId: number) => {
  try {
    const response = await fetch(
      `/api/coupon/getPrivateCode?couponId=${couponId}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '');
    }

    const resData = await response.json();

    return resData.data;
  } catch (error) {
    console.error('비공개 쿠폰 코드 발급 오류', error);
    throw error;
  }
};

export const getPrivateCoupon = async (couponCode: string) => {
  try {
    const response = await fetch(
      `/api/coupon/getPrivateCoupon?couponCode=${couponCode}`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      const error: FetchError = new Error(errorData.message || '');
      error.status = response.status;
      throw error;
    }

    const resData = await response.json();

    return resData.data;
  } catch (error) {
    console.error('비공개 쿠폰 다운 오류', error);
    throw error;
  }
};

export const getClassCoupon = async (couponIdList: { couponIds: number[] }) => {
  try {
    const response = await fetch(`/api/coupon/getClassCoupon`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(couponIdList),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const error: FetchError = new Error(errorData.message || '');
      error.status = response.status;
      throw error;
    }

    const resData = await response.json();

    return resData.data;
  } catch (error) {
    console.error('클래스 공개 쿠폰 다운 오류', error);
    throw error;
  }
};

export const deleteCoupon = async (
  couponId: number,
  userType: 'user' | 'lecturer',
) => {
  try {
    const response = await fetch(
      `/api/coupon/deleteCoupon?couponId=${encodeURIComponent(
        couponId,
      )}&userType=${encodeURIComponent(userType)}`,
      {
        method: 'DELETE',
        credentials: 'include',
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      const error: FetchError = new Error(errorData.message || '');
      error.status = response.status;
      throw error;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('쿠폰 삭제 오류', error);
    throw error;
  }
};

export const updateCoupon = async (
  data: updateCouponData,
  couponId: number,
) => {
  try {
    const response = await fetch(
      `/api/coupon/updateCoupon?couponId=${couponId}`,
      {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      const error: FetchError = new Error(errorData.message || '');
      error.status = response.status;
      throw error;
    }

    const responseData = await response.json();
    return responseData.data.coupon;
  } catch (error) {
    console.error('쿠폰 수정 오류', error);
    throw error;
  }
};

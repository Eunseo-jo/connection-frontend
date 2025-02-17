import createParams from '@/utils/createParams';
import { IgetFunction } from '@/types/coupon';
import {
  IcreatePassReqData,
  IpassData,
  IresponsePassData,
  passSituation,
  userPassDetailInfo,
} from '@/types/pass';
import { FetchError } from '@/types/types';

export const getIssuedPassLists = async (
  data: IgetFunction,
  type: 'lecturer' | 'user',
  signal?: AbortSignal,
): Promise<IresponsePassData> => {
  const params = createParams(data);

  try {
    const response = await fetch(`/api/pass/getIssuedPassList?${params}`, {
      method: 'GET',
      credentials: 'include',
      signal,
      headers: {
        'Content-Type': 'application/json',
        type: type,
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
      item: resData.data.passList,
      count: resData.data.totalItemCount,
    };
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw error;
    }
    console.error('발급한 패스권 조회 오류', error);
    throw error;
  }
};

export const createNewPass = async (data: IcreatePassReqData) => {
  try {
    const response = await fetch(`/api/pass/new`, {
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
    return responseData;
  } catch (error) {
    console.error('패스권 생성 오류', error);
    throw error;
  }
};

export const getPassForId = async (passId: number): Promise<IpassData> => {
  try {
    const response = await fetch(`/api/pass/get-id?passId=${passId}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      const error: FetchError = new Error(errorData.message || '');
      error.status = response.status;
      throw error;
    }

    const resData = await response.json();

    return resData.data.myPass;
  } catch (error) {
    console.error('패스권 조회 오류', error);
    throw error;
  }
};

export const getSalesStatusPass = async (
  passId: number,
): Promise<passSituation[]> => {
  try {
    const response = await fetch(`/api/pass/sales?passId=${passId}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      const error: FetchError = new Error(errorData.message || '');
      error.status = response.status;
      throw error;
    }

    const resData = await response.json();

    return resData.data?.passSituationList ?? [];
  } catch (error) {
    console.error('패스권 판매 현황조회 오류', error);
    throw error;
  }
};

export const getUserPassForId = async (
  passId: number,
): Promise<userPassDetailInfo> => {
  try {
    const response = await fetch(`/api/pass/user-get-id?passId=${passId}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      const error: FetchError = new Error(errorData.message || '');
      error.status = response.status;
      throw error;
    }

    const resData = await response.json();

    return resData.data.userPassInfo;
  } catch (error) {
    console.error('유저 보유중인 패스권 디테일 조회', error);
    throw error;
  }
};

export const disabledPass = async (passId: number) => {
  try {
    const response = await fetch(`/api/pass/disabled?passId=${passId}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      const error: FetchError = new Error(errorData.message || '');
      error.status = response.status;
      throw error;
    }

    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.error('패스권 배포 중지 실패', error);
    throw error;
  }
};

import { DOMAIN } from '@/constants/constants';
import { WriteReview } from '@/types/review';
import { FetchError } from '@/types/types';

export const getWriteReviews = async (
  orderBy: string,
): Promise<WriteReview[]> => {
  try {
    const response = await fetch(
      `${DOMAIN}/api/review/user?orderBy=${orderBy}`,
      {
        method: 'GET',
        credentials: 'include',
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      const error: FetchError = new Error(errorData.message || '');
      error.status = response.status;
      throw error;
    }

    const resData = await response.json();
    return resData.data.review;
  } catch (error) {
    console.error('내 보유 강의 조회 오류', error);
    throw error;
  }
};

import { cookies } from 'next/headers';
import { FetchError } from '@/types/types';

const END_POINT = process.env.NEXT_PUBLIC_API_END_POINT;

export const getChatSocketRoomsId = async (id: string): Promise<string[]> => {
  try {
    const cookieStore = cookies();
    const authorization =
      cookieStore.get('userAccessToken')?.value ||
      cookieStore.get('lecturerAccessToken')?.value;

    const response = await fetch(`${END_POINT}/chat-rooms/${id}/socket-rooms`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${authorization}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      const error: FetchError = new Error(errorData.message || '');
      error.status = response.status;
      throw new Error(`채팅방 소켓 룸 id 조회 에러: ${error.status} ${error}`);
    }

    const resData = await response.json();

    return resData.data.rooms;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

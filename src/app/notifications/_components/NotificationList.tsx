'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { NOTIFICATIONS_TAKE } from '@/constants/constants';
import { PlusesSVG } from '@/icons/svg';
import { getNotifications } from '@/lib/apis/notifications';
import NotificationItem from './NotificationItem';
import {
  INotifications,
  INotificationsPageParams,
  NotificationsFilterOption,
} from '@/types/notifications';

const NotificationList = ({
  initalData,
  filterOption,
}: {
  initalData: INotifications[];
  filterOption: NotificationsFilterOption;
}) => {
  const fetchNotifications = async ({
    pageParam,
  }: {
    pageParam: INotificationsPageParams | undefined;
  }) => {
    return await getNotifications({
      pageSize: NOTIFICATIONS_TAKE,
      filterOption,
      ...pageParam,
    });
  };

  const {
    data: notificationsData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['notifications', filterOption],
    queryFn: fetchNotifications,
    initialPageParam: undefined,
    initialData: () => {
      return {
        pages: [initalData],
        pageParams: [undefined],
      };
    },
    getNextPageParam: (lastPage, allpages) => {
      const currentPage = allpages.length;

      //Math.ceil(lastPage.totalItems / NOTIFICATIONS_TAKE) > currentPage
      return true
        ? {
            pageSize: NOTIFICATIONS_TAKE,
            filterOption,
            lastItemId: lastPage.at(-1)?.id,
          }
        : undefined;
    },
  });

  return (
    <section className="flex flex-col bg-sub-color1-transparent px-4 pb-12 pt-3">
      <ul className="flex flex-col gap-3.5">
        {notificationsData.pages.map((notificationsList, page) =>
          notificationsList.map((notifications) => (
            <NotificationItem
              key={notifications.id}
              notifications={notifications}
            />
          )),
        )}
      </ul>
      <button
        onClick={() => fetchNextPage()}
        className="group mx-auto mt-5 flex items-center gap-1.5 text-sm font-semibold text-sub-color1 underline-offset-2 hover:underline"
      >
        더보기
        <div className="flex size-[23px] items-center justify-center rounded-full border border-solid border-sub-color1 group-hover:border-[1.5px]">
          <PlusesSVG className="fill-sub-color1" />
        </div>
      </button>
    </section>
  );
};

export default NotificationList;

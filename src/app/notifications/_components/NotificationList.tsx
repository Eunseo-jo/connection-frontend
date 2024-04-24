'use client';
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { useRef } from 'react';
import { NOTIFICATIONS_TAKE } from '@/constants/constants';
import { PlusesSVG } from '@/icons/svg';
import {
  deleteNotifications,
  getNotifications,
} from '@/lib/apis/notifications';
import { useUserStore } from '@/store';
import NotificationLoading from './loading/NotificationLoading';
import NotificationItem from './NotificationItem';
import {
  IGetNotifications,
  IGetNotificationsData,
  INotificationQuery,
  INotificationsPagesData,
  NotificationsFilterOption,
} from '@/types/notifications';

const NotificationList = ({
  initalData,
  filterOption,
}: {
  initalData: IGetNotificationsData;
  filterOption: NotificationsFilterOption;
}) => {
  const queryClient = useQueryClient();
  const totalItemCount = useRef(initalData.totalItemCount);

  const { userType } = useUserStore((state) => ({ userType: state.userType }));

  const fetchNotifications = async ({
    pageParam,
  }: {
    pageParam: IGetNotifications | undefined;
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

      return Math.ceil(totalItemCount.current / NOTIFICATIONS_TAKE) >
        currentPage
        ? {
            pageSize: NOTIFICATIONS_TAKE,
            filterOption,
            lastItemId: lastPage?.notifications.at(-1)?.id,
          }
        : undefined;
    },
  });

  const deleteNotificationQuery = ({
    itemId,
    itemLocation,
  }: INotificationQuery) => {
    queryClient.setQueryData<INotificationsPagesData>(
      ['notifications', filterOption],
      (data) => {
        if (!data) {
          return {
            pages: [initalData],
            pageParams: [undefined],
          };
        }

        const { pages, pageParams } = data;

        const updatedNotifications = pages[itemLocation].notifications.filter(
          ({ id }) => id !== itemId,
        );

        totalItemCount.current -= 1;

        if (updatedNotifications.length === 0) {
          const filteredPages = pages.filter(
            (_, index) => index !== itemLocation,
          );
          return {
            pages: filteredPages,
            pageParams,
          };
        }

        const updatedPages = pages.map((page, index) =>
          index === itemLocation
            ? { ...page, notifications: updatedNotifications }
            : page,
        );

        return {
          pages: updatedPages,
          pageParams,
        };
      },
    );
  };

  const { mutate: deleteNotificationsMutate } = useMutation({
    mutationFn: deleteNotifications,
    onSuccess: (data) => deleteNotificationQuery({ ...data }),
  });

  return (
    <section className="flex flex-col bg-sub-color1-transparent px-4 pb-12 pt-3">
      <ul className="flex flex-col gap-3.5">
        {notificationsData.pages.map(
          ({ notifications: notificationsList }, page) => {
            return notificationsList.map((notifications) => (
              <NotificationItem
                key={notifications.id}
                deleteNotification={() =>
                  deleteNotificationsMutate({
                    itemId: notifications.id,
                    itemLocation: page,
                  })
                }
                userType={userType!}
                notifications={notifications}
              />
            ));
          },
        )}
        {isFetchingNextPage && (
          <li className="flex flex-col gap-3.5">
            {Array.from({ length: NOTIFICATIONS_TAKE }, (_, index) => (
              <NotificationLoading key={index} />
            ))}
          </li>
        )}
      </ul>
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="group mx-auto mt-5 flex items-center gap-1.5 text-sm font-semibold text-sub-color1 underline-offset-2 hover:underline"
        >
          더보기
          <div className="flex size-[23px] items-center justify-center rounded-full border border-solid border-sub-color1 group-hover:border-[1.5px]">
            <PlusesSVG className="fill-sub-color1" />
          </div>
        </button>
      )}
    </section>
  );
};

export default NotificationList;

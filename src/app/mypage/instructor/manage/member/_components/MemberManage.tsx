'use client';
import { useState } from 'react';
import { MEMBER_MANAGE_TAKE } from '@/constants/constants';
import usePageNation from '@/hooks/usePageNation';
import { NotFoundSVG } from '@/icons/svg';
import { getMyMembers } from '@/lib/apis/instructorApi';
import FilterNav from './FilterNav';
import MemberListLoading from './loading/MemberListLoading';
import MemberListView from './MemberListView';
import Modal from '@/components/Modal/Modal';
import Pagination from '@/components/Pagination/Pagination';
import PaginationLoading from '@/components/Pagination/PaginationLoading';
import NotificationSenderModal from '@/components/uis/NotificationSenderModal';
import { OptionType } from '@/types/coupon';
import { GetMyMembersData, MemberData } from '@/types/instructor';

interface MemberManageProps {
  myMembers: GetMyMembersData;
  myClassListsOption: OptionType[];
}

const MemberManage = ({ myMembers, myClassListsOption }: MemberManageProps) => {
  const {
    items: memberList,
    totalItemCount,
    filterState,
    isLoading,
    changeFilterState,
    changePage,
  } = usePageNation<MemberData>({
    defaultFilterState: {
      take: MEMBER_MANAGE_TAKE,
      targetPage: 1,
      sortOption: 'LATEST',
      filterOption: 'ALL',
      lectureId: myClassListsOption[0]?.value ?? undefined,
    },
    initialData: myMembers,
    queryType: 'instructorMember',
    queryFn: getMyMembers,
  });
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  const pageCount = Math.ceil(
    totalItemCount / (filterState.take ?? MEMBER_MANAGE_TAKE),
  );

  const notificationModalOpen = () => {
    changeFilterState({ take: 100 });
    setIsNotificationModalOpen(true);
  };

  return (
    <>
      <main className="col-span-1 flex w-full flex-col px-2 sm:px-6">
        <section className="flex flex-col rounded-md bg-white pb-10 pt-6 shadow-horizontal">
          <header className="flex flex-col gap-3 border-b border-gray-700 px-5 pb-4">
            <h1 className="text-2xl font-bold">회원 관리</h1>
            <FilterNav
              filterState={filterState}
              resetFilter={changeFilterState}
              myClassListsOption={myClassListsOption}
            />
          </header>
          <div className="flex flex-col px-5 pt-3">
            {isLoading ? (
              <MemberListLoading take={filterState.take} />
            ) : memberList.length > 0 ? (
              <MemberListView
                memberList={memberList}
                filterState={filterState}
                updateFilter={changeFilterState}
                notificationModalOpen={notificationModalOpen}
              />
            ) : (
              <div className="my-7 flex w-full flex-col items-center justify-center gap-8 text-lg font-semibold text-gray-100">
                <NotFoundSVG />
                <p>존재하는 회원이 없습니다</p>
              </div>
            )}
            {memberList.length > 0 && pageCount === 0 ? (
              <PaginationLoading />
            ) : (
              pageCount > 0 && (
                <nav className="z-0">
                  <Pagination
                    pageCount={pageCount}
                    currentPage={
                      filterState.currentPage ? filterState.currentPage - 1 : 0
                    }
                    onPageChange={changePage}
                  />
                </nav>
              )
            )}
          </div>
        </section>
      </main>
      <Modal
        isOpened={isNotificationModalOpen}
        handleClosed={() => setIsNotificationModalOpen(false)}
        disableModalSwipe={true}
      >
        <NotificationSenderModal
          memberList={memberList.map(({ user }) => ({ ...user }))}
          totalItemCount={totalItemCount}
        />
      </Modal>
    </>
  );
};

export default MemberManage;

'use client';
import { Fragment } from 'react';
import { REVIEW_TAKE } from '@/constants/constants';
import usePageNation from '@/hooks/usePageNation';
import { NotFoundSVG } from '@/icons/svg';
import { getMyLecturersReviews } from '@/lib/apis/reviewApis';
import formatDate from '@/utils/formatDate';
import ClassFilterSelect from './ClassFilterSelect';
import Pagination from '@/components/Pagination/Pagination';
import PaginationLoading from '@/components/Pagination/PaginationLoading';
import { UserReview, ReviewStatistics } from '@/components/Review';
import ReviewLoadingContainer from '@/components/Review/ReviewLoading';
import { OptionType } from '@/types/coupon';
import { MyLecturersReviewsData, RatingsData } from '@/types/review';

interface MyReview {
  initialData: { count: number; item: MyLecturersReviewsData[] };
  myClassListsOption: OptionType[];
  ratingLists: RatingsData[];
}

const MyReview = ({
  initialData,
  myClassListsOption,
  ratingLists,
}: MyReview) => {
  const {
    items: reviews,
    totalItemCount,
    filterState,
    isLoading,
    changeFilterState,
    changePage,
  } = usePageNation<MyLecturersReviewsData>({
    initialData,
    defaultFilterState: {
      take: REVIEW_TAKE,
      targetPage: 1,
      lecturerMyReviewType: '전체',
      orderBy: '최신순',
      lectureId: undefined,
    },
    queryType: 'instructorReview',
    queryFn: getMyLecturersReviews,
  });

  const options: {
    id: string;
    label: string;
  }[] = [
    {
      id: '전체',
      label: '전체',
    },
    {
      id: '진행중인 클래스',
      label: '진행중인 클래스',
    },
    {
      id: '종료된 클래스',
      label: '종료된 클래스',
    },
  ];

  const pageCount = Math.ceil(totalItemCount / REVIEW_TAKE);

  return (
    <main className="col-span-1 flex w-full flex-col px-2 sm:px-6">
      <div className="flex flex-col-reverse gap-5 sm:flex-row">
        <section className="flex flex-grow flex-col bg-white pt-5 shadow-vertical">
          <h1 className="px-5 pb-5 text-2xl font-bold">리뷰 관리</h1>
          <nav className="flex flex-wrap items-center gap-3 whitespace-nowrap border-b border-solid border-gray-500 px-5 pb-[1.38rem] lg:flex-nowrap">
            {options.map((option) => (
              <button
                key={option.id}
                className="flex items-center gap-1 text-sm"
              >
                <input
                  id={option.id}
                  type="checkbox"
                  className="peer h-[18px] w-[18px]  accent-black"
                  checked={filterState.lecturerMyReviewType === option.id}
                  onChange={() =>
                    changeFilterState({ lecturerMyReviewType: option.id }, true)
                  }
                />
                <label
                  htmlFor={option.id}
                  className="cursor-pointer text-gray-500 peer-checked:text-black"
                >
                  {option.label}
                </label>
              </button>
            ))}
            <div className="w-72 lg:flex-grow">
              <ClassFilterSelect
                options={myClassListsOption}
                value={
                  myClassListsOption.find(
                    ({ value }) => value === filterState.lectureId,
                  ) ?? myClassListsOption[0]
                }
                onChange={(change: any) => {
                  changeFilterState({ lectureId: change.value }, true);
                }}
                isDisabled={filterState.lecturerMyReviewType !== '전체'}
              />
            </div>
          </nav>
          <div className="flex flex-col py-5">
            <div className="flex items-center gap-5 pb-5 pl-5 text-sm">
              <select
                name="sorting"
                className="h-7 border border-solid border-gray-500"
                value={filterState.orderBy}
                onChange={(e) => changeFilterState({ orderBy: e.target.value })}
              >
                <option value="최신순">최신순</option>
                <option value="좋아요순">좋아요순</option>
                <option value="평점 높은순">평점 높은순</option>
                <option value="평점 낮은순">평점 낮은순</option>
              </select>
              {totalItemCount}개의 리뷰
            </div>
            {isLoading ? (
              <ul className="flex flex-col">
                <ReviewLoadingContainer type="lecturer" />
              </ul>
            ) : reviews.length > 0 ? (
              <ul className="flex flex-col">
                {reviews.map(
                  ({
                    id,
                    stars,
                    user,
                    userId,
                    description,
                    startDateTime,
                    lectureTitle,
                    likeCount,
                  }) => (
                    <Fragment key={id}>
                      <UserReview
                        src={user.profileImage}
                        nickname={user.nickname}
                        average={stars}
                        date={formatDate(startDateTime)}
                        title={lectureTitle}
                        count={likeCount}
                        isLike={false}
                        reviewId={id}
                        content={description}
                        userId={userId}
                        link={`/report?lectureReviewId=${id}`}
                        noneShadow={true}
                      />
                      <div className="h-1 bg-sub-color1-transparent" />
                    </Fragment>
                  ),
                )}
              </ul>
            ) : (
              <div className="my-7 flex w-full flex-col items-center justify-center gap-8 text-lg font-semibold text-gray-100">
                <NotFoundSVG />
                <p>작성 된 리뷰가 없습니다!</p>
              </div>
            )}
            {reviews.length > 0 && pageCount === 0 ? (
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
        <section className="w-full self-start sm:w-56 md:w-72 lg:w-80">
          <ReviewStatistics ratingLists={ratingLists} />
        </section>
      </div>
    </main>
  );
};

export default MyReview;

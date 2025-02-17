import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import useChangeSearchParams from '@/hooks/useChangeSearchParams';
import { getUserClass } from '@/lib/apis/classApis';
import EmptyData from './EmptyData';
import Pagination from '@/components/Pagination/Pagination';
import PageSizeSelector from '@/components/Selector/PageSizeSelector';
import Spinner from '@/components/Spinner/Spinner';

const ClassList = dynamic(() => import('./ClassList'), {
  ssr: false,
  loading: () => (
    <div className="mt-4 h-48 animate-pulse rounded-md bg-gray-700 shadow-vertical" />
  ),
});

const ListView = () => {
  const { changeMultipleParams, getCurrentParamsToObject } =
    useChangeSearchParams();

  const {
    activeTab: searchActiveTab,
    displayCount: searchDisplayCount,
    currentPage: searchCurrentPage,
  } = getCurrentParamsToObject();

  const [activeTab, setActiveTab] = useState<'진행중/예정' | '수강 완료'>(
    searchActiveTab ?? '진행중/예정',
  );
  const [displayCount, setDisplayCount] = useState(
    searchDisplayCount ? Number(searchDisplayCount) : 5,
  );
  const [currentPage, setCurrentPage] = useState(
    searchCurrentPage ? Number(searchCurrentPage) : 0,
  );
  const { data: classListData, isLoading } = useQuery({
    queryKey: ['user', 'apply', 'list', activeTab, displayCount, currentPage],
    queryFn: () => getUserClass(activeTab, displayCount, currentPage),
  });

  useEffect(() => {
    const filter = [
      { name: 'activeTab', value: activeTab as string },
      { name: 'displayCount', value: String(displayCount) },
      { name: 'currentPage', value: String(currentPage) },
    ];
    changeMultipleParams(filter, false);
  }, [classListData]);

  const { totalItemCount, enrollLectureList } = classListData ?? {
    totalItemCount: 0,
    enrollLectureList: [],
  };
  const pageCount =
    totalItemCount > 0 ? Math.ceil(totalItemCount / displayCount) : 0;

  const handleActiveTab = (newStatus: '진행중/예정' | '수강 완료') => {
    setCurrentPage(0);
    setActiveTab(newStatus);
  };

  const handleDisplayCount = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDisplayCount = Number(event.target.value);
    setDisplayCount(newDisplayCount);
  };

  const handlePageChange = async ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <ul className="flex gap-4 whitespace-nowrap text-base font-medium text-gray-300">
          {(['진행중/예정', '수강 완료'] as const).map((item) => (
            <li
              key={item}
              onClick={() => handleActiveTab(item)}
              className={`${
                activeTab === item
                  ? 'cursor-pointer font-bold text-black'
                  : 'cursor-pointer'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        <PageSizeSelector value={displayCount} onChange={handleDisplayCount} />
      </div>
      {isLoading ? (
        <div className="mt-20 flex h-full items-center justify-center">
          <Spinner />
        </div>
      ) : totalItemCount > 0 ? (
        <>
          <ul className="mb-9 flex flex-col gap-4">
            {enrollLectureList.map((item) => (
              <ClassList key={item.id} {...item} activeTab={activeTab} />
            ))}
          </ul>

          {pageCount > 0 && (
            <nav className="z-0 w-full">
              <Pagination
                pageCount={pageCount}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </nav>
          )}
        </>
      ) : (
        <EmptyData activeTab={activeTab} />
      )}
    </>
  );
};

export default ListView;

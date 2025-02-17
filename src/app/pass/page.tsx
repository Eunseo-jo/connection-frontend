import { cookies } from 'next/headers';
import { PASSES_TAKE } from '@/constants/constants';
import { searchPasses } from '@/lib/apis/serverApis/searchApis';
import { transformSearchPasses } from '@/utils/apiDataProcessor';
import NavComponent from './_components/NavComponent';
import PassListView from './_components/PassListView';
import SearchInput from '@/components/SearchInput/SearchInput';
import { userPass } from '@/types/pass';

const page = async ({
  searchParams,
}: {
  searchParams: {
    query: string;
    sortOption: 'LATEST' | 'POPULAR' | 'LOWEST_PRICE';
  };
}) => {
  const cookieStore = cookies();
  const user = cookieStore.get('userAccessToken')?.value;

  let passList: userPass[] = [];
  let totalItemCount = 0;

  const searchData = {
    take: PASSES_TAKE,
    sortOption:
      searchParams.sortOption &&
      (searchParams.sortOption === 'LATEST' ||
        searchParams.sortOption === 'POPULAR' ||
        searchParams.sortOption === 'LOWEST_PRICE')
        ? searchParams.sortOption
        : 'LATEST',
    value: searchParams.query,
  };

  try {
    const { passList: resPassList, totalItemCount: resTotalItemCount } =
      await searchPasses(searchData, !!user);

    passList = transformSearchPasses(resPassList);
    totalItemCount = resTotalItemCount;
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="mt-4 flex flex-col gap-4 px-4 sm:px-9 xl:px-14">
      <SearchInput query={searchParams.query ?? ''} />

      <NavComponent sortOption={searchData.sortOption} />
      <PassListView
        passList={passList}
        searchData={searchData}
        totalItemCount={totalItemCount}
      />
    </main>
  );
};

export default page;

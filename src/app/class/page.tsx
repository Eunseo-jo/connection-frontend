import { cookies } from 'next/headers';
import {
  CLASS_TAKE,
  DANCE_GENRE,
  FILTER_TIME,
  FILTER_WEEK,
  METHOD_FILTER_LIST,
  PRICE_FILTER_MAX,
  PRICE_FILTER_MIN,
  REGIONS_SELECT_MAX,
} from '@/constants/constants';
import {
  searchBestClass,
  searchClasses,
} from '@/lib/apis/serverApis/searchApis';
import {
  transformBestClassSearch,
  transformSearchClass,
  transformSearchParamsLocation,
} from '@/utils/apiDataProcessor';
import fillCarouselItems from '@/utils/fillCarouselItems';
import { regionsDecryption } from '@/utils/searchFilterFn';
import BestClasses from './_components/BestClasses';
import ClassListView from './_components/ClassListView';
import Filters from '@/components/Filter/Filters';
import SearchInput from '@/components/SearchInput/SearchInput';
import { ClassCardType } from '@/types/class';
import { IFilterOptions, SearchParams, classSearchData } from '@/types/types';

const classPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const cookieStore = cookies();
  const user = cookieStore.get('userAccessToken')?.value;
  let bestClassList: ClassCardType[] = [];
  let classList: ClassCardType[] = [];
  let totalItemCount: number = 0;

  const searchData: classSearchData = {
    take: CLASS_TAKE,
    sortOption:
      searchParams.sortOption &&
      (searchParams.sortOption === 'LATEST' ||
        searchParams.sortOption === 'STARS')
        ? searchParams.sortOption
        : 'LATEST',
    value: searchParams.query,
    genres: [
      ...new Set(
        Array.isArray(searchParams.genre)
          ? searchParams.genre
          : searchParams.genre
          ? [searchParams.genre]
          : [],
      ),
    ].filter((genre) => DANCE_GENRE.includes(genre)),
    regions: [...new Set(regionsDecryption(searchParams.regions))].slice(
      0,
      REGIONS_SELECT_MAX,
    ),
    stars:
      searchParams.stars && Number.isInteger(Number(searchParams.stars))
        ? Number(searchParams.stars)
        : 0,
    isGroup: searchParams.group ? searchParams.group === '그룹레슨' : undefined,
    gtePrice:
      searchParams.gtePrice && Number.isInteger(Number(searchParams.gtePrice))
        ? Number(searchParams.gtePrice)
        : PRICE_FILTER_MIN,
    ltePrice:
      searchParams.ltePrice &&
      Number.isInteger(Number(searchParams.ltePrice)) &&
      Number(searchParams.ltePrice) < PRICE_FILTER_MAX
        ? Number(searchParams.ltePrice)
        : PRICE_FILTER_MAX,
    gteDate:
      searchParams.gteDate && isValidDate(searchParams.gteDate)
        ? new Date(searchParams.gteDate)
        : undefined,
    lteDate:
      searchParams.gteDate &&
      searchParams.lteDate &&
      isValidDate(searchParams.lteDate)
        ? new Date(searchParams.lteDate)
        : undefined,
    lectureMethod:
      searchParams.method &&
      METHOD_FILTER_LIST.includes(searchParams.method) &&
      searchParams.method !== '전체'
        ? searchParams.method.replace(/ 클래스/g, '')
        : undefined,
    days: [
      ...new Set(
        Array.isArray(searchParams.days)
          ? searchParams.days
          : searchParams.days
          ? [searchParams.days]
          : [],
      ),
    ].filter((day) => FILTER_WEEK.includes(day)),
    timeOfDay: [
      ...new Set(
        Array.isArray(searchParams.timeOfDay)
          ? searchParams.timeOfDay
          : searchParams.timeOfDay
          ? [searchParams.timeOfDay]
          : [],
      ),
    ].filter((select) => FILTER_TIME.some(({ value }) => value === select)),
  };

  const filterOptions: IFilterOptions = {
    regions: transformSearchParamsLocation(searchData.regions),
    genre: searchData.genres,
    review: searchData.stars,
    price:
      searchData.gtePrice >= searchData.ltePrice
        ? [0, searchData.ltePrice]
        : [searchData.gtePrice, searchData.ltePrice],
    date:
      searchData.gteDate &&
      searchData.lteDate &&
      searchData.gteDate >= searchData.lteDate
        ? [searchParams.gteDate!, '']
        : [
            searchData.gteDate ? searchParams.gteDate! : '',
            searchData.lteDate ? searchParams.lteDate! : '',
          ],
    method: searchData.lectureMethod ? searchParams.method! : '전체',
    daytime: {
      week: searchData.days,
      time: searchData.timeOfDay.map((time) => {
        const found = FILTER_TIME.find(({ value }) => value === time);
        return found ? found.label : '';
      }),
    },
    group: searchData.isGroup === undefined ? '전체' : searchParams.group!,
  };

  try {
    bestClassList = transformBestClassSearch(await searchBestClass(!!user));

    bestClassList =
      bestClassList.length < 6
        ? fillCarouselItems({ items: bestClassList, minItems: 6 })
        : bestClassList;

    const { classList: resClassList, totalItemCount: resTotalItemCount } =
      await searchClasses(searchData, !!user);
    classList = transformSearchClass(resClassList);
    totalItemCount = resTotalItemCount;
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="flex flex-1 flex-col">
      <div className="my-4 px-4 sm:px-9 xl:px-14">
        <SearchInput query={searchData.value ?? ''} />
      </div>
      {bestClassList.length > 2 && (
        <BestClasses bestClassList={bestClassList} />
      )}

      <ClassListView
        searchData={searchData}
        classList={classList}
        totalItemCount={totalItemCount}
      >
        <Filters type="class" filterOption={filterOptions} />
      </ClassListView>
    </main>
  );
};

export default classPage;

const isValidDate = (dateString: string) => {
  const regEx = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateString.match(regEx)) return false;
  const d = new Date(dateString);
  const dNum = d.getTime();
  if (!dNum && dNum !== 0) return false;
  return d.toISOString().slice(0, 10) === dateString;
};

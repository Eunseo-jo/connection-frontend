import { day } from './class';

export interface IBootOption {
  pluginKey: string;
  language: string;
  id?: string;
  profile?: {
    name: string;
    mobileNumber: string;
    userType: 'user' | 'lecturer';
  };
}

export interface IFilterButton {
  label: '지역' | '장르' | '평점' | '가격' | '지정날짜' | '진행방식' | '시간';
  content: React.JSX.Element;
}

export interface IFilterOptions {
  regions: Record<string, string[]>;
  genre: string[];
  review: number;
  price?: [number, number];
  date?: [string, string];
  method?: string;
  daytime?: {
    week: day[];
    time: string[];
  };
  group?: string;
}

export interface dateTimes {
  date: Date;
  time: string[];
}

export interface IFullCalendarEvent {
  id: number;
  start: Date;
  end: Date;
  title: string;
  numberOfParticipants: number;
  maxCapacity: number;
  isGroup: boolean;
  lectureId: number;
  lectureMethod?: string;
}

export interface ErrorMessage {
  key: string;
  type: string;
  message: string;
  ref: any;
}

export interface IPaymentList {
  date: string;
  period: string;
  amount: string;
  status: '입금완료' | '처리중';
}

export interface IReportList {
  id: number;
  target: string;
  reason: string;
  detail: string;
  status: '처리중' | '처리완료';
}

export type paymentType = 'card' | 'deposit' | null;

export interface Instructors {
  id: number;
  name: string;
  address: string[];
  teamAffiliation: string;
  genres: string[];
  imgURL: string[];
  average: number;
  href: string;
}

export interface InstructorCardProps extends Instructors {
  largeImg: boolean;
  isLiked: boolean;
  searchAfter?: [number, number];
  likeEvent?: (id: string | number) => void;
}

export interface INoticeMessage {
  message: string;
  date: string;
  isRead: boolean;
}

export interface INotice {
  type: string;
  id: string;
  date: string;
  isRead: boolean;
  title: string;
  contents: INoticeMessage[];
}

export interface Verification {
  nickname: boolean;
  email: boolean;
  phoneNumber: boolean;
  accountNumber: boolean;
}

export interface IRegion {
  administrativeDistrict: string;
  district: string;
}

export interface IGenre {
  name: string | null;
  danceCategory: { genre: string };
}

export interface FetchError extends Error {
  status?: number;
}

export interface PagenationFilterState extends PageNavigationState {
  take: number | undefined;
  [key: string]: any | undefined;
}

export interface PageNavigationState {
  firstItemId?: number;
  lastItemId?: number;
  currentPage?: number;
  targetPage?: number;
}

export type TimeOfDay = 'MORNING' | 'AFTERNOON' | 'NIGHT' | 'DAWN';

export interface SearchParams {
  [key: string]:
    | string
    | 'LATEST'
    | 'STARS'
    | string[]
    | number
    | undefined
    | TimeOfDay[]
    | day[];
  query?: string;
  sortOption?: 'LATEST' | 'STARS';
  genre?: string[];
  regions?: string;
  stars?: string;
  group?: string;
  gtePrice?: string;
  ltePrice?: string;
  gteDate?: string;
  lteDate?: string;
  method?: string;
  days?: day[];
  timeOfDay?: TimeOfDay[];
}

export interface instructorSearchData {
  take: number;
  sortOption: 'LATEST' | 'STARS';
  value: string | undefined;
  genres: string[];
  regions: string[];
  stars: number;
  searchAfter?: [number, number];
}

export interface classSearchData {
  take: number;
  sortOption: 'LATEST' | 'STARS';
  isGroup?: boolean;
  value?: string;
  searchAfter?: [number, number];
  genres: string[];
  regions: string[];
  stars: number;
  days: day[];
  timeOfDay: TimeOfDay[];
  gtePrice: number;
  ltePrice: number;
  lectureMethod?: string;
  gteDate?: Date;
  lteDate?: Date;
}

export type CityList =
  | '서울'
  | '경기'
  | '부산'
  | '대구'
  | '인천'
  | '광주'
  | '대전'
  | '울산'
  | '세종'
  | '강원'
  | '충북'
  | '충남'
  | '전북'
  | '전남'
  | '경북'
  | '경남'
  | '제주';

export interface DayTimeFilterOption {
  week: day[];
  time: string[];
}

export type FilterKey =
  | '지역'
  | '장르'
  | '평점'
  | '가격'
  | '지정날짜'
  | '인원'
  | '진행 방식'
  | '요일/시간대';

export interface IUserSearchKeywords {
  id: number;
  searchTerm: string;
}

export interface IPopularKeyword {
  id: number;
  searchTerm: string;
  searchCount: number;
}

import { fileInfo } from 'suneditor/src/lib/core';
import { couponGET } from './coupon';
import { IRegion, IGenre } from './types';
import { Juso } from '@/types/address';

interface IInstructorProfile {
  id: number;
  profileCardImageUrl: null | string;
  nickname: string;
}

export interface IClassImageResponse {
  id: number;
  imageUrl: string;
}

export interface IClassGenreResponse {
  danceCategoryId: number;
  name: string | null;
  danceCategory: {
    id: number;
    genre: string;
  };
}

export interface IClassRegionResponse {
  region: {
    administrativeDistrict: string;
    district: string;
  };
}

export interface IClassNotification {
  id: number;
  lectureId: number;
  content: string;
  updatedAt: string;
  deletedAt: null;
}

export interface ClassCardType {
  id: number;
  status: '모집중' | '마감';
  date: string;
  title: string;
  imgURL: string[];
  location: string[];
  genre: string[];
  isLiked: boolean;
  type: string;
  review: { average: number; count: number };
  price: number;
  profile: { src: string | null; nickname: string; id: number };
  darkMode?: boolean;
  smallView?: boolean;
  searchAfter?: [number, number];
  touchStartEvent?: () => void;
  touchEndEvent?: () => void;
}

export interface Space {
  current: number;
  total: number;
}

export interface IDateTime {
  count: number;
  dateTime: string;
  lectureId?: number;
  lectureScheduleId: number;
  space: Space;
}

type day = '일' | '월' | '화' | '수' | '목' | '금' | '토';

export interface IRegularDayTimeList {
  day: day[];
  dateTime: string;
}

export interface IDayTimeList {
  day: day[];
  dateTime: string[];
}

export interface IDateTimeList {
  date: Date;
  dateTime: string[];
}

export interface IEditScheduleList extends IDayTimeList {
  totalClass?: number;
}

export interface IGetClassDrafts {
  id: string;
  updatedAt: Date;
  title: null | string;
  step: null | number;
}

export interface IGetClassDraft {
  temporaryLecture: {
    id: number;
    lecturerId: number;
    step: number | null;
    startDate?: string | null;
    endDate?: string | null;
    isGroup?: boolean | null;
    lectureTypeId?: number;
    lectureMethodId?: number;
    title?: string;
    introduction?: string;
    curriculum?: string;
    detailAddress?: string | null;
    duration?: number;
    difficultyLevel?: string;
    minCapacity?: number;
    maxCapacity?: number;
    locationDescription?: string;
    lectureMethod?: {
      name: string;
    } | null;
    reservationDeadline?: string;
    reservationComment?: string;
    price?: number | string;
    noShowDeposit?: number;
    reviewCount: number;
    stars: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
    temporaryLecturenotification: { notification: string };
    temporaryLectureImage: { imageUrl: string }[];
    temporaryLectureCouponTarget: {
      lectureCouponId: number;
    }[];
    temporaryLectureToRegion: {
      region: {
        administrativeDistrict: string;
        district: string;
      };
    }[];
    temporaryLectureToDanceGenre: {
      name: null | string;
      danceCategory: {
        genre: string;
      };
    }[];
    temporaryLectureHoliday: {
      holiday: string;
    }[];
  };
  location: {
    id: number;
    lectureId: number;
    address: string;
    detailAddress: string;
    buildingName: string;
    administrativeDistrict: string;
    district: string;
  } | null;
  schedules: DayTimeList[] | DateTimeList[];
}

export interface IUpdateClassDraft {
  lectureId?: number | string;
  step?: number;
  regions?: string[];
  lectureType?: string;
  lectureMethod?: string;
  notification?: string;
  genres?: string[];
  etcGenres?: string[];
  images?: string[];
  title?: string;
  introduction?: string;
  curriculum?: string;
  detailAddress?: string | null;
  duration?: number;
  difficultyLevel?: string;
  minCapacity?: number;
  maxCapacity?: number;
  reservationDeadline?: number;
  reservationComment?: string;
  price?: number | string;
  noShowDeposit?: number;
  schedules?: DayTimeList[] | DateTimeList[];
  holidays?: string[];
  coupons?: number[];
}

export interface classCreateData {
  title: string;
  images: {
    file: File;
    imageUrl: string;
  }[];
  genres: string[];
  min: { value: number; label: string };
  max: { value: number; label: string };
  lectureMethod: string;
  lessonType: string;
  difficultyLevel: string;

  notification: string;
  introduction: string;
  curriculum: {
    content: string;
    deletedImages: fileInfo[];
    clear?: () => void;
  };
  holidays: Data[];
  classRange: { startDate: string; endDate: string };
  duration: number;
  reservationComment: string;
  reservationDeadline: number;
  address: Juso | null;
  detail: string;
  locationConsultative: boolean;
  regions: Record<string, string[]>;
  locationDescription: string;
  classPrice: string | number;
  schedules: DayTimeList[] | DateTimeList[];
  coupons: { value: couponGET; label: string }[];
}

export interface classProccessData {
  difficultyLevel?: string;
  etcGenres?: string[];
  genres?: string[];
  images?: string[];
  isGroup?: boolean;
  lectureMethod?: string;
  maxCapacity?: number;
  minCapacity?: number;
  title?: string;
  notification?: string;
  introduction?: string;
  curriculum?: string;
  startDate?: string;
  endDate?: string;
  duration?: number;
  schedules?: DayTimeList[] | DateTimeList[];
  holidays?: Data[];
  reservationDeadline?: number;
  location?: {
    detailAddress?: string | null;
    address?: string | null;
    buildingName?: string | null;
    administrativeDistrict?: string | null;
    district?: string | null;
  };
  locationDescription?: string;
  regions?: string[];
  price?: string | number;
  coupons?: number[];
}

export interface IprocessedDraft {
  id?: number;
  lecturerId?: number;
  step?: number | null;
  classRange?: {
    startDate?: string | null;
    endDate?: string | null;
  };
  lessonType?: string | null;
  lectureTypeId?: number;
  lectureMethod?: string | null;
  lectureMethodId?: number;
  title?: string;
  isGroup?: boolean | null;
  introduction?: string;
  curriculum?: string;
  detailAddress?: string | null;
  duration?: number;
  difficultyLevel?: string | null;
  min?: number;
  max?: number;
  reservationDeadline?: number;
  reservationComment?: string;
  price?: number | string;
  noShowDeposit?: number;
  reviewCount?: number;
  stars?: number;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: null | string;
  notification?: string;
  locationDescription?: string;
  temporaryLectureImage?: { imageUrl: string }[];
  temporaryLectureCouponTarget?: any[];
  regions?: {
    [key: string]: string[];
  };
  temporaryLectureToDanceGenre?: string[];
  holidays?: Data[];
  location?: {
    roadAddr?: string | null;
    detailAddress?: string | null;
    bdNm?: string | null;
    administrativeDistrict?: string | null;
    district?: string | null;
  };
  totalClasses?: number;
  schedules?: DayTimeList[] | DateTimeList[];
}

export interface IClassSchedule {
  id: number;
  lectureId: number;
  startDateTime: string;
  endDateTime: string;
  numberOfParticipants: number;
}

export interface IRegularClassSchedule {
  id: number;
  day: day[];
  dateTime: string;
  numberOfParticipants: number;
  regularLectureSchedule: IRegularSchedule[];
}

export interface ISelectedSchedule extends IRegularClassSchedule {
  count: number;
}

export interface IClassScheduleResponse {
  regularLectureStatus?: IRegularClassSchedule[];
  schedules?: IClassSchedule[];
  holidays: string[];
  daySchedules?: IDaySchedule[];
}

export interface IDaySchedule {
  id: number;
  lectureId: number;
  day: day[];
  dateTime: string[];
}

export type IProcessedSchedules = (IClassSchedule | IRegularSchedule) & {
  index: number;
  date: Date;
  isPastClass: boolean;
};

export interface IClassPreviewResponse {
  id: number;
  lecturerId: number;
  title: string;
  lectureImage: IClassImageResponse[];
  stars: number;
  isGroup: true;
  difficultyLevel: string;
  maxCapacity: number;
  duration: number;
  lectureToRegion: IClassRegionResponse[];
  isLike: boolean;
  lectureToDanceGenre: IClassGenreResponse[];
  price: number;
}

export interface IClassDetailResponse {
  id: number;
  lecturer: IInstructorProfile;
  startDate: string;
  endDate: string;
  reservationDeadline: number;
  reservationComment: string;
  price: number;
  notification: IClassNotification;
  introduction: string;
  curriculum: string;
  maxCapacity: number;
  minCapacity: number;
  reviewCount: number;
  locationDescription: string | null;
  location?: {
    id: number;
    address: string;
    detailAddress: string;
    buildingName: string;
  };
  lectureToRegion: IClassRegionResponse[];
  duration: number;
  stars: number;
}

export interface IClassPostResponse {
  id: number;
  lecturerId: number;
  lectureTypeId: number;
  lectureMethodId: number;
  isGroup: boolean;
  startDate: string;
  endDate: string;
  title: string;
  introduction: string;
  curriculum: string;
  detailAddress: string;
  locationDescription: string;
  duration: number;
  difficultyLevel: string;
  minCapacity: number;
  maxCapacity: number;
  reservationDeadline: number;
  reservationComment: string;
  price: number;
  noShowDeposit: null;
  reviewCount: number;
  stars: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  lectureType: {
    name: string;
  };
  lectureMethod: {
    name: string;
  };
  lectureNotification: IClassNotification;
  lectureImage: IImage[];
  lectureToRegion: IRegion[];
  lectureToDanceGenre: IGenre[];
  isLike: boolean;
  lecturer: {
    id: number;
    nickname: string;
    profileCardImageUrl: string | null;
  };
}

interface IImage {
  imageUrl: string;
}

export interface ILecturerClassListResonse {
  id: number;
  schedulesCount: number;
  completedSchedulesCount: number;
  startDate: string;
  endDate: string;
  title: string;
  lectureMethod: { name: string };
}

export interface ILecturerClassDetailResonse {
  title: string;
  notification?: IClassNotification;
  reservationComment: string;
  duration: number;
  maxCapacity: number;
  reservationDeadline: number;
  schedules?: IClassSchedule[];
  regularLectureStatus?: IRegularClassSchedule[];
  holidays: string[];
}

export interface IClassEditRequest {
  images?: string[];
  minCapacity?: number;
  maxCapacity?: number;
  introduction?: string;
  curriculum?: string;
  reservationDeadline?: number;
  reservationComment?: string;
  price?: number;
  coupons?: number[];
  notification?: string;
  holidays?: Date[];
  endDate?: Date;
}

export interface Lecture {
  id: number;
  lecturerId: number;
  lectureTypeId: number;
  lectureMethodId: number;
  isGroup: boolean;
  startDate: string;
  endDate: string;
  title: string;
  introduction: string;
  curriculum: string;
  duration: number;
  difficultyLevel: string;
  minCapacity: number;
  maxCapacity: number;
  reservationDeadline: number;
  reservationComment: string;
  price: number;
  noShowDeposit: number;
  reviewCount: number;
  stars: number;
  isActive: boolean;
  locationDescription: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  lectureMethod: {
    name: '원데이' | '정기';
  };
}

export interface ResponseData {
  lecture: Lecture[];
}

export interface ApiResponse {
  statusCode: number;
  data: ResponseData;
}

export interface IClassEditData
  extends IClassScheduleResponse,
    IClassPreviewResponse,
    IClassDetailResponse {}

export interface IClassEditPageData
  extends IClassScheduleResponse,
    IClassPreviewResponse,
    IClassDetailResponse {}

export interface IClassEditFormData {
  classRange: { startDate: string; endDate: string };
  images: {
    file: File;
    imageUrl: string;
  }[];
  curriculum: {
    content: string;
    deletedImages: fileInfo[];
    clear?: () => void;
  };
  holidays: Data[];
  introduction: string;
  locationDescription: string;
  maxCapacity: { value: number; label: string };
  notification: string;
  price: number;
  reservationComment: string;
  reservationDeadline: number;
  endDate: { startDate: string; endDate: string };
}

export interface searchClass {
  searchAfter: [number, number];
  id: number;
  title: string;
  price: number;
  lectureImages: string[];
  startDate: string;
  endDate: string;
  isGroup: boolean;
  isLiked: boolean;
  lectureMethod: string;
  stars: number;
  reviewCount: number;
  isActive: boolean;
  lecturer: {
    lecturerId: number;
    nickname: string;
    profileCardImageUrl: string;
  };
  regions: { id: number; administrativeDistrict: string; district: string }[];
  genres: { id: number; genre: string }[];
}

export interface IMonthlyClassSchedules extends IClassSchedule {
  lecture: {
    id: string;
    title: string;
    isGroup: boolean;
    maxCapacity: number;
    lectureMethod: { name: string };
  };
}

export interface IEditSpecificDateType {
  date: Date;
  startDateTime: IEditStartDateTime[];
}

export interface IEditStartDateTime {
  time: string;
  editable: boolean;
}

export interface ILectureSchedule {
  id: number;
  lectureId: number;
  day: number;
  startDateTime: string;
  endDateTime: string;
  numberOfParticipants: number;
}

export interface IRegularSchedule {
  id: number;
  day: number;
  startDateTime: string;
  endDateTime: string;
}

export interface IRegularScheduleData {
  day: day[];
  dateTime: string;
  startDateTime: Date[];
}

export interface IUserApplyClass {
  id: number;
  lecture: {
    id: number;
    lectureImage: {
      id: number;
      lectureId: number;
      imageUrl: string;
    }[];

    lectureMethod: {
      id: number;
      name: string;
    };
    title: string;
  };
  lecturer: {
    id: number;
    nickname: string;
    profileCardImageUrl: string | null;
  };
  lectureSchedule?: ILectureSchedule;
  regularLectureSchedule?: IRegularSchedule[];
}

export interface IApplyListResponse {
  totalItemCount: number;
  enrollLectureList: IUserApplyClass[];
}

export interface IReservation {
  id: number;
  representative: string;
  phoneNumber: string;
  participants: number;
  requests: string;
  lectureSchedule: ILectureSchedule;
}

export interface searchBestClassData {
  isLike: boolean;
  id: number;
  title: string;
  lectureImage: {
    id: number;
    imageUrl: string;
  }[];
  startDate: string;
  endDate: string;
  isActive: boolean;
  price: number;
  stars: number;
  reviewCount: number;
  isGroup: boolean;
  lectureToDanceGenre: {
    danceCategoryId: number;
    name: null | string;
    danceCategory: { id: number; genre: string };
  }[];
  lectureToRegion: {
    region: { administrativeDistrict: string; district: string };
  }[];
  lecturer: {
    id: number;
    nickname: string;
    profileCardImageUrl: null | string;
    lecturerProfileImageUrl: null | string;
  };
  likedLecture?: {
    id: number;
  }[];
  lectureMethod?: {
    id: number;
    name: string;
  };
}

export interface searchClassParameters {
  take: number;
  sortOption: 'LATEST' | 'STARS';
  isGroup?: boolean;
  value?: string;
  searchAfter?: [number, number];
  genres?: string[];
  regions?: string[];
  stars?: number;
  days?: day[];
  timeOfDay?: TimeOfDay[];
  gtePrice?: number;
  ltePrice?: number;
  lectureMethod?: string;
  gteDate?: Date;
  lteDate?: Date;
}

export interface searchClass {
  searchAfter: [number, number];
  id: number;
  title: string;
  price: number;
  lectureImages: string[];
  startDate: string;
  endDate: string;
  isGroup: boolean;
  lectureMethod: string;
  stars: number;
  reviewCount: number;
  lecturer: {
    id: number;
    nickname: string;
    profileCardImageUrl: string;
  };
  regions: { id: number; administrativeDistrict: string; district: string }[];
  genres: { id: number; genre: string }[];
  days: null | { day: [day]; dateTime: string[] };
  isLiked?: boolean;
}

export interface LikedLecture {
  id: number;
  title: string;
  lectureImage: [[Object]];
  startDate: string;
  endDate: string;
  isActive: boolean;
  price: number;
  stars: number;
  reviewCount: number;
  isGroup: boolean;
  lectureToDanceGenre: [[Object]];
  lectureToRegion: [[Object]];
  lectureMethod: { name: string };
  isLike: boolean;
  lecturer: { id: 4; nickname: string; profileCardImageUrl: null | string };
}

interface IScheduleLearnerList {
  id: number;
  userId: number;
  nickname: string;
  userProfileImage: string | null;
  representative: string;
  phoneNumber: number;
  participants: number;
  requests: string;
  enrollmentCount: number;
  memo: null | string;
}

interface IApplyDetailResponse {
  lecture: {
    id: number;
    title: string;
    notification: {
      id: number;
      content: string;
      updatedAt: string;
    };
    location?: {
      id: number;
      address: string;
      detailAddress: string;
      buildingName: string;
    };
    region: IRegion[];
    locationDescription: string | null;
  };
  lecturer: {
    id: number;
    nickname: string;
    profileCardImageUrl: string | null;
  };
  lectureSchedule?: ILectureSchedule;
  regularLectureSchedule?: IRegularSchedule[];
  representative: string;
  phoneNumber: string;
  payment: {
    id: number;
    finalPrice: number;
    paymentMethod: { name: string };
    orderId: string;
  };
  request?: string;
  participants: number;
  isCompleted: boolean;
}

interface IRecentApply {
  id: number;
  representative: string;
  phoneNumber: string;
  participants: number;
  requests: string;

  lectureSchedule: {
    id: number;
    startDateTime: string;
    endDateTime: string;
    numberOfParticipants: number;
  } | null;

  regularLectureStatus: {
    id: number;
    day: string[];
    dateTime: string;
    numberOfParticipants: number;
    regularLectureSchedule: {
      id: number;
      day: number;
      startDateTime: string;
      endDateTime: string;
    }[];
  } | null;

  lecture: {
    id: number;
    title: string;
    maxCapacity: number;
  };

  user: {
    id: number;
    nickname: string;
    profileImageUrl: string;
  };
}

export interface LastClassInfo {
  lecture: {
    id?: number;
    title?: string;
  };
  startDateTime?: Date;
}

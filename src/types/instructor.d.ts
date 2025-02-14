import { IReservation } from './class';
import { PaymentStatusType } from './payment';
import { PagenationFilterState } from '@/types/types';

export interface instructorPostResponse {
  profileCardImageUrl: string | null;
  nickname: string;
  email: string;
  phoneNumber: string;
  youtubeUrl: string;
  instagramUrl: string;
  homepageUrl: string;
  affiliation: string;
  introduction: string;
  experience: string;
  lecturerRegion: {
    region: { administrativeDistrict: string; district: string };
  }[];
  lecturerDanceGenre: {
    danceCategoryId: number;
    name: null;
    danceCategory: { genre: string };
  }[];
  lecturerInstagramPostUrl: Url[]; // 추후 변경 예정
  lecturerProfileImageUrl: Url[]; // 추후 변경 예정
  stars: number;
  reviewCount: number;
  isLiked: boolean;
}

interface Url {
  url: string; // 추후 변경 예정
}

interface Bank {
  value: string;
  label: string;
}

interface Regions {
  [key: string]: string[];
}

export interface InstructorApplyData {
  nickname: string;
  phoneNumber: string;
  emailFront: string;
  emailBack: string;
  bankholder: string;
  birth: string;
  accountNumber: string;
  bank: Bank;
  affiliation: string;
  instagramPostUrls0: string;
  instagramPostUrls1: string;
  instagramPostUrls2: string;
  profileImageUrls: { file: File; imageUrl: string }[];
  regions: Regions;
  genres: string[];
  instagramUrl: string;
  youtubeUrl: string;
  homepageUrl: string;
  introduction: {
    content: string;
    deletedImages: { src: string }[];
    clear: () => void;
  };
  experience: {
    content: string;
    deletedImages: { src: string }[];
    clear: () => void;
  };
}

export interface IInstructorRegister {
  profileImageUrls: string[];
  nickname: string;
  email: string;
  phoneNumber: string;
  profileCardImageUrl?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
  homepageUrl?: string;
  affiliation?: string;
  introduction: string;
  experience?: string;
  regions: string[];
  genres: string[];
  instagramPostUrls?: string[];
  etcGenres?: string[];
}

export interface InstructorUpdate {
  newProfileImageUrls?: string[];
  etcGenres?: string[];
  genres?: string[];
  regions?: string[];
  profileCardImageUrl?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
  homepageUrl?: string;
  affiliation?: string;
  introduction?: string;
  experience?: string;
  instagramPostUrls?: string[];
}

export interface searchInstructor {
  searchAfter: [number, number];
  id: number;
  nickname: string;
  affiliation: string;
  profileCardImageUrl: string;
  stars: number;
  isLiked: boolean;
  reviewCount: number;
  lecturerImages: string[];
  regions: { id: number; administrativeDistrict: string; district: string }[];
  genres: { id: number; genre: string }[];
}

export interface ILecturerLike {
  count: number;
  lecturerLike: LecturerLike[];
}

export interface LecturerLike {
  id: number;
  lecturerId: number;
  userId: number;
  lecturer: {
    nickname: string;
    affiliation: string;
    stars: number;
    lecturerRegion: {
      region: {
        id: number;
        administrativeDistrict: string;
        district: string;
      };
    }[];
    lecturerDanceGenre: {
      id: number;
      danceCategoryId: number;
      lecturerId: number;
      name: string | null;
      danceCategory: {
        genre: string;
      };
    }[];
    lecturerProfileImageUrl: {
      url: string;
    }[];
  };
}

export interface ILecturerBlock {
  count: number;
  lecturerBlock: LecturerBlock[];
}

export interface LecturerBlock {
  id: number;
  lecturerId: number;
  userId: number;
  lecturer: {
    nickname: string;
    lecturerProfileImageUrl: LecturerProfileImageUrl[];
  };
}

export interface InstructorBlock {
  id: number;
  nickname: string;
  imgURL: string[];
}

export interface IApproveList {
  lecture: {
    id: number;
    title: string;
    noShowDeposit: number;
    maxCapacity: number;
  };
  payments: IApprovePayment[];
}

export interface IApprovePayment {
  id: number;
  orderId: string;
  orderName: string;
  originalPrice: number;
  finalPrice: number;
  paymentProductType: {
    name: string;
  };
  paymentStatus: {
    name: PaymentStatusType;
  };
  paymentMethod: {
    name: string;
  };
  reservation: IReservation[];
  paymentCouponUsage: null;
  transferPaymentInfo: {
    id: number;
    senderName: string;
    noShowDeposit: number;
    lecturerBankAccount: {
      id: number;
      bankCode: string;
      holderName: string;
      accountNumber: string;
    };
  };
  refundPaymentInfo: {
    id: number;
    refundStatus: {
      id: number;
      name: string;
    };
    cancelAmount: null;
    reason: null;
    refusedReason: null;
    refundUserBankAccount: {
      id: number;
      bankCode: number;
      holderName: string;
      accountNumber: number;
    };
  };
  paymentPassUsage: null;
  userPass: null;
  user: {
    id: number;
    nickname: string;
    userProfileImage: null | string;
  };
}

export interface IUpdatePaymentStatusRequestData {
  paymentId: number;
  status: PaymentStatusType;
  cancelAmount?: number;
  refusedReason?: string;
  lectureId?: number;
}

export interface searchInstructorParameters {
  take: number;
  sortOption: 'LATEST' | 'STARS';
  value?: string;
  searchAfter?: [number, number];
  genres?: string[];
  regions?: string[];
  stars?: number;
}

export interface searchBestInstructorData {
  id: number;
  nickname: string;
  profileCardImageUrl: null | string;
  lecturerProfileImageUrl: {
    url: string;
  }[];
}

export interface CommonBankAccount {
  bankCode: string;
  holderName: string;
  accountNumber: string;
}

export interface bankAccount extends CommonBankAccount {
  id: number;
}

export interface GetMyMembersParameter extends PagenationFilterState {
  sortOption: 'LATEST' | 'ASC' | 'HIGHEST_APPLICANTS';
  filterOption: 'ALL' | 'IN_PROGRESS' | 'COMPLETED';
  lectureId?: number;
}

export interface GetMyMembersData {
  count: number;
  item: MemberData[];
}

export interface MemberData {
  id: number;
  enrollmentCount: number;
  memo: string | null;
  user: MemberInfo;
  reservation: Reservation;
}

export interface Reservation {
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
    lecture: {
      id: number;
      title: string;
      imageUrl: string;
    };
  };
  regularLectureStatus: {
    id: number;
    day: FILTER_WEEK;
    dateTime: string[];
    numberOfParticipants: number;
    lecture: {
      id: number;
      title: string;
    };
    regularLectureSchedule: {
      id: number;
      day: number;
      startDateTime: string;
      endDateTime: string;
    }[];
  };
}

export interface MemberInfo extends UserInfo {
  memo: string | null;
}

export interface UserInfo {
  id: number;
  nickname: string;
  phoneNumber: string;
  userProfileImage: string;
}

export interface GetMyMemberData {
  createdAt: string;
  updatedAt: string;
  id: number;
  originalPrice: number;
  finalPrice: number;
  paymentProductType: {
    name: string;
  };
  paymentCouponUsage: {
    couponId: number;
    couponTitle: string;
    couponPercentage: number;
    couponDiscountPrice: number;
    couponMaxDiscountPrice: number;
    stackableCouponId: number;
    stackableCouponTitle: string;
    stackableCouponPercentage: number;
    stackableCouponDiscountPrice: number;
    stackableCouponMaxDiscountPrice: number;
  };
  reservation: Reservation;
  paymentPassUsage: {
    usedCount: number;
    lecturePass: {
      createdAt: string;
      updatedAt: string;
      id: number;
      title: number;
      price: number;
      maxUsageCount: number;
      availableMonths: number;
    };
  };
  userPass: {
    id: number;
    remainingUses: number;
    isEnabled: true;
    startAt: string;
    endAt: string;
  };
}

export interface GetMyMemberPassesData {
  remainingUses: number;
  startAt: string;
  endAt: string;
  lecturePass: {
    createdAt: string;
    updatedAt: string;
    id: number;
    title: number;
    price: number;
    maxUsageCount: number;
    availableMonths: number;
  };
}

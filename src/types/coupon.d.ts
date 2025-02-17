import { PagenationFilterState } from '@/types/types';

interface ValidityPeriod {
  startDate: string;
  endDate: string;
}

interface BaseCouponData {
  title: string;
  isStackable: boolean;
  maxDiscountAmount?: number;
  validityPeriod: ValidityPeriod;
  couponQuantity: '원' | '%';
  discountValue: number;
  isPrivate: boolean;
  lectureIds: SelectClassType[];
}

interface CouponDataWithDiscount extends BaseCouponData {
  couponDistributionCount: number;
  maxUsageCount?: never;
}

interface CouponDataWithLimit extends BaseCouponData {
  couponDistributionCount?: never;
  maxUsageCount: boolean;
}

export type CouponData = CouponDataWithDiscount | CouponDataWithLimit;

interface lectureCouponTarget {
  lecture: {
    id: number;
    title: string;
  };
}

export interface userCouponGET {
  id: number;
  lectureCouponId: number;
  isUsed: boolean;
  updatedAt: string;
  lectureCoupon: {
    title: string;
    isPrivate: boolean;
    maxUsageCount: number | null;
    usageCount: number;
    percentage: number | null;
    discountPrice: number;
    maxDiscountPrice: number;
    startAt: string;
    endAt: string;
    isDisabled: boolean;
    isStackable: boolean;
    lectureCouponTarget: lectureCouponTarget[];
  };
}

export interface couponGET {
  createdAt: Date;
  updatedAt: Date;
  startAt: string;
  endAt: string;
  id: number;
  title: string;
  discountPrice: number;
  isDisabled: boolean;
  isPrivate: boolean;
  isStackable: boolean;
  lectureCouponTarget: lectureCouponTarget[];
  maxDiscountPrice: number;
  maxUsageCount: number;
  percentage: number;
  isOwned?: boolean;
  lectureCouponId?: number;
}

export interface IprivateCoupon {
  id: number;
  title: string;
  percentage: number;
  discountPrice: number;
  startAt: string;
  endAt: string;
  isStackable: boolean;
  maxDiscountPrice: number;
  lectureCouponTarget: lectureCouponTarget[];
}

export interface IgetCouponLists {
  count: number;
  item: couponGET[];
}

export interface IcouponsData {
  totalItemCount: number;
  itemList?: couponGET[];
}

export interface IuserCouponsData {
  totalItemCount: number;
  itemList: userCouponGET[];
}

export interface createCoupon {
  createdAt: Date;
  updatedAt: Date;
  startAt: string;
  endAt: string;
  id: number;
  title: string;
  discountPrice: number;
  isDisabled: boolean;
  isPrivate: boolean;
  isStackable: boolean;
  lectureCouponTarget: {
    value: number;
    label: string;
  }[];
  maxDiscountPrice: number;
  maxUsageCount: number;
  percentage: number;
}

export interface SelectCoupon {
  value: couponGET;
  label: string;
}

export type SelectCoupons = SelectCoupon[];

export interface SelectClassType {
  value: string | number;
  label: string;
}

export interface OptionType {
  value: number | string;
  label: string;
}

export interface baseCouponData {
  title: string;
  percentage: number | undefined;
  discountPrice: number | undefined;
  maxDiscountPrice: number | undefined;
  maxUsageCount: number | undefined;
  endAt: Date;
  isStackable: boolean;
  isPrivate: boolean;
  lectureIds: number[];
}

export interface createCouponData extends baseCouponData {
  startAt: Date;
}

export interface updateCouponData extends baseCouponData {}

export type StatusOptionType = 'AVAILABLE' | 'DISABLED';

export type passStatusOptionType = 'USED' | 'EXPIRED';

export type FilterOption =
  | 'LATEST'
  | 'UPCOMING'
  | 'HIGHEST_PRICE'
  | 'BEST_SELLING';

export interface ISearchParams {
  take?: number;
  couponStatusOption?: StatusOptionType;
  passStatusOptions?: StatusOptionType;
  filterOption?: FilterOption;
  lectureId?: number;
}

export interface IgetFunction extends PagenationFilterState {
  passStatusOptions?: StatusOptionType | passStatusOptionType;
  couponStatusOption?: StatusOptionType | passStatusOptionType;
  filterOption: FilterOption;
  lectureId?: string | number;
}

export interface IFilterState {
  isInterested: 'COUPON' | 'PASS';
  passStatusOptions: StatusOptionType | passStatusOptionType;
  filterOption: FilterOption;
  selectedClass: { value: string; label: string } | null;
  currentPage: number;
  targetPage: number;
}

export interface IonChangeItemList {
  type: 'COUPON' | 'PASS';
  itemList: any[];
  prevPage?: boolean;
}

export interface IgetListFunctionHandler {
  type: 'COUPON' | 'PASS';
  data: IgetFunction;
  signal?: AbortSignal;
}

export interface IclassCouponList {
  lectureCoupon: IclassCoupon;
}

export interface IclassCoupon {
  id: number;
  title: string;
  maxUsageCount: number;
  percentage: number;
  discountPrice: number;
  maxDiscountPrice: number;
  isStackable: boolean;
  startAt: string;
  endAt: string;
  createdAt: Date;
  isDisabled: boolean;
  isPrivate: boolean;
  lectureCouponTarget: lectureCouponTarget[];
  isOwned?: boolean;
}

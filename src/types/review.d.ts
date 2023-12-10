export interface WriteReview {
  id: number;
  lectureId: number;
  userId: number;
  reservationId: number;
  stars: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  lecture: {
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
    deletedAt: string | null;
  };
  reservation: {
    lectureSchedule: string;
  };
  _count: {
    likedLectureReview: number;
  };
}

export interface ReservationDetails {
  id: number;
  userId: number;
  paymentId: number;
  lectureScheduleId: number;
  representative: string;
  phoneNumber: string;
  participants: number;
  requests?: string;
  isEnabled: boolean;
  lectureSchedule: {
    lecture: {
      title: string;
    };
    startDateTime: string;
  };
}

export interface SelectClassType {
  value: ReservationDetails;
  label: string;
}

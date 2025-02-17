'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { postLecturerReport, postUserReport } from '@/lib/apis/reportApis';
import { useUserStore } from '@/store';
import { UniqueButton } from '@/components/Button';
import ReportCheckBox from '@/components/CheckBox/ReportCheckBox';
import { ReportFormData, ReportType, IReportRequest } from '@/types/report.d';

const Report = () => {
  const loggedInUserType = useUserStore((state) => state.userType);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { register, handleSubmit } = useForm<ReportFormData>();

  const onSubmit = async (data: ReportFormData) => {
    const reportTypes: ReportType[] = [];

    for (const [key, value] of Object.entries(data)) {
      if (value === true) {
        const reportTypeKey = Object.keys(ReportType).find(
          (type) => ReportType[type as keyof typeof ReportType] === key,
        ) as ReportType;
        reportTypes.push(reportTypeKey);
      }
    }

    if (reportTypes.length === 0) {
      toast.error('신고 유형을 한개 이상 입력해주세요!');
      return;
    }

    const requestData: IReportRequest = {
      reportTypes,
      reason: data.reportDetail,
    };

    for (const [key, value] of searchParams.entries()) {
      if (
        ['targetUserId', 'targetLecturerId', 'lectureReviewId'].includes(key)
      ) {
        requestData[
          key as 'targetUserId' | 'targetLecturerId' | 'lectureReviewId'
        ] = Number(value);
      }
    }

    if (!requestData) return;

    const response =
      loggedInUserType === 'user'
        ? await postUserReport(requestData)
        : await postLecturerReport(requestData);

    if (response === 201) {
      toast.success('신고가 성공적으로 접수되었습니다!');
      router.back();
    } else if (response === 400) {
      toast.error('이미 신고가 접수되었습니다!');
    } else {
      toast.error(`신고 접수에 실패하였습니다. ${(<br />)}다시 시도해주세요!`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex min-w-[400px] max-w-[25.5rem] flex-col rounded-md shadow-float"
    >
      <h1 className="w-full border-b border-solid border-gray-700 py-4 text-center text-lg font-semibold">
        신고하기
      </h1>
      <ul className="mb-7 mt-6 grid w-full grid-cols-2 gap-y-3 px-6">
        {Object.values(ReportType).map((reason, i) => (
          <ReportCheckBox key={i} label={reason} register={register} />
        ))}
      </ul>

      <section className="px-6">
        <h2 className="mb-1.5 text-base font-semibold">신고사유</h2>
        <textarea
          {...register('reportDetail')}
          placeholder="비방, 욕설, 잘못된 정보 등 신고 사유를 구체적으로 작성해주세요."
          className="text-normal h-[7.75rem] w-full resize-none whitespace-pre-wrap break-keep rounded-md border border-solid border-gray-500 px-3.5 py-2.5 text-sm font-normal text-gray-100 focus:outline-sub-color1"
        />
      </section>
      <div className="my-4 mr-6 w-20 self-end">
        <UniqueButton size="small" color="secondary" type="submit">
          제출하기
        </UniqueButton>
      </div>
    </form>
  );
};

export default Report;

import { NoticeSVG } from '@/icons/svg';

interface INoticeProps {
  content: React.ReactNode;
  updateDate: string;
}
const Notice = ({ content, updateDate }: INoticeProps) => {
  return (
    <div className="w-full whitespace-nowrap rounded-[0.63rem] border border-solid border-sub-color1 p-[0.96rem] text-sm">
      <h2 className="mb-2 flex items-center font-bold text-sub-color1">
        <NoticeSVG
          width="20"
          height="15"
          className="mr-[0.38rem] fill-sub-color1 stroke-sub-color1"
        />
        공지사항
        <span className="flex w-full justify-end">{updateDate}</span>
      </h2>
      <div>{content}</div>
    </div>
  );
};

export default Notice;

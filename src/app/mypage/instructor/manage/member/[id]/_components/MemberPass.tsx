import Link from 'next/link';
import { GetMyMemberPassesData } from '@/types/instructor';

interface MemberPassProps {
  pass: GetMyMemberPassesData;
}

const MemberPass = ({ pass }: MemberPassProps) => {
  const { remainingUses, lecturePass } = pass;
  const { price, title, availableMonths } = lecturePass;

  return (
    <Link href="/mypage/instructor/pass">
      <dl className="group flex flex-col justify-evenly gap-1 p-3 text-sm shadow-float">
        <div className="mb-3 flex justify-between text-xl text-main-color">
          <dd className="font-bold">{remainingUses}회</dd>
          <dd>{price.toLocaleString()}원</dd>
        </div>
        <dt>{title}</dt>
        <div className="flex justify-between">
          <dd>{availableMonths}개월</dd>
          <dd className="font-semibold text-gray-500 group-hover:text-sub-color1">
            패스권 관리
          </dd>
        </div>
      </dl>
    </Link>
  );
};

export default MemberPass;

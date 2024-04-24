import { AlarmSVG } from '@/icons/svg';
import ProfileImg from '../Profile/ProfileImage';
import { MemberData } from '@/types/instructor';

interface NotificationSenderModalProps {
  memberList: MemberData[];
}

const NotificationSenderModal = ({
  memberList,
}: NotificationSenderModalProps) => {
  return (
    <article className="relative grid size-full max-w-[39rem] grid-rows-[auto_1fr] sm:h-auto sm:w-screen">
      <header className="flex gap-2 border-b border-solid border-gray-500 px-5 py-6 text-lg font-bold">
        <AlarmSVG width="31" height="31" className="fill-black" />
        알림 보내기
      </header>
      <section className="grid grid-rows-[1fr_auto_3fr] overflow-hidden px-4 pb-6 pt-2 text-sm sm:block">
        <textarea
          className="w-full resize-none rounded-md border border-sub-color1 px-5 py-3 outline-none sm:h-[6.563rem]"
          placeholder="수강생에게 전달할 알림 메세지를 적어주세요."
        />
        <div className="mb-4 mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <input
              id="allSelect"
              type="checkbox"
              className="size-[18px] accent-sub-color1"
            />
            <label htmlFor="allSelect" className="cursor-pointer">
              전체선택
            </label>
            <p className="text-base font-bold">{1000}명</p>
          </div>
          <button className="rounded-md border border-solid border-black bg-white px-[6px] py-[5px] text-black hover:bg-black/10 active:bg-black active:text-white">
            {1000}명에게 전송하기
          </button>
        </div>
        <ul className="grid max-h-full grid-cols-2 gap-y-4 overflow-y-scroll sm:max-h-72">
          {Array.from({ length: 100 }, (_, index) => (
            <li className="flex h-fit items-center" key={index}>
              <input
                id="aa"
                type="checkbox"
                className="mr-2 size-[18px] accent-sub-color1"
              />
              <label htmlFor="aa" className="cursor-pointer">
                <ProfileImg src={null} size="small" nickname="tet" />
              </label>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default NotificationSenderModal;

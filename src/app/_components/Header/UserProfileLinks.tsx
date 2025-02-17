import Link from 'next/link';
import { SearchSVG } from '@/icons/svg';
import NotificationIndicator from './NotificationIndicator';
import Profile from './Profile';
import { profileInfo, userType } from '@/types/auth';

interface UserProfileLinksProps {
  authUser: profileInfo | null;
  userType: userType | null;
  isMobile: boolean;
}

const UserProfileLinks = ({
  authUser,
  userType,
  isMobile,
}: UserProfileLinksProps) => {
  return (
    <div className="flex items-end gap-3">
      <h2 className="text-0 overflow-hidden indent-[-9999px]">
        Connection 유저 메뉴
      </h2>

      <Link href="/search" aria-label="통합 검색">
        <SearchSVG className="h-[1.8rem] w-[1.8rem] fill-black" />
      </Link>

      {!authUser && (
        <Link href="/login" className="text-lg font-medium">
          로그인/회원가입
        </Link>
      )}

      {authUser && userType && (
        <>
          <NotificationIndicator
            id={authUser.id}
            userType={userType}
            isMobile={isMobile}
          />

          <Profile defaultProfileImg={authUser.profileImage} />
        </>
      )}
    </div>
  );
};

export default UserProfileLinks;

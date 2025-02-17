import { useEffect, useMemo, useRef, useState } from 'react';
import { useDebounce } from 'react-use';
import { ArrowRightSVG, CloseSVG, SearchSVG } from '@/icons/svg';
import { useChatStore } from '@/store';
import { ChatRoom } from '@/types/chat';

interface ChatHeaderProps {
  selectChatRoom: ChatRoom | null;
  isSm: boolean;
  chatSelectHandler: (chatRoom: ChatRoom | null) => void;
  StartChatPositionDrag: (event: React.PointerEvent<HTMLElement>) => void;
  searchChatRoomList: (searchValue: string) => void;
}

const ChatHeader = ({
  isSm,
  selectChatRoom,
  StartChatPositionDrag,
  chatSelectHandler,
  searchChatRoomList,
}: ChatHeaderProps) => {
  const { setChatView } = useChatStore((state) => ({
    setChatView: state.setChatView,
  }));
  const initialized = useRef(false);
  const [search, setSearch] = useState({ view: false, value: '' });
  const searchInputRef = useRef<HTMLInputElement>(null);

  const chatFirstRenderIsSm = useMemo(() => isSm, []);

  useEffect(() => {
    if (!initialized.current && chatFirstRenderIsSm) {
      window.history.pushState(null, '', '');

      initialized.current = true;
      return;
    }

    return () => {
      window.onpopstate = null;
    };
  }, []);

  useEffect(() => {
    window.onpopstate = () => {
      if (selectChatRoom) {
        chatSelectHandler(null);
      } else {
        setChatView(false);
      }
      window.onpopstate = null;
    };
  }, [selectChatRoom]);

  useEffect(() => {
    if (search.view && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [search.view]);

  const searchViewBlur = () => {
    if (!search.value) {
      setSearch((prev) => ({ ...prev, view: false }));
    }
  };

  const searchValue = () => {
    searchChatRoomList(search.value);
  };

  useDebounce(searchValue, 300, [search.value]);

  const searchViewHandler = () => {
    setSearch((prev) => ({ ...prev, view: true }));
  };

  const closeChatView = () => {
    if (chatFirstRenderIsSm) {
      window.history.back();
      if (selectChatRoom) {
        window.history.back();
      }
    } else {
      setChatView(false);
    }
  };

  return (
    <header
      onPointerDown={StartChatPositionDrag}
      className="relative flex h-16 cursor-move items-center justify-between gap-2 px-4 pt-6 sm:h-10 sm:items-start sm:bg-[#414141] sm:pb-2 sm:pl-3 sm:pr-1 sm:pt-2 sm:text-white"
    >
      <div className="pointer-events-none absolute -left-2 -top-2 -z-10 hidden h-[calc(100%+0.5rem)] w-[calc(100%+1rem)] rounded-t-md bg-[#414141] sm:block" />
      {!isSm || !selectChatRoom ? (
        <div
          className={`${
            search.view ? 'border-b border-gray-500' : ''
          } flex w-full gap-1 sm:max-w-[17rem]`}
        >
          {search.view ? (
            <input
              value={search.value}
              onChange={(e) =>
                setSearch((prev) => ({ ...prev, value: e.target.value }))
              }
              ref={searchInputRef}
              placeholder="검색"
              type="search"
              onBlur={searchViewBlur}
              className="h-[26px] w-full bg-transparent outline-none placeholder:text-gray-500"
            />
          ) : (
            <h1 className="font-semibold">채팅</h1>
          )}
          <button
            onClick={search.view ? searchValue : searchViewHandler}
            className="mr-2"
          >
            <SearchSVG className="size-[21px] fill-gray-300 sm:fill-white" />
          </button>
        </div>
      ) : (
        <PrevChatListBtn />
      )}
      <button onClick={closeChatView}>
        <CloseSVG className="size-[21px] stroke-gray-300 stroke-2 sm:stroke-white" />
      </button>
    </header>
  );
};

export default ChatHeader;

const PrevChatListBtn = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      window.history.pushState(null, '', '');

      initialized.current = true;
      return;
    }
  }, []);

  return (
    <button
      onClick={() => window.history.back()}
      className="flex items-center gap-1 font-semibold"
    >
      <ArrowRightSVG className="size-7 rotate-180 stroke-black" />
      채팅목록
    </button>
  );
};

const dummyUserInputSuggestion = [
  '댄스',
  '댄스 영상',
  '댄서',
  '댄스팀',
  '레슨',
  '방송댄스',
  '폴댄스',
  '댄싱',
];

const dummySearchData = {
  popular: [
    '스트릿 우먼 파이터',
    '원데이 클래스',
    '커스틴',
    'K-pop',
    '원밀리언',
  ],
  suggestion: [
    'K-pop',
    '원데이 클래스',
    '스트릿 댄스',
    '댄스 초보 수업',
    '기본기 클래스',
  ],
  userKeywords: ['K-pop', '원데이 클래스', '스트릿 댄스'],
};

const dummyClass = {
  classImg: [],
  title: '원밀리언 댄스 스튜디오 with 리아킴에게 배우는 댄스 입문',
  review: {
    average: 4.17,
    count: '2,324',
    reviewer: [
      {
        nickname: 'nickname',
        average: 4,
        content: '후기 350자 제한, 답글은 안다는걸로, 사진은 없는걸로',
        src: null,
        date: '2023.07.11',
        title: '가비쌤과 함께하는 왁킹 클래스',
      },
      {
        nickname: 'nickname1',
        average: 4,
        content: '후기 350자 제한, 답글은 안다는걸로, 사진은 없는걸로',
        src: null,
        date: '2023.07.11',
        title: '가비쌤과 함께하는 왁킹 클래스',
      },
      {
        nickname: 'nickname2',
        average: 2,
        content: '후기 350자 제한, 답글은 안다는걸로, 사진은 없는걸로',
        src: null,
        date: '2023.07.11',
        title: '가비쌤과 함께하는 왁킹 클래스',
      },
      {
        nickname: 'nickname3',
        average: 3,
        content: '후기 350자 제한, 답글은 안다는걸로, 사진은 없는걸로',
        src: null,
        date: '2023.07.11',
        title: '가비쌤과 함께하는 왁킹 클래스',
      },
    ],
  },
  location: '서울시 마포구',
  locationDetail: '서울 특별시 성동구 뚝섬로 13길 33',
  studioName: '원밀리언 댄스 스튜디오',
  duration: '1시간',
  method: '그룹레슨(6인)',
  level: '초급',
  notice: {
    content: `* 수업별 최소 시작 인원은 2명입니다. * 개인, 그룹레슨은 아래 수업내용 참고 후 문의 주세요.`,
    lastDate: '2023-10-27',
  },
  profile: {
    src: null,
    nickname: '리아킴',
    id: 1,
  },

  intro:
    '원데이 단체, 개인레슨, 그룹레슨(친구와)으로 댄스를 맘껏 배워보고   개인소장 영상까지 간직할 수 있는 클래스입니다.몸쓰는 방법,  안무디테일 최대한 잡아드리며 알려드립니다. (초보자분들도 어려움없이  따라오실 수 있도록 도와드려요!) 개인, 그룹레슨 진행원하실 경우  문의바랍니다 :)',
  curriculum: '',
  schedule: {
    date: '08/30~09/25',
  },
  dateTimeData: {
    '09월 09일 (토)': {
      time: ['11:00-12:00', '14:00-15:00'],
    },
    '09월 11일 (월)': {
      time: ['10:00-11:00', '13:00-14:00'],
    },
  },
  coupon: 2,
  price: {
    origin: '120,000',
    discount: '80,000',
  },
};

const dummyImgURL = [
  'https://img.freepik.com/free-photo/pretty-woman-practising-hip-hop-dance_107420-85008.jpg?size=626&ext=jpg',
  'https://img.freepik.com/free-photo/girl-dancing-hip-hop-in-stylish-clothes-on-gradient-background-at-dance-hall-in-neon-light_155003-9249.jpg?size=626&ext=jpg',
  'https://img.freepik.com/free-photo/dance-time-stylish-men-and-woman-dancing-hip-hop-in-bright-clothes-on-green-background-at-dance-hall-in-neon-light_155003-16406.jpg?size=626&ext=jpg',
  'https://img.freepik.com/free-photo/two-beautiful-slender-girls-doing-dancing-and-gymnastics-in-the-dance-hall_1157-13817.jpg?size=626&ext=jpg',
  'https://img.freepik.com/free-photo/boy-dancing-hip-hop-in-stylish-clothes-on-gradient-background-at-dance-hall-in-neon-light_155003-9262.jpg?size=626&ext=jpg',
];

//'https://www.youtube.com/@Connection_dance'
// '@Connection_dance'
//'https://www.Connection.com'

const dummyInstructor = {
  imgURL: dummyImgURL,
  nickname: '리아킴',
  location: '서울시 마포구',
  like: false,
  genre: ['힙합', '스트릿댄스', '현대무용'],
  teamAffiliation: ['원밀리언', '프리랜서'],
  instagramID: null,
  youtubeURL: null,
  anyURL: null,
  classList: [
    {
      status: '모집중' as const,
      date: '08/04~09/25',
      title: '가비쌤과 함께하는 왁킹 클래스',
      location: ['서울 마포구'],
      genre: ['락킹', '락킹'],
      type: ['개인레슨', '단체레슨'],
      time: ['오전', '오후'],
      review: { average: 4.5, count: 14 },
      price: '80,000',
      profile: { src: undefined, nickname: 'nickname' },
      selectedDates: [
        new Date(2023, 8, 4),
        new Date(2023, 8, 6),
        new Date(2023, 8, 8),
      ],
      imgURL: [
        'https://img.freepik.com/free-photo/pretty-woman-practising-hip-hop-dance_107420-85008.jpg?size=626&ext=jpg',
        'https://img.freepik.com/free-photo/girl-dancing-hip-hop-in-stylish-clothes-on-gradient-background-at-dance-hall-in-neon-light_155003-9249.jpg?size=626&ext=jpg',
        'https://img.freepik.com/free-photo/dance-time-stylish-men-and-woman-dancing-hip-hop-in-bright-clothes-on-green-background-at-dance-hall-in-neon-light_155003-16406.jpg?size=626&ext=jpg',
        'https://img.freepik.com/free-photo/two-beautiful-slender-girls-doing-dancing-and-gymnastics-in-the-dance-hall_1157-13817.jpg?size=626&ext=jpg',
        'https://img.freepik.com/free-photo/boy-dancing-hip-hop-in-stylish-clothes-on-gradient-background-at-dance-hall-in-neon-light_155003-9262.jpg?size=626&ext=jpg',
      ],
    },
    {
      status: '마감임박' as const,
      date: '08/04~09/25',
      title: '가비쌤과 함께하는 왁킹 클래스',
      location: ['서울 마포구', '서울 동작구'],
      genre: ['락킹', '락킹'],
      type: ['개인레슨'],
      time: ['오전'],
      review: { average: 4.5, count: 14 },
      price: '80,000',
      profile: { src: undefined, nickname: 'nickname' },
      selectedDates: [new Date()],
      imgURL: [
        'https://img.freepik.com/free-photo/pretty-woman-practising-hip-hop-dance_107420-85008.jpg?size=626&ext=jpg',
        'https://img.freepik.com/free-photo/girl-dancing-hip-hop-in-stylish-clothes-on-gradient-background-at-dance-hall-in-neon-light_155003-9249.jpg?size=626&ext=jpg',
        'https://img.freepik.com/free-photo/dance-time-stylish-men-and-woman-dancing-hip-hop-in-bright-clothes-on-green-background-at-dance-hall-in-neon-light_155003-16406.jpg?size=626&ext=jpg',
        'https://img.freepik.com/free-photo/two-beautiful-slender-girls-doing-dancing-and-gymnastics-in-the-dance-hall_1157-13817.jpg?size=626&ext=jpg',
        'https://img.freepik.com/free-photo/boy-dancing-hip-hop-in-stylish-clothes-on-gradient-background-at-dance-hall-in-neon-light_155003-9262.jpg?size=626&ext=jpg',
      ],
    },
    {
      status: '마감' as const,
      date: '08/04~09/25',
      title: '가비쌤과 함께하는 왁킹 클래스',
      location: ['서울 마포구', '서울 성동구'],
      genre: ['락킹'],
      type: ['개인레슨', '단체레슨'],
      time: ['오전'],
      review: { average: 4, count: 12 },
      price: '80,000',
      profile: { src: undefined, nickname: 'nickname' },
      selectedDates: [new Date()],
      imgURL: [
        'https://img.freepik.com/free-photo/pretty-woman-practising-hip-hop-dance_107420-85008.jpg?size=626&ext=jpg',
        'https://img.freepik.com/free-photo/girl-dancing-hip-hop-in-stylish-clothes-on-gradient-background-at-dance-hall-in-neon-light_155003-9249.jpg?size=626&ext=jpg',
        'https://img.freepik.com/free-photo/dance-time-stylish-men-and-woman-dancing-hip-hop-in-bright-clothes-on-green-background-at-dance-hall-in-neon-light_155003-16406.jpg?size=626&ext=jpg',
        'https://img.freepik.com/free-photo/two-beautiful-slender-girls-doing-dancing-and-gymnastics-in-the-dance-hall_1157-13817.jpg?size=626&ext=jpg',
        'https://img.freepik.com/free-photo/boy-dancing-hip-hop-in-stylish-clothes-on-gradient-background-at-dance-hall-in-neon-light_155003-9262.jpg?size=626&ext=jpg',
      ],
    },
  ],
  review: {
    average: 4.17,
    count: '2,324',
    reviewer: [
      {
        nickname: 'nickname',
        average: 4,
        content: '후기 350자 제한, 답글은 안다는걸로, 사진은 없는걸로',
        src: null,
        date: '2023.07.11',
        title: '가비쌤과 함께하는 왁킹 클래스',
      },
      {
        nickname: 'nickname1',
        average: 4,
        content: '후기 350자 제한, 답글은 안다는걸로, 사진은 없는걸로',
        src: null,
        date: '2023.07.11',
        title: '가비쌤과 함께하는 왁킹 클래스',
      },
      {
        nickname: 'nickname2',
        average: 2,
        content: '후기 350자 제한, 답글은 안다는걸로, 사진은 없는걸로',
        src: null,
        date: '2023.07.11',
        title: '가비쌤과 함께하는 왁킹 클래스',
      },
      {
        nickname: 'nickname3',
        average: 3,
        content: '후기 350자 제한, 답글은 안다는걸로, 사진은 없는걸로',
        src: null,
        date: '2023.07.11',
        title: '가비쌤과 함께하는 왁킹 클래스',
      },
    ],
  },
};

export {
  dummyClass,
  dummyUserInputSuggestion,
  dummySearchData,
  dummyImgURL,
  dummyInstructor,
};

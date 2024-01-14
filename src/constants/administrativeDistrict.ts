import { CityList } from '@/types/types';

export const CITY_LIST: CityList[] = [
  '서울',
  '경기',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '세종',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
];

export const WARD_LIST: { [key: string]: string[] } = {
  서울: [
    '종로구',
    '중구',
    '용산구',
    '성동구',
    '광진구',
    '동대문구',
    '중랑구',
    '성북구',
    '강북구',
    '도봉구',
    '노원구',
    '은평구',
    '서대문구',
    '마포구',
    '양천구',
    '강서구',
    '구로구',
    '금천구',
    '영등포구',
    '동작구',
    '관악구',
    '서초구',
    '강남구',
    '송파구',
    '강동구',
  ],

  경기: [
    '수원시',
    '성남시',
    '의정부시',
    '안양시',
    '고양시',
    '부천시',
    '광명시',
    '동두천시',
    '평택시',
    '안산시',
    '과천시',
    '구리시',
    '남양주시',
    '오산시',
    '시흥시',
    '군포시',
    '의왕시',
    '하남시',
    '용인시',
    '파주시',
    '이천시',
    '안성시',
    '김포시',
    '화성시',
    '광주시',
    '양주시',
    '포천시',
    '여주시',
    '연천군',
    '가평군',
    '양평군',
  ],

  부산: [
    '중구',
    '서구',
    '동구',
    '영도구',
    '부산진구',
    '동래구',
    '남구',
    '북구',
    '강서구',
    '해운대구',
    '사하구',
    '금정구',
    '연제구',
    '수영구',
    '사상구',
    '기장군',
  ],

  대구: [
    '중구',
    '동구',
    '서구',
    '남구',
    '북구',
    '수성구',
    '달서구',
    '달성군',
    '군위군',
  ],

  인천: [
    '중구',
    '동구',
    '미추홀구',
    '연수구',
    '남동구',
    '부평구',
    '계양구',
    '서구',
    '강화군',
    '옹진군',
  ],

  광주: ['동구', '서구', '남구', '북구', '광산구'],
  대전: ['동구', '중구', '서구', '유성구', '대덕구'],
  울산: ['중구', '남구', '동구', '북구', '울주군'],
  세종: ['세종'],

  강원: [
    '춘천시',
    '원주시',
    '강릉시',
    '동해시',
    '태백시',
    '속초시',
    '삼척시',
    '홍천군',
    '횡성군',
    '영월군',
    '평창군',
    '정선군',
    '철원군',
    '화천군',
    '양구군',
    '인제군',
    '고성군',
    '양양군',
  ],

  충북: [
    '충주시',
    '제천시',
    '보은군',
    '옥천군',
    '영동군',
    '증평군',
    '진천군',
    '괴산군',
    '음성군',
    '단양군',
  ],

  충남: [
    '천안시',
    '공주시',
    '보령시',
    '아산시',
    '서산시',
    '논산시',
    '계룡시',
    '당진시',
    '금산군',
    '부여군',
    '서천군',
    '청양군',
    '홍성군',
    '예산군',
    '태안군',
  ],

  전북: [
    '전주시',
    '군산시',
    '익산시',
    '정읍시',
    '남원시',
    '김제시',
    '완주군',
    '진안군',
    '무주군',
    '장수군',
    '임실군',
    '순창군',
    '고창군',
    '부안군',
  ],

  전남: [
    '목포시',
    '여수시',
    '순천시',
    '나주시',
    '광양시',
    '담양군',
    '곡성군',
    '구례군',
    '고흥군',
    '보성군',
    '화순군',
    '장흥군',
    '강진군',
    '해남군',
    '영암군',
    '무안군',
    '함평군',
    '영광군',
    '장성군',
    '완도군',
    '진도군',
    '신안군',
  ],

  경북: [
    '포항시',
    '경주시',
    '김천시',
    '안동시',
    '구미시',
    '영주시',
    '영천시',
    '상주시',
    '문경시',
    '경산시',
    '의성군',
    '청송군',
    '영양군',
    '영덕군',
    '청도군',
    '고령군',
    '성주군',
    '칠곡군',
    '예천군',
    '봉화군',
    '울진군',
    '울릉군',
  ],

  경남: [
    '창원시',
    '진주시',
    '통영시',
    '사천시',
    '김해시',
    '밀양시',
    '거제시',
    '양산시',
    '의령군',
    '함안군',
    '창녕군',
    '고성군',
    '남해군',
    '하동군',
    '산청군',
    '함양군',
    '거창군',
    '합천군',
  ],
  제주: ['서귀포시', '제주시'],
};

export const CITY_FULL_NAME: { [key: string]: string } = {
  서울: '서울특별시',
  부산: '부산광역시',
  대구: '대구광역시',
  인천: '인천광역시',
  광주: '광주광역시',
  대전: '대전광역시',
  울산: '울산광역시',
  세종: '세종특별자치시',
  경기: '경기도',
  강원: '강원특별자치도',
  충북: '충청북도',
  충남: '충청남도',
  전북: '전라북도',
  전남: '전라남도',
  경북: '경상북도',
  경남: '경상남도',
  제주: '제주특별자치도',
};

export const CITY_ABBREVIATION_NAME: { [key: string]: string } = {
  서울특별시: '서울', //S
  부산광역시: '부산', //B
  대구광역시: '대구', //DK
  인천광역시: '인천', //I
  광주광역시: '광주', //KG
  대전광역시: '대전', //DG
  울산광역시: '울산', //U
  세종특별자치시: '세종', //SG
  경기도: '경기', //K
  강원특별자치도: '강원', //KO
  충청북도: '충북', //CB
  충청남도: '충남', //CN
  전라북도: '전북', //JB
  전라남도: '전남', //JN
  경상북도: '경북', //KB
  경상남도: '경남', //KN
  제주특별자치도: '제주', //J
  온라인: '온라인',
};

//서울특별시 종로구, 중구, 용산구 선택 => LC = S-2%3%4
export const CITY_CODE: { [key: string]: string } = {
  서울: 'S',
  부산: 'B',
  대구: 'DK',
  인천: 'I',
  광주: 'KG',
  대전: 'DG',
  울산: 'U',
  세종: 'SG',
  경기: 'K',
  강원: 'KO',
  충북: 'CB',
  충남: 'CN',
  전북: 'JB',
  전남: 'JN',
  경북: 'KB',
  경남: 'KN',
  제주: 'J',
};

export const WARD_CODE: {
  [key: string]: {
    [ward: string]: number;
  };
} = {
  S: {
    '전 지역': 1,
    종로구: 2,
    중구: 3,
    용산구: 4,
    성동구: 5,
    광진구: 6,
    동대문구: 7,
    중랑구: 8,
    성북구: 9,
    강북구: 10,
    도봉구: 11,
    노원구: 12,
    은평구: 13,
    서대문구: 14,
    마포구: 15,
    양천구: 16,
    강서구: 17,
    구로구: 18,
    금천구: 19,
    영등포구: 20,
    동작구: 21,
    관악구: 22,
    서초구: 23,
    강남구: 24,
    송파구: 25,
    강동구: 26,
  },
  B: {
    '전 지역': 1,
    중구: 2,
    서구: 3,
    동구: 4,
    영도구: 5,
    부산진구: 6,
    동래구: 7,
    남구: 8,
    북구: 9,
    강서구: 10,
    해운대구: 11,
    사하구: 12,
    금정구: 13,
    연제구: 14,
    수영구: 15,
    사상구: 16,
    기장군: 17,
  },
  DK: {
    '전 지역': 1,
    중구: 2,
    동구: 3,
    서구: 4,
    남구: 5,
    북구: 6,
    수성구: 7,
    달서구: 8,
    달성군: 9,
    군위군: 10,
  },
  I: {
    '전 지역': 1,
    중구: 2,
    동구: 3,
    미추홀구: 4,
    연수구: 5,
    남동구: 6,
    부평구: 7,
    계양구: 8,
    서구: 9,
    강화군: 10,
    옹진군: 11,
  },
  KG: {
    '전 지역': 1,
    동구: 2,
    서구: 3,
    남구: 4,
    북구: 5,
    광산구: 6,
  },
  DG: {
    '전 지역': 1,
    동구: 2,
    중구: 3,
    서구: 4,
    유성구: 5,
    대덕구: 6,
  },
  U: {
    '전 지역': 1,
    중구: 2,
    남구: 3,
    동구: 4,
    북구: 5,
    울주군: 6,
  },
  SG: {
    '전 지역': 1,
  },
  K: {
    '전 지역': 1,
    수원시: 2,
    성남시: 3,
    의정부시: 4,
    안양시: 5,
    고양시: 6,
    부천시: 7,
    광명시: 8,
    동두천시: 9,
    평택시: 10,
    안산시: 11,
    과천시: 12,
    구리시: 13,
    남양주시: 14,
    오산시: 15,
    시흥시: 16,
    군포시: 17,
    의왕시: 18,
    하남시: 19,
    용인시: 20,
    파주시: 21,
    이천시: 22,
    안성시: 23,
    김포시: 24,
    화성시: 25,
    광주시: 26,
    양주시: 27,
    포천시: 28,
    여주시: 29,
    연천군: 30,
    가평군: 31,
    양평군: 32,
  },
  KO: {
    '전 지역': 1,
    춘천시: 2,
    원주시: 3,
    강릉시: 4,
    동해시: 5,
    태백시: 6,
    속초시: 7,
    삼척시: 8,
    홍천군: 9,
    횡성군: 10,
    영월군: 11,
    평창군: 12,
    정선군: 13,
    철원군: 14,
    화천군: 15,
    양구군: 16,
    인제군: 17,
    고성군: 18,
    양양군: 19,
  },
  CB: {
    '전 지역': 1,
    충주시: 2,
    제천시: 3,
    보은군: 4,
    옥천군: 5,
    영동군: 6,
    증평군: 7,
    진천군: 8,
    괴산군: 9,
    음성군: 10,
    단양군: 11,
  },

  CN: {
    '전 지역': 1,
    천안시: 2,
    공주시: 3,
    보령시: 4,
    아산시: 5,
    서산시: 6,
    논산시: 7,
    계룡시: 8,
    당진시: 9,
    금산군: 10,
    부여군: 11,
    서천군: 12,
    청양군: 13,
    홍성군: 14,
    예산군: 15,
    태안군: 16,
  },

  JB: {
    '전 지역': 1,
    전주시: 2,
    군산시: 3,
    익산시: 4,
    정읍시: 5,
    남원시: 6,
    김제시: 7,
    완주군: 8,
    진안군: 9,
    무주군: 10,
    장수군: 11,
    임실군: 12,
    순창군: 13,
    고창군: 14,
    부안군: 15,
  },
  JN: {
    '전 지역': 1,
    목포시: 2,
    여수시: 3,
    순천시: 4,
    나주시: 5,
    광양시: 6,
    담양군: 7,
    곡성군: 8,
    구례군: 9,
    고흥군: 10,
    보성군: 11,
    화순군: 12,
    장흥군: 13,
    강진군: 14,
    해남군: 15,
    영암군: 16,
    무안군: 17,
    함평군: 18,
    영광군: 19,
    장성군: 20,
    완도군: 21,
    진도군: 22,
    신안군: 23,
  },

  KB: {
    '전 지역': 1,
    포항시: 2,
    경주시: 3,
    김천시: 4,
    안동시: 5,
    구미시: 6,
    영주시: 7,
    영천시: 8,
    상주시: 9,
    문경시: 10,
    경산시: 11,
    의성군: 12,
    청송군: 13,
    영양군: 14,
    영덕군: 15,
    청도군: 16,
    고령군: 17,
    성주군: 18,
    칠곡군: 19,
    예천군: 20,
    봉화군: 21,
    울진군: 22,
    울릉군: 23,
  },
  KN: {
    '전 지역': 1,
    창원시: 2,
    진주시: 3,
    통영시: 4,
    사천시: 5,
    김해시: 6,
    밀양시: 7,
    거제시: 8,
    양산시: 9,
    의령군: 10,
    함안군: 11,
    창녕군: 12,
    고성군: 13,
    남해군: 14,
    하동군: 15,
    산청군: 16,
    함양군: 17,
    거창군: 18,
    합천군: 19,
  },

  J: {
    '전 지역': 1,
    서귀포시: 2,
    제주시: 3,
  },
};

export const LOCATION_CODE: {
  [key: string]: {
    [code: string]: string;
  };
} = {
  S: {
    1: '서울특별시 전 지역',
    2: '서울특별시 종로구',
    3: '서울특별시 중구',
    4: '서울특별시 용산구',
    5: '서울특별시 성동구',
    6: '서울특별시 광진구',
    7: '서울특별시 동대문구',
    8: '서울특별시 중랑구',
    9: '서울특별시 성북구',
    10: '서울특별시 강북구',
    11: '서울특별시 도봉구',
    12: '서울특별시 노원구',
    13: '서울특별시 은평구',
    14: '서울특별시 서대문구',
    15: '서울특별시 마포구',
    16: '서울특별시 양천구',
    17: '서울특별시 강서구',
    18: '서울특별시 구로구',
    19: '서울특별시 금천구',
    20: '서울특별시 영등포구',
    21: '서울특별시 동작구',
    22: '서울특별시 관악구',
    23: '서울특별시 서초구',
    24: '서울특별시 강남구',
    25: '서울특별시 송파구',
    26: '서울특별시 강동구',
  },
  B: {
    1: '부산광역시 전 지역',
    2: '부산광역시 중구',
    3: '부산광역시 서구',
    4: '부산광역시 동구',
    5: '부산광역시 영도구',
    6: '부산광역시 부산진구',
    7: '부산광역시 동래구',
    8: '부산광역시 남구',
    9: '부산광역시 북구',
    10: '부산광역시 강서구',
    11: '부산광역시 해운대구',
    12: '부산광역시 사하구',
    13: '부산광역시 금정구',
    14: '부산광역시 연제구',
    15: '부산광역시 수영구',
    16: '부산광역시 사상구',
    17: '부산광역시 기장군',
  },
  DK: {
    1: '대구광역시 전 지역',
    2: '대구광역시 중구',
    3: '대구광역시 동구',
    4: '대구광역시 서구',
    5: '대구광역시 남구',
    6: '대구광역시 북구',
    7: '대구광역시 수성구',
    8: '대구광역시 달서구',
    9: '대구광역시 달성군',
    10: '대구광역시 군위군',
  },
  I: {
    1: '인천광역시 전 지역',
    2: '인천광역시 중구',
    3: '인천광역시 동구',
    4: '인천광역시 미추홀구',
    5: '인천광역시 연수구',
    6: '인천광역시 남동구',
    7: '인천광역시 부평구',
    8: '인천광역시 계양구',
    9: '인천광역시 서구',
    10: '인천광역시 강화군',
    11: '인천광역시 옹진군',
  },
  KG: {
    1: '광주광역시 전 지역',
    2: '광주광역시 동구',
    3: '광주광역시 서구',
    4: '광주광역시 남구',
    5: '광주광역시 북구',
    6: '광주광역시 광산구',
  },
  DG: {
    1: '대전광역시 전 지역',
    2: '대전광역시 동구',
    3: '대전광역시 중구',
    4: '대전광역시 서구',
    5: '대전광역시 유성구',
    6: '대전광역시 대덕구',
  },
  U: {
    1: '울산광역시 전 지역',
    2: '울산광역시 중구',
    3: '울산광역시 남구',
    4: '울산광역시 동구',
    5: '울산광역시 북구',
    6: '울산광역시 울주군',
  },
  SG: {
    1: '세종특별자치시 전 지역',
  },
  K: {
    1: '경기도 전 지역',
    2: '경기도 수원시',
    3: '경기도 성남시',
    4: '경기도 의정부시',
    5: '경기도 안양시',
    6: '경기도 고양시',
    7: '경기도 부천시',
    8: '경기도 광명시',
    9: '경기도 동두천시',
    10: '경기도 평택시',
    11: '경기도 안산시',
    12: '경기도 과천시',
    13: '경기도 구리시',
    14: '경기도 남양주시',
    15: '경기도 오산시',
    16: '경기도 시흥시',
    17: '경기도 군포시',
    18: '경기도 의왕시',
    19: '경기도 하남시',
    20: '경기도 용인시',
    21: '경기도 파주시',
    22: '경기도 이천시',
    23: '경기도 안성시',
    24: '경기도 김포시',
    25: '경기도 화성시',
    26: '경기도 광주시',
    27: '경기도 양주시',
    28: '경기도 포천시',
    29: '경기도 여주시',
    30: '경기도 연천군',
    31: '경기도 가평군',
    32: '경기도 양평군',
  },
  KO: {
    1: '강원특별자치도 전 지역',
    2: '강원특별자치도 춘천시',
    3: '강원특별자치도 원주시',
    4: '강원특별자치도 강릉시',
    5: '강원특별자치도 동해시',
    6: '강원특별자치도 태백시',
    7: '강원특별자치도 속초시',
    8: '강원특별자치도 삼척시',
    9: '강원특별자치도 홍천군',
    10: '강원특별자치도 횡성군',
    11: '강원특별자치도 영월군',
    12: '강원특별자치도 평창군',
    13: '강원특별자치도 정선군',
    14: '강원특별자치도 철원군',
    15: '강원특별자치도 화천군',
    16: '강원특별자치도 양구군',
    17: '강원특별자치도 인제군',
    18: '강원특별자치도 고성군',
    19: '강원특별자치도 양양군',
  },
  CB: {
    1: '충청북도 전 지역',
    2: '충청북도 충주시',
    3: '충청북도 제천시',
    4: '충청북도 보은군',
    5: '충청북도 옥천군',
    6: '충청북도 영동군',
    7: '충청북도 증평군',
    8: '충청북도 진천군',
    9: '충청북도 괴산군',
    10: '충청북도 음성군',
    11: '충청북도 단양군',
  },

  CN: {
    1: '충청남도 전 지역',
    2: '충청남도 천안시',
    3: '충청남도 공주시',
    4: '충청남도 보령시',
    5: '충청남도 아산시',
    6: '충청남도 서산시',
    7: '충청남도 논산시',
    8: '충청남도 계룡시',
    9: '충청남도 당진시',
    10: '충청남도 금산군',
    11: '충청남도 부여군',
    12: '충청남도 서천군',
    13: '충청남도 청양군',
    14: '충청남도 홍성군',
    15: '충청남도 예산군',
    16: '충청남도 태안군',
  },

  JB: {
    1: '전라북도 전 지역',
    2: '전라북도 전주시',
    3: '전라북도 군산시',
    4: '전라북도 익산시',
    5: '전라북도 정읍시',
    6: '전라북도 남원시',
    7: '전라북도 김제시',
    8: '전라북도 완주군',
    9: '전라북도 진안군',
    10: '전라북도 무주군',
    11: '전라북도 장수군',
    12: '전라북도 임실군',
    13: '전라북도 순창군',
    14: '전라북도 고창군',
    15: '전라북도 부안군',
  },

  JN: {
    1: '전라남도 전 지역',
    2: '전라남도 목포시',
    3: '전라남도 여수시',
    4: '전라남도 순천시',
    5: '전라남도 나주시',
    6: '전라남도 광양시',
    7: '전라남도 담양군',
    8: '전라남도 곡성군',
    9: '전라남도 구례군',
    10: '전라남도 고흥군',
    11: '전라남도 보성군',
    12: '전라남도 화순군',
    13: '전라남도 장흥군',
    14: '전라남도 강진군',
    15: '전라남도 해남군',
    16: '전라남도 영암군',
    17: '전라남도 무안군',
    18: '전라남도 함평군',
    19: '전라남도 영광군',
    20: '전라남도 장성군',
    21: '전라남도 완도군',
    22: '전라남도 진도군',
    23: '전라남도 신안군',
  },

  KB: {
    1: '경상북도 전 지역',
    2: '경상북도 포항시',
    3: '경상북도 경주시',
    4: '경상북도 김천시',
    5: '경상북도 안동시',
    6: '경상북도 구미시',
    7: '경상북도 영주시',
    8: '경상북도 영천시',
    9: '경상북도 상주시',
    10: '경상북도 문경시',
    11: '경상북도 경산시',
    12: '경상북도 의성군',
    13: '경상북도 청송군',
    14: '경상북도 영양군',
    15: '경상북도 영덕군',
    16: '경상북도 청도군',
    17: '경상북도 고령군',
    18: '경상북도 성주군',
    19: '경상북도 칠곡군',
    20: '경상북도 예천군',
    21: '경상북도 봉화군',
    22: '경상북도 울진군',
    23: '경상북도 울릉군',
  },

  KN: {
    1: '경상남도 전 지역',
    2: '경상남도 창원시',
    3: '경상남도 진주시',
    4: '경상남도 통영시',
    5: '경상남도 사천시',
    6: '경상남도 김해시',
    7: '경상남도 밀양시',
    8: '경상남도 거제시',
    9: '경상남도 양산시',
    10: '경상남도 의령군',
    11: '경상남도 함안군',
    12: '경상남도 창녕군',
    13: '경상남도 고성군',
    14: '경상남도 남해군',
    15: '경상남도 하동군',
    16: '경상남도 산청군',
    17: '경상남도 함양군',
    18: '경상남도 거창군',
    19: '경상남도 합천군',
  },

  J: {
    1: '제주특별자치도 전 지역',
    2: '제주특별자치도 서귀포시',
    3: '제주특별자치도 제주시',
  },
};

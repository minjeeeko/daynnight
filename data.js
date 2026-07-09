// 낮과밤 — 목업 데이터
// 오프라인 만남 보장 매칭 플랫폼

const CURRENT_USER = {
  id: 'me',
  name: '지우',
  age: 31,
  gender: 'F',
  region: '강남구 역삼동',
  job: '프로덕트 디자이너',
  edu: '연세대학교',
  // 4단계 검증 상태: pending | approved | rejected
  verification: {
    identity: 'approved',   // 신분증
    job: 'approved',        // 직장
    edu: 'approved',        // 학력
    profile: 'approved',    // 프로필/사진
  },
  status: 'approved',       // 전체 심사 상태
  photos: 2,
  deposit: 30000,           // 보증금 예치액
  credit: 10000,            // 위로금 크레딧
  interests: ['전시', '러닝', '와인', '여행'],
  availability: {
    // 요일별 가능 시간대
    days: ['화', '목', '토'],
    slots: ['평일 저녁', '주말 오후'],
    regions: ['강남', '여의도'],
  },
};

// 탐색 대상 프로필 카탈로그
const PROFILES = [
  {
    id: 'u1', name: '준호', age: 33, gender: 'M',
    region: '서초구 서초동', job: '백엔드 엔지니어', edu: '한양대학교',
    interests: ['러닝', '커피', '독서'],
    bio: '주말엔 한강에서 러닝해요. 대화가 잘 통하는 분이면 좋겠어요.',
    verified: ['신원', '직장', '학력'],
    accent: '#ff6600', liked: false,
  },
  {
    id: 'u2', name: '민재', age: 30, gender: 'M',
    region: '마포구 연남동', job: '마케터', edu: '고려대학교',
    interests: ['와인', '전시', '여행'],
    bio: '전시 보러 다니는 걸 좋아합니다. 함께 좋은 시간 보내요.',
    verified: ['신원', '직장', '학력'],
    accent: '#217cf9', liked: false,
  },
  {
    id: 'u3', name: '태윤', age: 35, gender: 'M',
    region: '용산구 이태원동', job: '변호사', edu: '서울대학교',
    interests: ['클래식', '요리', '골프'],
    bio: '차분한 성격입니다. 서로 존중하는 만남을 지향해요.',
    verified: ['신원', '직장', '학력'],
    accent: '#079171', liked: true,
  },
  {
    id: 'u4', name: '현우', age: 32, gender: 'M',
    region: '강남구 삼성동', job: 'PM', edu: '성균관대학교',
    interests: ['여행', '사진', '맛집'],
    bio: '맛집 탐방이 취미예요. 편하게 이야기 나눠요.',
    verified: ['신원', '직장', '학력'],
    accent: '#9b7821', liked: false,
  },
  {
    id: 'u5', name: '지훈', age: 34, gender: 'M',
    region: '송파구 잠실동', job: '의사', edu: '가톨릭대학교',
    interests: ['헬스', '캠핑', '음악'],
    bio: '운동과 캠핑을 좋아합니다. 활동적인 만남을 좋아해요.',
    verified: ['신원', '직장', '학력'],
    accent: '#e14d00', liked: false,
  },
];

// 매칭 목록 (상호 좋아요 성사)
// state: schedule_input | pending_confirm | confirmed | meeting | done
const MATCHES = [
  {
    id: 'm1', profileId: 'u3', name: '태윤', age: 35,
    region: '용산구 이태원동', job: '변호사',
    state: 'confirmed',
    matchedAt: '2026-07-05',
    appointment: {
      date: '2026-07-12', time: '15:00',
      place: '블루보틀 삼청점', address: '서울 종로구 북촌로 12',
      contact: '02-1234-5678',
      auth: 'QR', // GPS | QR
      note: '노쇼 시 보증금이 차감되며 상대에게 크레딧이 지급됩니다.',
    },
    depositPaid: true,
  },
  {
    id: 'm2', profileId: 'u2', name: '민재', age: 30,
    region: '마포구 연남동', job: '마케터',
    state: 'schedule_input',
    matchedAt: '2026-07-08',
    appointment: null,
    depositPaid: false,
  },
  {
    id: 'm3', profileId: 'u1', name: '준호', age: 33,
    region: '서초구 서초동', job: '백엔드 엔지니어',
    state: 'pending_confirm',
    matchedAt: '2026-07-07',
    appointment: null,
    depositPaid: true,
  },
  {
    id: 'm4', profileId: 'u5', name: '지훈', age: 34,
    region: '송파구 잠실동', job: '의사',
    state: 'done',
    matchedAt: '2026-06-20',
    appointment: {
      date: '2026-06-28', time: '14:00',
      place: '스타벅스 강남대로점', address: '서울 강남구 강남대로 390',
      contact: '02-9876-5432', auth: 'GPS',
    },
    result: { mine: 'yes', theirs: 'yes', extended: true },
    settlement: { intro: 20000, venue: 24000, total: 44000, myShare: 22000, status: 'paid' },
    depositPaid: true,
  },
];

// 오늘의 약속 (진행 예정 / 진행 중)
const TODAY_MEETING = {
  matchId: 'm1',
  name: '태윤',
  place: '블루보틀 삼청점',
  time: '15:00',
  auth: 'QR',
  arrived: { mine: false, theirs: false },
  // 미팅 단계: before | arrived | running | decision | ended
  phase: 'before',
  timerSeconds: 30 * 60,
};

// 결제/정산 내역
const PAYMENTS = [
  { id: 'p1', type: 'deposit', label: '보증금 예치', date: '2026-07-05', amount: -30000, status: '예치중', match: '태윤 님' },
  { id: 'p2', type: 'settlement', label: '만남 정산 (소개비+현장비)', date: '2026-06-28', amount: -22000, status: '결제완료', match: '지훈 님' },
  { id: 'p3', type: 'credit', label: '노쇼 위로금 크레딧', date: '2026-06-10', amount: 10000, status: '지급완료', match: '익명' },
  { id: 'p4', type: 'deposit_refund', label: '보증금 반환', date: '2026-06-28', amount: 30000, status: '반환완료', match: '지훈 님' },
];

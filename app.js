/* ============================================================
   낮과밤 — 앱 로직 (바닐라 JS)
   ============================================================ */

// ---------- 아이콘 ----------
const IC = {
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  heartFill: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  qr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><line x1="14" y1="14" x2="14" y2="21"/><line x1="21" y1="14" x2="21" y2="21"/><line x1="17.5" y1="17.5" x2="17.5" y2="17.5"/></svg>',
  gps: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><circle cx="12" cy="12" r="8"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
};

const NAV = [
  { id: 'discover', label: '탐색', icon: 'compass' },
  { id: 'matches', label: '매칭', icon: 'heart' },
  { id: 'meeting', label: '만남', icon: 'clock' },
  { id: 'my', label: '마이', icon: 'user' },
];

const STATE_LABEL = {
  schedule_input: { text: '일정 입력', badge: 'wait' },
  pending_confirm: { text: '확정 대기', badge: 'wait' },
  confirmed: { text: '만남 확정', badge: 'go' },
  meeting: { text: '진행 중', badge: 'go' },
  done: { text: '완료', badge: 'done' },
};

// ---------- 상태 ----------
const S = {
  tab: 'discover',
  matchId: null,
  meeting: JSON.parse(JSON.stringify(TODAY_MEETING)),
  timerInt: null,
};

// ---------- 유틸 ----------
const $ = (s, r = document) => r.querySelector(s);
const won = (n) => (n < 0 ? '-' : '') + '₩' + Math.abs(n).toLocaleString('ko-KR');
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('is-show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('is-show'), 2400);
}
const matchCount = () => MATCHES.filter(m => m.state !== 'done').length;

// ---------- 내비게이션 렌더 ----------
function renderNav() {
  const side = $('#sideNav');
  side.innerHTML = NAV.map(n => `
    <button class="nav__item ${S.tab === n.id ? 'is-active' : ''}" data-tab="${n.id}">
      ${IC[n.icon]}<span>${n.label}</span>
      ${n.id === 'matches' && matchCount() ? `<span class="nav__badge">${matchCount()}</span>` : ''}
    </button>`).join('');

  const tab = $('#tabbar');
  tab.innerHTML = NAV.map(n => `
    <button class="tabbar__item ${S.tab === n.id ? 'is-active' : ''}" data-tab="${n.id}">
      ${IC[n.icon]}<span>${n.label}</span>
      ${n.id === 'matches' && matchCount() ? `<span class="tabbar__badge">${matchCount()}</span>` : ''}
    </button>`).join('');

  $('#miniProfile').innerHTML = `
    <div class="avatar" style="width:38px;height:38px;font-size:15px">${CURRENT_USER.name[0]}</div>
    <div>
      <div class="mini-profile__name">${CURRENT_USER.name}</div>
      <div class="mini-profile__st">검증 완료 회원</div>
    </div>`;

  document.querySelectorAll('[data-tab]').forEach(el =>
    el.addEventListener('click', () => go(el.dataset.tab)));
}

// ---------- 라우팅 ----------
function go(tab) {
  S.tab = tab;
  S.matchId = null;
  stopTimer();
  render();
}
function openMatch(id) {
  S.matchId = id;
  render();
}
function render() {
  renderNav();
  const back = $('#appbarBack');
  const title = $('#appbarTitle');
  const actions = $('#appbarActions');
  actions.innerHTML = '';
  back.hidden = !S.matchId;

  if (S.matchId) {
    back.onclick = () => { S.matchId = null; render(); };
  }

  const screen = $('#screen');
  if (S.matchId) {
    title.textContent = '매칭 상세';
    screen.innerHTML = viewMatchDetail(S.matchId);
  } else if (S.tab === 'discover') {
    title.textContent = '탐색';
    actions.innerHTML = `<button class="icon-btn" aria-label="알림">${IC.bell}</button>`;
    screen.innerHTML = viewDiscover();
  } else if (S.tab === 'matches') {
    title.textContent = '매칭';
    screen.innerHTML = viewMatches();
  } else if (S.tab === 'meeting') {
    title.textContent = '오늘의 만남';
    screen.innerHTML = viewMeeting();
    mountMeeting();
  } else if (S.tab === 'my') {
    title.textContent = '마이페이지';
    screen.innerHTML = viewMy();
  }
  screen.scrollTop = 0;
  bindScreen();
}

// ============================================================
// 탐색
// ============================================================
function viewDiscover() {
  const cards = PROFILES.map(p => `
    <article class="profile-card">
      <div class="profile-card__top">
        <div class="profile-card__photo">${p.name[0]}</div>
        <div class="profile-card__id">
          <h3>${p.name} · ${p.age}</h3>
          <div class="sub">${p.job} · ${p.region}</div>
        </div>
      </div>
      <div class="profile-card__verify">
        ${p.verified.map(v => `<span class="verify-pill">${IC.check}${v} 인증</span>`).join('')}
      </div>
      <p class="profile-card__bio">${p.bio}</p>
      <div class="profile-card__tags">
        ${p.interests.map(i => `<span class="tag">${i}</span>`).join('')}
      </div>
      <div class="profile-card__foot">
        <button class="pass-btn" data-pass="${p.id}" aria-label="넘기기">${IC.x}</button>
        <button class="like-btn ${p.liked ? 'is-liked' : ''}" data-like="${p.id}">
          ${p.liked ? IC.check : IC.heart}<span>${p.liked ? '좋아요 보냄' : '좋아요'}</span>
        </button>
      </div>
    </article>`).join('');

  return `<div class="screen__wide">
    <div class="hero-search" role="search">${IC.search}<span>관심있는 상대를 검색해보세요!</span></div>
    <p class="hero-note">신분증·직장·학력까지 검증된 회원만 만나요. 서로 좋아요면 채팅 없이 바로 만남을 잡아드려요.</p>
    <div class="profile-grid">${cards}</div>
  </div>`;
}

// ============================================================
// 매칭 목록
// ============================================================
function viewMatches() {
  const active = MATCHES.filter(m => m.state !== 'done');
  const done = MATCHES.filter(m => m.state === 'done');

  const rowHtml = (m) => {
    const st = STATE_LABEL[m.state];
    const sub = m.appointment
      ? `${m.appointment.date} ${m.appointment.time} · ${m.appointment.place}`
      : m.state === 'schedule_input' ? '가능 시간·지역을 입력해 주세요'
      : m.state === 'pending_confirm' ? '관리자가 일정을 확정하고 있어요' : '';
    return `
    <button class="row" data-match="${m.id}">
      <div class="avatar" style="width:48px;height:48px;font-size:18px">${m.name[0]}</div>
      <div class="row__body">
        <div class="row__title">${m.name} · ${m.age}</div>
        <div class="row__sub">${sub}</div>
      </div>
      <div class="row__aside">
        <span class="badge badge--${st.badge}"><span class="dot"></span>${st.text}</span>
      </div>
      <span class="chev">${IC.chevron}</span>
    </button>`;
  };

  const likesHtml = RECEIVED_LIKES.map((r, i) => `
    <button class="row" data-like-back="${r.id}">
      <span class="rank">${i + 1}</span>
      <div class="avatar" style="width:40px;height:40px;font-size:14px">${IC.user}</div>
      <div class="row__body">
        <div class="row__cat">받은 좋아요 · ${r.when}</div>
        <div class="row__title">${r.from} · ${r.age}</div>
        <div class="row__sub">${r.job} · ${r.region}</div>
      </div>
      <span class="badge badge--go"><span class="dot"></span>맞좋아요</span>
    </button>`).join('');

  return `<div class="screen__wide">
    ${RECEIVED_LIKES.length ? `<div class="section-title">받은 좋아요 <span class="meta" style="font-weight:400">${RECEIVED_LIKES.length}</span></div><div class="list">${likesHtml}</div>` : ''}
    ${active.length ? `<div class="section-title" style="margin-top:24px">진행 중인 매칭</div><div class="list">${active.map(rowHtml).join('')}</div>` : ''}
    ${done.length ? `<div class="section-title" style="margin-top:24px">지난 만남</div><div class="list">${done.map(rowHtml).join('')}</div>` : ''}
    ${!active.length && !done.length && !RECEIVED_LIKES.length ? `<div class="empty"><h3>아직 매칭이 없어요</h3><p>탐색에서 마음에 드는 상대에게 좋아요를 보내보세요.</p></div>` : ''}
  </div>`;
}

// ============================================================
// 매칭 상세 (일정 입력 / 확정 / 완료)
// ============================================================
function viewMatchDetail(id) {
  const m = MATCHES.find(x => x.id === id);
  if (!m) return '<div class="empty"><p>매칭을 찾을 수 없어요.</p></div>';

  const steps = ['매칭', '일정 입력', '일정 확정', '만남', '정산'];
  const stepIdx = { schedule_input: 1, pending_confirm: 2, confirmed: 3, meeting: 3, done: 4 }[m.state];

  const stepper = `<div class="stepper">${steps.map((s, i) => `
    <div class="step ${i < stepIdx ? 'is-done' : i === stepIdx ? 'is-current' : ''}">
      <div class="step__dot">${i < stepIdx ? IC.check : i + 1}</div>
      <div class="step__label">${s}</div>
    </div>`).join('')}</div>`;

  const header = `
    <div class="card detail-card" style="display:flex;align-items:center;gap:14px">
      <div class="avatar" style="width:56px;height:56px;font-size:22px">${m.name[0]}</div>
      <div style="flex:1">
        <div style="font-size:18px;font-weight:700">${m.name} · ${m.age}</div>
        <div class="meta">${m.job} · ${m.region}</div>
      </div>
      <span class="badge badge--${STATE_LABEL[m.state].badge}"><span class="dot"></span>${STATE_LABEL[m.state].text}</span>
    </div>
    <div class="card detail-card">${stepper}</div>`;

  let body = '';

  if (m.state === 'schedule_input') {
    body = viewScheduleInput(m);
  } else if (m.state === 'pending_confirm') {
    body = `
    <div class="notice">${IC.info}<div>양측 가능 시간의 교집합을 바탕으로 관리자가 제휴 장소와 시간을 확정하고 있어요. 확정되면 알림으로 알려드려요.</div></div>
    <div class="card detail-card" style="margin-top:14px">
      <div class="kv"><span class="kv__k">내가 입력한 요일</span><span class="kv__v">${CURRENT_USER.availability.days.join(', ')}</span></div>
      <div class="kv"><span class="kv__k">가능 시간대</span><span class="kv__v">${CURRENT_USER.availability.slots.join(', ')}</span></div>
      <div class="kv"><span class="kv__k">선호 지역</span><span class="kv__v">${CURRENT_USER.availability.regions.join(', ')}</span></div>
    </div>`;
  } else if (m.state === 'confirmed') {
    const a = m.appointment;
    body = `
    <div class="section-title">확정된 만남</div>
    <div class="card detail-card">
      <div class="kv"><span class="kv__k">${IC2('calendar')} 날짜</span><span class="kv__v">${a.date} (토)</span></div>
      <div class="kv"><span class="kv__k">${IC2('clock')} 시간</span><span class="kv__v">${a.time} · 30분</span></div>
      <div class="kv"><span class="kv__k">${IC2('pin')} 장소</span><span class="kv__v">${a.place}</span></div>
      <div class="kv"><span class="kv__k">주소</span><span class="kv__v">${a.address}</span></div>
      <div class="kv"><span class="kv__k">연락처</span><span class="kv__v">${a.contact}</span></div>
      <div class="kv"><span class="kv__k">도착 인증</span><span class="kv__v">${a.auth} 인증</span></div>
    </div>
    <div class="notice" style="margin-bottom:14px">${IC.shield}<div>${a.note}</div></div>
    <div class="card detail-card">
      <div class="kv"><span class="kv__k">보증금</span><span class="kv__v">${m.depositPaid ? '예치 완료 ' + won(CURRENT_USER.deposit) : '미결제'}</span></div>
      <p class="meta" style="margin-top:8px">보증금은 노쇼 방지를 위한 예치금이며, 정상 만남 시 전액 반환돼요.</p>
    </div>
    <button class="btn btn--primary btn--block" style="margin-top:16px" data-goto-meeting>만남 화면으로 이동</button>`;
  } else if (m.state === 'done') {
    const a = m.appointment, r = m.result, s = m.settlement;
    body = `
    <div class="card detail-card" style="text-align:center;padding:24px">
      <div class="avatar" style="width:56px;height:56px;margin:0 auto 12px;background:var(--ink);color:#fff;border-color:var(--ink)">${IC.check}</div>
      <div style="font-size:18px;font-weight:700">만남이 완료되었어요</div>
      <p class="meta" style="margin-top:6px">${r.extended ? '두 분 모두 Yes! 만남이 연장되었어요.' : '만남이 종료되었어요.'}</p>
    </div>
    <div class="section-title">지속 여부 결과</div>
    <div class="card detail-card">
      <div class="kv"><span class="kv__k">나의 선택</span><span class="kv__v" style="color:${r.mine==='yes'?'var(--ink)':'var(--meta)'}">${r.mine === 'yes' ? 'Yes · 더 만나고 싶어요' : 'No'}</span></div>
      <div class="kv"><span class="kv__k">상대의 선택</span><span class="kv__v" style="color:${r.theirs==='yes'?'var(--ink)':'var(--meta)'}">${r.theirs === 'yes' ? 'Yes · 더 만나고 싶어요' : 'No'}</span></div>
    </div>
    <div class="section-title">정산 내역 (50:50)</div>
    <div class="card detail-card">
      <div class="kv"><span class="kv__k">소개비</span><span class="kv__v">${won(s.intro)}</span></div>
      <div class="kv"><span class="kv__k">현장 비용</span><span class="kv__v">${won(s.venue)}</span></div>
      <div class="kv"><span class="kv__k">총액</span><span class="kv__v">${won(s.total)}</span></div>
      <div class="split-bar">
        <div class="split-bar__half me">나 ${won(s.myShare)}</div>
        <div class="split-bar__half you">상대 ${won(s.total - s.myShare)}</div>
      </div>
      <div class="kv"><span class="kv__k">결제 상태</span><span class="kv__v">결제 완료</span></div>
    </div>`;
  }

  return `<div class="screen__wide">${header}${body}</div>`;
}

function viewScheduleInput(m) {
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  const slots = ['평일 오전', '평일 오후', '평일 저녁', '주말 오전', '주말 오후', '주말 저녁'];
  const regions = ['강남', '여의도', '홍대', '성수', '판교', '광화문'];
  const av = CURRENT_USER.availability;

  return `
  <div class="notice" style="margin-bottom:16px">${IC.info}<div>채팅 없이 바로 일정을 잡아요. 가능한 요일·시간대·선호 지역을 선택하면, 상대와의 교집합으로 만남이 확정돼요.</div></div>
  <div class="card detail-card">
    <div class="field">
      <label class="field__label">${IC2('calendar')} 가능한 요일</label>
      <div class="chip-wrap">
        ${days.map(d => `<button class="chip ${av.days.includes(d) ? 'is-active' : ''}" data-sel="day" data-v="${d}">${d}</button>`).join('')}
      </div>
    </div>
    <div class="field">
      <label class="field__label">${IC2('clock')} 가능한 시간대</label>
      <div class="chip-wrap">
        ${slots.map(s => `<button class="chip ${av.slots.includes(s) ? 'is-active' : ''}" data-sel="slot" data-v="${s}">${s}</button>`).join('')}
      </div>
    </div>
    <div class="field" style="margin-bottom:0">
      <label class="field__label">${IC2('pin')} 선호 지역</label>
      <div class="chip-wrap">
        ${regions.map(r => `<button class="chip ${av.regions.includes(r) ? 'is-active' : ''}" data-sel="region" data-v="${r}">${r}</button>`).join('')}
      </div>
    </div>
  </div>
  <button class="btn btn--primary btn--block" style="margin-top:16px" data-submit-schedule="${m.id}">일정 제출하고 확정 요청</button>`;
}

// ============================================================
// 만남 운영 (도착 인증 · 30분 타이머 · Yes/No)
// ============================================================
function viewMeeting() {
  const mt = S.meeting;
  const m = MATCHES.find(x => x.id === mt.matchId);
  if (!m || (m.state !== 'confirmed' && m.state !== 'meeting')) {
    return `<div class="empty"><h3>예정된 만남이 없어요</h3><p>매칭이 확정되면 이곳에서<br>도착 인증과 만남을 진행할 수 있어요.</p></div>`;
  }

  const mm = String(Math.floor(mt.timerSeconds / 60)).padStart(2, '0');
  const ss = String(mt.timerSeconds % 60).padStart(2, '0');
  const total = 30 * 60;
  const progress = mt.timerSeconds / total;
  const circ = 2 * Math.PI * 88;
  const authIc = mt.auth === 'QR' ? IC.qr : IC.gps;

  let stage = '';

  if (mt.phase === 'before') {
    stage = `
    <div class="section-title">도착 인증</div>
    <div class="section-title--sub">약속 장소에 도착하면 ${mt.auth} 인증으로 체크인해요.</div>
    <div class="auth-cards">
      <div class="auth-card ${mt.arrived.mine ? 'is-done' : ''}">
        <div class="auth-card__ic">${mt.arrived.mine ? IC.check : authIc}</div>
        <div class="auth-card__name">나</div>
        <div class="auth-card__st">${mt.arrived.mine ? '도착 확인' : '대기 중'}</div>
      </div>
      <div class="auth-card ${mt.arrived.theirs ? 'is-done' : ''}">
        <div class="auth-card__ic">${mt.arrived.theirs ? IC.check : authIc}</div>
        <div class="auth-card__name">${mt.name}</div>
        <div class="auth-card__st">${mt.arrived.theirs ? '도착 확인' : '대기 중'}</div>
      </div>
    </div>
    ${!mt.arrived.mine
      ? `<button class="btn btn--primary btn--block" data-arrive>${mt.auth} 도착 인증하기</button>`
      : `<button class="btn btn--primary btn--block" data-start ${mt.arrived.theirs ? '' : 'disabled'}>${mt.arrived.theirs ? '30분 미팅 시작' : '상대 도착을 기다리는 중...'}</button>`}
    <div class="notice" style="margin-top:14px">${IC.shield}<div>정해진 시간 내 도착 인증이 없으면 노쇼로 판정되어 보증금이 차감되고, 상대에게 위로금 크레딧이 지급돼요.</div></div>`;
  } else if (mt.phase === 'running') {
    stage = `
    <button class="btn btn--outline btn--block" data-skip>남은 시간 건너뛰기 (데모)</button>
    <div class="notice" style="margin-top:14px">${IC.clock}<div>30분이 지나면 두 분 모두에게 동시에 '지속 여부' 선택 알림이 전송돼요. 상대의 선택은 볼 수 없어요.</div></div>`;
  } else if (mt.phase === 'decision') {
    stage = `
    <div class="section-title">더 만나고 싶으세요?</div>
    <div class="section-title--sub">서로의 선택은 공개되지 않아요. 둘 다 Yes일 때만 연장돼요.</div>
    <div class="decision">
      <button class="btn btn--outline" data-decide="no">No<span class="sub">여기까지 할게요</span></button>
      <button class="btn btn--primary" data-decide="yes">Yes<span class="sub">더 만나고 싶어요</span></button>
    </div>`;
  } else if (mt.phase === 'ended') {
    const yes = mt.myDecision === 'yes' && mt.theirDecision === 'yes';
    stage = `
    <div class="card detail-card" style="text-align:center;padding:28px">
      <div class="avatar" style="width:60px;height:60px;margin:0 auto 14px;background:${yes ? 'var(--ink)' : 'var(--surface)'};color:${yes ? '#fff' : 'var(--meta)'};border-color:${yes ? 'var(--ink)' : 'var(--hairline-en)'}">${yes ? IC.check : IC.clock}</div>
      <div style="font-size:19px;font-weight:700">${yes ? '두 분 모두 Yes!' : '만남이 종료되었어요'}</div>
      <p class="meta" style="margin-top:6px;line-height:1.5">${yes
        ? '연장 만남으로 전환되었어요.<br>즐거운 시간 보내세요.'
        : '수고하셨어요. 소개비와 현장 비용이<br>50:50으로 자동 정산돼요.'}</p>
    </div>
    <div class="section-title">자동 정산 (50:50)</div>
    <div class="card detail-card">
      <div class="kv"><span class="kv__k">소개비</span><span class="kv__v">${won(20000)}</span></div>
      <div class="kv"><span class="kv__k">현장 비용</span><span class="kv__v">${won(24000)}</span></div>
      <div class="split-bar">
        <div class="split-bar__half me">나 ${won(22000)}</div>
        <div class="split-bar__half you">상대 ${won(22000)}</div>
      </div>
      <div class="kv"><span class="kv__k">보증금 반환</span><span class="kv__v">+${won(30000).slice(1)}</span></div>
    </div>
    <button class="btn btn--primary btn--block" style="margin-top:16px" data-reset-meeting>처음으로</button>`;
  }

  const showRing = mt.phase === 'running' || mt.phase === 'decision';

  return `<div class="screen__wide">
    <div class="meeting">
      <div class="meeting__where">${IC2('pin')} ${mt.place}</div>
      <div class="meeting__who">${mt.name} 님과의 만남</div>
      ${showRing ? `
      <div class="timer-ring">
        <svg width="200" height="200">
          <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,.15)" stroke-width="10"/>
          <circle id="timerArc" cx="100" cy="100" r="88" fill="none" stroke="#fb5957" stroke-width="10" stroke-linecap="round"
            stroke-dasharray="${circ}" stroke-dashoffset="${circ * (1 - progress)}"/>
        </svg>
        <div class="timer-ring__num">
          <div class="timer-ring__time" id="timerText">${mm}:${ss}</div>
          <div class="timer-ring__cap">${mt.phase === 'decision' ? '시간 종료' : '남은 시간'}</div>
        </div>
      </div>` : `
      <div style="font-size:15px;opacity:.85;margin:8px 0 4px">${mt.time} 약속 · 30분 미팅</div>`}
      <div class="meeting__hint">${mt.phase === 'before' ? '도착하면 아래에서 인증해 주세요' : mt.phase === 'running' ? '편안하게 대화를 나눠보세요' : ''}</div>
    </div>
    ${stage}
  </div>`;
}

function mountMeeting() {
  // 실행 중이면 타이머 계속
  if (S.meeting.phase === 'running' && !S.timerInt) startTimer();
}

function startTimer() {
  stopTimer();
  S.timerInt = setInterval(() => {
    const mt = S.meeting;
    if (mt.timerSeconds <= 0) { tickToDecision(); return; }
    mt.timerSeconds--;
    updateTimerUI();
  }, 1000);
}
function stopTimer() { if (S.timerInt) { clearInterval(S.timerInt); S.timerInt = null; } }

function updateTimerUI() {
  const mt = S.meeting;
  const txt = $('#timerText');
  const arc = $('#timerArc');
  if (!txt) return;
  txt.textContent = String(Math.floor(mt.timerSeconds / 60)).padStart(2, '0') + ':' + String(mt.timerSeconds % 60).padStart(2, '0');
  if (arc) {
    const circ = 2 * Math.PI * 88;
    arc.setAttribute('stroke-dashoffset', circ * (1 - mt.timerSeconds / (30 * 60)));
  }
}
function tickToDecision() {
  stopTimer();
  S.meeting.timerSeconds = 0;
  S.meeting.phase = 'decision';
  toast('30분이 종료되었어요. 지속 여부를 선택해 주세요.');
  render();
}

// ============================================================
// 마이페이지
// ============================================================
function viewMy() {
  const u = CURRENT_USER;
  const vSteps = [
    { key: 'identity', title: '신분증 검증', desc: '주민등록번호 뒷자리 마스킹 확인', ic: 'shield' },
    { key: 'job', title: '직장 검증', desc: `${u.job} · 재직 증빙 확인`, ic: 'wallet' },
    { key: 'edu', title: '학력 검증', desc: `${u.edu} · 졸업 증빙 확인`, ic: 'cap' },
    { key: 'profile', title: '프로필·사진', desc: `사진 ${u.photos}장 · 관심사 등록`, ic: 'user' },
  ];
  const doneCount = Object.values(u.verification).filter(v => v === 'approved').length;

  return `<div class="screen__wide">
    <div class="card profile-head">
      <div class="avatar" style="width:64px;height:64px;font-size:26px">${u.name[0]}</div>
      <div style="flex:1">
        <div class="profile-head__name">${u.name} · ${u.age}
          <span class="badge badge--go" style="margin-left:6px;vertical-align:middle"><span class="dot"></span>검증완료</span>
        </div>
        <div class="profile-head__meta">${u.job} · ${u.edu}</div>
        <div class="profile-head__meta">${IC2('pin')} ${u.region}</div>
      </div>
    </div>

    <div class="stat-grid">
      <div class="stat"><div class="stat__label">예치 보증금</div><div class="stat__value">${won(u.deposit)}</div></div>
      <div class="stat"><div class="stat__label">위로금 크레딧</div><div class="stat__value pos">${won(u.credit)}</div></div>
    </div>

    <div class="two-col">
      <div>
        <div class="section-title">4단계 검증 (${doneCount}/4)</div>
        <div class="card detail-card">
          <div class="verify-list">
            ${vSteps.map(v => `
              <div class="verify-item ${u.verification[v.key] === 'approved' ? 'is-ok' : ''}">
                <div class="verify-item__ic">${IC[v.ic]}</div>
                <div class="verify-item__body">
                  <div class="verify-item__title">${v.title}</div>
                  <div class="verify-item__desc">${v.desc}</div>
                </div>
                ${u.verification[v.key] === 'approved'
                  ? `<span class="badge badge--done"><span class="dot"></span>승인</span>`
                  : `<span class="badge badge--wait"><span class="dot"></span>심사중</span>`}
              </div>`).join('')}
          </div>
        </div>
      </div>

      <div>
        <div class="section-title">결제·정산 내역</div>
        <div class="card detail-card">
          ${PAYMENTS.map(p => `
            <div class="pay-row">
              <div class="pay-row__ic">${IC[payIcon(p.type)]}</div>
              <div class="pay-row__body">
                <div class="pay-row__label">${p.label}</div>
                <div class="pay-row__meta">${p.date} · ${p.match} · ${p.status}</div>
              </div>
              <div class="pay-row__amt">${p.amount >= 0 ? '+' : ''}${won(p.amount)}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>

    <div class="notice" style="margin-top:8px">${IC.shield}<div>신분증 등 민감정보는 암호화되어 안전하게 보관되며, 검증 완료 후 즉시 파기돼요.</div></div>
  </div>`;
}

function payIcon(t) {
  return { deposit: 'shield', settlement: 'card', credit: 'heart', deposit_refund: 'wallet' }[t] || 'card';
}

// ============================================================
// 이벤트 바인딩
// ============================================================
function bindScreen() {
  // 좋아요
  document.querySelectorAll('[data-like]').forEach(el => el.addEventListener('click', () => {
    const p = PROFILES.find(x => x.id === el.dataset.like);
    p.liked = !p.liked;
    if (p.liked) {
      toast(`${p.name} 님에게 좋아요를 보냈어요`);
      // 데모: 태윤(u3)는 상호 좋아요로 처리
      if (Math.random() > 0.5 || p.id === 'u3') {
        setTimeout(() => toast(`${p.name} 님과 매칭됐어요! 매칭 탭에서 일정을 잡아보세요`), 1500);
      }
    }
    render();
  }));

  document.querySelectorAll('[data-pass]').forEach(el => el.addEventListener('click', () => {
    const p = PROFILES.find(x => x.id === el.dataset.pass);
    toast(`${p.name} 님을 넘겼어요`);
  }));

  // 받은 좋아요 → 맞좋아요(매칭)
  document.querySelectorAll('[data-like-back]').forEach(el => el.addEventListener('click', () => {
    toast('맞좋아요! 매칭됐어요. 일정을 잡아보세요');
  }));

  // 매칭 상세 열기
  document.querySelectorAll('[data-match]').forEach(el =>
    el.addEventListener('click', () => openMatch(el.dataset.match)));

  // 일정 칩 선택
  document.querySelectorAll('[data-sel]').forEach(el => el.addEventListener('click', () => {
    el.classList.toggle('is-active');
  }));

  // 일정 제출
  const sub = $('[data-submit-schedule]');
  if (sub) sub.addEventListener('click', () => {
    const m = MATCHES.find(x => x.id === sub.dataset.submitSchedule);
    m.state = 'pending_confirm';
    toast('일정을 제출했어요. 관리자가 곧 확정할게요');
    render();
  });

  // 확정 상세 → 만남 이동
  const gm = $('[data-goto-meeting]');
  if (gm) gm.addEventListener('click', () => { S.matchId = null; go('meeting'); });

  // 만남: 도착 인증
  const arrive = $('[data-arrive]');
  if (arrive) arrive.addEventListener('click', () => {
    S.meeting.arrived.mine = true;
    toast('도착이 인증되었어요');
    // 상대 도착 시뮬레이션
    setTimeout(() => { S.meeting.arrived.theirs = true; if (S.tab === 'meeting') { toast(`${S.meeting.name} 님도 도착했어요`); render(); } }, 1800);
    render();
  });

  // 만남 시작
  const start = $('[data-start]');
  if (start) start.addEventListener('click', () => {
    S.meeting.phase = 'running';
    render();
    startTimer();
  });

  // 데모 스킵
  const skip = $('[data-skip]');
  if (skip) skip.addEventListener('click', () => tickToDecision());

  // 지속 여부 결정
  document.querySelectorAll('[data-decide]').forEach(el => el.addEventListener('click', () => {
    S.meeting.myDecision = el.dataset.decide;
    S.meeting.theirDecision = 'yes'; // 데모: 상대는 Yes
    S.meeting.phase = 'ended';
    render();
  }));

  // 만남 리셋
  const rm = $('[data-reset-meeting]');
  if (rm) rm.addEventListener('click', () => {
    S.meeting = JSON.parse(JSON.stringify(TODAY_MEETING));
    go('discover');
  });
}

// ---------- 소소한 헬퍼 ----------
function IC2(name) { return `<span style="display:inline-flex;width:15px;height:15px;vertical-align:-2px;margin-right:2px">${IC[name]}</span>`; }

// ---------- 시작 ----------
render();

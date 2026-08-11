/*
 * 학생용 정적 사이트의 문구 설정 파일입니다.
 * GitHub 저장소에서 이 파일만 수정·저장하면 메뉴명과 안내 문구가 바뀝니다.
 * 도서 색인·검색 기능·Apps Script 자동화는 수정하지 않습니다.
 */
window.READINGLOG_PUBLIC_SITE_CONFIG = {
  settings: {
    SITE_TITLE: '경기도 목감고 신(信)동엽의 진로진학실록 Ⅱ',
    SITE_SUBTITLE: '목감고 도서관의 책으로 시작하는 고등학생 탐구활동 자동화 사이트',
    BROWSER_TAB_TITLE: '진로진학실록2-도서탐구',
    SITE_FOOTER_TEXT: '© jinrosillok.kr. All rights reserved.',
    HERO_TITLE_TEXT: '도서를 통해 탐구활동 주제 찾기',
    HERO_HELP_TITLE: '이용방법',
    HERO_HELP_TEXT: '궁금한 주제를 검색하거나 학과·키워드에서 도서를 찾아보세요.',
    GUIDE_TEXT: '관심 학과와 핵심 키워드로 우리학교 도서를 찾아보세요.'
  },
  menus: [
    { id: 'generated', name: '최근 질문생성 도서', description: '탐구활동 주제 예시가 생성된 도서를 최근 생성순으로 보여 줍니다.' },
    { id: 'all', name: '전체도서', description: '공개 도서 전체 보기' }
  ]
};

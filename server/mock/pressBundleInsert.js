const url = `http://localhost:3001/press`;

const pressData = [
  {
    pid: '108',
    pname: '스타뉴스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/108.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/108.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/108.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '109',
    pname: 'OSEN',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/109.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0610/nsd151458769.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0610/nsd151458769.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '117',
    pname: '마이데일리',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/117.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/117.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/117.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '120',
    pname: 'EBN',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/120.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/120.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/120.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '122',
    pname: '법률신문',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1103/nsd12425045.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1103/nsd124326426.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1103/nsd124320554.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '123',
    pname: '조세일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/123.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/123.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/123.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '135',
    pname: '시사저널',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/135.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/135.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/135.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '138',
    pname: '디지털데일리',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/138.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/138.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/138.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '139',
    pname: '스포탈코리아',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/139.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/139.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/139.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '140',
    pname: '씨네21',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/140.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/140.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/140.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '143',
    pname: '쿠키뉴스',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0823/nsd105911492.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0823/nsd105911492.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0819/nsd181056744.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '144',
    pname: '스포츠경향',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/144.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/144.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/144.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '213',
    pname: 'TV리포트',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/213.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/213.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/213.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '214',
    pname: 'MBC',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/214.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/214.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/214.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '215',
    pname: '한국경제TV',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/215.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/215.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/215.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '241',
    pname: '일간스포츠',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2023/0112/nsd92558162.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2023/0112/nsd92558162.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/241.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '243',
    pname: '이코노미스트',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/243.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/243.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/243.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '277',
    pname: '아시아경제',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/277.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/277.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/277.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '293',
    pname: '블로터',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/293.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/293.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/293.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '296',
    pname: '코메디닷컴',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/296.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/296.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/296.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '301',
    pname: '광주드림',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/301.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/301.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/301.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '308',
    pname: '시사인',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/308.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/308.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/308.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '310',
    pname: '여성신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/310.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/310.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/310.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '311',
    pname: '엑스포츠뉴스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/311.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/311.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/311.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '312',
    pname: '텐아시아',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/312.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/312.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/312.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '314',
    pname: '스포츠동아',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/314.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/314.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/314.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '326',
    pname: 'KBS World',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/326.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/326.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/326.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '327',
    pname: '뉴데일리',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/327.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/327.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/327.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '328',
    pname: '에이블뉴스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/328.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/328.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/328.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '329',
    pname: '소년한국일보',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0728/nsd1110888.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0728/nsd1110888.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0728/nsd111059924.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '330',
    pname: '중앙데일리',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0402/nsd213041246.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/330.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/330.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '331',
    pname: '충청투데이',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/331.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/331.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/331.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '332',
    pname: '국제신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/332.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/332.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/332.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '333',
    pname: '경남신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/333.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/333.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/333.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '334',
    pname: '제주의소리',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/334.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/334.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/334.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '335',
    pname: '강원도민일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/335.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/335.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/335.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '336',
    pname: '전북일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/336.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/336.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/336.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '337',
    pname: '경북일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/337.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/337.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/337.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '338',
    pname: '경인일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/338.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/338.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/338.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '339',
    pname: '경기일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/339.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/339.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/339.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '340',
    pname: 'OBS',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/340.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/340.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/340.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '344',
    pname: 'EBS',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/344.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0803/nsd20247547.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0803/nsd202358800.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '345',
    pname: '디자인정글',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/345.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/345.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/345.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '346',
    pname: '헬스조선',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/346.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/346.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/346.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '353',
    pname: '중앙SUNDAY',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/353.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/353.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/353.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '354',
    pname: '엘르',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/354.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/354.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/354.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '355',
    pname: '사이언스타임즈',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/355.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/355.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/355.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '356',
    pname: '게임메카',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/356.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/356.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/356.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '361',
    pname: '채널예스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/361.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/361.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/361.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '363',
    pname: '동아사이언스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/363.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/363.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/363.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '364',
    pname: 'PC사랑',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/364.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/364.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/364.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '366',
    pname: '조선비즈',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/366.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/366.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/366.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '368',
    pname: '데일리안',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/368.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/368.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/368.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '374',
    pname: 'SBS Biz',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/374.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/1229/nsd165811867.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/1229/nsd165811867.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '376',
    pname: '지지통신',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/376.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/376.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/376.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '384',
    pname: '한국대학신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/384.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/384.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/384.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '385',
    pname: '영남일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/385.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/385.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/385.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '387',
    pname: '인천일보',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0331/nsd155937506.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0331/nsd155937506.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0331/nsd15594915.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '388',
    pname: '전남일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/388.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/388.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/388.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '389',
    pname: '제주도민일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/389.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/389.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/389.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '391',
    pname: '충청일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/391.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/391.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/391.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '396',
    pname: '스포츠월드',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/396.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/396.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/396.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '410',
    pname: 'MK스포츠',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/410.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/410.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/410.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '416',
    pname: 'SBS연예뉴스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/416.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/1228/nsd1681569.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/1228/nsd1688305.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '417',
    pname: '머니에스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/417.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/417.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/417.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '421',
    pname: '뉴스1',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/421.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/421.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/421.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '422',
    pname: '연합뉴스TV',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/422.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/422.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/422.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '440',
    pname: '티브이데일리',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/440.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/440.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/440.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '447',
    pname: '뉴스엔',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/447.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/447.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/447.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '477',
    pname: '스포티비뉴스',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/1130/nsd10159718.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/1130/nsd10159718.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/1130/nsd101536636.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '529',
    pname: '스포츠춘추',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0116/nsd19454239.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0116/nsd19454239.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0116/nsd194523259.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '536',
    pname: '더팩트',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/536.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/536.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/536.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '539',
    pname: '위키트리',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/539.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/539.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/539.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '681',
    pname: '이코노타임즈',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0615/nsd7238696.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0615/nsd7251644.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0615/nsd7244919.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '682',
    pname: '여성경제신문',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1018/nsd132837448.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1018/nsd132851977.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1018/nsd132844419.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '683',
    pname: 'MS투데이',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1017/nsd202925333.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1017/nsd202940832.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1017/nsd202933363.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '684',
    pname: 'TJB대전방송',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1107/nsd105648779.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2023/0103/nsd95227559.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2023/0103/nsd9522095.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '685',
    pname: '서울와이어',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1024/nsd174417489.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1024/nsd174430433.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1024/nsd174424325.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '686',
    pname: '주간경향',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1007/nsd161834679.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1007/nsd161849944.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1007/nsd161842489.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '687',
    pname: '뉴스클레임',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1006/nsd20580184.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1006/nsd205818702.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1006/nsd205810265.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '688',
    pname: '경기신문',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1017/nsd20261427.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1017/nsd202616515.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1017/nsd20268714.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '689',
    pname: '인천투데이',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1107/nsd105346552.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1107/nsd1054226.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1107/nsd105354391.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '690',
    pname: '정책브리핑',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1116/nsd113833352.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1116/nsd113848865.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1116/nsd113840778.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '801',
    pname: '위키리크스한국',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/801.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/801.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/801.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '802',
    pname: '스포츠Q',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/802.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/802.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/802.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '803',
    pname: '인더스트리뉴스',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0907/nsd9423633.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0907/nsd9423633.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0907/nsd94216114.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '804',
    pname: '데이터뉴스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/804.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/804.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/804.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '805',
    pname: '한경잡앤조이',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2019/1022/nsd101526780.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0615/nsd10319824.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0615/nsd10311145.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '806',
    pname: 'MONEY',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/806.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/806.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/806.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '807',
    pname: '인사이트코리아',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/807.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/807.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/807.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '808',
    pname: '산업일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/808.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/808.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/808.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '809',
    pname: '미디어펜',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/809.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/809.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/809.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '810',
    pname: '신아일보',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0316/nsd103953129.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0316/nsd103953129.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0316/nsd104012979.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '811',
    pname: '한국농어촌방송',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0315/nsd181452869.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0315/nsd181452869.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0315/nsd18156958.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '812',
    pname: '데일리임팩트',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0819/nsd151219656.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0819/nsd151219656.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0819/nsd151254429.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '813',
    pname: '이코노믹리뷰',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0418/nsd164755323.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0418/nsd164755323.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0418/nsd164818946.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '814',
    pname: '미주한국일보',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2019/1022/nsd101452890.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/814.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/814.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '815',
    pname: '법률방송뉴스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/815.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/815.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/815.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '816',
    pname: '시사오늘',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/816.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/816.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/816.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '817',
    pname: '미디어제주',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/817.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/817.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/817.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '818',
    pname: 'IT동아',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/818.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/818.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/818.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '819',
    pname: '바이라인네트워크',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2019/1022/nsd101556364.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/819.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/819.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '820',
    pname: '월간노동법률',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0817/nsd144747883.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0817/nsd14480190.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0817/nsd144754102.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '821',
    pname: '경남도민일보',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0210/nsd91042289.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/821.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/821.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '822',
    pname: '프라임경제',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2019/1021/nsd19383221.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0730/nsd13728808.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0730/nsd13719939.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '823',
    pname: 'UPI뉴스',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2019/1021/nsd193745521.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/823.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/823.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '824',
    pname: '서울파이낸스',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0210/nsd91458234.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/824.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/824.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '825',
    pname: '이로운넷',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0303/nsd141830346.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/825.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/825.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '826',
    pname: '톱데일리',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0817/nsd144932.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0817/nsd14491516.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0817/nsd14499446.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '827',
    pname: '베이비뉴스',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0222/nsd13325188.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0222/nsd13325188.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0222/nsd13338358.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '828',
    pname: '식품저널 foodnews',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0211/nsd0427277.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0211/nsd0427277.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0211/nsd0439284.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '829',
    pname: '미디어스',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0211/nsd01153196.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0211/nsd01153196.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0211/nsd01153196.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '830',
    pname: '게임동아',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0211/nsd02321523.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0211/nsd02321523.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0211/nsd02332888.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '901',
    pname: '제민일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/901.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/1119/nsd213345745.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/1119/nsd213339585.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '902',
    pname: 'TV조선',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/902.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/902.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/902.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '903',
    pname: '채널에이',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/903.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/903.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/903.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '904',
    pname: 'JTBC',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/904.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/904.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/904.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '905',
    pname: '더스쿠프',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/905.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/905.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/905.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '906',
    pname: 'KNN',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/906.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/906.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/906.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '907',
    pname: '경북매일신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/907.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/907.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/907.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '908',
    pname: '국방일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/908.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/908.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/908.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '909',
    pname: '기호일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/909.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/909.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/909.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '910',
    pname: '넥스트데일리',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/910.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/910.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/910.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '911',
    pname: '농민신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/911.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/911.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/911.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '913',
    pname: '뉴스토마토',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/913.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/913.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/913.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '914',
    pname: '뉴스핌',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/914.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/914.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/914.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '915',
    pname: '르몽드 디플로마티크',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/915.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/915.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/915.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '916',
    pname: '머니투데이방송',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0420/nsd105139164.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0420/nsd105139164.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0420/nsd104943516.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '917',
    pname: 'IT조선',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/917.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/917.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/917.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '920',
    pname: '아시아투데이',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/920.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/920.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/920.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '921',
    pname: '아주경제',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/921.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/921.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/921.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '922',
    pname: '이투데이',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/922.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/922.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/922.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '923',
    pname: '인민망',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/923.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/923.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/923.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '924',
    pname: '인벤',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/924.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/924.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/924.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '925',
    pname: '일요신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/925.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/925.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/925.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '926',
    pname: '중부일보',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0704/nsd23153884.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0704/nsd231551300.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0704/nsd231545458.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '927',
    pname: '충북일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/927.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/927.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/927.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '928',
    pname: '컴퓨터월드',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/928.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/928.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/928.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '930',
    pname: '뉴스타파',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/930.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/930.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/930.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '932',
    pname: 'CEO스코어데일리',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/932.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/932.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/932.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '934',
    pname: '아리랑TV',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/934.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/934.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/934.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '935',
    pname: '경상일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/935.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/935.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/935.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '936',
    pname: '대구일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/936.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/936.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/936.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '937',
    pname: '전북도민일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/937.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/937.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/937.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '938',
    pname: '그린포스트코리아',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0310/nsd141229560.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/938.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/938.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '940',
    pname: '스포츠투데이',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0328/nsd223244325.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0328/nsd223244325.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0328/nsd223257107.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '941',
    pname: '초이스경제',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/941.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/941.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/941.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '942',
    pname: '비즈니스포스트',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/942.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/942.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/942.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '943',
    pname: '비즈워치',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2023/0213/nsd17943530.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2023/0213/nsd17943530.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2023/0213/nsd17100999.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '944',
    pname: '나우뉴스',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0804/nsd1343054.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0804/nsd1343054.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0804/nsd13457540.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '945',
    pname: 'YTN사이언스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/945.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0922/nsd152336602.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0922/nsd152323211.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '946',
    pname: 'YONHAPNEWS',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/946.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/946.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/946.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '947',
    pname: '조이뉴스24',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/947.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/947.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/947.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '948',
    pname: '한겨레21',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/948.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/948.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/948.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '950',
    pname: '월간중앙',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/950.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/950.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/950.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '951',
    pname: '포브스코리아',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/951.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/951.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/951.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '952',
    pname: '보안뉴스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/952.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/952.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/952.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '953',
    pname: '디지털투데이',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/953.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/953.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/953.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '954',
    pname: 'CNB뉴스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/954.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/954.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/954.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '955',
    pname: '독서신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/955.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/955.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/955.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '956',
    pname: '철강금속신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/956.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/956.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/956.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '957',
    pname: '시사위크',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/957.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/957.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/957.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '958',
    pname: '베리타스알파',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/958.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/958.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/958.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '959',
    pname: 'M이코노미뉴스',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/1221/nsd15292271.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/1221/nsd15292271.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/1221/nsd171157172.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '960',
    pname: '대한경제',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/960.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1115/nsd153942530.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/1115/nsd153934427.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '961',
    pname: '메트로신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/961.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/961.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/961.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '962',
    pname: '스포츠한국',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/962.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/962.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/962.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '963',
    pname: '에너지경제',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/963.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/963.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/963.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '964',
    pname: '이뉴스투데이',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/964.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/964.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/964.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '965',
    pname: '전기신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/965.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/965.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/965.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '966',
    pname: '정신의학신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/966.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/966.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/966.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '967',
    pname: '코리아쉬핑가제트',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/967.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/967.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/967.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '968',
    pname: '한국금융신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/968.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/968.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/968.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '969',
    pname: '매일노동뉴스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/969.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/969.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/969.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '970',
    pname: '소비자가만드는신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/970.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/970.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/970.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '971',
    pname: '일요시사',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/971.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/971.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/971.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '972',
    pname: 'PD저널',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/972.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/972.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/972.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '973',
    pname: '비즈한국',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/973.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/973.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/973.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '974',
    pname: 'BBS NEWS',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/974.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/974.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/974.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '975',
    pname: '시사저널이코노미',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/975.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/975.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/975.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '976',
    pname: '무등일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/976.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/976.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/976.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '977',
    pname: '헬로디디',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/977.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/977.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/977.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '978',
    pname: '경북도민일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/978.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/978.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/978.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '979',
    pname: '약사공론',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/979.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/979.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/979.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '980',
    pname: 'KBC광주방송',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/980.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/980.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/980.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '981',
    pname: 'TBS',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0218/nsd182745388.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/981.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/981.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '982',
    pname: '이코노미조선',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/982.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/982.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/982.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '983',
    pname: '중부매일신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/983.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/983.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/983.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '984',
    pname: '낚시춘추',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/984.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/984.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/984.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '986',
    pname: '투데이신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/986.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/1019/nsd144531857.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/1019/nsd144525568.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '988',
    pname: '이웃집과학자',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/988.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/988.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/988.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '989',
    pname: 'TBC',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/989.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/989.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/989.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '990',
    pname: '주간조선',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/990.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/990.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/990.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '991',
    pname: '데일리NK',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/991.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/991.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/991.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '993',
    pname: '허프포스트코리아',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/993.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/993.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/993.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '994',
    pname: 'AI타임스',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/1112/nsd102040597.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/1112/nsd102040597.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/1112/nsd102110770.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '995',
    pname: '뉴스포스트',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/1112/nsd10248812.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/1112/nsd10248812.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/1112/nsd102419893.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '996',
    pname: '매경헬스',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2023/0330/nsd10125746.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2023/0330/nsd10125746.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2023/0330/nsd10148542.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '997',
    pname: '뉴스펭귄',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0405/nsd145953126.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0405/nsd15024245.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0405/nsd15014578.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '998',
    pname: '뉴스앤조이',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0328/nsd224956215.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0328/nsd22503109.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0328/nsd22509287.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '002',
    pname: '프레시안',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/002.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/002.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/002.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '003',
    pname: '뉴시스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/003.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/003.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/003.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '005',
    pname: '국민일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/005.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/005.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/005.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '006',
    pname: '미디어오늘',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/006.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/006.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/006.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '008',
    pname: '머니투데이',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/008.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/008.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/008.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '009',
    pname: '매일경제',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/009.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/009.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/009.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '011',
    pname: '서울경제',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/011.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2019/logo/011.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/011.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '013',
    pname: '연합인포맥스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/013.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/013.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/013.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '014',
    pname: '파이낸셜뉴스',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0212/nsd171345162.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/014.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/014.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '015',
    pname: '한국경제',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/015.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/015.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/015.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '016',
    pname: '헤럴드경제',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/016.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/016.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/016.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '018',
    pname: '이데일리',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/018.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/018.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/018.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '020',
    pname: '동아일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/020.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/020.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/020.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '021',
    pname: '문화일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/021.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/021.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/021.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '022',
    pname: '세계일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/022.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/022.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/022.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '023',
    pname: '조선일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/023.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0903/nsd185255316.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0903/nsd185246724.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '024',
    pname: '매경이코노미',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/024.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/024.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/024.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '025',
    pname: '중앙일보',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0824/nsd115034872.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0824/nsd115034872.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0823/nsd101834185.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '028',
    pname: '한겨레',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/028.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/028.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/028.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '029',
    pname: '디지털타임스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/029.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/029.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/029.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '030',
    pname: '전자신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/030.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/030.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/030.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '031',
    pname: '아이뉴스24',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/031.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/031.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/031.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '032',
    pname: '경향신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/032.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/032.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '038',
    pname: '한국일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/038.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/038.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/038.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '040',
    pname: '코리아타임스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/040.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/040.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/040.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '042',
    pname: '데일리한국',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/042.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/042.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/042.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '044',
    pname: '코리아헤럴드',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/044.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/044.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/044.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '047',
    pname: '오마이뉴스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/047.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/047.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/047.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '050',
    pname: '한경비즈니스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/050.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0928/nsd125033437.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0928/nsd125026855.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '052',
    pname: 'YTN',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/052.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/052.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/052.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '055',
    pname: 'SBS',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/055.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/055.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/055.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '056',
    pname: 'KBS',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/056.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/056.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/056.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '057',
    pname: 'MBN',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0211/nsd10519357.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/057.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/057.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '073',
    pname: '스포츠서울',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/073.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0708/nsd94830278.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2020/0708/nsd94820151.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '075',
    pname: '맥스무비',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/075.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/075.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/075.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '076',
    pname: '스포츠조선',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/076.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/076.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/076.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '079',
    pname: '노컷뉴스',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/079.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/079.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/079.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '081',
    pname: '서울신문',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0208/nsd16121208.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0208/nsd16121208.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0208/nsd161212576.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '082',
    pname: '부산일보',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0322/nsd21527882.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0322/nsd21527882.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2021/0322/nsd215225866.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '083',
    pname: '광주일보',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2023/0309/nsd195548501.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2023/0309/nsd195548501.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2023/0309/nsd1956932.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '087',
    pname: '강원일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/087.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/087.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/087.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '088',
    pname: '매일신문',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/088.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/088.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/088.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '089',
    pname: '대전일보',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/089.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/089.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/089.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '092',
    pname: '지디넷코리아',
    newMainLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0905/nsd131925414.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0905/nsd131925414.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/up/2022/0905/nsd91639628.png',
    thumbnailValid: true,
    valid: true,
  },
  {
    pid: '094',
    pname: '월간 산',
    newMainLogo: 'https://s.pstatic.net/static/newsstand/2019/logo/094.png',
    newMainLightLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/094.png',
    newMainDarkLogo:
      'https://s.pstatic.net/static/newsstand/2020/logo/dark/0604/094.png',
    thumbnailValid: true,
    valid: true,
  },
];

const customFetch = async ({ url, method, body }) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    console.log('Request successful!');
  } catch (error) {
    throw Error(error.message);
  }
};

const runAPI = async (press) => {
  try {
    const body = {
      ...press,
      isSubscribed: false,
    };
    await customFetch({ url, method: 'POST', body: body });
    console.log('Section posted successfully!');
  } catch (error) {
    console.error(error);
  }
};

// runAPI(pressData[0]);

pressData.forEach((press) => {
  runAPI(press);
});

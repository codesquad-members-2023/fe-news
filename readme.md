# NewsStand

포탈 사이트의 메인 페이지 `뉴스 스탠드`를 구현한 프로젝트

## Plan

### Feature

![feature-list](https://user-images.githubusercontent.com/86241737/229481189-9ce0117b-484a-4e93-b61d-d3bb7e97dcc1.png)

view(component)를 작게 나누고 최소한의 view에 대해 feature 작성

### Architecture

- 컴포넌트 별로 다른 아키택처 패턴 적용
  - MVC 아키택처 패턴: Model과 View의 역할은 각각 상태관리와 화면관리로 명확히 하되, Controller는 Component라고 명명하고 model과 view를 통한 다양한 조작을 맡긴다.
  - Observer 디자인 패턴: MVC로 구현된 컴포넌트에서 Component의 역할을 좀 줄여주는 정도의 로직.
  - Flux 아키택처 패턴: Observer 디자인 패턴에서 한 단계 더 나아가서 dispatch와 reducer, action을 통해 state를 처리할 예정.

## Tech Stack

- Front
  - HTML5
  - CSS3
  - [tailwindCSS](https://tailwindcss.com/)
  - [TypeScript](https://www.typescriptlang.org/)

- Back
  - [Nodejs](https://nodejs.org/ko)
  - [Express](https://expressjs.com/ko/)

- DataBase
  - [MongoDB](https://www.mongodb.com/)

- Bundler(예정)
  - [Vite](https://vitejs-kr.github.io/)

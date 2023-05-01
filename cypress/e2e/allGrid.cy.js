describe('전체 언론사 그리드 보기 테스트 ', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('첫 화면 로딩할 때, [전체 언론사] 탭의 [그리드 보기]가 보인다.', () => {
    // ? [그리드 보기]를 테스트 하기 위해 id를 추가하는 것이 과연 좋을까?
    cy.visible('#all-grid__section');
  });

  it('가장 첫 페이지일 때, 왼쪽 화살표 버튼은 보이지 않는다.', () => {
    cy.notVisible('#grid-before-btn');
  });

  it('가장 마지막 페이지일 때, 오른쪽 화살표 버튼은 보이지 않는다.', () => {
    const totalPages = 3;

    for (let i = 0; i < totalPages; i += 1) {
      cy.clickBtn('#grid-next-btn');
    }

    cy.notVisible('#grid-next-btn');
  });

  it('언론사 마크가 있는 셀에 마우스를 호버했을 때, [구독하기] 버튼이 보인다.', () => {
    cy.get('.subscribe-toggle-btn-container').first().invoke('show');
    cy.get('.subscribe-toggle-btn').first().should('have.class', 'subscribe-btn').and('contain', '구독하기');
  });

  it('이미 구독하고 있는 언론사 마크를 호버했을 때, [해지하기] 버튼이 보인다.', () => {
    cy.get('.subscribe-toggle-btn-container').first().invoke('show');
    cy.get('.subscribe-toggle-btn').first().click();
    cy.get('.subscribe-toggle-btn')
      .first()
      .should('have.class', 'unsubscribe-btn')
      .and('contain', '해지하기');
  });

  // ? 다음 페이지 혹은 이전 페이지로 이동했다는 걸 어떻게 테스트 할까? 테스트 때문에 class나 dataset을 추가하는게 정말 좋은 방법일까?
  it('그리드의 우 화살표를 클릭했을 때, 다음 페이지로 넘어간다.', () => {
    cy.notVisible('#grid-before-btn');

    cy.clickBtn('#grid-next-btn');
    cy.visible('#grid-before-btn');
  });

  it('그리드의 좌 화살표를 클릭했을 때, 이전 페이지로 돌아간다.', () => {
    cy.notVisible('#grid-before-btn');

    cy.clickBtn('#grid-next-btn');
    cy.clickBtn('#grid-before-btn');
    cy.notVisible('#grid-before-btn');
  });
});

describe('전체 언론사 그리드 보기 테스트 ', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  // Todo: class 값 매직 스트링 처리하기
  it('첫 화면 로딩할 때, [전체 언론사] 탭의 [그리드 보기]가 보인다.', () => {
    cy.visible('.all-grid__section');
  });

  it('가장 첫 페이지일 때, 왼쪽 화살표 버튼은 보이지 않는다.', () => {
    cy.notVisible('#grid-before-btn');
  });

  it('가장 마지막 페이지일 때, 오른쪽 화살표 버튼은 보이지 않는다.', () => {
    // Todo: grid 페이지 개수 매직넘버 처리하기
    for (let i = 0; i < 3; i += 1) {
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

  it('그리드의 우 화살표를 클릭했을 때, 다음 페이지로 돌아간다.', () => {
    cy.clickBtn('#grid-next-btn');
    cy.get('.press-grid').first().should('not.be.visible').and('have.class', 'display-none');
    cy.get('.press-grid').first().next().should('be.visible').and('not.have.class', 'display-none');
  });

  it('그리드의 좌 화살표를 클릭했을 때, 이전 페이지로 돌아간다.', () => {
    cy.clickBtn('#grid-next-btn');
    cy.clickBtn('#grid-before-btn');
    cy.get('.press-grid').first().should('be.visible').and('not.have.class', 'display-none');
    cy.get('.press-grid').first().next().should('not.be.visible').and('have.class', 'display-none');
  });
});

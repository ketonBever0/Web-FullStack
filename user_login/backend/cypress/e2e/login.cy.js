describe('template spec', () => {
  it('passes', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8000/api/user/login',
      body: {
        username: "testUser123",
        password: "123QWEasd",
      }
    }).as('testreq');
    cy.get('@testreq').then(res => {
      // expect(res.status).to.eq(201);
      expect(res.body).not.has.property('message')
      // assert.isArray(res.body, "Array/List OK");
    })
  })
})
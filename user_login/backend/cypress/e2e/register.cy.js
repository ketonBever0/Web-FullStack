describe('template spec', () => {
  it('passes', () => {
    let username = "testUser123";
    cy.request({
      method: 'POST',
      url: 'http://localhost:8000/api/user/register',
      body: {
        username: username,
        password: "123QWEasd",
        email: "testuser.valami.com",
        age: 37
      }
    }).as('testreq');
    cy.get('@testreq').then(res => {

      expect(res.body).not.has.property('message')

      cy.request({
        method: 'POST',
        url: 'http://localhost:8000/api/user/testing/checkuser',
        body: { username: username }
      }).as('testreq').then(res => {
        expect(res.status).to.eq(200);
        expect(res.body).has.property('username', username.toLowerCase())
      });

    })

    


  })
})

//  Ha lefut a teszt, mongoDBben kikell törölni az adatot
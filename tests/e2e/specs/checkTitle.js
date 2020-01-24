describe('Checks main page title', () => {
  it('displays title', () => {
    cy.visit('/')
    cy.get('.headline').should(
      'contain',
      'Welcome to the Vuetify + Nuxt.js template'
    )
  })
})

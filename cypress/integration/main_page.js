describe("Main Page", () => {

    beforeEach(() => {
        cy.initialVisit();
      })
    // it('Should be able to visit the site and see a welcome message displayed', () => {
    //     cy.contains('Welcome to the scene...')
    // })

    it('Should display a button to click', () => {
        cy.get('button').contains('click here')
    })

    it('Should display a background image', () => {
        cy.get('main').should('have.css', 'background').and('include', 'https://i.imgur.com/N0JhdKx.jpg')
    })

    it('Should navigate to quote page when button is clicked', () => {
        cy.get('button').click()
        cy.get('nav').contains('thescene')
        cy.get('nav').get('.nav-btns').contains('faves')
        cy.get('.quote-container').get('.quote').should('be.visible')
    })

    it('Should be able to view a quote', () => {
        cy.visitQuotePage();
        cy.get('.quote-container').contains('uplifting dance-punk')
    })

    it('Should be able to shuffle a quote', () => {
        cy.visitQuotePage();
        cy.get('.quote-container').get('.button-options').get('.shuffle-quote').click()
        cy.shuffleQuote();
        cy.get('.quote-container').get('.quote').contains('didgeridoo improvisational')
    })

    it('Should be able to shuffle a quote again', () => {
        cy.visitQuotePage();
        cy.get('.quote-container').get('.button-options').get('.shuffle-quote').click()
        cy.shuffleQuote();
        cy.get('.quote-container').get('.quote').contains('didgeridoo improvisational');
        cy.get('.quote-container').get('.button-options').get('.shuffle-quote').click()
        cy.shuffleQuoteAgain();
        cy.get('.quote-container').get('.quote').contains('futureelectronic polo');
    })

    it('Should be able to favorite a quote', () => {
        cy.visitQuotePage();
        cy.addFavorite();
        cy.get('nav').get('.nav-btns').get('.has-faves').should('have.css', 'background').and('include', 'https://img.icons8.com/fluency/48/000000/like.png')
    })

    it('Should be able to navigate to faves page', () => {
        cy.visitQuotePage();
        cy.addFavorite();
        cy.get('nav').get('.nav-btns').get('.has-faves').click()
        cy.get('.fave-quote').contains('didgeridoo')
    })

    it('Should be able to remove a fave', () => {
        cy.visitQuotePage();
        cy.addFavorite();
        cy.get('nav').get('.nav-btns').get('.has-faves').click()
        cy.get('.fave-quote-container').get('.remove-fave').click()
        cy.get('main').contains('Start shufflin')
    })

    it('Should be able to be able to navigate back and forward in browser', () => {
        cy.addFavorite();
        cy.get('nav').get('.nav-btns').get('.has-faves').click()
        cy.go('back')
        cy.url().should('eq','http://localhost:3000/quote')
        cy.go('forward')
        cy.url().should('eq','http://localhost:3000/faves')
      })

})
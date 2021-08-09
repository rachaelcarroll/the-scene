Cypress.Commands.add('initialVisit', () => {
    cy.visit('http://localhost:3000')
})

Cypress.Commands.add('visitQuotePage', () => {
    cy.fixture('quote_one.js').then((data) => {
        cy.intercept('GET', 'https://binaryjazz.us/wp-json/genrenator/v1/story/1', data);
    });
    cy.visit('http://localhost:3000/quote')
})

Cypress.Commands.add('shuffleQuote', () => {
    cy.fixture('quote_two.js').then((data) => {
        cy.intercept('GET', 'https://binaryjazz.us/wp-json/genrenator/v1/story/1', data);
    });
    cy.visit('http://localhost:3000/quote')
})

Cypress.Commands.add('shuffleQuoteAgain', () => {
    cy.fixture('quote_three.js').then((data) => {
        cy.intercept('GET', 'https://binaryjazz.us/wp-json/genrenator/v1/story/1', data);
    });
    cy.visit('http://localhost:3000/quote')
})

Cypress.Commands.add('addFavorite', () => {
    cy.fixture('quote_two.js').then((data) => {
        cy.intercept('GET', 'https://binaryjazz.us/wp-json/genrenator/v1/story/1', data);
    });
    cy.visit('http://localhost:3000/quote')
    cy.wait(800)
    cy.get('.quote-container')
    cy.get('.button-options')
    cy.get('.save-to-faves').click()
})





describe('', function() {
    it('E2E test', function() {
        cy.visit('http://localhost:3000/');
        cy.get('[data-testid="search-input"]').type('text for test');
        let seachButton = cy.get('[data-testid="search-button"]');
        seachButton.hover();
    })
});

const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH_EL = '#searchTerm'
const VAL = 'h2'

class Searching {
    static visit() {
        cy.visit(URL);
    }

    static search() {
        cy.get(SEARCH_EL).type('online{enter}');
    }

    static validation() {
        cy.get(VAL).should('contain.text', 'Search Results:');
    }
}

export default Searching;
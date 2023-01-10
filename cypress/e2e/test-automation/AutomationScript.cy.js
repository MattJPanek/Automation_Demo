describe('Automation Script Test using Cypress', () => {
    beforeEach(() => {
        //Going to Expedia
        cy.visit('https://www.expedia.com')

    })

    it('Stays Check-In', () => {
        cy.get('.uitk-tab-text').contains('Stays').click()
        cy.get('button[aria-label="Going to"]').click()
        cy.get('#location-field-destination').type("Universal Studios Florida")
        cy.get('.uitk-typeahead-button-label').eq(0).contains("Universal Studios Florida").click()
        cy.get('input[name="startDate"]').invoke('attr', 'value', '2023-02-13')
        cy.get('input[name="endDate"]').invoke('attr', 'value', '2023-02-20')
        cy.get('#d1-btn').click()
        cy.get('button[aria-label="Feb 13, 2023"]').click()
        cy.get('button[aria-label="Feb 20, 2023"]').click()
        cy.get('.uitk-button').eq(10).contains('Done').click({force:true})
        cy.get('#wizard-hotel-pwa-v2-1').submit()
        cy.screenshot()
    })

    it('Stays Check-In with 2 adults and 2 children ages 8-10', () => {
        cy.get('.uitk-tab-text').contains('Stays').click()
        cy.get('button[aria-label="Going to"]').click()
        cy.get('#location-field-destination').type("Universal Studios Florida")
        cy.get('.uitk-typeahead-button-label').eq(0).contains("Universal Studios Florida").click()
        cy.get('input[name="startDate"]').invoke('attr', 'value', '2023-02-13')
        cy.get('input[name="endDate"]').invoke('attr', 'value', '2023-02-20')
        cy.get('#d1-btn').click()
        cy.get('button[aria-label="Feb 13, 2023"]').click()
        cy.get('button[aria-label="Feb 20, 2023"]').click()
        cy.get('.uitk-button').eq(10).contains('Done').click({force:true})
        cy.get('#wizard-hotel-pwa-v2-1').submit()
        cy.get('#undefined__btn').click()
        cy.get('.uitk-step-input-button').eq(3).click()
        cy.get('.uitk-step-input-button').eq(3).click()
        cy.get('select#age-0').select('8')
        cy.get('select#age-1').select('10')
        cy.get('button').contains('Done').click({force:true})
        cy.screenshot()
    })

    it('Round-Trip', () => {
        cy.get('.uitk-tab-text').contains('Flights').click()
        cy.get('li[role="presentation"]').eq(6).contains('Roundtrip')
        cy.get('.uitk-field-label').eq(0).should("contain.text", "Leaving from")
        cy.get('.uitk-field-label').eq(5).should("contain.text", "Going to")
        cy.get('span[aria-hidden="true"]').should("contain.text", "Departing")
        cy.get('span[aria-hidden="true"]').should("contain.text", "Returning")
        cy.screenshot()
        cy.get('button[data-testid="preferred-class-input-trigger"]').click()
        cy.get('.uitk-menu-list-item-label').eq(4).should("contain.text", "First class")
        cy.get('.uitk-menu-list-item-label').eq(4).click()
        cy.get('#preferred-class-input').should("contain.text", "First class")
    })

    it('One Way to Round-Trip', () => {
        cy.get('.uitk-tab-text').contains('Flights').click()
        cy.get('li[role="presentation"]').eq(7).contains('One-way').click()
        cy.get('input[name="fromDate"]').should('exist')
        cy.get('input[name="toDate"]').should('not.exist')
        cy.screenshot()
        cy.get('li[role="presentation"]').eq(6).contains('Roundtrip').click()
        cy.get('input[name="toDate"]').should('exist')
        cy.get('input[name="fromDate"]').should('exist')
        cy.screenshot()
    })

    it('Looping through all the tabs', () => {
        for(let i = 0; i < 6; i++){
            cy.get('li[role="presentation"]').eq(i).click()
            cy.get('button[data-testid="submit-button"]').contains('Search')
        }
    })

})
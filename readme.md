To check the Test Automation script go to **Cypress->e2e->test-automation->AutomationScript.cy.js**

Couple of notes: I'm also using cy.screenshot() to capture a screenshot after certain events.
This is to make sure I am visual getting my assertions correct.
I noticed that there was a lot of data-stid tags on Expedia's site.
Normally you should be able to access those tags but for some reason it didn't work for cypress.
So you are going to see a lot of hard assertions here and not as dynamic as it could be.
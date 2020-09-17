class reservaPage {
    
    getOrigin() {
        return cy.get('.-row-top > :nth-child(1) > :nth-child(1) > .sbox-input-container > .sbox-3-input > .input-container > .input-tag');
    }
        
    getDestino() {
        return cy.get('.-row-top > :nth-child(1) > .sbox-second-place-container > .sbox-place-container > .sbox-input-container > .sbox-3-input > .input-container > .input-tag');
    }

    getFechaIda() {
        return cy.get('.sbox-bind-error-flight-roundtrip-start-date-empty > .input-container > .input-tag');
    }

    getFechaIdaDIa() {
        return cy.get('[data-month="2020-11"] > ._dpmg2--dates > :nth-child(8)');
    }

    getFechaRegreso() {
        return cy.get('.-mh3-l > .sbox-dates-row > .-ml1 > .input-container > .input-tag');
    }

    getFechaRegresoDIa() {
        return cy.get('[data-month="2020-11"] > ._dpmg2--dates > :nth-child(15)');
    }

    getBtnBusca() {
        return cy.contains('Buscar');
    }
    
}
export default reservaPage
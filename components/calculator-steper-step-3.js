const template = document.createElement('template');
template.innerHTML = `
    <div>
        step 3
    </div>
`;

export class CalculatorSteperStep3 extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.append(template.content.cloneNode(true));
    }
}

window.customElements.define('my-calculator-steper-step-3', CalculatorSteperStep3);
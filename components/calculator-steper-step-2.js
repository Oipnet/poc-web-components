const template = document.createElement('template');
template.innerHTML = `
    <div>
        step 2
    </div>
`;

export class CalculatorSteperStep2 extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.append(template.content.cloneNode(true));
    }
}

window.customElements.define('my-calculator-steper-step-2', CalculatorSteperStep2);
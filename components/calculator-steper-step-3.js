const template = document.createElement('template');
template.innerHTML = `
    <div>
        step 3
    </div>
`;

export class CalculatorSteperStep3 extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'closed' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const {shadowRoot} = this;

        shadowRoot.append(template.content.cloneNode(true));
    }
}

window.customElements.define('my-calculator-steper-step-3', CalculatorSteperStep3);
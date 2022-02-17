const template = document.createElement('template');
template.innerHTML = `
    <style>
        div {
            margin-bottom: var(--margin);
        }
    </style>
    <div>
        step 1
    </div>
`;

export class CalculatorSteperStep1 extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'close' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const {shadowRoot} = this;

        shadowRoot.append(template.content.cloneNode(true));
    }
}

window.customElements.define('my-calculator-steper-step-1', CalculatorSteperStep1);
const template = document.createElement('template');
template.innerHTML = `
    <style>
        .title {
            color: var(--color-text-primary);
        }
    </style>
    <h1 id="title" class="title">Calculator</h1>
    <slot name="calculator-content"></slot>
`;

export class Calculator extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.append(template.content.cloneNode(true));
    }
}

window.customElements.define('my-calculator', Calculator);
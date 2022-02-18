import templateExtractor from "./templateExtractor";
import template from './templates/calculator-steper-step-1.template.html';

export class CalculatorSteperStep1 extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render = async () => {
        const { HTMLTemplate, styleTemplate } = await templateExtractor(template);
        console.log(HTMLTemplate);
        const { shadowRoot } = this;
    
        shadowRoot.append(HTMLTemplate.content.cloneNode(true));
        shadowRoot.appendChild(styleTemplate);
    }
}

window.customElements.define('my-calculator-steper-step-1', CalculatorSteperStep1);
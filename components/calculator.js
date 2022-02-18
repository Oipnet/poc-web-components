import templateExtractor from './templateExtractor';
import template from './templates/calculator.template.html';

(async () => {
    class Calculator extends HTMLElement {
        constructor() {
            super();
        }
    
        connectedCallback() {
            this.render();
        }
    
        async render() {
            const { HTMLTemplate, styleTemplate } = await templateExtractor(template);
    
            const shadowRoot = this.attachShadow({ mode: 'closed' });
            shadowRoot.append(HTMLTemplate.content.cloneNode(true));
            shadowRoot.appendChild(styleTemplate);    
        }
    }

    customElements.define('my-calculator', Calculator);
})();
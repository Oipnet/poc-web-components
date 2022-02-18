import templateExtractor from './templateExtractor';
import template from './templates/calculator-steper.template.html';

export class CalculatorSteper extends HTMLElement {
    steps = [];

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render = async () => {
        const { HTMLTemplate, styleTemplate } = await templateExtractor(template);

        const { shadowRoot } = this;
    
        shadowRoot.append(HTMLTemplate.content.cloneNode(true));
        shadowRoot.appendChild(styleTemplate);

        this.steps = [... shadowRoot.querySelectorAll('slot')];

        shadowRoot.querySelector('#current-step').innerHTML = this.step;

        this.addEventListener()
    }

    addEventListener = () => {
        const { shadowRoot } = this;

        shadowRoot.querySelector('#next-step').addEventListener('click', this.nextStep);
        shadowRoot.querySelector('#previous-step').addEventListener('click', this.previousStep);
    }

    disconnectedCallback = () => {
        this.shadowRoot.querySelector('next-step').removeEventListener('click', this.nextStep);
        this.shadowRoot.querySelector('previous-step').removeEventListener('click', this.previousStep);
    }

    static get observedAttributes() {
        return ['step'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.steps.length == 0) {
            return;
        }

        switch (name) {
            case 'step':
                this.showStep(newValue);
                break;
        }
    }

    get step() {
        return parseInt(this.getAttribute('step'));
    }

    set step(step) {
        this.setAttribute('step', step);
    }

    showStep = (step) => {
        this.steps.forEach(step => {
            step.classList.add('hidden')
        });

        this.steps[step - 1].classList.remove('hidden');
    }

    nextStep = () => {
        const { shadowRoot } = this;
        if (this.step == this.steps.length) { 
            alert('Fin');
            return;
        }
        ++this.step;
        shadowRoot.querySelector('#current-step').innerHTML = this.step;
    }

    previousStep = () => {
        const { shadowRoot } = this;
        if (this.step == 1) { 
            alert('Debut');
            return;
        }
        --this.step;
        shadowRoot.querySelector('#current-step').innerHTML = this.step;
    }
}

window.customElements.define('my-calculator-steper', CalculatorSteper);
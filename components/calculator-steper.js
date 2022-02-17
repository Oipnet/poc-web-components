const template = document.createElement('template');
template.innerHTML = `
    <style>
        .hidden {
            display: none;
        }

        * {
            color: var(--color-text-primary);
        }

        .calculator-actions {
            margin-top: var(--margin);
        }
    </style>
    <div>
        <slot name="calculator-step-1"></slot>
        <slot name="calculator-step-2" class="hidden"></slot>
        <slot name="calculator-step-3" class="hidden"></slot>
        <div class="calculator-actions">
            <button id="previous-step">Previous</button><button id="next-step">Next</button>
        </div>
    </div>
`;

export class CalculatorSteper extends HTMLElement {
    constructor() {
        super();
        this.steps = [];

        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render()

        this.addEventListener()
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#next-step').removeEventListener('click', this.nextStep);
        this.shadowRoot.querySelector('#previous-step').removeEventListener('click', this.previousStep);
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
    
    render() {
        const {shadowRoot} = this;

        shadowRoot.append(template.content.cloneNode(true));
        this.steps = [... shadowRoot.querySelectorAll('slot')];
    }

    addEventListener() {
        this.nextStep = this.nextStep.bind(this);
        this.shadowRoot.querySelector('#next-step').addEventListener('click', this.nextStep);

        this.previousStep = this.previousStep.bind(this);
        this.shadowRoot.querySelector('#previous-step').addEventListener('click', this.previousStep);
    }

    showStep(step) {
        this.steps.forEach(step => {
            step.classList.add('hidden')
        });

        this.steps[step - 1].classList.remove('hidden');
    }

    nextStep() {
        if (this.step == this.steps.length) { 
            alert('Fin');
            return;
        }
        ++this.step;
    }

    previousStep() {
        if (this.step == 1) { 
            alert('Debut');
            return;
        }
        --this.step;
    }
}

window.customElements.define('my-calculator-steper', CalculatorSteper);
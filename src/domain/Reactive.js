import DomManipulator from './DomManipulator.js';

export default class Reactive {
    constructor(data, actions, computed, elements, templateId, persist = false) {
        this.data = data
        this.actions = actions;
        this.computed = computed;
        this.elements = elements;
        this.templateId = templateId;
        this.persist = persist;
        this.initialize();
    }
    
    initialize() {
        this.setInitialState();
        this.setupProxy();
        this.render();
    }

    setInitialState() {
        Object.assign(this.data, this.persist
            ? JSON.parse(sessionStorage.getItem(this.templateId) ?? '{}')
            : {});
    }
    
    setupProxy() {
        this.data = new Proxy(this.data, {
            set: (target, property, value) => {
                target[property] = value;

                if (this.persist) {
                    sessionStorage.setItem(this.templateId, JSON.stringify(this.data));
                }

                this.render();
                return true;
            },
            get: (target, property) => {
                if (property in this.computed) {
                    return this.computed[property].call(this.data);
                }
                return target[property];
            }
        });
    }

    render() {
        this.renderTemplate();
        this.attachEventHandlers();
    }
    
    renderTemplate() {
        const template = DomManipulator.getReactiveTemplate(this.templateId);
        let renderedTemplate = this.interpolateTemplate(template);
        this.elements.forEach(element => {
            element.innerHTML = renderedTemplate;
        });
    }
    
    interpolateTemplate(template) {
        const variableRegex = /\$(\w+)/g;
        const attributeRegex = /:(\w+)\s*="([^"]+)"/;
        
        let withVariables =
        template.replace(variableRegex, (_, key) => this.data[key])

        const withRulers =
            withVariables.replace(attributeRegex, (_, attribute, content) => {
                const replacedContent = eval(content);
                return `${attribute}="${replacedContent}"`; 
            });

        return withRulers;
    }
    
    attachEventHandlers() {
        this.elements.forEach(element => {
            for (const [eventName, handler] of Object.entries(this.actions)) {
                element.querySelector(`[data-action="${eventName}"]`)
                    .addEventListener('click', () => handler.call(this.data));
            }
        });
    }
}
  
  
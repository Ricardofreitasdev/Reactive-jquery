class Reactive {
    constructor(state, actions, elements, templateId) {
        
        this.element = elements;
        this.state = new Proxy(state, {
            set: (target, property, value) => {
                target[property] = value;
                this.render();
                return true;
            }
        });

        this.templateId = templateId;
        this.actions = actions;
        this.render();
    }
  
    render() {
        /** identificador de variavel $ */
        let regex = /\$(\w+)/g;

        /** identificador de variavel {{ }} */
        // let regex = /{{\s*(\w+)\s*}}/g;

        const template = document.querySelector(this.templateId).innerHTML;
        let renderedTemplate = template.replace(regex, (_, key) => this.state[key]);
      
        const elementInstance =  this.element[0];
        elementInstance.innerHTML = renderedTemplate;
  
        for (const [eventName, handler] of Object.entries(this.actions.actions)) {
            elementInstance.querySelector(`[data-action="${eventName}"]`)
                .addEventListener('click', () => handler.call(this));
        }

        elementInstance.querySelectorAll('[data-input]').forEach((element) => {
            const propertyName = element.getAttribute('data-input');
            
            element.addEventListener('input', () => {
                this.state[propertyName] = element.value;
            });
        });
    }
}
  
const reactive = (element, { state, template, actions }, templateId) => {
    new Reactive(state, { template, actions }, element, templateId);
};
  
export { reactive };
  
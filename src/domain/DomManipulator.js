export default class DomManipulator {
    static appendContent(elements, content) {
        elements.forEach((element) => {
            element.innerHTML += content;
        });
    }

    static removeContent(elements) {
        elements.forEach((element) => {
            element.remove();
        });
    }

    static selectElements(selector) {
        const elements = document.querySelectorAll(selector);

        if (elements.length === 0) {
            console.error('Nenhum elemento encontrado para o seletor:', selector);
        }

        return elements;
    }

    static getReactiveTemplate(templateId) {
        const template = document.querySelector(templateId).innerHTML;

        if (!template) {
            console.error('Nenhum elemento encontrado para o seletor:', templateId);
        }

        return template;
    }
}

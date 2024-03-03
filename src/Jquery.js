import Ajax from './domain/Ajax.js';
import DomEvents from './domain/DomEvents.js';
import DomManipulator from './domain/DomManipulator.js';
import StylesManipulator from './domain/StylesManipulator.js';
import Reactive from './domain/Reactive.js';

/**
 * Classe que representa uma biblioteca simplificada similar ao jQuery,
 * permitindo seleção de elementos, manipulação do DOM e eventos.
 */
class JQuery {
    /**
     * Cria uma nova instância da classe JQuery.
     * @param {string} selector - O seletor para selecionar elementos no DOM.
     */
    constructor(selector) {
        this.elements = DomManipulator.selectElements(selector);
    }

    /**
     * Adiciona conteúdo HTML ao final do conteúdo de cada elemento selecionado.
     * @param {string} content - O conteúdo HTML a ser adicionado.
     * @returns {JQuery} - A própria instância de JQuery para encadeamento de métodos.
     */
    append(content) {
        DomManipulator.appendContent(this.elements, content);
        return this;
    }

    /**
     * Adiciona uma classe CSS a todos os elementos selecionados.
     * @param {string} className - O nome da classe a ser adicionada.
     * @returns {JQuery} - A própria instância de JQuery para encadeamento de métodos.
     */
    addClass(className) {
        StylesManipulator.addClass(this.elements, className);
        return this;
    }

    /**
     * Adiciona um manipulador de eventos a todos os elementos selecionados.
     * @param {string} eventType - O tipo de evento a ser tratado.
     * @param {Function} handler - O manipulador de eventos a ser executado.
     * @returns {JQuery} - A própria instância de JQuery para encadeamento de métodos.
     */
    on(eventType, handler) {
        DomEvents.newEventListener(this.elements, eventType, handler);
        return this;
    }

    /**
     * Remove todos os elementos selecionados do DOM.
     * @returns {JQuery} - A própria instância de JQuery para encadeamento de métodos.
     */
    remove() {
        DomManipulator.removeContent(this.elements);
        return this;
    }

    /**
     * Cria um componente reativo associado a um elemento do DOM.
     * @param {string} templateId - O ID do elemento do DOM que contém o template HTML.
     * @param {Object} config.data - Os dados iniciais do componente reativo.
     * @param {Object} config.actions - As ações que podem ser executadas no
     * componente reativo.
     * @param {Object} config.computed - As computações que derivam dos dados do
     * componente reativo.
     * @param {boolean} [persist] - Um indicador opcional para persistir os
     * dados do componente no localStorage.
     */
    reactive({ templateId, config, persist = false }) {
        new Reactive(
            config.data,
            config.actions,
            config.computed,
            this.elements,
            templateId,
            persist
        );

        return this;
    }
}

const jQueryInstance = (selector) => new JQuery(selector);
Object.setPrototypeOf(jQueryInstance, Ajax);

export const $ = jQueryInstance;

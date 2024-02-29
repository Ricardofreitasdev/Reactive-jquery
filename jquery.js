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
    this.elements = this.selectElements(selector);
  }

  /**
   * Seleciona elementos no DOM com base no seletor fornecido.
   * @param {string} selector - O seletor para selecionar elementos no DOM.
   * @returns {NodeList} - Lista de elementos selecionados.
   */
  selectElements(selector) {
    const elements = document.querySelectorAll(selector);
    
    if (elements.length === 0) {
      console.error("Nenhum elemento encontrado para o seletor:", selector);
    }

    return elements;
  }

  /**
   * Itera sobre todos os elementos selecionados e executa uma função de retorno para cada um.
   * @param {Function} callback - Função de retorno a ser executada para cada elemento.
   */
  forEachElement(callback) {
    this.elements.forEach(callback);
  }

  /**
   * Adiciona conteúdo HTML ao final do conteúdo de cada elemento selecionado.
   * @param {string} content - O conteúdo HTML a ser adicionado.
   * @returns {JQuery} - A própria instância de JQuery para encadeamento de métodos.
   */
  append(content) {

    this.forEachElement((element) => {
      element.innerHTML += content;
    });

    return this;
  }

  /**
   * Adiciona uma classe CSS a todos os elementos selecionados.
   * @param {string} className - O nome da classe a ser adicionada.
   * @returns {JQuery} - A própria instância de JQuery para encadeamento de métodos.
   */
  addClass(className) {

    this.forEachElement((element) => {
      element.classList.add(className);
    });

    return this;
  }

  /**
   * Adiciona um manipulador de eventos a todos os elementos selecionados.
   * @param {string} eventType - O tipo de evento a ser tratado, como 'click' ou 'mouseover'.
   * @param {Function} handler - O manipulador de eventos a ser executado quando o evento ocorrer.
   * @returns {JQuery} - A própria instância de JQuery para encadeamento de métodos.
   */
  on(eventType, handler) {

    this.forEachElement((element) => {
      element.addEventListener(eventType, handler);
    });

    return this;
  }

  /**
   * Remove todos os elementos selecionados do DOM.
   * @returns {JQuery} - A própria instância de JQuery para encadeamento de métodos.
   */
  remove() {

    this.forEachElement((element) => {
      element.remove();
    });

    return this;
  }
}

/**
 * Classe utilitária para fazer requisições AJAX.
 */
class Ajax {
  /**
   * Realiza uma requisição AJAX.
   * @param {Object} options - Opções para a requisição AJAX, como URL, método, cabeçalhos e dados.
   * @returns {Promise} - Uma promessa que resolve com os dados da resposta da requisição.
   */
  static async ajax(options) {
    const response = await fetch(options.url, {
      method: options.method || "GET",
      headers: options.headers || { "Content-Type": "application/json" },
      body: options.data || null,
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    return await response.json();
  }
}

const jQueryInstance = (selector) => new JQuery(selector);
Object.setPrototypeOf(jQueryInstance, Ajax);

export const $ = jQueryInstance;

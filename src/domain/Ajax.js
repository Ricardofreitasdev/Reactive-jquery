/**
 * Classe utilitária para fazer requisições AJAX.
 */
export default class Ajax {
    /**
     * Realiza uma requisição AJAX.
     * @param {Object} options - Opções para a requisição AJAX, como URL, método, cabeçalhos e dados.
     * @returns {Promise} - Uma promessa que resolve com os dados da resposta da requisição.
     */
    static async ajax(options) {
        const response = await fetch(options.url, {
            method: options.method || 'GET',
            headers: options.headers || { 'Content-Type': 'application/json' },
            body: options.data || null,
        });

        if (!response.ok) {
            throw new Error(response.status);
        }

        return await response.json();
    }
}

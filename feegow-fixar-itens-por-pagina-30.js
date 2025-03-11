// ==UserScript==
// @name         Manter Valor 30 no Select
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Mantém o valor 30 selecionado no select de itens por página
// @author       Você
// @match        https://*.feegow.com/v8/?P=ListaEspera&Pers=1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Função para garantir que o valor 30 esteja sempre selecionado
    function manterValor30() {
        const selectElement = document.getElementById('itemsPerPage');
        if (selectElement && selectElement.value !== '30') {
            selectElement.value = '30';
            selectElement.dispatchEvent(new Event('change')); // Dispara o evento de mudança
        }
    }

    // Cria um observer para monitorar alterações no DOM
    const observer = new MutationObserver(manterValor30);

    // Configura o observer para observar mudanças no subtree do body
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Chama a função inicialmente para garantir que o valor esteja correto ao carregar a página
    manterValor30();
})();

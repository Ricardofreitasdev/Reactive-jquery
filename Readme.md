# Recriando o jQuery com Classes JavaScript

Este é um projeto que visa recriar funcionalidades básicas do jQuery utilizando classes JavaScript.

## Instalação

Clone este repositório para o seu computador e instale as dependências do projeto.

## Uso

Execute os testes para garantir que tudo está funcionando corretamente e execute o projeto.

## Funcionalidades

- **Seleção de Elementos**: Permite selecionar elementos do DOM usando seletores CSS.
- **Adição de Classes**: Adiciona uma ou mais classes aos elementos selecionados.
- **Manipulação do DOM**: Inclui funcionalidades para adicionar conteúdo, manipular classes e lidar com eventos.

## Exemplo de Uso

```javascript
import { $ } from "./jquery.js";

// Selecionar elementos e adicionar uma classe
$("button").addClass("btn-primary");

// Adicionar conteúdo a um elemento
$("#response").append("<p>Conteúdo adicionado dinamicamente</p>");

// Manipular eventos
$("button").on("click", () => {
    console.log("Botão clicado!");
});

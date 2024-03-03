# Reactive jQuery

O Reactive jQuery é um projeto de estudo que permite criar interfaces web reativas de forma simples e fácil, utilizando jQuery.

## Funcionalidades

- **Template Reativo**: Os dados são vinculados ao template HTML, atualizando automaticamente a interface quando o estado muda.
- **Persistência de Estado**: AO estado da aplicação pode ser persistido no armazenamento local do navegador, permitindo que os dados sejam mantidos entre sessões.
- **Manipulação do DOM**: Inclui funcionalidades para adicionar conteúdo, manipular classes e lidar com eventos.

## Exemplo de Uso

```html
<head>
    <script src="https://ricardofreitasdev.github.io/Reactive-jquery/dist/reactive-jquery.min.js"></script>
</head>
<body>
    <template id="button-template">
        <p>$count</p>
        <button data-action="add">+1 no contador</button>
    </template>
</body>
```

```javascript
<script>
    $('body')
        .append('<div id="app"></div>')

    $('#app').reactive({
        templateId: '#button-template',
        config: {
            data: {
                count: 0,
            },
            actions: {
                add: function () {
                    this.count++;
                },
            },
            computed:{},
            persist: true
        }
    });
</script>
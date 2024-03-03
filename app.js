$('.container')
    .append('<div id="app"></div>')

$('#app').reactive({
    templateId: '#dinner-table-template',
    config: {
        data: {
            dinnerPrice: 100,
            tipPrice: 10,
        },
        actions: {
            incrementDinner: function () {
                this.dinnerPrice++;
            },
            decrementDinner: function () {
                this.dinnerPrice--;
            },
            incrementTip: function () {
                this.tipPrice++;
            },
            decrementTip: function () {
                this.tipPrice--;
            },
        },
        computed: {
            total: function () {
                const total = this.dinnerPrice + (this.dinnerPrice * this.tipPrice / 100);
                return total.toLocaleString('pt-BR',
                    { style: 'currency', currency: 'BRL' });
            },
            shouldInactiveButton: function () {
                return this.tipPrice <= 0;
            }
        }
    },
    persist: true
});


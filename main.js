const app = new Vue({
    el: '#app',
    data: {
        nome: "World",
        greet: "Hello",
        saluto: "",
        image: "https://picsum.photos/200/300",
        altimg: "wow",
    },
    computed: {
        greeting: function () {
            return this.saluto = `${this.greet} ${this.nome}`;
        }
    }
});


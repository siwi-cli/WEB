(function(window, document) {
    const app = new Vue({
        el: '#app',
        data: {
            title: 'home',
            name: 'gzh'
        },
        mounted() {
            this.test()
        },
        methods: {
            test() {
                console.log(111)
            }
        },
    })
})(window, document);
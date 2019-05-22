(function(window, document) {
    const vm = new Vue({
        el: '#app',
        data: {
            username: Date.now(),
            timestamp: 0,
            date_to_timestamp: 0
        },
        mounted() {
            this.refresh()
        },
        methods: {
            refresh() {
                setInterval(() => {
                    this.timestamp = Math.floor(Date.now() / 1000)
                }, 1000)
            }
        },
    })
})(window, document);
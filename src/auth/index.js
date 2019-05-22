(function(window, document) {
    const app = new Vue({
        el: '#app',
        data: {
            username: '',
            password: 'gzh'
        },
        methods: {
            login() {
                axios.post('/sso/login', Qs.stringify({username: this.username, password: this.password})).then(res => {
                    console.log(res)
                })
            }
        },
    })
})(window, document);
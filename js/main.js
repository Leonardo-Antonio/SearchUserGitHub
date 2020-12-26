let app = new Vue({
    el: '#app',
    data:{
        user: null,
        url: 'https://api.github.com',
        data_user: null
    },
    methods: {
        async SearchUser(){
           const response = await fetch(`${this.url}/users/${this.user}`);
           if (response.ok)
               this.data_user = await response.json();
           console.log(this.data_user);
        },
    },
})
var app = new Vue({
    el: '#app',
    data: {
        books:[],
        search:''
    },
    methods: {
    //Main Fetch and Initial Array//
  
      loader: function () {
        fetch('https://api.myjson.com/bins/1h3vb3', {
          method: "GET",
        
        }).then(function (res) {
          if (res.ok) { 
            return res.json();
          }
        }).then(function (json) {
          this.data = json;
          app.books = this.data.books
        }).catch(function (error) {
          console.log("request failed:" + error.message);
        });
      }
    },
    //Initial Load//
    created (){
      this.loader()
    },
    computed:{
        filteredBooks: function(){
           return this.books.filter((books)=>{
                return books.titulo.toLowerCase().match(this.search.toLowerCase())
            })
        }
    }
  });
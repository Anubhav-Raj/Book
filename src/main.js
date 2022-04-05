import {Vue } from 'vue'
  import VueRouter from 'vue-router';
   import Card from "./components/card.vue"
    import BookDetails from "./components/BookDetails.vue"
    Vue.use(VueRouter);
     const routes=[
         {
             path:"/",
             component:Card
         },
         {
            path:"/BookDetails",
            component:BookDetails
        }
     ]
   const router = new VueRouter({
       routes
   })
     new Vue({
        router,
     }).$mount('#app')
//createApp(App).mount('#app')

 import {createWebHashHistory,createRouter} from 'vue-router'
  import  Card from "./components/card.vue";
   const routes=[
        {
            name:"Book",
            path:"/",
            component:Card
        }
   ];
    const router =createRouter({
         history:createWebHashHistory(),
         routes
    });
     export default router;
     
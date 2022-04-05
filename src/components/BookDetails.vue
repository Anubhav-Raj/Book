 <template>
     <div>
           <h1>Book Details</h1>
            <div>
                 <img src ="https://placekitten.com/380/200"/>
                 <p>
                    I KNOW, I KNOW. Amaga, I should be using dynamic classes, your example is so bad, the avocado is mad and you are no longer my bff. It’s alright, I didn’t like you anyway. However, for purposes of example, let’s pretend that we didn’t know about all that Vue goodness and that we actually were trying to target the DOM this way to make some changes to it. (Jokes aside, if there is a way you can apply classes or styles dynamically, you should ALWAYS opt for doing it with dynamic properties! We are just doing this as an easy-to-follow example.)
                     </p>
            </div>
         </div>
 </template>
 <script>
export default {
  name: "BookDetails",
};
</script>
<style scoped>
.image{
  display: grid;
   grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

 }
  img{
       width: 500px;    
  }
</style>
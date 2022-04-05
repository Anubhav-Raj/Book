<template>
  <div>
    <h1>Books</h1>
     
  </div>
</template>
<script>
export default {
  name: "BookCard",
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
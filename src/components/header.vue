<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
 <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand"> Sugar freeee</a>
    <form class="d-flex g-3" role="search">
     <RouterLink to="/"><button class="btn btn-outline-success"><i class="fa-solid fa-house"></i></button></RouterLink> 
      <button class="btn btn-outline-success" ><i class="fa-solid fa-cart-shopping"></i></button>
    </form>
  </div>
</nav>
</template>

<style scoped>

</style>

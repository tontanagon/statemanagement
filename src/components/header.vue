<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { product } from '../stores/counter';

// Initialize reactive references
const List = ref(product());


</script>

<template>
 <!-- <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">Sugar Freeee</a>
      <div class="">
        <RouterLink to="/">
          <button class="btn btn-outline-success"><i class="fa-solid fa-house"></i></button>
        </RouterLink>
        <RouterLink to="/cart">
          <button class="btn btn-outline-success"><i class="fa-solid fa-cart-shopping"></i>{{ List.sumcart }}</button>
        </RouterLink>
        <RouterLink to="/cart">
          <button class="btn btn-outline-success"><i class="fa-solid fa-receipt"></i></button>
        </RouterLink> 
      </div>
    </div>
  </nav>-->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sugar Freeee</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">
            Home 
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/cart" class="nav-link">
            Cart<i class="fa-solid fa-cart-shopping "></i>{{ List.sumcart }}
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/order" class="nav-link">
            List
          </RouterLink> 
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>
/* Your styles here if needed */
</style>
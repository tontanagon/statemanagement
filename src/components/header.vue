<script setup>
import { RouterLink } from 'vue-router';
import {ref,computed} from 'vue'
import { product } from '../stores/counter'
const List = ref(product())
const ListA = ref(List.value.cartList)
const sum = computed(() => {
  return ListA.value.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
})
</script>
<template>
 <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand"> Sugar freeee</a>
    <div class="d-flex g-3">
     <RouterLink to="/"><button class="btn btn-outline-success"><i class="fa-solid fa-house"></i></button></RouterLink> 
      <button class="btn btn-outline-success" ><i class="fa-solid fa-cart-shopping"></i>{{ sum }}</button>
    </div>
  </div>
</nav>
</template>

<style scoped>

</style>

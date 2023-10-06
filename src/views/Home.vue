<script setup>
import Header from '../components/header.vue'
import { product } from '../stores/counter'
const List = product()



</script>

<template>
 <RouterView></RouterView>
    <Header></Header>
    <h1 class="m-3">Menu</h1>
    <div class="row row-cols-1 row-cols-md-4 g-4 m-3">
  <div class="col" v-for="(i,index) in List.productList" :key="index">
    <div class="card h-100">
      <img :src=i.img class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ i.name }}</h5>
        <span class="card-text ">ประเภท : {{ i.type }}</span><br>
        <span class="card-text ">ราคา : {{ i.price }} บาท</span><br><br>
        <RouterLink to="/sugar" class="card-text "><button class="card-text btn btn-primary" @:click="List.idcard(index)">รายละเอียด</button></RouterLink>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
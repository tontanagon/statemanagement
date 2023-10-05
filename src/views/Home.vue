<script setup>
import {ref} from 'vue'
import Header from '../components/header.vue'
import { product } from '../stores/counter'
const List = product()
const valuepro = ref([0,0,0,0,0,0,0,0])

function plus(i){
  valuepro.value[i] ++
  }
function minus(i){
  if(valuepro.value[i] > 0){
    valuepro.value[i] --
  }
  }
</script>

<template>
 <RouterView></RouterView>
    <Header></Header>
    <div class="row row-cols-1 row-cols-md-4 g-4 m-3">
  <div class="col" v-for="(i,index) in List.productList" :key="index">
    <div class="card h-100">
      <img :src=i.img class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ i.name }}</h5>
        <span class="card-text ">ประเภท : {{ i.type }}</span><br>
        <span class="card-text ">ราคา : {{ i.price }} บาท</span><br><br>
        <div class="btn-group me-2" role="group" aria-label="Second group">
          <button type="button" class="btn btn-primary" @click="plus(index)"><i class="fa-solid fa-plus"></i></button>
          <div class="btn btn-light">{{ valuepro[index] }}</div>
          <button type="button" class="btn btn-danger" @click="minus(index)"><i class="fa-solid fa-minus"></i></button>
        </div>
        <RouterLink to="/sugar" class="card-text "><button class="card-text btn btn-primary" @:click="List.idcard(index)">รายละเอียด</button></RouterLink>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
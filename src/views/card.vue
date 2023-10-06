<script setup>
import Header from '../components/header.vue'
import { ref } from 'vue'
import { product } from '../stores/counter'
const pro = ref(product())
const List = pro.value.productList
const valuepro = ref(0)
function plus(){
  valuepro.value ++
  }
function minus(){
  if(valuepro.value > 0){
    valuepro.value --
  }
  }
</script>

<template>
 <RouterView></RouterView>
    <Header></Header>
    <h1 class="m-3">Discription</h1>
    <div class="card center">
      <img :src='List[pro.id].img' class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ List[pro.id].name }}
          <small class="text-body-secondary card-text">{{ List[pro.id].type }}</small>
        </h5>
        <span class="card-text"><h5>รายละเอียด</h5>  {{ List[pro.id].discription }}</span><br><br>
        <h5 class="card-text">ราคา : {{ List[pro.id].price }} บาท</h5>
        <div class="btn-group me-2" role="group" aria-label="Second group">
          <button type="button" class="btn btn-primary" @click="plus()"><i class="fa-solid fa-plus"></i></button>
          <div class="btn btn-light">{{ valuepro }}</div>
          <button type="button" class="btn btn-danger" @click="minus()"><i class="fa-solid fa-minus"></i></button>
        </div>
        <RouterLink to="/cart"><button class="btn btn-primary" @click="pro.add(List[pro.id].name,List[pro.id].price,valuepro,List[pro.id].img)">add to cart</button></RouterLink>

      </div>  
    </div>

</template>

<style scoped>
.center{
  margin-top: 10px;
  margin-left: 35%;
  margin-right: 25%;
  max-width: 550px;
}
</style>
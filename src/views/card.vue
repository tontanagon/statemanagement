<script setup>
import Header from '../components/header.vue'
import { ref } from 'vue'
import { product } from '../stores/counter'
const pro = ref(product())
const List = pro.value.productList

</script>

<template>
 <RouterView></RouterView>
    <Header></Header>
    <div class="card center">
      <img :src='List[pro.id].img' class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ List[pro.id].name }}
          <small class="text-body-secondary card-text">{{ List[pro.id].type }}</small>
        </h5>
        
        <span class="card-text"><h5>รายละเอียด</h5>  {{ List[pro.id].discription }}</span><br>
        <h5 class="card-text">ราคา : {{ List[pro.id].price }} บาท</h5>
      </div>
    </div>
</template>

<style scoped>
.center {
  margin-left: 35%;
  margin-right: 25%;
  max-width: 600px;
}
</style>
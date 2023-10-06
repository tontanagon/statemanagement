<script setup>
import {ref} from 'vue'
import Header from '../components/header.vue'
import { product } from '../stores/counter'
const List = product()

</script>

<template>
 <RouterView></RouterView>
    <Header></Header>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">ชื่อสินค้า</th>
      <th scope="col">ราคาต่อชิ้น</th>
      <th scope="col">จำนวน</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(i,index) in carts" :key="index" >
      <th scope="row">{{ index+1 }}</th>
      <td>{{ i.name }}</td>
      <td>{{ i.price }}</td>
      <td>{{ i.number }}</td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>

</style>
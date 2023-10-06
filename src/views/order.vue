<script setup>
import {ref} from 'vue'
import Header from '../components/header.vue'
import { product } from '../stores/counter'
const List = product()
const order = ref(List.orderList)
const orderpri = ref(List.orderprice)


</script>

<template>
 <RouterView></RouterView>
    <Header></Header>
    <h1 class="m-3">Order history</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">รายการสินค้า</th>
      <th scope="col">สินค้า</th>
      <th scope="col">ราคา</th>
      <th scope="col">จำนวน</th>
      <th scope="col">รวมที่จ่าย</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in order" :key="index">
      <th scope="row">{{ index+1 }}</th>
      <td>
        <div v-for="(m,index) in item" :key="index">
          {{ m.name }}
      </div>
      </td>
      <td >
        <div v-for="(m,index) in item" :key="index">
          <img :src=m.img alt="" style="max-width: 100px;">
      </div>
      </td>
      <td >
        <div v-for="(m,index) in item" :key="index">
          {{ m.price }}
      </div>
      </td>
      <td >
        <div v-for="(m,index) in item" :key="index">
          {{ m.count }}
      </div>
      </td>
      <td >
        <div>
          {{ orderpri[index] }}</div>
      </td>
    </tr>
  </tbody>
</table>

</template>

<style scoped>

</style>
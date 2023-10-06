<script setup>
import {ref} from 'vue'
import Header from '../components/header.vue'
import { product } from '../stores/counter'
const List = product()
const carts = ref(List.cartList)

function plus(index){
  carts.value[index].count ++
  }
function minus(index){
    carts.value[index].count --
    if (carts.value[index].count == 0) {
      List.delcart()
    }
  }
</script>

<template>
 <RouterView></RouterView>
    <Header></Header>
<table class="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">ชื่อสินค้า</th>
      <th scope="col">สินค้า</th>
      <th scope="col">ราคาต่อชิ้น</th>
      <th scope="col">จำนวน</th>
      <th scope="col">รวม</th>
      <th scope="col">ลบรายการ</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(i,index) in carts" :key="index">
      <th scope="row">{{ index+1 }}</th>
      <td>{{ i.name }}</td>
      <td><img :src=i.img alt="" style="max-width: 100px;"></td>
      <td>{{ i.price }} บาท</td>
      <td>
        <div class="btn-group me-2" role="group" aria-label="Second group">
          <button type="button" class="btn btn-primary" @click="plus(index)"><i class="fa-solid fa-plus"></i></button>
          <div class="btn btn-light">{{ i.count }}</div>
          <button type="button" class="btn btn-danger" @click="minus(index)" :disabled="i.count === 0"><i class="fa-solid fa-minus"></i></button>
        </div></td>
      <td>{{ i.count*i.price }} บาท</td>
      <td><button type="button" class="btn btn-danger" @click="List.delcart(index)">ลบรายการ</button></td>
    </tr>
  </tbody>
</table>
<div class="text-end float-end m-3">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">สรุปรายการ</h5>
      <p class="card-text">สินค้าทั้งหมด : {{ List.sumcart }} ชิ้น</p>
      <p class="card-text">รวมเงินทั้งหมด : {{ List.sumprice }} บาท</p>
      <button class="btn btn-success"> ยืนยันคำลั่งซื้อ</button>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
<script setup lang="ts">
const searchBook = () => {
  console.log('ok');
}
</script>
<template>
  <div class="d-flex ml-8 mt-5" style="width: 50%;">
    <v-text-field placeholder=" 書籍名で検索" />
    <v-btn flat class="ml-5 search-btn" @click="searchBook">
      <v-icon>mdi-magnify</v-icon> 検索
    </v-btn>
  </div>
</template>
<style scoped lang="scss">
::v-deep(.search-btn) {
  height: 55px !important;
  font-size: 16px;
  font-weight: 700;
  background-color: #00B16B;
  color: #fff;
}
</style>
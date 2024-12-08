<script setup lang="ts">
const buttons = [
  { name: '書籍貸し出し', color: 'secondary' },
  { name: '書籍返却', color: 'warning' },
  { name: '書籍登録', color: 'green' },
]
</script>

<template>
  <div class="btn-container">
    <v-btn elevation="4" rounded="xl" v-for="(button, index) in buttons"
      style="width: 20%; height: 20%; font-size: 30px; font-weight: 600;" :key="index" :color="button.color">{{ button.name }}</v-btn>
  </div>
</template>
<style scoped lang="scss">
.btn-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
v-btn {
  color: #fff !important;
  font-size: 40px !important;
}
</style>
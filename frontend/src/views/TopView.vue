<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goToBookList = () => {
  router.push('/book/list')
}

const buttons = [
  { name: '書籍貸し出し', color: 'secondary', onclick: goToBookList },
  { name: '書籍返却', color: 'warning', onclick: goToBookList },
  { name: '書籍登録', color: 'green', onclick: goToBookList },
]
</script>

<template>
  <div class="btn-container">
    <v-btn elevation="4" rounded="xl" v-for="(button, index) in buttons" :key="index" :color="button.color"
      @click="button.onclick" style="width: 20%; height: 20%; font-size: 30px; font-weight: 600;">
      {{ button.name }}
    </v-btn>
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
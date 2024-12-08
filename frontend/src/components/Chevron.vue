<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goBackTop = () => {
  router.push('/')
}
</script>
<template>
  <v-icon class="mt-8 ml-8" style="scale: 2" @click="goBackTop">mdi-chevron-double-left</v-icon>
</template>

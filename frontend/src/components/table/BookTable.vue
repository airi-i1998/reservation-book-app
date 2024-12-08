<script setup lang="ts">
import { BookListHeader } from '@/data/headerlist/BookListHeader';

</script>
<template>
  <div class="mt-4 h-100 ml-8 mr-8">
    <v-data-table
    :headers="BookListHeader"
    class="border-thin rounded"
    fixedHeader
    >
    </v-data-table>
  </div>
</template>
<style scoped lang="scss">
</style>
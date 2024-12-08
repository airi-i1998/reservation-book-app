<script setup lang="ts">
import Chevron from '@/components/Chevron.vue';
import BookSearch from '@/components/BookSearch.vue';
import BookTable from '@/components/table/BookTable.vue';

</script>
<template>
  <div class="book-list">
    <Chevron />
    <h1 class="mt-8 ml-8">書籍一覧</h1>
    <BookSearch />
    <div>
      <BookTable />
    </div>
  </div>
</template>
<style scoped lang="scss">
.book-list {
  width: 100%;
  height: 100%;
}
</style>
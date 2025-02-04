<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useBookScan } from '../stores/useBookScan';

const { startScanner, stopScanner, closeScanner } = useBookScan()
const { scannerActive, scannerContainer } = storeToRefs(useBookScan())

onMounted(() => {
  const scanButton = document.querySelector(".scan")
  scanButton?.addEventListener("click", startScanner)
})

// コンポーネントが破棄されるときに、Scanボタンのイベントを解除、スキャナーを停止
onUnmounted(() => {
  const scanButton = document.querySelector(".scan")
  scanButton?.removeEventListener("click", startScanner)
  stopScanner()
})
</script>

<template>
  <form>
    <div class="input-field">
      <button type="button" class="icon-barcode button scan">Scan</button>
    </div>
  </form>

  <div v-if="scannerActive" class="overlay">
    <div class="overlay__content" ref="scannerContainer">
      <div>
        <v-btn class="overlay__close" @click="closeScanner">X</v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay__content {
  position: relative;
  width: 640px;
  height: 480px;
  background: #fff;
}

.overlay__close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  pointer-events: auto;
  z-index: 1000;
}
</style>

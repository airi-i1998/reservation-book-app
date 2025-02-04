import { defineStore } from 'pinia'
import { ref, nextTick } from "vue";

export const useBookScan = defineStore('bookScan', () => {
  // nextTick：DOMの更新が完了した後に処理を実行する
  // onUnmounted：ページ（コンポーネント）が破棄されたとき

  // CDNサーバーから直接読み込んだQuaagaJSをwindow.Quaggaから取得
  const Quagga: any = window.Quagga
  // スキャナーの状態管理
  const scannerActive = ref(false)
  // スキャンしたISBNコードを格納するためのinput要素の参照
  const isbnInput = ref<HTMLInputElement | null>(null)
  // カメラ映像を表示するdivを格納するためのref
  const scannerContainer = ref<HTMLElement | null>(null)


  const configureScanner = async () => {
    await nextTick()

    return new Promise<void>((resolve, reject) => {
      if (!scannerContainer.value) {
        reject("Scanner container not found")
        return
      }

      // Quaggaを初期化
      Quagga.init(
        {
          inputStream: {
            // リアルタイムのカメラ映像を使用
            type: "LiveStream",
            constraints: {
              width: 640,
              height: 480,
              // environment（外向きカメラ）を指定
              facingMode: "environment",
            },
            target: scannerContainer.value,
          },
          decoder: {
            // EAN- 13(ean_reader) と EAN- 8(ean_8_reader) のバーコードを読み取る
            readers: ["ean_reader", "ean_8_reader"],
          },
          locator: {
            halfSample: false,
            patchSize: "medium",
          },
        },
        (err: any) => {
          if (err) {
            console.error("Quagga init error:", err)
            reject(err)
            return
          }
          resolve()
        }
      )
    })
  }

  const startScanner = async () => {
    try {
      scannerActive.value = true
      await nextTick()

      await configureScanner()
      Quagga.start()
      Quagga.onDetected(onDetected)
    } catch (err) {
      console.error("Failed to start scanner:", err)
    }
  }

  const stopScanner = async () => {
    scannerActive.value = false
    await nextTick()

    if (Quagga) {
      // カメラを停止
      Quagga.stop()
      Quagga.offDetected(onDetected)
    }
    console.log("Scanner stopped.")
  }

  const closeScanner = async (event: Event) => {
    event.stopPropagation()
    await stopScanner()
  }

  // バーコードが検出されたときの処理
  const onDetected = (result: any) => {
    if (isbnInput.value) {
      // ISBNコードを isbnInput に入力
      isbnInput.value.value = result.codeResult.code
    }
    // スキャンが完了したら stopScanner() を実行
    stopScanner()
  }

  return {
    scannerActive,
    scannerContainer,
    startScanner,
    stopScanner,
    closeScanner
  }
})
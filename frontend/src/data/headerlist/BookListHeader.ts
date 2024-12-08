/* VDataTableVirtual：Vuetifyのデータテーブルコンポーネントの1つ
大量のデータを効率よくレンダリングするための「仮想スクロール」を提供
画面に表示されている部分だけ動的にレンダリングする */
import type { VDataTableVirtual } from 'vuetify/components'

export const BookListHeader: VDataTableVirtual['headers'] = [
  { value: 'id', title: 'ID'},
  { value: 'bookName', title: '書籍名'},
  { value: 'owner', title: '所有者'},
  { value: 'bookStatus', title: '貸し出し状況'},
]

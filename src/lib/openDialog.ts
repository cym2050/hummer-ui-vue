import { createApp, h } from 'vue';
import Dialog from './Dialog.vue'

export const openDialog = (options) => {
  const { title, content } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  createApp(Dialog).mount(div)
}
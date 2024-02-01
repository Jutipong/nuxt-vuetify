// ===========================================
// ========= library confirm dialog ==========
// ===========================================
export type color = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

export interface ConfirmOptions {
  iconTitle?: string
  btnOk?: {
    text: string
    color: color
    icon?: string
  }
  btnCancel?: {
    color: color
    text: string
    icon?: string
  }
}

export const state = reactive({
  isOpen: false,
  message: '',
  title: '',
  resolve: (_val: boolean) => { },
  reject: (_val: boolean) => { },
  options: {} as ConfirmOptions,
})

export function reset() {
  state.isOpen = false
  state.title = ''
  state.message = ''
  state.options = {} as ConfirmOptions
}

export function init(title: string, message: string, options: ConfirmOptions) {
  state.isOpen = true
  state.title = title
  state.message = message
  state.options = Object.assign(state.options, options)
}

export function onOk() {
  state.resolve(true)
  state.isOpen = false
  reset()
}

export function onCancel() {
  state.resolve(false)
  state.isOpen = false
  reset()
}

// export default {
//   state,
//   onOk,
//   onCancel,
// }
import { state, init } from '@/plugins/vConfirm/confirm'
import type { ConfirmOptions } from '@/plugins/vConfirm/confirm';

export const vConfirm = {
  info: (title: string, message: string, options?: ConfirmOptions) => {

    const op = Object.assign({
      btnOk: {
        text: 'Yes',
        color: 'success',
      },
      btnCancel: {
        text: 'Cancel',
        color: 'secondary',
      },
    } as ConfirmOptions, options)

    init(title, message, op)

    return new Promise<boolean>((resolve, reject) => {
      state.resolve = resolve
      state.reject = reject
    })
  },
  save: (title: string, message: string, options?: ConfirmOptions) => {

    const op = Object.assign({
      iconTitle: 'mdi-content-save',
      btnOk: {
        text: 'Yes',
        color: 'primary',
      },
      btnCancel: {
        text: 'Cancel',
        color: 'secondary',
      },
    } as ConfirmOptions, options)

    init(title, message, op)

    return new Promise<boolean>((resolve, reject) => {
      state.resolve = resolve
      state.reject = reject
    })
  },
  delete: (title: string, message: string, options?: ConfirmOptions) => {

    const op = Object.assign({
      iconTitle: 'mdi-delete',
      btnOk: {
        text: 'Yes',
        color: 'error',
      },
      btnCancel: {
        text: 'Cancel',
        color: 'secondary',
      },
    } as ConfirmOptions, options)


    init(title, message, op)

    return new Promise<boolean>((resolve, reject) => {
      state.resolve = resolve
      state.reject = reject
    })
  },
}
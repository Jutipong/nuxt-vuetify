import ls from 'localstorage-slim'
import type { UserLogin } from '@/types/auth'

ls.config.storage = sessionStorage
ls.config.encrypt = true

export const useLocalStorages = {
  clearLocalStorage: () => {
    ls.clear()
  },
  setToken: (token: string) => {
    ls.set(_const.app.tokenKey, token)
  },
  getToken: (): string | null => {
    const token = ls.get<string | null>(_const.app.tokenKey)
    return token
  },
  setUserLogin: (userInfo: UserLogin) => {
    ls.set(_const.app.userLoginKey, userInfo)
  },
  getUserLogin: (): UserLogin | null => {
    const userInfo = ls.get<UserLogin | null>(_const.app.userLoginKey)
    return userInfo
  },
}
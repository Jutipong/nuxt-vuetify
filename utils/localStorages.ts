import ls from 'localstorage-slim'
import type { UserLogin } from '@/types/auth'

export const useLocalStorages = {
  clearLocalStorage: () => {
    ls.config.storage = sessionStorage
    ls.config.encrypt = true
    ls.clear()
  },
  setToken: (token: string) => {
    ls.config.storage = sessionStorage
    ls.config.encrypt = true
    ls.set(_const.app.tokenKey, token)
  },
  getToken: (): string | null => {
    ls.config.storage = sessionStorage
    ls.config.encrypt = true
    const token = ls.get<string | null>(_const.app.tokenKey)
    return token
  },
  setUserLogin: (userInfo: UserLogin) => {
    ls.config.storage = sessionStorage
    ls.config.encrypt = true
    ls.set(_const.app.userLoginKey, userInfo)
  },
  getUserLogin: (): UserLogin | null => {
    ls.config.storage = sessionStorage
    ls.config.encrypt = true
    const userInfo = ls.get<UserLogin | null>(_const.app.userLoginKey)
    return userInfo
  },
}
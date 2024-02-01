import ls from 'localstorage-slim'
import type { UserLogin } from '@/types/auth'

const { app } = useConstant


export const useLocalStorages = {
  clearLocalStorage: () => {
    ls.config.storage = sessionStorage
    ls.config.encrypt = true
    ls.clear()
  },
  setToken: (token: string) => {
    ls.config.storage = sessionStorage
    ls.config.encrypt = true
    ls.set(app.tokenKey, token)
  },
  getToken: (): string | null => {
    ls.config.storage = sessionStorage
    ls.config.encrypt = true
    const token = ls.get<string | null>(app.tokenKey)
    return token
  },
  setUserLogin: (userInfo: UserLogin) => {
    ls.config.storage = sessionStorage
    ls.config.encrypt = true
    ls.set(app.userLoginKey, userInfo)
  },
  getUserLogin: (): UserLogin | null => {
    ls.config.storage = sessionStorage
    ls.config.encrypt = true
    const userInfo = ls.get<UserLogin | null>(app.userLoginKey)
    return userInfo
  },
}
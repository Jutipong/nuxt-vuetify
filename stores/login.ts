import type { UserLogin } from '@/types/auth'

export const useLoginStore = defineStore('login', () => {
  const state = reactive({ isLoading: false })

  async function logIn(username: string, password: string): Promise<void> {
    debugger;


    console.log(useConstant.baseUrl.api);

    state.isLoading = true

    const res = await api.post<UserLogin>('/auth/login', { username, password }, { isLoading: false })

    debugger;
    const { setToken, setUserLogin } = useLocalStorages
    setToken(res.token)
    setUserLogin(res)

    state.isLoading = false

    await navigateTo('/');
  }

  async function logOut(alertConfirm: boolean = true): Promise<void> {

    if (alertConfirm) {
      if (!await vConfirm.info('Logout!', 'Are you sure you want to log out?', {
        iconTitle: 'mdi-logout',
        btnOk: {
          color: 'error',
          text: 'Log out',
          icon: 'mdi-logout',
        },
      }))
        return
    }

    await navigateTo('/login');
  }

  return {
    state,
    logIn,
    logOut,
  }
})

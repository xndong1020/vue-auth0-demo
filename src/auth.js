import { WebAuth } from 'auth0-js'
import store from './store'

export const webAuth = new WebAuth({
  responseType: 'token id_token',
  domain: 'bbxit.au.auth0.com',
  clientID: '0N23ukLj7Ntq2qz85TLb7LUrE09M0L2k',
  redirectUri: `http://localhost:8080/callback`,
  scope: 'openid profile email'
})

// login
export const login = (username, password) => {}

// logout
export const logout = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('idToken')
  localStorage.removeItem('name')
  localStorage.removeItem('email')
  localStorage.removeItem('sub')
  localStorage.removeItem('exp')
}

// checkAuth
export const checkAuth = () => {
  if (localStorage.getItem('idToken') && localStorage.getItem('sub')) {
    return true
  } else {
    return false
  }
}

// requireAuth
export const requireAuth = (to, from, next) => {
  console.log('requireAuth working')
  if (!checkAuth()) {
    console.log('auth failed ...')
    let path = '/signin'
    next({
      path: path
    })
  } else {
    const { idToken, id } = store.state.auth
    if (!idToken || !id) {
      store.commit('setUserAuth', {
        accessToken: localStorage.getItem('accessToken'),
        idToken: localStorage.getItem('idToken'),
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        id: localStorage.getItem('sub')
      })
    }
    next()
  }
}

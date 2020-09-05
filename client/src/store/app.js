import Vue from 'vue'
import Vuex from 'vuex'
import enums from '../enum/index'
import userService from '@/services/userService'
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: window.localStorage.getItem('token') || null,
        currentUser: {}
    },
    mutations: {
        setLayout(state, value) {
            state.token = value;
            window.localStorage.setItem('token', value);
        },
        auth_success(state, {
            token,
            user
        }) {
            state.token = token
            state.currentUser = user

        },
        logout(state) {
            state.token = ''
        },
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    },
    actions: {
        login({
            commit
        }, user) {
            return new Promise((resolve, reject) => {
                userService.login(user).then((res) => {
                    var token = res.data.token
                    window.localStorage.setItem('token', token)
                    axios.defaults.headers.common['Authorization'] = token
                    console.log(res.data.user)
                    commit('auth_success', {
                        token,
                        user: res.data.user
                    })
                    resolve(res)
                }).catch((err) => {
                    window.localStorage.removeItem('token')
                    reject(err)
                })
            })
        },
        register({
            commit
        }, user) {
            return new Promise((resolve, reject) => {
                userService.register(user).then((resp) => {
                    console.log(resp);
                    const token = resp.data.token
                    const user = resp.data.user
                    localStorage.setItem('token', token)
                    axios.defaults.headers.common['Authorization'] = token
                    commit('auth_success', {
                        token,
                        user
                    })
                    resolve(resp)
                }).catch((err) => {
                    localStorage.removeItem('token')
                    reject(err)
                })
            })
        },
        logout({
            commit
        }) {
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    }
})
export default store;
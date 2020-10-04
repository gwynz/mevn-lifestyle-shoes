import Vue from 'vue'
import Vuex from 'vuex'
import enums from '../enum/index'
import userService from '@/services/userService'
import axios from 'axios'
import decode from 'jwt-decode'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: window.localStorage.getItem('token') || null,
        currentUser: null
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
            console.log('res', state.currentUser)
        },
        logout(state) {
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
            state.token = ''
            state.currentUser = null
        },
        updateUser(state, value) {
            console.log('value', value)
            state.currentUser = value
        }
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
                    commit('auth_success', {
                        token,
                        user: res.data.user
                    })
                    resolve(res)
                }).catch((err) => {
                    window.localStorage.removeItem('token')
                    console.log(err)
                    reject(err)
                })
            })
        },
        register({
            commit
        }, user) {
            return userService.register(user).then((resp) => {
                console.log('res', resp);
                const token = resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', {
                    token,
                    user
                })
                return resp;
            }).catch((err) => {
                localStorage.removeItem('token')
                throw err;
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
        },
        getUserByToken: (context) => {
            if (!context.state.token) {
                return;
            } else {
                let object = decode(context.state.token)
                console.log(object)
                context.commit('updateUser', object)
            }
        },
    }
})
export default store;
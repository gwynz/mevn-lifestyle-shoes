import Vue from 'vue'
import Vuex from 'vuex'
import enums from '../enum/index'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        typeOfLayout: window.localStorage.getItem('layout') || enums.TYPE_LAYOUT.COL
    },
    mutations: {
        setLayout(state, value) {
            state.typeOfLayout = value;
            window.localStorage.setItem('layout', value);
        }
    }
})
export default store;
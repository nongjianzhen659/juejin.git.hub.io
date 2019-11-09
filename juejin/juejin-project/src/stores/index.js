import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        author: '',
        searchVlu: {
            value: ''
        }
    },
    getters: {
        getAuthor(state) {
            return state.searchVlu
        }
    },
    mutations: {
        setAuthor(state, data) {
            state.searchVlu = data
        }
    },
    actions: {
        setAuthor(context, data) {
            context.commit('setAuthor', data)
        }
    }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = "https://jsonplaceholder.typicode.com/posts/"
const Header = { Accecpt : "application/json"}

export default new Vuex.Store({
  state: {
    currentUser : [],
    allUsers : [],
    currentUsers : [],
  },
  mutations: {
    setCurrentUser(state,payload){
      // console.log(state.currentUser)
      if(state.currentUser.length > 0){
        state.currentUser.pop();
      }
      // console.log(state)
      state.currentUser.push(payload);
      state.allUsers.push(payload);
    },
    setCurrentUsers(state, payload) {
        // console.log(payload)
        state.currentUsers.push(payload);
      
    }
  },
  actions: {
    async setCurrentUser(state, payload){
      const user = await fetch(url + payload, { Header });
      const data = await user.json();
      
      state.commit('setCurrentUser' ,data);
    },
    setCurrentUsers(state, payload) {
      // console.log("test",payload)
      const data = payload
      state.commit('setCurrentUsers',data);
    }
  },
  modules: {
  },
  getters: {
    getUser : state => state.currentUser,
    getAllUser : state => state.allUsers,

    getUsers : state => state.currentUsers,
  }
})

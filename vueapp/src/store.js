import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
islogged:'false',
username:null,
password:null
  },
  mutations: {
    //temporary auth flow
auth (state,data){
  if(data.username && data.password){
    state.islogged=true;
    state.username=data.username;
    state.password=data.password;
  }
},
logout(state){
  state.islogged=false;
  state.username=null;
  state.password=null;
}
  },
  actions: {
auth({commit},data){
  commit('auth',data);
},
logout({commit}){
commit('logout');
}
  }
})

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
host:null,
username:null,
password:null,
path:'home/'
  },
  mutations: {
    //temporary auth flow
auth (state,data){
  if(data.username && data.password){
    state.islogged=true;
    state.host=data.host
    state.username=data.username;
    state.password=data.password;
  }
},
logout(state){
  state.islogged=false;
  state.host=null;
  state.username=null;
  state.password=null;
},
path(state,data){
  state.path = data.path
}
  },
  actions: {
auth({commit},data){
  commit('auth',data);
},
logout({commit}){
commit('logout');
},
path({commit}){
  commit('path')
}
  }
})

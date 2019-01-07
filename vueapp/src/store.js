import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
}
  },
  actions: {
auth({commit},data){
  commit('auth',data);
}
  }
})

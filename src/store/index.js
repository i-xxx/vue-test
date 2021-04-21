import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    test (state,data) {
      console.log('ojbkkkk',state,data.num1,data.num2);
    }
  },
  actions: {
    disTest (hh,data) {
      console.log(hh);
      console.log(data);
      setTimeout (() => {
        this.commit('test',data)
      },1000)
    }
  },
  modules: {
  }
})

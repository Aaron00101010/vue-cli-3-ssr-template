import { getCnNodeList } from '../api/cn-node'

export default {
  namespaced: true,
  state: () => ({
    list: {}
  }),
  actions: {
    getList: ({ commit }) => getCnNodeList().then((resp) => {
      commit('setBar', resp.data)
    })
  },
  mutations: {
    setBar: (state, data) => { state.list = data }
  }
}

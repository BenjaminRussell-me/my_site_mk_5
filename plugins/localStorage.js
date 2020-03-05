import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'localData',
      paths: ['articles','bio']
    })(store)
  })
}

export const state = () => ({
  bio: []
});

export const actions = {
  async fetchAllContent({commit}) {
    let content = await this.$axios.$get('bios');
    commit('setContent', content)
  }

};

export const mutations = {
  setContent (state, content) {
    state.bio = content
  }
};

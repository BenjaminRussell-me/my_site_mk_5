export const state = () => ({
  articles: []
});

export const actions = {
  async fetchAllContent({commit}) {
    let content = await this.$axios.$get('articles');
    commit('setContent', content)
  }

};

export const mutations = {
  setContent (state, content) {
    state.articles = content
  }
};

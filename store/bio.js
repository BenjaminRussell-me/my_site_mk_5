import biosQuery from '../apollo/queries/bio/bios.graphql'
export const state = () => ({
  bio: []
});

export const actions = {
  async fetchBio({commit}) {
    let content = await this.$axios.$get('content');
    commit('setBio', content)
  }

};

export const mutations = {
  setBio (state, wanted) {
    state.bio = wanted;
    console.log('bio please');
  }
};

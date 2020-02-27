import biosQuery from '../apollo/queries/bio/bios.graphql'
export const state = () => ({
  bio: []
});

export const mutations = {
  setBio (state, wanted) {
    state.bio = wanted;
    console.log('bio please');
  }
};

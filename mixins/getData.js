
export const getData = {
  async fetch({store}) {
    await store.dispatch('articles/fetchAllContent');
    await store.dispatch('bio/fetchAllContent')
  },
};

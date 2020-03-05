export const state = () => ({
  modalStatus: false,
  title: '',
  content:'',
  photo:'',
  published:'',
  type1Display:'',
  type1:false,
  type2:false,
});


export const mutations = {
  modalChange (state) {
    state.modalStatus = state.modalStatus === false;
  },
  setTitle(state, wanted) {
    state.title = wanted;
  },
  setModalContent(state, wanted) {
    state.content = wanted;
  },
  setPhoto(state, wanted) {
    state.photo = wanted;
  },
  setPublished(state, wanted) {
    state.published = wanted;
  },
  setType1Display(state, wanted) {
    state.type1Display = wanted;
  },
  setType1(state, wanted) {
    state.type1 = wanted;
  },
  setType2(state, wanted) {
    state.type2 = wanted;
  },
};

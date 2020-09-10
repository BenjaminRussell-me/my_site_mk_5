export const state = () => ({
  pagesArr: [
    {
      page:`/`,
      text:`Home`,
      color1:`black`,
      color2:`black`,
      forward: `/development/`,
      backward: `/about/`,
      number: 0
    },
    {
      page:`/development/`,
      text:`Development`,
      color1:`#2271b4`,
      color2:`#234085`,
      forward: `/design/`,
      backward: `/`,
      number: 1
    },
    {
      page:`/design/`,
      text:`Design`,
      color1:`#1E86AC`,
      color2:`#1d6384`,
      forward: `/social/`,
      backward: `/development/`,
      number: 2
    },
    {
      page:`/social/`,
      text:`By Me`,
      color1:`#1C9C9F`,
      color2:`#197477`,
      forward: `/about/`,
      backward: `/design/`,
      number: 3
    },
    {
      page:`/about/`,
      text:`About Me`,
      color1:`#1FB08E`,
      color2:`#147b64`,
      forward: `/`,
      backward: `/social/`,
      number: 4
    }
  ],
  currentPage:{
    page:`/`,
    text:`Home`,
    color1:`#2271b4`,
    color2:`#234085`,
    forward: `/development/`,
    backward: `/about/`
  }
});

export const mutations = {
  setPage (state, wanted){
    state.currentPage = state.pagesArr[wanted]
  }
}


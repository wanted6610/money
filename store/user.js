export const state = () => ({
  profile: null,
})

export const mutations = {
  // increment(state) {
  //   state.count++;
  // }
}

export const actions = {

}

export const getters = {
  count: state  => {return state.profile},
}

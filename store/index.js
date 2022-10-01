export const state = () => ({
  year: 2022,
  n: 4,
  seasons: [],
})

export const getters = {
  getSeason(state) {
    const convertNtoFromTo = (n) => {
      switch (n) {
        case 1:
          return { from: 1, to: 3 }
        case 2:
          return { from: 4, to: 6 }
        case 3:
          return { from: 7, to: 9 }
        case 4:
          return { from: 10, to: 12 }
      }
    }
    return { year: state.year, ...convertNtoFromTo(state.n) }
  },
}

export const mutations = {
  setYear(state, year) {
    state.year = year
  },
  setN(state, n) {
    state.n = n
  },
}

export const actions = {}

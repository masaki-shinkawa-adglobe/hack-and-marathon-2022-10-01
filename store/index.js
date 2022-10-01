const baseUrl = 'https://hack-and-marathon-backend.herokuapp.com'

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

export const state = () => ({
  year: 2022,
  n: 4,
  seasons: [],
  animeList: [],
  anime: null,
})

export const getters = {
  getSeason(state) {
    return { year: state.year, ...convertNtoFromTo(state.n) }
  },
  getSeasons(state) {
    return state.seasons.map((season) => {
      return { ...season, ...convertNtoFromTo(season.n) }
    })
  },
}

export const mutations = {
  setYear(state, year) {
    state.year = year
  },
  setN(state, n) {
    state.n = n
  },
  setAnimeList(state, animeList) {
    state.animeList = animeList
  },
  setSeasons(state, seasons) {
    state.seasons = seasons
  },
  setAnime(state, anime) {
    state.anime = anime
  },
}

export const actions = {
  async fetchAnimeList({ commit, state }) {
    const res = await this.$axios.$post(`${baseUrl}/api/rankings`, {
      year: state.year,
      season: state.n,
    })

    commit('setAnimeList', res.anime_list)
  },

  async fetchSeasons({ commit }) {
    const res = await this.$axios.$post(`${baseUrl}/api/seasons`)
    commit('setSeasons', res.seasons)
  },

  async fetchAnimeDetail({ commit }, animeId) {
    const res = await this.$axios.$get(
      `${baseUrl}/api/animes/details/${animeId}`
    )

    commit('setAnime', res)
  },
}

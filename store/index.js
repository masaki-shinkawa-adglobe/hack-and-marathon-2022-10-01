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
  fetchAnimeList({ commit }) {
    // const res = await this.$axios.$post(`${baseUrl}/api/rankings`, {
    //   year: state.year,
    //   season: state.n,
    // })

    const res = {
      anime_list: [
        {
          id: 1,
          rank: 1,
          title: 'リコリス・リコイル',
          twitter_account: 'lycoris_recoil',
          twitter_image: 'https://twitter.com/lycoris_recoil/photo',
          images: [
            'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
            'https://animeanime.jp/imgs/zoom/514957.jpg',
            'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
          ],
        },
        {
          id: 2,
          rank: 2,
          title: 'リコリス・リコイル2',
          twitter_account: 'lycoris_recoil',
          twitter_image: 'https://twitter.com/lycoris_recoil/photo',
          images: [
            'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
            'https://animeanime.jp/imgs/zoom/514957.jpg',
            'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
          ],
        },
      ],
    }

    commit('setAnimeList', res.anime_list)
  },

  async fetchSeasons({ commit }) {
    const res = await this.$axios.$post(`${baseUrl}/api/seasons`)
    commit('setSeasons', res.seasons)
  },

  fetchAnimeDetail({ commit }, animeId) {
    // const res = await this.$axios.$post(`${baseUrl}/api/rankings`, {
    //   year: state.year,
    //   season: state.n,
    // })

    const res = {
      id: 1,
      rank: 1,
      title: 'リコリス・リコイル',
      twitter_account: 'lycoris_recoil',
      twitter_image: 'https://twitter.com/lycoris_recoil/photo',
      official_url: 'https://lycoris-recoil.com/',
      location: '静岡県静岡市',
      images: [
        'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
        'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
        'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
        'https://animeanime.jp/imgs/zoom/514957.jpg',
        'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
        'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
        'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
        'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
        'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
        'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
        'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
        'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
        'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
        'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
        'https://lycoris-recoil.com/assets/img/top/img_main-02.jpg',
      ],
    }

    commit('setAnime', res)
  },
}

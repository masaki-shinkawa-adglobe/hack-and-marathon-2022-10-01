const baseUrl = 'https://hack-and-marathon-backend.herokuapp.com'

export const state = () => ({
  year: 2022,
  n: 4,
  seasons: [],
  animeList: [],
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
  setAnimeList(state, animeList) {
    state.animeList = animeList
  },
}

export const actions = {
  fetchAnimeList({ commit }) {
    // const res = await this.$axios.$post(`${baseUrl}/api/rankings`)
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
}

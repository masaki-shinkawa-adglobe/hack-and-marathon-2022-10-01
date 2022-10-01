<template>
  <main>
    <NavigationHeader></NavigationHeader>
    <RankingHeader></RankingHeader>
    <RankingList></RankingList>
  </main>
</template>

<script lang="ts">
import { Context } from '@nuxt/types/app'
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  async asyncData({ store }: Context) {
    await store.dispatch('fetchAnimeList')
    await store.dispatch('fetchSeasons')
  }
}
</script>

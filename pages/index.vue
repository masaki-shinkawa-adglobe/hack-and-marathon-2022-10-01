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
  asyncData({ store }: Context) {
    store.dispatch('fetchAnimeList')
  }
}
</script>

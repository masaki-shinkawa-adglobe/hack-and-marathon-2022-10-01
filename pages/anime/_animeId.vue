<template>
  <main>
    <NavigationHeader></NavigationHeader>
    <AnimeTitle :anime="anime"></AnimeTitle>
    <AnimeInfo></AnimeInfo>
    <TitleWithIcon :anime="anime"></TitleWithIcon>
    <AnimeZoomImageList :images="images"></AnimeZoomImageList>
  </main>
</template>

<script lang="ts">
import { Context } from '@nuxt/types/app'
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AnimeId extends Vue {
  async asyncData({ store, params }: Context) {
    await store.dispatch('fetchAnimeDetail', params.animeId)
    await store.dispatch('fetchSeasons')
  }

  get images() {
    return this.anime.images
  }

  get anime() {
    return this.$store.state.anime
  }
}
</script>

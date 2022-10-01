<template>
  <router-link
    tag="li"
    :to="`/anime/${anime.id}`"
    class="flex flex-col items-start justify-center"
  >
    <AnimeTitle :anime="anime"></AnimeTitle>
    <AnimeImageList :images="anime.images"></AnimeImageList>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class RankingItem extends Vue {
  @Prop()
  anime!: Anime
}
</script>

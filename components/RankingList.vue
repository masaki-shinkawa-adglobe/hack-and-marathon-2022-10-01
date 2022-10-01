<template>
  <ul class="mt-2">
    <RankingItem
      v-for="anime in animeList"
      :key="anime.id"
      :anime="anime"
    ></RankingItem>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class RankingList extends Vue {
  get animeList() {
    return this.$store.state.animeList
  }
}
</script>

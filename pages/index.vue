<template>
  <main>
    <NavigationHeader></NavigationHeader>
    <RankingHeader></RankingHeader>
    <AnimeImageList></AnimeImageList>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
}
</script>

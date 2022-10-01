<template>
  <li class="flex flex-col items-start justify-center">
    <AnimeTitle></AnimeTitle>
    <AnimeImageList></AnimeImageList>
  </li>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class RankingItem extends Vue {}
</script>

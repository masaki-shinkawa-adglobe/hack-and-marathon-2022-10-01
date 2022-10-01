<template>
  <div class="relative inset-y-2 flex h-20 items-center">
    <img src="~/assets/image/twitterIcon.png" class="absolute top-0 left-1" />
    <div class="relative w-full bg-pink-primary">
      <span>No.1</span>
      <span>リコリス・リコイルxxxxxxxxxxxxxxxxxxxxxxxx</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AnimeTitle extends Vue {}
</script>

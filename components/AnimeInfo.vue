<template>
  <div class="flex mx-2 border-b border-pink-primary pb-1">
    <img class="w-8 mx-2" src="~/assets/image/info.svg">
    <h1 class="items-center text-pink-primary flex font-bold" style="font-size: 24px;">アニメ情報</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AnimeInfo extends Vue {}
</script>

<template>
  <div class="relative flex h-20 w-full items-center">
    <div class="relative flex h-10 w-full items-center bg-pink-primary">
      <span
        class="absolute top-0 right-0 mr-2 translate-y-[-50%] rounded-xl bg-black/70 px-4 text-white"
      >
        {{ `No.${anime.rank}` }}
      </span>
      <span
        class="truncate whitespace-nowrap pl-[calc(80px+0.5rem)] pr-2 text-pink-secondary"
      >
        {{ anime.title }}
      </span>
    </div>
    <a :href="twitterUrl" target="_blank" @click="onClickATag">
      <img src="~/assets/image/twitterIcon.png" class="absolute top-0 left-1" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class AnimeTitle extends Vue {
  @Prop()
  anime!: Anime

  onClickATag(e: MouseEvent) {
    e.stopPropagation()
  }

  get twitterUrl() {
    return `https://twitter.com/${this.anime.twitter_account}`
  }
}
</script>

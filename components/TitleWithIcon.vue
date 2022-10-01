<template>
  <div class="container">
    <!-- Link Items -->
    <div class="mt-2 px-4">
      <div v-if="officialUrl" class="mx-2 flex">
        <img class="mx-2 mb-2 w-6" src="~/assets/image/webPage.svg" />
        <a
          :href="officialUrl"
          target="_blank"
          class="flex items-center font-bold text-pink-primary"
          style="font-size: 16px"
          >公式HP</a
        >
      </div>
      <div v-if="shop" class="mx-2 mb-2 flex">
        <img class="mx-2 w-6" src="~/assets/image/fashion.svg" />
        <a
          :href="shop"
          target="_blank"
          class="flex items-center font-bold text-pink-primary"
          style="font-size: 16px"
          >衣装購入はこちら</a
        >
      </div>
      <div v-if="location" class="mx-2 mb-2 flex">
        <img class="mx-2 w-6" src="~/assets/image/Parthenon.svg" />
        <a
          :href="location"
          target="_blank"
          class="flex items-center font-bold text-pink-primary"
          style="font-size: 16px"
          >アニメの聖地を地図で見る</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class TitleWithIcon extends Vue {
  @Prop()
  anime!: AnimeDetail

  get officialUrl() {
    return this.anime.official_url
  }

  get shop() {
    return `https://www.costowns.com/search.html?k=${this.anime.title}`
  }

  get location() {
    return `https://www.google.co.jp/maps/place/${this.anime.location}`
  }
}
</script>

<template>
  <div>
    <div class="mx-2 flex border-b border-pink-primary pb-1">
      <img class="mx-2 w-8" src="~/assets/image/cracker.svg" />
      <h1
        class="flex items-center font-bold text-pink-primary"
        style="font-size: 24px"
      >
      みんなのコスプレ
      </h1>
    </div>
    <ul class="m-2 grid h-[calc(100vw/3/2*3)] grid-cols-3 gap-2">
      <AnimeZoomImage
        v-for="(image, i) in images"
        :key="i"
        :image="image"
      ></AnimeZoomImage>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class AnimeZoomImageList extends Vue {
  @Prop({ default: [] })
  images!: string[]
}
</script>

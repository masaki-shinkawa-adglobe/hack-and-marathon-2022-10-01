<template>
  <ul class="m-2 grid grid-cols-3 gap-2">
    <AnimeImage
      v-for="(image, i) in images"
      :key="i"
      :image="image"
    ></AnimeImage>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class AnimeImageList extends Vue {
  @Prop({ default: [] })
  images!: string[]
}
</script>

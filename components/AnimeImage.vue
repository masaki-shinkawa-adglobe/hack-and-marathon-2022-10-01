<template>
  <li>
    <img :src="image" alt="" />
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class AnimeImage extends Vue {
  @Prop({ default: '' })
  image!: string
}
</script>

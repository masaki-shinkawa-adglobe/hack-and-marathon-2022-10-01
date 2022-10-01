<template>
  <li>
    <img :src="image" class="h-full object-cover" />
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

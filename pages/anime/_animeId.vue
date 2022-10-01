<template>
  <main>
    <NavigationHeader></NavigationHeader>
    <AnimeTitle :anime="anime"></AnimeTitle>
    <AnimeInfo></AnimeInfo>
    <TitleWithIcon></TitleWithIcon>
    <AnimeZoomImageList :images="images"></AnimeZoomImageList>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AnimeId extends Vue {
  get images(){
    return ["https://animeanime.jp/imgs/zoom/514952.jpg","https://gd.image-qoo10.jp/li/076/927/4098927076.g_400-w-st_g.jpg","https://animeanime.jp/imgs/zoom/514952.jpg"]
  }

  get anime() {
    return "test"
  }
}
</script>

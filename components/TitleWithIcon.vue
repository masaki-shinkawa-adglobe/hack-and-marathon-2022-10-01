<template>
<div class="container">

<!-- header -->
<div class="flex mx-2 border-b border-pink-500 pb-1">
    <img class="w-8 mx-2" src="~/assets/image/info.svg">
    <h1 class="items-center text-pink-500 flex font-bold" style="font-size: 24px;">アニメ情報</h1>
  </div>

<!-- Link Items -->
  <div class="mt-2 px-4">
    <div class="flex mx-2">
      <img class="w-6 mx-2 mb-2" src="~/assets/image/webPage.svg">
      <h1 class="items-center text-pink-500 flex font-bold" style="font-size: 16px;">公式HP</h1>
    </div>
    <div class="flex mx-2 mb-2">
      <img class="w-6 mx-2" src="~/assets/image/fashion.svg">
      <h1 class="items-center text-pink-500 flex font-bold" style="font-size: 16px;">衣装購入はこちら</h1>
    </div>
    <div class="flex mx-2 mb-2">
      <img class="w-6 mx-2" src="~/assets/image/Parthenon.svg">
      <h1 class="items-center text-pink-500 flex font-bold" style="font-size: 16px;">アニメの聖地を地図で見る</h1>
    </div>
  </div>

</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TitleWithIcon extends Vue {}
</script>

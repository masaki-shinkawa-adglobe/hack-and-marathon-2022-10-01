<template>
<div class="container">

<!-- Link Items -->
  <div class="mt-2 px-4">
    <div class="flex mx-2">
      <img class="w-6 mx-2 mb-2" src="~/assets/image/webPage.svg">
      <a :href="officialUrl" target="_blank" class="items-center text-pink-primary flex font-bold" style="font-size: 16px;">公式HP</a>
    </div>
    <div class="flex mx-2 mb-2">
      <img class="w-6 mx-2" src="~/assets/image/fashion.svg">
      <a :href="shop" target="_blank" class="items-center text-pink-primary flex font-bold" style="font-size: 16px;">衣装購入はこちら</a>
    </div>
    <div class="flex mx-2 mb-2">
      <img class="w-6 mx-2" src="~/assets/image/Parthenon.svg">
      <a :href="location" target="_blank" class="items-center text-pink-primary flex font-bold" style="font-size: 16px;">アニメの聖地を地図で見る</a>
    </div>
  </div>

</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TitleWithIcon extends Vue {
  get officialUrl() {
    // TODO: APIのレスポンスを返す
    return "https://lycoris-recoil.com/"
  }
  get shop() {
    // TODO: APIのレスポンスを返す
    return "https://www.costowns.com/search.html?k=test"
  }
  get location() {
    // TODO: APIのレスポンスを返す
    return "https://www.google.co.jp/maps/place/%E9%9D%99%E5%B2%A1%E7%9C%8C%E9%9D%99%E5%B2%A1%E5%B8%82"
  }


}
</script>

<template>
  <li>
    <img :src="image" class="h-full object-cover" v-on:click="toggleModal()" />

    <div
      v-if="showModal"
      class="outline-none focus:outline-none fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
    >
      <div class="relative my-6 mx-auto w-auto max-w-6xl">
        <!--content-->
        <div
          class="outline-none focus:outline-none relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg"
        >
          <img style="width: 100%" :src="image" v-on:click="toggleModal()" />
        </div>
      </div>
    </div>
    <div v-if="showModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import {
  Hooper,
  Slide,
  Pagination as HooperPagination, // ページネーションが必要なときにimport
  Navigation as HooperNavigation, // 左右のナビゲーションが必要なときにimport
} from 'hooper'
import 'hooper/dist/hooper.css' // hooperのcssを適用

@Component({
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
  },
})
export default class AnimeZoomImage extends Vue {
  @Prop({ default: '' })
  image!: string
  showModal = false
  toggleModal() {
    this.showModal = !this.showModal
  }
}
</script>

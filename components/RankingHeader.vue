<template>
  <div
    class="background flex h-28 flex-col items-center justify-center text-3xl text-gray-100"
  >
    <div class="flex items-center">
      <span>RANKING</span
      ><img
        class="inline-block h-6 rotate-20 transform-gpu"
        src="~/assets/image/crown.svg"
      />
    </div>
    <span>
      <span>{{ from }}</span>
      <span>-</span>
      <span>{{ to }}</span>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class RankingHeader extends Vue {
  get from() {
    const { year, from } = this.$store.getters.getSeason
    return `${year}.${from}`
  }

  get to() {
    const { year, to } = this.$store.getters.getSeason
    return `${year}.${to}`
  }
}
</script>

<style lang="scss">
.background {
  position: relative;
  background-color: #434343;
  &::before {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    border-top: 28px solid #fcddec;
    border-right: 28px solid transparent;
    border-bottom: 28px solid transparent;
    border-left: 28px solid #fcddec;
  }
  &::after {
    content: '';
    bottom: 0;
    right: 0;
    position: absolute;
    border-top: 28px solid transparent;
    border-right: 28px solid #fcddec;
    border-bottom: 28px solid #fcddec;
    border-left: 28px solid transparent;
  }
}
</style>

<template>
  <header class="flex items-center justify-center">
    <SideMenu></SideMenu>
    <Logo></Logo>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class NavigationHeader extends Vue {}
</script>

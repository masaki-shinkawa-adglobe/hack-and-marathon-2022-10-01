<template>
  <router-link to="/"><img src="~/assets/image/logo.svg" alt="" /></router-link>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Logo extends Vue {}
</script>

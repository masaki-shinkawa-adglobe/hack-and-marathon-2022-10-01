<template>
  <pre>
      <code>
        {{ data }}
      </code>
    </pre>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class QiitaItems extends Vue {
  data: string = ''

  async mounted() {
    const res = await this.$axios.get('https://qiita.com/api/v2/items')
    this.data = JSON.stringify(res.data, null, 2)
  }
}
</script>

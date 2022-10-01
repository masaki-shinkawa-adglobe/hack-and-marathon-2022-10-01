<template>
  <div>
    <input id="openSidebarMenu" type="checkbox" class="openSidebarMenu" />
    <label for="openSidebarMenu" class="sidebarIconToggle">
      <div class="spinner diagonal part-1"></div>
      <div class="spinner horizontal"></div>
      <div class="spinner diagonal part-2"></div>
    </label>
    <div id="sidebarMenu">
      <ul class="sidebarMenuInner text-pink-primary">
        <li
          v-for="(season, i) in seasons"
          :key="i"
          class="flex justify-between"
          @click="setSeason(season)"
        >
          <span class="flex text-pink-primary">
            <span class="w-20">{{ season.year }}.{{ season.from }}</span>
            <span class="pr-4">-</span>
            <span class="w-20">{{ season.year }}.{{ season.to }}</span>
          </span>
          <span class="text-pink-primary">></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SideMenu extends Vue {
  get seasons() {
    return this.$store.getters.getSeasons
  }

  async setSeason(season: any) {
    this.$store.commit('setYear', season.year)
    this.$store.commit('setN', season.n)
    await this.$store.dispatch('fetchAnimeList')
    this.$router.push("/")
    const dom = document.getElementById('openSidebarMenu')
    dom?.click()
  }
}
</script>

<style lang="scss">
.header {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  box-shadow: none;
  background-color: #fc466b;
  position: fixed;
  height: 40px !important;
  overflow: hidden;
  z-index: 10;
}
.main {
  margin: 0 auto;
  display: block;
  height: 100%;
}
.mainInner {
  display: table;
  height: 100%;
  width: 100%;
  text-align: center;
}
.mainInner div {
  display: table-cell;
  vertical-align: middle;
  font-size: 3em;
  font-weight: bold;
  letter-spacing: 1.25px;
}
#sidebarMenu {
  height: 100%;
  position: fixed;
  top: 56px;
  left: 0;
  position: absolute;
  z-index: 1;
  width: 250px;
  transform: translateX(-250px);
  transition: transform 250ms ease-in-out;
  background: white;
  border-top: 1px solid #ef5da8;
}
.sidebarMenuInner {
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.sidebarMenuInner li {
  list-style: none;
  text-transform: uppercase;
  font-weight: bold;
  padding-left: 8px;
  padding-right: 8px;
  cursor: pointer;
}
.sidebarMenuInner li span {
  display: flex;
  font-size: 18px;
}
.sidebarMenuInner li a {
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}
input[type='checkbox']:checked ~ #sidebarMenu {
  transform: translateX(0);
}

input[type='checkbox'] {
  transition: all 0.3s;
  box-sizing: border-box;
  display: none;
}
.sidebarIconToggle {
  transition: all 0.3s;
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  z-index: 99;
  height: 100%;
  width: 100%;
  top: 22px;
  left: 15px;
  height: 22px;
  width: 22px;
}
.spinner {
  transition: all 0.3s;
  box-sizing: border-box;
  position: absolute;
  height: 3px;
  width: 100%;
  background-color: #888;
}
.horizontal {
  transition: all 0.3s;
  box-sizing: border-box;
  position: relative;
  float: left;
  margin-top: 3px;
}
.diagonal.part-1 {
  position: relative;
  transition: all 0.3s;
  box-sizing: border-box;
  float: left;
}
.diagonal.part-2 {
  transition: all 0.3s;
  box-sizing: border-box;
  position: relative;
  float: left;
  margin-top: 3px;
}
input[type='checkbox']:checked ~ .sidebarIconToggle > .horizontal {
  transition: all 0.3s;
  box-sizing: border-box;
  opacity: 0;
}
input[type='checkbox']:checked ~ .sidebarIconToggle > .diagonal.part-1 {
  transition: all 0.3s;
  box-sizing: border-box;
  transform: rotate(135deg);
  margin-top: 8px;
}
input[type='checkbox']:checked ~ .sidebarIconToggle > .diagonal.part-2 {
  transition: all 0.3s;
  box-sizing: border-box;
  transform: rotate(-135deg);
  margin-top: -9px;
}
</style>

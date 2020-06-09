<template>
  <main>
    <!-- header component will come here -->
    <section>
      <kendo-splitter
        style="width: 100%; height: 100%; padding: 40px 0"
        :orientation="'horizontal'"
      >
        <div class="albumPane">
          <!-- album list here -->
        </div>
        <div class="songPane">
          <!-- songlist component here -->
        </div>
      </kendo-splitter>
    </section>
  </main>
</template>

<script>
// import { Splitter } from "@progress/kendo-layout-vue-wrapper";

export default {
  name: "app",
  data() {
    return {
      albums: [],
      currentAlbum: {},
      tracks: []
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Muli", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.k-pane {
  height: unset !important;
}
.albumPane {
  width: 60% !important;
}
.songPane {
  width: 40% !important;
}
</style>

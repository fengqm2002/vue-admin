<template>
  <div class="music">
    <div class="music-content">
      <div class="music-left">
        <d-nav />
        <router-view class="music-list" />
      </div>
    </div>
  </div>
</template>

<script>
import dNav from "@/components/nav/Nav.vue";
export default {
  components: {
    dNav
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/index.scss";
.music {
  .music-content {
    .music-left {
      .router-view {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
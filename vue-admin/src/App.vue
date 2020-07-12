<template>
  <div id="app">
    <!-- 主体 -->
    <!-- 头部 -->
    <d-header title="Listen World 在线音乐播放器" bgcolor="rgba(0, 0, 0, 0.3)">
      <template #left>Return</template>
      <template #right>User</template>
    </d-header>
      <router-view class="router-view" />

    <!--播放器-->
    <audio ref="mmPlayer"></audio>
  </div>
</template>
<script>
import dHeader from "@/packages/header/Header";
export default {
  components: {
    dHeader
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index.scss";
#app {
  position: relative;
  width: 100%;
  height: 100%;
  color: $text_color;
  font-size: $font_size_medium;
  background: $load_bg_color;
  .router-view {
    width: 100%;
    height: 100%;
  }

  audio {
    position: fixed;
  }
}

</style>

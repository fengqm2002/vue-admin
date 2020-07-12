<template>
  <div class="nav-page">
    <router-link to="playlist" tag="nav">
      <span>正在播放</span>
    </router-link>
    <router-link to="recommend" tag="nav">
      <span>推荐</span>
    </router-link>
    <router-link to="search" tag="nav">
      <span>搜索</span>
    </router-link>
    <router-link class="none-414" to="userList" tag="nav">
      <span>我的歌单</span>
    </router-link>
    <router-link to="historyList" tag="nav">
      <span>我听过的</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/index.scss";
.nav-page {
  display: flex;
  width: 100%;
  height: 2rem;
  position: relative;
  z-index: 100;
  background: $header_bg_color;
  nav {
    float: left;
    height: 100%;
    max-width: 5rem;
    line-height: 1rem;
    text-align: center;
    color: $btn_color;
    font-size: $font_size_medium;
    padding: 0 .5rem;
    &:hover {
      color: $btn_color_active;
      border: none;
    }
  }
  .router-link-active {
    span {
      color: #ffcd32;
      border-bottom: 1px solid #ffcd32;
      padding-bottom: 0.1rem;
    }
  }
  @media (max-width: 768px) {
    height: 50px;
    span {
      height: 35px;
      padding: 0 10px;
      margin-right: 6px;
      line-height: 35px;
      &:nth-last-of-type(1) {
        margin: 0;
      }
      @media (max-width: 413px) {
        &.none-414 {
          display: none;
        }
      }
    }
  }
}
</style>
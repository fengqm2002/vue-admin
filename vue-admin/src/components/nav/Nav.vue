<template>
  <div class="nav-page">
    <router-link to="playlist" class="nav">
      <span>正在播放</span>
    </router-link>
    <router-link to="recommend" class="nav">
      <span>推荐</span>
    </router-link>
    <router-link to="search" class="nav">
      <span>搜索</span>
    </router-link>
    <router-link to="userList" class="nav">
      <span>我的歌单</span>
    </router-link>
    <router-link to="historyList" class="nav">
      <span>我听过的</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-page {
  display: flex;
  width: 100%;
  height: 3rem;
  // justify-content: space-between;
  position: relative;
  z-index: 100;
  .nav {
    float: left;
    // display: inline;
    // flex: 1;s
    height: 100%;
    // width: 5rem;
    max-width: 10rem;
    // background: rgb(34, 34, 34);
    line-height: 2rem;
    text-align: center;
    color: #bbb;
    font-size: 1.2rem;
    padding: 0 1rem;
  }
  .router-link-active {
    span {
      color: #ffcd32;
      border-bottom: 1px solid #ffcd32;
      padding-bottom: 0.1rem;
    }
  }
}
</style>
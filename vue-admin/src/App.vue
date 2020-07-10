<template>
  <div id="app">
    <!-- 主体 -->
    <!-- 头部 -->
    <d-header title="Listen World 在线音乐播放器">
      <template #left>Return</template>
      <template #right>User</template>
    </d-header>
    <Nav id="nav" />
    <transition name="fade">
    <keep-alive>
      <router-view class="router-view" />
    </keep-alive>
    </transition>
    <!--播放器-->
    <audio ref="mmPlayer"></audio>
  </div>
</template>
<script>
import dHeader from "@/packages/header/Header";
import Nav from "@/components/nav/Nav";
export default {
    components: {
    dHeader,
    Nav
  },
}
</script>
<style lang="scss">
html,#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;s
  color: #ccc; // #2c3e50;
  overflow: hidden;
  background: rgba(34,34,34);
  .router-view {
    width: 100%;
    height: 100%;
  }
  audio {
    position: fixed;
  }
}
a {
  text-decoration: none;
  &:hover {
    color: #fff;
    border: 1px solid #bbb;
  }
}

/* 子路由进去动画 */
.fade-enter{
 visibility: hidden;
 opacity: 0;
}
.fade-leave-to{
 display: none;
}
.fade-enter-active,
.fade-leave-active{
 transition: opacity .2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
	transform: translate3d(-100%, 0, 0);
}
.fade-leave-from, .fade-enter-to {
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}
</style>

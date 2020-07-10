<template>
  <div class="Index">
    <!-- 主体 -->
    <!-- 头部 -->
    <d-header title="Listen World 在线音乐播放器">
      <template #left>Return</template>
      <template #right>User</template>
    </d-header>
    <d-nav />
    <keep-alive>
      <router-view class="router-view" />
    </keep-alive>
    <!--播放器-->
    <audio ref="mmPlayer"></audio>
    <!-- <d-search placeholder="搜索歌曲/歌手..." @submit="submitA" />
    <p>搜索：{{query}}</p>
    <d-List :header="header" :list="list"></d-List>-->
  </div>
</template>

<script>
import dHeader from "../packages/header/Header";
import dNav from "@/components/nav/Nav";
// import dSearch from "../packages/search/Search";
// import dList from "../packages/list/List";
import { getSearchList } from "@/assets/api/index";
import { reactive, toRefs } from "vue";
export default {
  components: {
    dHeader,
    dNav
    // dSearch
    // dList
  },
  setup() {
    const state = reactive({
      query: "",
      header: ["歌曲", "歌手", "专辑"],
      list: []
    });
    const submitA = val => {
      state.query = val;
      console.log(val);
      getSearchList(state.query).then(res => {
        if (res.data.code === 200) {
          console.log(res.data);
          state.list = res.data.result.songs;
        }
      });
    };
    const handleBack = () => {
      state.query = "点了按扭";
    };
    const methods = {
      submitA,
      handleBack
    };
    return {
      ...toRefs(state),
      ...methods
    };
  }
};
</script>

<style lang="scss" scoped>
.Index {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #fff; // #2c3e50;
  // background: rgba(0, 0, 0, 0.8);
  .router-view {
    width: 100%;
    height: 100%;
  }
  audio {
    position: fixed;
  }
}
</style>
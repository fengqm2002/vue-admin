<template>
  <div class="Index">
    <d-header title="搜索歌曲">
      <template #left>left</template>
      <template #right>right</template>
    </d-header>
    <d-search placeholder="搜索歌曲/歌手..." @submit="submitA" />
    <p>搜索：{{query}}</p>
    <d-List :header="header" :list="list"></d-List>
  </div>
</template>

<script>
import dHeader from "../packages/header/Header";
import dSearch from "../packages/search/Search";
import dList from "../packages/list/List";
import { getSearchList } from "@/assets/api/index";
import { reactive, toRefs } from "vue";
export default {
  components: {
    dHeader,
    dSearch,
    dList
  },
  setup() {
    const state = reactive({
      query: "",
      header: ['歌曲','歌手','专辑'],
      list: []
    });
    const submitA = val => {
      state.query = val;
      console.log(val);
      getSearchList(state.query).then(res => {
        if (res.data.code === 200) {
          console.log(res.data);
          state.list =res.data.result.songs;
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

<style lang="scss">
body {
  background: rgba(0, 0, 0, 0.8);
}
</style>
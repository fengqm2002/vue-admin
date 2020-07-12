<template>
  <div class="search">
    <d-search class="search-input" placeholder="搜索歌曲/歌手..." @submit="onSearch" />
    <d-List :header="header" :list="list"></d-List>
  </div>
</template>

<script>
import dSearch from "@/packages/search/Search.vue";
import dList from "@/packages/list/List.vue";
import { getSearchList } from "@/assets/api/index";
import { reactive, toRefs } from "vue";
export default {
  components: {
    dSearch,
    dList
  },
  setup() {
    const state = reactive({
      query: "",
      header: ["歌曲", "歌手", "专辑"],
      list: []
    });
    const onSearch = val => {
      state.query = val;
      console.log(val);
      getSearchList(state.query).then(res => {
        if (res.data.code === 200) {
          console.log(res.data);
          state.list = res.data.result.songs;
        }
      });
    };
    const methods = {
      onSearch
    };
    return {
      ...toRefs(state),
      ...methods
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/index.scss";
.search {
  position: relative;
  width: 60%;
  height: 100%;
  .search-input {
    background: transparent;
    color: $text_color_active;
    box-shadow: 0 0 1px 0 #fff inset;
  }
  @media (max-width: 640px) { //小于640px 最大显示100%
    & {
      width: 100%;
    }
  }
}
</style>
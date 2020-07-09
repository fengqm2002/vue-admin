<template>
  <div class="Index">
    <d-header title="搜索歌曲">
      <template #left> left </template>
      <template #right>right</template>
    </d-header>
    <d-search placeholder="搜索歌曲/歌手..." @submit="submitA" />
    <p>搜索：{{query}}</p>
  </div>
</template>

<script>
import dHeader from "../packages/header/Header";
import dSearch from "../packages/search/Search";
import { reactive, toRefs } from 'vue';
export default {
  components: {
    dHeader,
    dSearch
  },
  setup() {
    const state = reactive({
      query: ""
    });
    const submitA = ((val) =>{
     state.query = val;
     console.log(val);
      
    });
    const handleBack = (() => {
      state.query = "点了按扭"
    });
    const methods ={
      submitA,
      handleBack
    }
   return {
     ...toRefs(state),
     ...methods
   }
  }
}
</script>

<style lang="scss">
body {
  background: rgba(0,0,0,.8);
}
</style>
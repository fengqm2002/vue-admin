<template>
  <div class="Index">
    <p>搜索：{{query}}</p>
    <d-button @click="handleBack">Hello VueDose!</d-button>
  </div>
</template>

<script>

import dButton from "./Button";
import { reactive, toRefs } from "vue";
export default {
  components: {
    dButton
  },
  setup() {
    const state = reactive({
      query: ""
    });
  
    const handleBack = () => {
      state.query = "点了按扭";
    };
    const methods = {
    
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
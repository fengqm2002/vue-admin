<template>
  <div class="wt-header">
    <div class="header" :class="type" :style="{background: bgcolor}">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="title">{{title}}</div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: () => {
        return "";
      }
    },
    type: {
      type: String,
      default: () => {
        return "default";
      }
    },
    bgcolor: {
      type: String,
      default: () => {
        return "";
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.wt-header {
  width: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    height: 2rem;
    line-height: 2rem;
    font-size: 1rem;
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &.primary {
      background: #1bb5f1;
      color: #fff;
      border: 0;
    }
    &.danger {
      background: #ef4f4f;
      color: #fff;
      border: 0;
    }
  }
}
</style>

<template>
  <div class="scroll-list">
    <div class="header" v-if="header.length">
      <div
        class="header-item"
        v-for="(headerItem, i) in header"
        :key="`${headerItem}${i}`"
        v-html="headerItem"
      />
    </div>
    <div class="list" v-if="list.length">
      <div class="list-item" v-for="(listItem, i) in list" :key="`${listItem}${i}`">
        <span>{{listItem.name}}</span>
        <span>{{listItem.artists[0].name}}</span>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: Array,
      default: () => {
        return [];
      }
    },
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  setup() {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/index.scss";
@import '../css/index.scss';
.scroll-list {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  .header {
    height: 40px;
    background-color: #555;
    line-height: 40px;
    .header-item {
      float: left;
      width: 30%;
    }
  }
  .list {
    height: 500px;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    .list-item {
      height: 40px;
      width: 100%;
      background-color: #222;
      line-height: 40px;
      display: inline-block;
      span {
        height: 30px;
        width: 200px;
        line-height: 30px;
        // text-overflow: ellipsis;
        overflow: hidden;
        padding: 10px;
        text-align: left;
      }
    }
  }
}
</style>
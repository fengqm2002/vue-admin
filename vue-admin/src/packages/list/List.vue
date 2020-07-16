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
        <span class="song">{{listItem.name}}</span>
        <span>{{listItem.artists[0].name}}</span>
        <span>{{listItem.album.name}}</span>
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
@import "../css/index.scss";
.scroll-list {
  position: relative;
  width: 100%;
  height: 100%;
  // color: #fff;
  @mixin text {
    // padding: 0 10px;
    //  padding-right: 80px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .header {
    display: flex;
    flex-direction: row;
    font-size: 15px;
    line-height: 30px;
    border-bottom: 1px solid $list_item_line_color;
    .header-item {
      @include text;
      width: 30%;
      text-align: center;
      transition: all 0.3s;
    }
  }
  .list {
    overflow: hidden;
    line-height: 30px;
    width: 100%;
    height: 460px;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    .list-item {
      display: flex;
      font-size: 14px;
      transition: all 0.3s;
      border-bottom: 1px solid $list_item_line_color;
    }
    .song {
      width: 50%;
    }
    span {
      @include text;
      width: 25%;
    }
    .index {
      border-radius: 3px;
      padding: 0px 3px;
    }
  }
}
</style>
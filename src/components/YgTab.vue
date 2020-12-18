<template>
  <view class="tab">
    <block v-for="item in tabs" :key="item.id">
      <view @click="clickTab(item.id)" :class="{ active: item.isActive }">{{ item.title }}</view>
    </block>
  </view>
</template>

<script>
export default {
  props: ['tabs'],
  methods: {
    clickTab(id) {
      this.$emit('clickTab', id)
    },
  },
}
</script>

<style lang="less" scoped>
.tab {
  height: 100rpx;
  background-color: #ddd;
  display: flex;
  view {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 6rpx solid #ddd;
  }
  .active {
    border-bottom: 6rpx solid #ff2d4a;
  }
}
</style>

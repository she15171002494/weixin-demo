<template>
  <view class="search">
    <view class="inptu">
      <view class="iconfont icon-search"></view>
      <text>搜索</text>
    </view>
  </view>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.search {
  background-color: #ff2d4a;
  padding: 16rpx;
  .inptu {
    display: flex;
    width: 100%;
    height: 60rpx;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 30rpx;
    text {
      margin-left: 10rpx;
      color: #666;
    }
  }
}
</style>

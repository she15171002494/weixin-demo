<template>
  <navigator class="goods" :url="'/pages/detail/detail?id=' + item.goods_id">
    <view class="left">
      <image
        :src="item.goods_small_logo || 'https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t530j30i20i2glm.jpg'"
      ></image>
    </view>
    <view class="right">
      <view class="title line2">{{ item.goods_name }}</view>
      <view class="price"
        >￥<text>{{ item.goods_price }}</text></view
      >
    </view>
  </navigator>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style lang="less" scoped>
.goods {
  height: 180rpx;
  // background-color: skyblue;
  display: flex;
  padding: 20rpx;
  border-bottom: 1px solid #eee;
  align-items: center;
  .left {
    // background-color: yellowgreen;
    image {
      width: 140rpx;
      height: 140rpx;
    }
  }
  .right {
    flex: 1;
    // background-color: pink;
    padding: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text {
      color: #ff2d4a;
    }
  }
}
</style>

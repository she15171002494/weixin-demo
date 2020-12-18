<template>
  <view>
    <!-- 轮播图 -->
    <view class="banner">
      <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
        <block v-for="item in list.pics" :key="item.pics_id">
          <swiper-item>
            <image mode="aspectFill" :src="item.pics_mid_url"></image>
          </swiper-item>
        </block>
      </swiper>
    </view>
    <!-- 价格 -->
    <view class="picre"> ￥ {{ list.goods_price }}</view>
    <!-- 标题 -->
    <view class="title">
      <view class="left line2"> {{ list.goods_name }}</view>
      <view class="right">
        <text class="iconfont icon-shoucang"></text>
        <text>收藏</text>
      </view>
    </view>
    <!-- 图文详情 -->
    <view class="detail-content">
      <view>图文详情</view>
      <rich-text :nodes="list.goods_introduce"></rich-text>
    </view>
    <!-- 底部 -->
    <view class="floot">
      <view class="c1">
        <text class="iconfont icon-kefu"></text>
        <text>客服</text>
      </view>
      <view class="c1">
        <text class="iconfont icon-fenxiang"></text>
        <text>分享</text></view
      >
      <view class="c1">
        <text class="iconfont icon-gouwuchekong"></text>
        <text>购物车</text></view
      >
      <view class="c2">加入购物车</view>
      <view class="c2 c3">立即购买</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: {},
    }
  },
  onLoad(query) {
    this.getDetail(query.id)
  },
  methods: {
    async getDetail(id) {
      let res = await this.$http({
        url: '/api/public/v1/goods/detail',
        data: {
          goods_id: id,
        },
      })
      console.log('商品详情', res)
      this.list = res
    },
  },
}
</script>

<style lang="less" scoped>
// 轮播图
.banner {
  width: 750rpx;
  height: 340rpx;
  image {
    width: 750rpx;
    height: 340rpx;
  }
}
// 价格
.picre {
  color: #ff2d4a;
  font-size: 36rpx;
  padding: 20rpx;
}
// 标题
.title {
  padding: 0 10rpx;
  // background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #666;
  border-top: 1px solid #666;
  .left {
    flex: 1;
    margin: 20rpx 0;
    padding: 0 20rpx;
    border-right: 1px solid #999;
  }
  .right {
    width: 180rpx;
    // padding: 20rpx 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
// 图文详情
.detail-content {
  padding-bottom: 100rpx;
  view {
    color: #ff2d4a;
    font-weight: 700;
    font-size: 36rpx;
    padding: 20rpx;
  }
}
// 底部
.floot {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100rpx;
  display: flex;
  background-color: #fff;
  .c1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10rpx;
  }
  .c2 {
    flex: 2;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: orange;
  }
  .c3 {
    background-color: #ff2d4a;
  }
}
</style>

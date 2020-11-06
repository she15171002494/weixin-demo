<template>
  <view>
    <!-- 1.搜索头部 -->
    <view class="search">
      <view class="inptu">
        <icon type="search" size="16"></icon>
        <text>搜索</text>
      </view>
    </view>
    <!-- 2.轮播图 -->
    <view class="banner">
      <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
        <swiper-item>
          <image src="../../static/upload/banner1.png"></image>
        </swiper-item>
        <swiper-item>
          <image src="../../static/upload/banner2.png"></image>
        </swiper-item>
        <swiper-item>
          <image src="../../static/upload/banner3.png"></image>
        </swiper-item>
        <swiper-item>
          <image src="../../static/upload/banner4.png"></image>
        </swiper-item>
        <swiper-item>
          <image src="../../static/upload/banner5.png"></image>
        </swiper-item>
      </swiper>
    </view>
    <!-- 3.导航 -->
    <view class="navs">
      <view class="item">
        <image src="../../static/upload/icon_index_nav_1@2x.png"></image>
      </view>
      <view class="item">
        <image src="../../static/upload/icon_index_nav_2@2x.png"></image>
      </view>
      <view class="item">
        <image src="../../static/upload/icon_index_nav_3@2x.png"></image>
      </view>
      <view class="item">
        <image src="../../static/upload/icon_index_nav_4@2x.png"></image>
      </view>
    </view>
    <!-- 4.商品 -->
    <view class="flootr">
      <view class="item">
        <view class="title">
          <image src="../../static/upload/pic_floor01_title.png"></image>
        </view>
        <view class="content">
          <view class="left">
            <image src="../../static/upload/pic_floor01_1@2x.png"></image>
          </view>
          <view class="right">
            <image src="../../static/upload/pic_floor01_2@2x.png"></image>
            <image src="../../static/upload/pic_floor01_3@2x.png"></image>
            <image src="../../static/upload/pic_floor01_4@2x.png"></image>
            <image src="../../static/upload/pic_floor01_5@2x.png"></image>
          </view>
        </view>
      </view>
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
  async created() {
    // 1.小程序发送请求
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: res => {
    //     console.log('res', res)
    //   },
    // })

    // 2.使用uni-app 发送请求
    // uni.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: res => {
    //     console.log('uni-app', res)
    //   },
    // })

    // 3.使用 promise
    // let r = await uni.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    // })
    // console.log('r', r)

    // 4.挂载到原型
    let res = await this.$http({
      url: '/api/public/v1/home/swiperdata',
    })
    console.log('原型', res)
  },
  methods: {},
}
</script>

<style lang="less" scoped>
// 头部搜索
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
// 轮播图
.banner {
  width: 750rpx;
  height: 340rpx;
  image {
    width: 750rpx;
    height: 340rpx;
  }
}
// 导航
.navs {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 24rpx;
  .item {
    image {
      width: 128rpx;
      height: 128rpx;
    }
  }
}
// 商品
.flootr {
  .item {
    .title {
      padding-top: 30rpx;
      background-color: #eee;

      image {
        width: 750rpx;
        height: 59rpx;
      }
    }
    .content {
      background-color: #090;
      display: flex;
      padding: 16rpx;
      .left {
        margin-right: 10rpx;
        image {
          vertical-align: middle;
          width: 232rpx;
          height: 386rpx;
        }
      }
      .right {
        image {
          vertical-align: middle;
          width: 233rpx;
          height: 188rpx;
          &:nth-child(-n + 2) {
            margin-bottom: 10rpx;
          }
          &:nth-child(2n) {
            margin-left: 10rpx;
          }
        }
      }
    }
  }
}
</style>

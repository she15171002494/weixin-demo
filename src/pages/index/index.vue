<template>
  <view>
    <!-- 1.搜索头部 -->
    <!-- <view class="search">
      <view class="inptu">
        <view class="iconfont icon-search"></view>
        <text>搜索</text>
      </view>
    </view> -->
    <yg-seach></yg-seach>
    <!-- 2.轮播图 -->
    <view class="banner">
      <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
        <block v-for="item in swipersList" :key="item.goods_id">
          <swiper-item>
            <image :src="item.image_src"></image>
          </swiper-item>
        </block>
      </swiper>
    </view>
    <!-- 3.导航 -->
    <view class="navs">
      <block v-for="item in navsList" :key="item.name">
        <navigator class="item">
          <image :src="item.image_src"></image>
        </navigator>
      </block>
    </view>
    <!-- 4.商品 -->
    <view class="flootr">
      <block v-for="(item, index) in floorsList" :key="index">
        <view class="item">
          <view class="title">
            <image :src="item.floor_title.image_src"></image>
          </view>
          <view class="content">
            <view class="left">
              <image :src="item.product_list[0].image_src"></image>
            </view>
            <view class="right">
              <image
                :style="{ width: item.product_list[1].image_width + 'rpx' }"
                :src="item.product_list[1].image_src"
              ></image>
              <image
                :style="{ width: item.product_list[2].image_width + 'rpx' }"
                :src="item.product_list[2].image_src"
              ></image>
              <image
                :style="{ width: item.product_list[3].image_width + 'rpx' }"
                :src="item.product_list[3].image_src"
              ></image>
              <image
                :style="{ width: item.product_list[4].image_width + 'rpx' }"
                :src="item.product_list[4].image_src"
              ></image>
            </view>
          </view>
        </view>
      </block>
    </view>
    <!-- 返回顶部 -->
    <view class="top" @click="go2top" v-if="isShow">
      <view class="iconfont icon-shangjiantou"></view>
      <text>顶部</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      swipersList: [], //轮播图列表
      navsList: [], //导航列表
      floorsList: [], //商品列表
      isShow: false, //返回顶部按钮的显示与隐藏
    }
  },
  created() {
    this.getSwipers()
    this.getNavs()
    this.getFloors()
  },
  // 页面滚动时触发的函数
  onPageScroll(e) {
    if (e.scrollTop < 300) {
      this.isShow = false
    } else {
      this.isShow = true
    }
  },
  methods: {
    // 获取轮播图列表
    async getSwipers() {
      let res = await this.$http({
        url: '/api/public/v1/home/swiperdata',
      })
      console.log('轮播图', res)
      this.swipersList = res
    },
    // 获取导航列表
    async getNavs() {
      let res = await this.$http({
        url: '/api/public/v1/home/catitems',
      })
      console.log('导航列表', res)
      this.navsList = res
    },
    // 获取商品列表
    async getFloors() {
      let res = await this.$http({
        url: '/api/public/v1/home/floordata',
      })
      console.log('商品列表', res)
      this.floorsList = res
    },
    // 点击回到顶部
    go2top() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 1000,
      })
    },
  },
  // async created() {
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
  //     let res = await this.$http({
  //       url: '/api/public/v1/home/swiperdata',
  //     })
  //     console.log('原型', res)
  //   },
  //   methods: {},
}
</script>

<style lang="less" scoped>
// 头部搜索
// .search {
//   background-color: #ff2d4a;
//   padding: 16rpx;
//   .inptu {
//     display: flex;
//     width: 100%;
//     height: 60rpx;
//     background-color: #fff;
//     justify-content: center;
//     align-items: center;
//     border-radius: 30rpx;
//     text {
//       margin-left: 10rpx;
//       color: #666;
//     }
//   }
// }
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
    margin-top: 24rpx;
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
// 返回顶部
.top {
  width: 100rpx;
  height: 100rpx;
  background-color: #ddd;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 20rpx;
  bottom: 20rpx;
}
</style>

<template>
  <view>
    <!-- 头部 -->
    <yg-seach></yg-seach>
    <!-- 盒子 -->
    <view class="content">
      <scroll-view class="left" scroll-y>
        <view
          :class="{ active: activeIndex === index }"
          v-for="(item, index) in leftList"
          :key="index"
          @click="cut(index)"
          >{{ item }}</view
        >
      </scroll-view>
      <scroll-view class="right" scroll-y>
        <view class="item" v-for="item in rightList" :key="item.cat_id">
          <view class="title">
            <view>/</view>
            <text>{{ item.cat_name }}</text>
            <view>/</view>
          </view>
          <view class="main">
            <view class="main-contents" v-for="it in item.children" :key="it.cat_id">
              <image mode="aspectFill" :src="it.cat_icon"></image>
              <text>{{ it.cat_name }}</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      categoryList: [], //分类列表
      activeIndex: 0, // 默认的高亮索引
    }
  },
  created() {
    // 先从本地获取
    let local_cates = uni.getStorageSync('cates')

    if (local_cates) {
      console.log('有值')
      // 判断是否过期
      let isList = Date.now() - local_cates.time > 1000 * 1000
      if (isList) {
        console.log('过期')
        this.getCategory()
      } else {
        console.log('没有过期')
        this.categoryList = local_cates.data
      }
    } else {
      this.getCategory()
    }
  },
  methods: {
    async getCategory() {
      // 弹出加载框
      uni.showLoading({
        title: '玩命加载中...',
      })
      let res = await this.$http({
        url: '/api/public/v1/categories',
      })
      console.log('分类', res)
      this.categoryList = res
      // 隐藏加载框
      uni.hideLoading()

      // 保存到本地
      uni.setStorageSync('cates', {
        data: this.categoryList,
        time: Date.now(),
      })
    },
    // 点击切换索引
    cut(index) {
      this.activeIndex = index
    },
  },
  computed: {
    // 左边列表数据
    leftList() {
      return this.categoryList.map(v => v.cat_name)
    },
    // 右边列表数据
    rightList() {
      return this.categoryList.length > 0 && this.categoryList[this.activeIndex].children
    },
  },
}
</script>

<style lang="less" scoped>
// 盒子
.content {
  height: calc(100vh - 98rpx);
  // background-color: #090;
  display: flex;
  .left {
    flex: 1;
    background-color: yellowgreen;
    view {
      background-color: #ddd;
      border: 1px solid #eee;
      height: 80rpx;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .active {
      border-left: 8rpx solid #ff2d4a;
    }
  }
  .right {
    flex: 3;
    // background-color: skyblue;
    .item {
      .title {
        height: 80rpx;
        // background: yellow;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #666;
        text {
          margin: 0 20rpx;
        }
      }
      .main {
        display: flex;
        flex-wrap: wrap;
        .main-contents {
          width: 33.33%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          image {
            width: 100rpx;
            height: 100rpx;
            margin: 10rpx 0;
          }
        }
      }
    }
  }
}
</style>

<template>
  <view>
    <!-- tab -->
    <yg-tab @clickTab="click_tab" :tabs="tabs"></yg-tab>
    <view v-if="tabs[0].isActive">
      <block v-for="item in list" :key="item.goods_id">
        <yg-goods :item="item"></yg-goods>
      </block>
    </view>
    <view v-if="tabs[1].isActive">销量</view>
    <view v-if="tabs[2].isActive">价格</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { id: 1, title: '综合', isActive: true },
        { id: 2, title: '销量', isActive: false },
        { id: 3, title: '价格', isActive: false },
      ],
      id: 1,
      list: [], //数据
      pagenum: 1, //页码
      hasMore: true,
    }
  },
  onLoad(query) {
    const { id, name } = query
    // id ==> 请求
    this.id = id
    // name ==>  设置导航栏标题
    uni.setNavigationBarTitle({
      title: name,
    })

    this.getList()
  },
  methods: {
    // 点击切换tab
    click_tab(id) {
      console.log('父的方法被调用了', id)

      this.tabs.forEach(v => {
        if (v.id == id) {
          v.isActive = true
        } else {
          v.isActive = false
        }
      })
    },
    // 获取数据
    async getList() {
      uni.showLoading({
        title: '玩命加载中...',
      })

      let res = await this.$http({
        url: '/api/public/v1/goods/search',
        data: {
          cid: this.id,
          pagenum: this.pagenum,
          pagesize: 10,
        },
      })
      uni.hideLoading()

      console.log('商品列表', res)
      this.list = [...this.list, ...res.goods]
      if (res.goods.length < 10) {
        this.hasMore = false
      }

      uni.stopPullDownRefresh()
    },
  },
  // 上拉加载
  onReachBottom() {
    console.log('触底了')
    if (!this.hasMore) {
      uni.showToast({
        icon: 'none',
        title: '没有更多',
      })
      return
    }
    this.pagenum++
    this.getList()
  },
  // 下拉刷新
  onPullDownRefresh() {
    // 重置
    this.list = [] //数据
    this.pagenum = 1 //页码
    this.hasMore = true
    // 从新加载
    this.getList()
  },
}
</script>

<style></style>

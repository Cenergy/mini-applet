<template>
  <view class="goods-list">
    <view class="product-list">
      <view
        class="product"
        v-for="product in goodsList"
        :key="product.goods_id"
		:data-item="product"
        @click="toGoods($event,product)"
      >
        <image
          mode="scaleToFill"
          :src="'http://www.aigisss.com/' + product.source_img"
        ></image>
        <view class="name">{{ product.sourcename }}</view>
        <view class="info">
          <view class="price">{{ product.price }}</view>
          <view class="slogan">{{ product.slogan }}</view>
        </view>
      </view>
    </view>

    <view class="loading-text">{{ loadingText }}</view>
  </view>
</template>

<script>
export default {
  props: {
    loadingText: {
      type: String,
      default: "正在加载中...",
    },
    baseURL: {
      type: String,
      default: "",
    },
    goodsList: {
      type: Array,
      default() {
        return [
          {
            goods_id: 0,
            source_img: "/static/img/intro/gg.jpg",
            sourcename: "商品名称商品名称商品名称商品名称商品名称",
            price: "￥168",
            slogan: "1235人付款",
          },
          {
            goods_id: 0,
            source_img: "/static/img/intro/intro-bg.jpg",
            sourcename: "商品名称商品名称商品名称商品名称商品名称",
            price: "￥168",
            slogan: "1235人付款",
          },
        ];
      },
    },
  },
  onPageScroll(e) {
    //兼容iOS端下拉时顶部漂移
    this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
    this.headerTop = e.scrollTop >= 0 ? null : 0;
    this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + "px";
  },
  //下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
  onPullDownRefresh() {
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 1000);
  },
  //上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
  onReachBottom() {
    uni.showToast({
      title: "触发上拉加载",
    });
    let len = this.productList.length;
    if (len >= 40) {
      this.loadingText = "到底了";
      return false;
    }
    // 演示,随机加入商品,生成环境请替换为ajax请求
    let end_goods_id = this.productList[len - 1].goods_id;
    for (let i = 1; i <= 10; i++) {
      let goods_id = end_goods_id + i;
      let p = {
        goods_id: goods_id,
        img:
          "/static/img/goods/p" +
          (goods_id % 10 == 0 ? 10 : goods_id % 10) +
          ".jpg",
        name: "商品名称商品名称商品名称商品名称商品名称",
        price: "￥168",
        slogan: "1235人付款",
      };
      this.productList.push(p);
    }
  },

  methods: {
    toGoods(e,product) {
      uni.navigateTo({
        url: "/pages/goods/goods?item="+encodeURIComponent(JSON.stringify(product)),
      });
    },
  },
};
</script>
<style lang="scss">
page {
  position: relative;
  background-color: #fff;
}

.goods-list {
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80upx;
    color: #f47825;
    font-size: 30upx;
    margin-top: 10upx;

    image {
      width: 30upx;
      height: 30upx;
    }
  }

  .loading-text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60upx;
    color: #979797;
    font-size: 24upx;
  }

  .product-list {
    width: 92%;
    padding: 0 4% 3vw 4%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .product {
      width: 48%;
      border-radius: 20upx;
      background-color: #fff;
      margin: 0 0 15upx 0;
      box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.1);

      image {
        width: 100%;
        height: 250rpx;
        border-radius: 20upx 20upx 0 0;
      }

      .name {
        width: 92%;
        padding: 10upx 4%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-align: justify;
        overflow: hidden;
        font-size: 30upx;
      }

      .info {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 92%;
        padding: 10upx 4% 10upx 4%;

        .price {
          color: #e65339;
          font-size: 30upx;
          font-weight: 600;
        }

        .slogan {
          color: #807c87;
          font-size: 24upx;
        }
      }
    }
  }
}
</style>

<template>
  <view class="navigation-bar" :style="{ height: height }">
    <view
      class="navigation-bar-fixed"
      :style="{ height: height, background: 'transparent' }"
    >
      <!-- capsule  navigation-bar-capsule or navigation-bar-textbox -->
      <view class="navigation-bar-capsule" :style="{ top: marginTop }">
        <view class="navigation-bar-left">
          <slot name="left" />
        </view>
        <view class="navigation-bar-right">
          <slot name="right" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    height() {
      const { platform, statusBarHeight } = uni.getSystemInfoSync();
      let height = statusBarHeight + 4; //ios 24px
      if (platform.toLowerCase() == "android") {
        height += 4; //android 28px
      }
      // 胶囊高度 32px 下边框6px height 状态栏高度
      return height + 42 + "px";
    },
    marginTop() {
      const { platform, statusBarHeight } = uni.getSystemInfoSync();
      let height = statusBarHeight + 4;
      if (platform.toLowerCase() == "android") {
        height += 4;
      }
      return height + "px";
    }
  },
  updated() {
    console.log(this.config);
  },
  mounted() {
    console.log(this.config);
  },
  props: {
    config: {
      type: Object,
      default() {
        return {
          title: "",
          bgcolor: "",
          type: 2,
          linear: false,
          transparent: false,
          fontcolor: "#000",
          menuIcon: "",
          menuText: ""
        };
      }
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    scrollMaxHeight: {
      type: Number,
      default: 288
    }
  },
  methods: {
    back_() {
      uni.navigateBack({
        delta: 1
      });
    },
    home_() {
      uni.switchTab({
        url: "/pages/index/index"
      });
    },
    conduct_() {
      this.$emit("customConduct");
    }
  }
};
</script>

<style lang="scss">
.navigation-bar {
  width: 100%;
  box-sizing: border-box;
  background-color: #df4c42;

  .navigation-bar-fixed {
    width: 100%;
    position: fixed;
    top: 0;
    box-sizing: border-box;
    z-index: 99999;
    background: #fff;
    display: flex;
    justify-content: center;

    .navigation-bar-linear {
      width: 100%;
      position: absolute;
      box-sizing: border-box;
      z-index: -1;
    }

    .navigation-bar-title {
      width: 280upx;
      line-height: 32px;
      height: 32px;
      color: #fff;
      font-size: 36upx;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .navigation-bar-custom-capsule {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32px;
      left: 10px;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 16px;
      padding: 0 23upx;
      // border:0.5px solid rgba(255,255,255,.3);
      box-sizing: border-box;
      overflow: hidden;
      z-index: 9;

      .custom-icon {
        width: 45upx;
        height: 45upx;
      }

      .custom-describe {
        font-size: 28upx;
      }
    }

    .navigation-bar-capsule {
      position: absolute;
      // height: 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 32px;
      height: 32px;
      font-size: 30upx;
      // width: 89px;
      right: 100px;
      left: 30rpx;
      // border-radius: 16px;
      // border:0.5px solid rgba(255,255,255,.3);
      box-sizing: border-box;
      overflow: hidden;
      z-index: 9;
      .navigation-bar-left {
        flex: 2;
      }

      .navigation-bar-right {
        flex: 8;
      }
    }
  }
}
</style>

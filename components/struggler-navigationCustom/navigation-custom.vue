<template>
	<view class="navigation-bar" :style="{ height: height }">
		<view class="navigation-bar-fixed" :style="{ height: height, background: !config.transparent && !config.linear ? config.bgcolor : 'transparent' }">
			<!-- capsule  navigation-bar-capsule or navigation-bar-textbox -->
			<view class=" navigation-bar-capsule" :style="{ top: marginTop }">
				<view class="button-action" hover-class="button-action-active" @click="back_"><image src="../../static/icon/back_.png" mode=""></image></view>
				<view class="button-v-line"></view>
				<view v-if="!config.share" class="button-action" hover-class="button-action-active" @click="home_"><image src="../../static/icon/home_.png" mode=""></image></view>
				<view v-if="config.share" class="button-action" hover-class="button-action-active">
					<button class="button_clear" open-type="share" hover-class="none"><image src="../../static/icon/share_.png" mode=""></image></button>
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
			if (platform.toLowerCase() == 'android') {
				height += 4; //android 28px
			}
			// 胶囊高度 32px 下边框6px height 状态栏高度
			return height + 38 + 'px';
		},
		marginTop() {
			const { platform, statusBarHeight } = uni.getSystemInfoSync();
			let height = statusBarHeight + 5;
			if (platform.toLowerCase() == 'android') {
				height += 5;
			}
			return height + 'px';
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
					title: '',
					bgcolor: '',
					type: 2,
					linear: false,
					transparent: false,
					fontcolor: '#000',
					menuIcon: '',
					menuText: ''
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
				url: '/pages/index/index'
			});
		},
		conduct_() {
			this.$emit('customConduct');
		}
	}
};
</script>

<style lang="scss">
.navigation-bar {
	width: 100%;
	box-sizing: border-box;
	.navigation-bar-fixed {
		width: 100%;
		position: fixed;
		top: 0;
		box-sizing: border-box;
		z-index: 999;
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
		.navigation-bar-custom-textbox {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 32px;
			left: 0px;
			padding: 0 23upx;
			// border:0.5px solid rgba(255,255,255,.3);
			box-sizing: border-box;
			overflow: hidden;
			z-index: 9;
			.custom-icon {
				width: 55upx;
				height: 55upx;
			}
			.custom-describe {
				font-size: 32upx;
			}
		}
		.navigation-bar-textbox {
			position: absolute;
			// height: 32px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			line-height: 32px;
			height: 32px;
			font-size: 30upx;
			width: 85px;
			left: 0px;
			// border:0.5px solid rgba(255,255,255,.3);
			box-sizing: border-box;
			overflow: hidden;
			z-index: 9;
			.button-action {
				flex: 1;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				.button_clear {
					line-height: 1;
					background-color: transparent;
					border: none;
					margin: 0;
					padding: 0;
				}
				.button_clear::after {
					border: none;
				}
				image {
					width: 60upx;
					height: 60upx;
					padding: 6upx;
					box-sizing: border-box;
				}
			}
			.button-v-line {
				width: 0.5px;
				height: 18px;
				background-color: rgba(0, 0, 0, 0.2);
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
			background-color: green;
			// border-radius: 16px;
			// border:0.5px solid rgba(255,255,255,.3);
			box-sizing: border-box;
			overflow: hidden;
			z-index: 9;
			.button-action {
				flex: 1;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				image {
					width: 60upx;
					height: 60upx;
					padding: 10upx;
					box-sizing: border-box;
				}
				.button_clear {
					line-height: 1;
					background-color: transparent;
					border: none;
					margin: 0;
					padding: 0;
					text-decoration: none;
				}
				.button_clear::after {
					border: none;
				}
			}
			.button-action-active {
				background-color: rgba(0, 0, 0, 0.3);
			}
			.button-v-line {
				width: 0.5px;
				height: 18px;
				background-color: rgba(0, 0, 0, 0.2);
			}
		}
	}
}
</style>

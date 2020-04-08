<template>
	<view class>
		<!-- <Search @searchRedict='searchRedict'></Search> -->

		<navigationCustom>
			<template v-slot:left>
				+ 深圳
			</template>
			<template v-slot:right>
				<view class="index-search" @click="searchRedict">
					<view class="icon_search" style="text-align: left">
						<text class="cuIcon cuIcon-search" style="margin-right: 3px"></text>
						<text>输入关键字</text>
					</view>
				</view>
			</template>
		</navigationCustom>
		<view class="background_view"></view>
		<view class="content-container">
			<ImageTextList :imageTextList="imageTextList"></ImageTextList>
			<view class="swiperContainer">
				<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode" :dotsStyles="dotsStyles">
					<swiper class="swiper-box" @change="change" :autoplay="true">
						<swiper-item v-for="(item ,index) in info" :key="index">
							<view class="swiper-item">
								{{item.content}}
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>
		</view>
		

		<!-- <GoodsList :goodsList="dataList" :loadingText="loadingText" :baseURL="baseURL"></GoodsList> -->
		<GoodsList :loadingText="loadingText"></GoodsList>
	</view>
</template>

<script>
	import Search from '../../components/search/Search.vue';
	import GoodsList from '../../components/goodsList/GoodsList.vue';
	import ImageTextList from '../../components/imageTextList/ImageTextList.vue';

	import {
		baseURL
	} from '../../common/constants.js';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import navigationCustom from '../../components/struggler-navigationCustom/navigation-custom';
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"

	export default {
		components: {
			Search,
			GoodsList,
			navigationCustom,
			ImageTextList,
			uniSwiperDot
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		data() {
			return {
				currentPage: 1,
				title: 'Hello',
				onKeyInput: '',
				loadingText: '',
				baseURL,
				dataList: [],
				config: {
					title: '我是标题',
					bgcolor: '#c1a379',
					type: 2,
					transparent: true,
					linear: true,
					share: true
				},
				scrollTop: 0,
				scrollMaxHeight: 200,
				imageTextList: [

					{
						image: '/static/temp/c6.png',
						text: 'AI'
					},
					{
						image: '/static/temp/c5.png',
						text: 'GIS'
					},
					{
						image: '/static/temp/c7.png',
						text: 'IS'
					},
					{
						image: '/static/temp/c8.png',
						text: '诗'
					}
				],
				info: [{
					content: '内容 A'
				}, {
					content: '内容 B'
				}, {
					content: '内容 C'
				}],
				current: 0,
				mode: 'round',
				dotsStyles:{
					selectedBackgroundColor:'#df4c42',
					selectedBorder:'1px rgba(255, 0, 0, .8) solid',
					backgroundColor:'rgba(255, 0, 0, .3)',
					border:'1px rgba(255, 0, 0, .3) solid'
				}
			};
		},
		onLoad() {
			uni.request({
				url: `${baseURL}/api/v1/sources/`, //仅为示例，并非真实接口地址。
				data: {
					page: this.currentPage,
					num: 10
				},
				success: res => {
					const {
						data
					} = res;
					this.dataList = data.data;
					this.currentPage += 1;
				}
			});
		},
		onReachBottom() {
			uni.request({
				url: `${baseURL}/api/v1/sources/`, //仅为示例，并非真实接口地址。
				data: {
					page: this.currentPage,
					num: 10
				},
				success: res => {
					const {
						data
					} = res;
					const lastPage = data.pages;
					console.log(lastPage, this.currentPage);
					if (lastPage === this.currentPage) {
						this.loadingText = '我是有底线的！！！';
						return false;
					}
					uni.showToast({
						title: '触发上拉加载'
					});
					this.dataList.push(data.data);
					this.currentPage += 1;
				}
			});
		},
		methods: {
			getData() {
				uni.request({
					url: `${baseURL}/api/v1/resources/`, //仅为示例，并非真实接口地址。
					data: {
						key_word: this.onKeyInput
					},
					success: res => {
						console.log("==========", res.data);
					}
				});
			},
			customConduct() {
				console.log('ssssss');
			},
			searchRedict() {
				uni.navigateTo({
					url: '/pages/search/search',
					fail() {
						uni.showToast({
							title: 'no',
							icon: 'none'
						});
					},
					success() {
						uni.showToast({
							title: 'yes',
							icon: 'none'
						});
					}
				});
			},
			change(e) {
				this.current = e.detail.current;
			}
		}
	};
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.index-search {
		text-align: center;
		font-size: 16px;
		color: #ccc;
		zoom: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 90%;
		margin: 0 auto;
	}

	.index-search .icon_search {
		background: #f6f6f6;
		border-radius: 40upx;
		-moz-border-radius: 40upx;
		-webkit-border-radius: 40upx;
		-o-border-radius: 40upx;
		-ms-border-radius: 40upx;
		font-size: 26upx;
		color: #cccccc;
		text-align: left;
		text-indent: 32upx;
		zoom: 1;
		transition: all 0.4s ease 0s;
		-o-transition: all 0.4s ease 0s;
		-moz-transition: all 0.4s ease 0s;
		-webkit-transition: all 0.4s ease 0s;
		transform-origin: center;
	}

	.background_view {
		width: 100%;
		height: 100rpx;
		position: absolute;
		z-index: -1;
		background-color: #fff;
		/* 不支持线性的时候显示 */
		background-image: linear-gradient(to bottom, #df4c42, #ffaa7f);
		box-shadow: 0px 0px 10px 10px #ffaa7f;
	}

	.content-container {
		min-height: 80rpx;
		margin: 2px 20rpx;
		background-color: #ffffff;
		border-radius: 10rpx 10rpx 0 0;
	}
</style>

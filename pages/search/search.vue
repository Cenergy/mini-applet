<template>
	<view>
		<SearchU :is-focus="true" :theme="themeClass" :show-want="true" :speechEngine="speechEngine"
		:hot-list="hotList" @getSearchText="getSearchText"></SearchU>
		<view class="goods-list">
			<GoodsList :goodsList="dataList" :loadingText="loadingText"  :baseURL="baseURL"></GoodsList>
		</view>
		
	</view>
</template>

<script>
	import SearchU from '../../components/searchU/SearchU.vue';
	import { baseURL } from '../../common/constants.js';
	import GoodsList from '../../components/goodsList/GoodsList.vue';
	export default {
		components: {
			SearchU,
			GoodsList
		},
		data() {
			return {
				themeClass: 'circle',
				speechEngine: 'baidu', //语音识别引擎
				currentPage:1,
				hotList: ['arcgis','gis','django','webgis']	,//初始化推荐列表
				loadingText:"",
				dataList:[]
			}
		},
		methods: {
			getSearchText(e) {
				
				uni.request({
					url: `${baseURL}/api/v1/sources/`, //仅为示例，并非真实接口地址。
					 method:'GET',
					data: {
						page: this.currentPage,
						num: 10,
						key_word:e
					},
					success: res => {
						const { data } = res;
						this.dataList=data.data
					}
				});
				// uni.showToast({
				// 	title:'回调的搜索信息: ' + e,
				// 	icon:"none"
				// })
			}
		},
	}
</script>

<style>
	.goods-list{
		width: 100%;
		margin-top: 15rpx;
	}
</style>

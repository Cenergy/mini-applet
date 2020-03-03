<template>
	<view>
		<SearchU :is-focus="true" :theme="themeClass" :show-want="true" :speechEngine="speechEngine"
		:hot-list="hotList" @getSearchText="getSearchText"></SearchU>
	</view>
</template>

<script>
	import SearchU from '../../components/searchU/SearchU.vue';
	export default {
		components: {
			SearchU
		},
		data() {
			return {
				themeClass: 'circle',
				speechEngine: 'baidu', //语音识别引擎
				hotList: ['arcgis','gis','django','webgis']	//初始化推荐列表
			}
		},
		methods: {
			getSearchText(e) {
				uni.showToast({
					title:'回调的搜索信息: ' + e,
					icon:"none"
				})
			}
		},
	}
</script>

<style>
</style>

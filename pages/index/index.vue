<template>
	<view class="">
		<Search></Search>
		<!-- <GoodsList :goodsList="dataList" :loadingText="loadingText" :baseURL="baseURL"></GoodsList> -->
		<SearchU></SearchU>
	</view>
</template>

<script>
import Search from '../../components/search/Search.vue';
import GoodsList from '../../components/goodsList/GoodsList.vue';
import SearchU from '../../components/searchU/SearchU.vue';
import {baseURL} from '../../common/constants.js';


export default {
	components: {
		Search,
		GoodsList,
		SearchU
	},
	data() {
		return {
			currentPage:1,
			title: 'Hello',
			onKeyInput: '',
			loadingText:'',
			baseURL,
			dataList: [
			]
		};
	},
	onLoad() {
		uni.request({
			url: `${baseURL}/api/v1/sources/`, //仅为示例，并非真实接口地址。
			data: {
				page:this.currentPage,
				num:10,
			},
			success: res => {
				const {data}=res
				this.dataList=data.data
				this.currentPage+=1
			}
		});
	},
	onReachBottom() {		
		uni.request({
			url: `${baseURL}/api/v1/sources/`, //仅为示例，并非真实接口地址。
			data: {
				page:this.currentPage,
				num:10,
			},
			success: res => {
				const {data}=res
				const lastPage=data.pages;
				console.log(lastPage ,this.currentPage)
				if(lastPage===this.currentPage){
					this.loadingText = '我是有底线的！！！';
					return false;
				}
				uni.showToast({ title: '触发上拉加载' });
				this.dataList.push(data.data)
				this.currentPage+=1
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
					console.log(res.data);
				}
			});
		}
	}
};
</script>

<style>
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
</style>

<template>
	<view class="search-container">
		<view class="search-code">
			<image src="../../static/images/saoma.svg" mode="widthFix"></image>
		</view>
		<view class="search">
			<image src="../../static/images/search.svg" mode="widthFix" class="search-img"></image>
			<input type="text" placeholder="请输入要搜索的内容" disabled=""/>
		</view>
		<view class="search-code">
			<image src="../../static/images/message.svg" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	
	export default {
		name:"search"
	}
</script>

<style scoped>
	.search-code{
		width: 50upx;
		height: 50upx;
		padding: 0 15upx;
	}
	.search-code image{
		width: 50upx;
		height: 50upx;
	}
	.search-img{
		width: 40upx;
		height: 40upx;
		margin: auto 0 auto 20upx;
	}
	.search{
		width: 100%;
		height: 70upx;
		line-height: 70upx;
		display: flex;
		background: #fff7d4;
		border-top-left-radius: 50upx;
		border-bottom-right-radius: 50upx;
		border-bottom-left-radius: 50upx;
	}
	.search input{
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		font-size: 30upx;
		color: #666666;
	}
	.search-container{
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 70upx;
		background: linear-gradient(to top,#ffe566 10%,#ffd300 100%);
		padding: 30upx 0;
	}
</style>

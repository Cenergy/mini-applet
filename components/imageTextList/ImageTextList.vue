<template>
	<view class="cate-contain">
		<view class="cate-section">
			<view class="cate-item" v-for="(item,index) in imageTextList" :key="index">
				<image :src="item.image"></image>
				<text>{{item.text}}</text>
			</view>
			
		</view>
	</view>
</template>

<script>
export default {
	name: 'ImageTextList',
	props:{
		imageTextList:{
			type:Array,
			default(){
				return [{
					image:'/static/temp/c3.png',
					text:'环球美食'
				}]
			}
		}
	}
};
</script>

<style lang="scss">
.cate-contain {
	width: 100%;
	height: 100%;
}
/* 分类 */
.cate-section {
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	padding: 30upx 22upx;
	.cate-item {
		display: flex;
		flex-direction: column;
		margin: 5px 20rpx;
		align-items: center;
		font-size: 26upx;
		color: #303133;
	}
	/* 原图标颜色太深,不想改图了,所以加了透明度 */
	image {
		width: 88upx;
		height: 88upx;
		margin-bottom: 14upx;
		border-radius: 50%;
		opacity: 0.7;
		box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
	}
}
</style>

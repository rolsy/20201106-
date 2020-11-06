<template name="menu">
	<view id="menu">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content">菜谱</block>
		</cu-custom>
		<view>
			<view style="text-align: center;">
				<image src="https://7961-yangguang-089kj-1303115238.tcb.qcloud.la/menubg.png?sign=3fcb53fd8d2a61107021d3f479a36569&t=1604554557"
				 class="menupadding"></image>
				<image src="https://7961-yangguang-089kj-1303115238.tcb.qcloud.la/menutxt.png?sign=eee00e895f8bd3d9350f6a5fe613ad1a&t=1604569847"
				 mode="widthFix" class="response menupadding1"></image>
			</view>
			<view style="text-align: center;margin-top: 50rpx;">
				<view class="menupaddingtxt" @tap="todaymenu">
					今日菜谱
					<i class="iconfont margin-right-xs">&#xe8f1;</i>
				</view>
				<view class="menupaddingtxt" @tap="tomorrowmenu">
					明日菜谱
					<i class="iconfont margin-right-xs">&#xe8f1;</i>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "menu",
		data() {
			return {};
		},
		onLoad() {},
		methods: {
			todaymenu() {
				uni.navigateTo({
					url: '/pages/basics/todaymenu'
				});
			},
			tomorrowmenu() {
				uni.navigateTo({
					url: '/pages/basics/tomorrowmenu'
				});
			}
		}
	}
</script>

<style>
	.menupadding {
		padding-top: 150rpx;
		padding: 40rpx;
	}

	.menupadding1 {
		transform:scale(0.5);
	}

	.menupaddingtxt {
		padding: 45rpx;
		background: #E5E5E5;
		width: 70%;
		margin-top: 50rpx;
		margin-left: 15%;
		border-radius: 12rpx;
		font-size: 1.2rem;
		z-index: 999;
	}

	@font-face {
		font-family: 'iconfont';
		/* project id 2182858 */
		src: url('//at.alicdn.com/t/font_2182858_23t2xn8p5l1.eot');
		src: url('//at.alicdn.com/t/font_2182858_23t2xn8p5l1.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_2182858_23t2xn8p5l1.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_2182858_23t2xn8p5l1.woff') format('woff'),
			url('//at.alicdn.com/t/font_2182858_23t2xn8p5l1.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_2182858_23t2xn8p5l1.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
		font-weight: 100;
		display: inline-block !important;
		font-size: 1.5rem;
		float: right;
	}
</style>

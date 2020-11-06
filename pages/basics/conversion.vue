<template name="conversion">
	<view id="conversion">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content">订单详情</block>
		</cu-custom>
		<scroll-view scroll-y class="page">
			<view class="conert-img">
				<image src="../../static/duihuanchenggong.png"></image>
				<view style="margin-top: -42rpx;">
					<view>本次兑换消耗{{rolsyIntegral * buyCount}}积分</view>
					<view>剩余{{rolsyF_SortCode}}积分</view>
				</view>
			</view>
			<view class="cu-item">
				<view class="content cf margin-top">
					<view class="rolsy-gift-img rolsy-dis margin-top-xs margin-right-xs">
						<image :src="rolsyImg" mode="widthFix"></image>
					</view>
					<view class="rolsy-gift-right2 fr rolsy-dis">X{{buyCount}}</view>
					<view class="rolsy-gift-right fr rolsy-dis">
						<view class="nav-name text-rolsy"><span>{{rolsyIntegral}}</span>积分<span class="rolsy-delete">￥{{rolsyPrice}}</span></view>
						<view class="text-bold text-lg rolsy-text-wrap">{{rolsyName}}</view>
						<view class="cu-capsule bg-rolsy">{{rolsySKU}}</view>
					</view>
					<view class="cf margin-left-sm padding">
						<text>配送方式</text>
						<text class="fr">{{rolsyType}}</text>
					</view>
					<view class="fr padding">
						<text>消耗 <text class="text-rolsy text-lg">{{ rolsyIntegral * buyCount}}</text>积分</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "conversion",
		data() {
			return {
				rolsyImg: '',
				rolsyIntegral: '',
				rolsyPrice: '',
				rolsyName: '',
				rolsyParameter: '',
				rolsyType: '',
				buyCount: '',
				rolsyF_SortCode: '',
				rolsySKU: ''
			}

		},

		onLoad(option) {
			const that = this
			this.rolsySKU = option.rolsySKU,
				this.rolsyImg = option.rolsyImg,
				this.rolsyIntegral = option.rolsyIntegral,
				this.rolsyPrice = option.rolsyPrice,
				this.rolsyName = option.rolsyName,
				this.rolsyParameter = option.rolsyParameter,
				this.rolsyType = option.rolsyType,
				this.buyCount = option.count,
				uni.getStorage({
					key: "Specifications5",
					success(res) {
						console.log(res.data);
					}
				});
			console.log('数据', option)
			//查询用户数据
			uni.request({
				url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetUserList',
				data: {
					OpenId: uni.getStorageSync('openid')
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				method: 'POST',
				dataType: 'json',
				success: (res) => {
					console.log(res)
					that.rolsyF_SortCode = res.data[0].F_SortCode
				}
			});
		},
		methods: {
			refreshData() {
				const that = this
				// that.update()
				setTimeout(() => {
					this.$refs.hrPullLoad.reSet();
				}, 300);
			},
		}
	}
</script>

<style>
	image {
		width: 58%;
		height: 309rpx;
		margin: 65rpx 150rpx;
	}

	.margin-left-sm {
		margin-top: -70rpx;

	}

	.cu-item {
		margin-right: 33rpx;
		padding-right: 21rpx;
		/* border: 1px solid #ccc; */
		margin-left: 37rpx;
		border-radius: 26rpx;
		box-shadow: 0 0 10px #ccc
	}

	.cu-item image {
		height: 87.471px;
		width: 249rpx;
		margin-left: 29rpx;
		margin-top: 10rpx;
	}

	.conert-img view {
		text-align: center;
		line-height: 51rpx;
		font-size: 30rpx;

	}

	.page {
		height: 92vh;
	}

	.rolsy-bg {
		background-image: url(../../static/user/top.png);
		background-size: 100%;
		background-position: top;
		background-repeat: no-repeat;

	}

	.rolsy-border {
		border: 2px solid #FFFFFF;
		margin-right: 70upx;
		margin-top: 25upx;
	}

	/* 图标字 */
	@font-face {
		font-family: 'iconfont';
		/* project id 2004236 */
		src: url('//at.alicdn.com/t/font_2004236_e5u8xq45yz7.eot');
		src: url('//at.alicdn.com/t/font_2004236_e5u8xq45yz7.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_2004236_e5u8xq45yz7.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_2004236_e5u8xq45yz7.woff') format('woff'),
			url('//at.alicdn.com/t/font_2004236_e5u8xq45yz7.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_2004236_e5u8xq45yz7.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
		font-weight: 100;
		display: inline-block !important;
	}

	.rolsy-border2 {
		border: 1px solid #ffffff;
		width: 200upx;
		padding: 10upx 30upx;
		border-radius: 25upx;
		position: relative;
		left: -5upx;
	}

	.rolsy-bg-color {
		background-color: #FFCE43;
		border-top-left-radius: 50upx;
		border-bottom-left-radius: 50upx;
	}

	.rolsy-ba::before {
		content: "";
		position: absolute;
		background: #FFCE42;
		color: #FFCE42;
		border-radius: 20upx;
		border: 3px solid #FFCE42;
		left: 275upx;
		top: 550upx;
	}

	.rolsy-ba::after {
		content: "";
		position: absolute;
		background: #FFCE42;
		color: #FFCE42;
		border-radius: 20upx;
		border: 3px solid #FFCE42;
		left: 460upx;
		top: 550upx;
	}

	.rolsy-gift-img {
		width: 40%;
	}

	.text-rolsy {
		color: #FE6B45;
	}

	.rolsy-delete {
		text-decoration: line-through;
		color: #C8C8C8;
		margin-left: 1rem;
	}

	.rolsy-dis {
		display: inline-block !important;
	}

	.rolsy-gift-right {
		width: 50%;
	}

	.rolsy-text-wrap {
		word-break: break-all;
		width: 320upx;
	}

	.bg-rolsy {
		background-color: #EEEEEE;
		border-radius: 35upx;
		padding-left: 35upx;
		padding-right: 35upx;
		margin-top: 20upx;
	}

	.rolsy-gift-right2 {
		width: 5%;
		position: relative;
		top: 90upx;
		left: 10upx;
	}

	.rolsy-min-img {
		min-height: 250upx;
	}

	.cu-dialog {
		background-color: transparent;
	}

	.rolsy-saoma-img {
		width: 50%;
		margin-top: 470upx;
	}

	.rolsy-bg-saoma {
		background-size: 85% !important;
		background-position: center;
		background-repeat: no-repeat;
	}

	.rolsy-x {
		border: 1px solid #FFFFFF;
		padding: 10upx;
		border-radius: 30upx;
		display: inline-block;
		margin-top: 60upx;
	}
</style>

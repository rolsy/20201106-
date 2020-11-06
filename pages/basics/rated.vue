<template name="rated">
	<view id="conversion">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content">菜品评价</block>
		</cu-custom>
		<scroll-view scroll-y class="page">
			<view>
				<image src="https://7961-yangguang-089kj-1303115238.tcb.qcloud.la/pingjiaimg.png?sign=a91a4ad4ada94a867d43235bc99a7401&t=1599635674"
				 mode="widthFix" class="response"></image>
				<view class="padding rolsy-text">
					<text>
						为进一步提高食堂的工作和服务水平，为您提供更加优质的就餐服务，我们开展菜品质量调查，期待倾听您的宝贵意见和建议。
					</text>
				</view>
				<view>
					<view style="text-align: center;background: linear-gradient(to right, rgba(254, 206, 65,0) 0%, rgba(254, 206, 65,.8) 50%, rgba(254, 206, 65,0) 100%);width: 40%;margin-left: 30%;">昨日三餐点评</view>

					<!-- 昨日早餐 -->
					<view class="cu-list menu card-menu margin-top-xl shadow-lg" @tap="BreakfastPage">
						<view class="cu-item arrow">
							<view class="content cf">
								<view class="">
									<text class="text-black"></text>
									<i class="iconfont text-rolsy-color1">&#xe600;</i><span class="margin-left-sm">昨日早餐</span>
								</view>
								<view class="fr">
									<text class="text-black">去点评</text>
								</view>
							</view>
						</view>
					</view>
					<!-- 昨日午餐 -->
					<view class="cu-list menu card-menu shadow-lg" @tap="LunchPage">
						<view class="cu-item arrow">
							<view class="content cf">
								<view class="">
									<text class="text-black"></text>
									<i class="iconfont text-rolsy-color2">&#xe600;</i><span class="margin-left-sm">昨日午餐</span>
								</view>
								<view class="fr">
									<text class="text-black">去点评</text>
								</view>
							</view>
						</view>
					</view>
					<!-- 昨日晚餐 -->
					<view class="cu-list menu card-menu margin-bottom-xl shadow-lg" @tap="DinnerPage">
						<view class="cu-item arrow">
							<view class="content cf">
								<view class="">
									<text class="text-black"></text>
									<i class="iconfont text-rolsy-color3">&#xe600;</i><span class="margin-left-sm">昨日晚餐</span>
								</view>
								<view class="fr">
									<text class="text-black">去点评</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view style="padding-bottom: 50rpx;">
					<view style="text-align: center;background: linear-gradient(to right, rgba(254, 206, 65,0) 0%, rgba(254, 206, 65,.8) 50%, rgba(254, 206, 65,0) 100%);width: 40%;margin-left: 30%;">今日三餐点评</view>

					<!-- 今日早餐 -->
					<view class="cu-list menu card-menu margin-top-xl shadow-lg" @tap="BreakfastPage1">
						<view class="cu-item arrow">
							<view class="content cf">
								<view class="">
									<text class="text-black"></text>
									<i class="iconfont text-rolsy-color1">&#xe600;</i><span class="margin-left-sm">今日早餐</span>
								</view>
								<view class="fr">
									<text class="text-black">去点评</text>
								</view>
							</view>
						</view>
					</view>
					<!-- 今日午餐 -->
					<view class="cu-list menu card-menu shadow-lg" @tap="LunchPage1">
						<view class="cu-item arrow">
							<view class="content cf">
								<view class="">
									<text class="text-black"></text>
									<i class="iconfont text-rolsy-color2">&#xe600;</i><span class="margin-left-sm">今日午餐</span>
								</view>
								<view class="fr">
									<text class="text-black">去点评</text>
								</view>
							</view>
						</view>
					</view>
					<!-- 今日晚餐 -->
					<view class="cu-list menu card-menu margin-bottom-xl shadow-lg" @tap="DinnerPage1">
						<view class="cu-item arrow">
							<view class="content cf">
								<view class="">
									<text class="text-black"></text>
									<i class="iconfont text-rolsy-color3">&#xe600;</i><span class="margin-left-sm">今日晚餐</span>
								</view>
								<view class="fr">
									<text class="text-black">去点评</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "rated",
		data() {
			return {
				//昨日
				breakfastMenuID: '',
				lunchMenuID: '',
				dinnerMenuID: '',
				//今日
				breakfastMenuID1: '',
				lunchMenuID1: '',
				dinnerMenuID1: ''
			};
		},
		onLoad() {
			const that = this
			uni.request({
				url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetCommentList',
				data: {
					OpenId: uni.getStorageSync('openid')
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				method: 'POST',
				dataType: 'json',
				success: (res) => {
					res.data.data.rows.forEach(item => {
						if (item.F_Description == 1) {
							that.breakfastMenuID = item.MenuID
						} else if (item.F_Description == 2) {
							that.lunchMenuID = item.MenuID
						} else if (item.F_Description == 3) {
							that.dinnerMenuID = item.MenuID
						}
					})
				},
			});
			uni.request({
				url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetTodayCommentList',
				data: {
					OpenId: uni.getStorageSync('openid')
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				method: 'POST',
				dataType: 'json',
				success: (res) => {
					console.log('今日==============', res)
					res.data.data.rows.forEach(item => {
						if (item.F_Description == 1) {
							that.breakfastMenuID1 = item.MenuID
						} else if (item.F_Description == 2) {
							that.lunchMenuID1 = item.MenuID
						} else if (item.F_Description == 3) {
							that.dinnerMenuID1 = item.MenuID
						}
					})
				},
			});
		},
		methods: {
			//转到昨日早餐 Rolsy
			BreakfastPage() {
				const that = this
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetComment',
					data: {
						F_ModifyUserId: uni.getStorageSync('openid'),
						MenuID: that.breakfastMenuID
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						if (res.data.state == '0') {
							uni.navigateTo({
								url: '/pages/basics/ratedindex?id=1'
							});
						} else if (res.data.state == '1') {
							uni.showModal({
								title: '提示',
								content: '您已经点评过了',
								success: function(res) {}
							});
						}
					}
				});
			},
			//转到今日早餐 Rolsy
			BreakfastPage1() {
				const that = this
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetComment',
					data: {
						F_ModifyUserId: uni.getStorageSync('openid'),
						MenuID: that.breakfastMenuID1
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						if (res.data.state == '0') {
							uni.navigateTo({
								url: '/pages/basics/ratedindex?id=11&today=1'
							});
						} else if (res.data.state == '1') {
							uni.showModal({
								title: '提示',
								content: '您已经点评过了',
								success: function(res) {}
							});
						}
					}
				});
			},
			//转到昨日午餐 Rolsy
			LunchPage() {
				const that = this
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetComment',
					data: {
						F_ModifyUserId: uni.getStorageSync('openid'),
						MenuID: that.lunchMenuID
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						if (res.data.state == '0') {
							uni.navigateTo({
								url: '/pages/basics/ratedindex?id=2'
							});
						} else if (res.data.state == '1') {
							uni.showModal({
								title: '提示',
								content: '您已经点评过了',
								success: function(res) {}
							});
						}
					}
				});
			},
			//转到今日午餐 Rolsy
			LunchPage1() {
				const that = this
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetComment',
					data: {
						F_ModifyUserId: uni.getStorageSync('openid'),
						MenuID: that.lunchMenuID1
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						if (res.data.state == '0') {
							uni.navigateTo({
								url: '/pages/basics/ratedindex?id=22&today=1'
							});
						} else if (res.data.state == '1') {
							uni.showModal({
								title: '提示',
								content: '您已经点评过了',
								success: function(res) {}
							});
						}
					}
				});
			},

			//转到昨日晚餐 Rolsy
			DinnerPage() {
				const that = this
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetComment',
					data: {
						F_ModifyUserId: uni.getStorageSync('openid'),
						MenuID: that.dinnerMenuID
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						if (res.data.state == '0') {
							uni.navigateTo({
								url: '/pages/basics/ratedindex?id=3'
							});
						} else if (res.data.state == '1') {
							uni.showModal({
								title: '提示',
								content: '您已经点评过了',
								success: function(res) {}
							});
						}
					}
				});
			},
			//转到今日晚餐 Rolsy
			DinnerPage1() {
				const that = this
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetComment',
					data: {
						F_ModifyUserId: uni.getStorageSync('openid'),
						MenuID: that.dinnerMenuID1
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						if (res.data.state == '0') {
							uni.navigateTo({
								url: '/pages/basics/ratedindex?id=33&today=1'
							});
						} else if (res.data.state == '1') {
							uni.showModal({
								title: '提示',
								content: '您已经点评过了',
								success: function(res) {}
							});
						}
					}
				});
			}
		},
	}
</script>

<style>
	.page {
		height: 92vh;
	}

	.rolsy-text {
		font-size: .7rem;
		line-height: 1.2rem;
	}

	.cf view {
		display: inline-block !important;
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
		font-size: 1rem;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
		font-weight: 100;
	}

	.text-rolsy-color1 {
		color: #FFCE43;
	}

	.text-rolsy-color2 {
		color: #F3A149;
	}

	.text-rolsy-color3 {
		color: #48A8F2;
	}
</style>

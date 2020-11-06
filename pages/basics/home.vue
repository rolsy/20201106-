<template name="basics">
	<view id="home">
		<cu-custom bgColor="bg-white" :isUser="true">
			<block slot="content" @tap="PromotionPage">阳光酒店</block>
		</cu-custom>
		<!-- 活动详情图 -->
		<view>
			<swiper class="swiper" indicator-dots="true" autoplay="true" interval="2000" duration="100">
				<swiper-item v-for="(item , index) in swiperListData" :key="index">
					<image :src="item.Img" mode="widthFix" class="response" @click="bannerRouter(item)"></image>
				</swiper-item>
			</swiper>
		</view>
		<button class='testbutton' open-type="getUserInfo" @getuserinfo="getuserinfo" withCredentials="true" style="display: none;"></button>
		<!-- 通知 -->
		<view class="s bg-white" @tap="NoticeListPage">
			<view class="action" v-if="F_Description">
				<text class="cuIcon-notificationfill text-rolsy" style="padding-right: 17rpx;"></text>
				{{F_Description}}
			</view>
			<view class="action" v-if="!F_Description">
				<text class="cuIcon-notificationfill text-rolsy" style="padding-right: 17rpx;"></text>
				暂无通知
			</view>
		</view>
		<!-- 3个菜单 -->
		<view class="flex  p-xs margin-bottom-sm mb-sm">
			<view class="flex-twice padding-sm margin-xs radius" @tap="MenuPage">
				<view class="margin-top">
					<image src="https://7961-yangguang-089kj-1303115238.tcb.qcloud.la/1.png?sign=5547fa53ae34960c640f183e83f2aae1&t=1599635006"
					 mode="widthFix" class="response"></image>
				</view>
				<view class="rolsy-3text">
					菜谱
				</view>
			</view>
			<view class="flex-twice padding-sm margin-xs radius" @tap="RatedPage">
				<view class="margin-top">
					<image src="https://7961-yangguang-089kj-1303115238.tcb.qcloud.la/2.png?sign=b95b2a8b6599fdf1686b6a2cad83a1a4&t=1599634970"
					 mode="widthFix" class="response"></image>
				</view>
				<view class="rolsy-3text">
					菜品点评
				</view>
			</view>
			<view class="flex-twice padding-sm margin-xs radius" @tap="NewFoodPage">
				<view class="margin-top">
					<image src="https://7961-yangguang-089kj-1303115238.tcb.qcloud.la/3.png?sign=959f68dc35d2647dac3fd11c1b085507&t=1599635023"
					 mode="widthFix" class="response"></image>
				</view>
				<view class="rolsy-3text">
					新菜投票
				</view>
			</view>
		</view>
		<!-- 积分兑换图 -->
		<view class="padding-rolsy_sm" id="HomePage">
			<image src="https://7961-yangguang-089kj-1303115238.tcb.qcloud.la/banner.png?sign=89ab6c2af152af00d48966fd27d83291&t=1604541311"
			 mode="widthFix" class="response"></image>
		</view>
		<!-- 200积分 -->
		<view class="nav-list">
			<view class="cu-bar rolsy-fontsize-075">
				<span class="rolsy-font-bg">200积分</span>
				<span class="rolsy-ml rolsy-colorg" @tap="MorePage1">更多<text class="cuIcon-right"></text></span>
			</view>
			<navigator hover-class="none" class="nav-li" v-for="(item,index) in rows" :key="index" :url="'/pages/basics/details?Img=' 
					+ item.Img+'&Integral='+item.Integral+'&Price='+item.Price+'&Name='+item.Name+'&Stock='+item.Stock+'&F_SortCode='+item.F_SortCode
					+'&Parameter='+item.Parameter+'&Type='+item.Type+'&F_Description='+item.F_Description+'&ID='+item.ID
					+'&Specifications='+item.Specifications+'&Specifications1='+item.Specifications1+'&Specifications2='+item.Specifications2+'&Specifications3='+item.Specifications3+'&Specifications4='+item.Specifications4
					+'&Number='+item.Number+'&Number1='+item.Number1+'&Number2='+item.Number2+'&Number3='+item.Number3+'&Number4='+item.Number4"
			 navigateTo @tap="rolsySave(item.Specifications5)">
				<view class="rolsy-gift-img">
					<image :src="item.Img" class="response rolsy-gift-img" style="height: 247rpx;"></image>
				</view>
				<view class="bg-white padding rolsy-gift-content">
					<view class="nav-title">{{item.Name}}</view>
					<view class="nav-name text-rolsy">{{item.Integral}}积分<span class="rolsy-delete">￥{{item.Price}}</span></view>
				</view>
			</navigator>
		</view>
		<!-- 400积分 -->
		<view class="nav-list">
			<view class="cu-bar rolsy-fontsize-075">
				<span class="rolsy-font-bg2">400积分</span>
				<span class="rolsy-ml2 rolsy-colorg" @tap="MorePage2">更多<text class="cuIcon-right"></text></span>
			</view>
			<navigator hover-class="none" class="nav-li" v-for="(item,index) in two" :key="index" :url="'/pages/basics/details?Img=' 
					+ item.Img+'&Integral='+item.Integral+'&Price='+item.Price+'&Name='+item.Name+'&Stock='+item.Stock+'&F_SortCode='+item.F_SortCode
					+'&Parameter='+item.Parameter+'&Type='+item.Type+'&F_Description='+item.F_Description+'&ID='+item.ID
					+'&Specifications='+item.Specifications+'&Specifications1='+item.Specifications1+'&Specifications2='+item.Specifications2+'&Specifications3='+item.Specifications3+'&Specifications4='+item.Specifications4
					+'&Number='+item.Number+'&Number1='+item.Number1+'&Number2='+item.Number2+'&Number3='+item.Number3+'&Number4='+item.Number4"
			 navigateTo @tap="rolsySave(item.Specifications5)">
				<view class="rolsy-gift-img">
					<image :src="item.Img" class="response rolsy-gift-img" style="height: 247rpx;"></image>
				</view>
				<view class="bg-white padding rolsy-gift-content">
					<view class="nav-title">{{item.Name}}</view>
					<view class="nav-name text-rolsy">{{item.Integral}}积分<span class="rolsy-delete">￥{{item.Price}}</span></view>
				</view>
			</navigator>
		</view>
		<!-- 1000积分 -->
		<view class="nav-list">
			<view class="cu-bar rolsy-fontsize-075">
				<span class="rolsy-font-bg3">1000积分</span>
				<span class="rolsy-ml3 rolsy-colorg" @tap="MorePage3">更多<text class="cuIcon-right"></text></span>
			</view>
			<navigator hover-class="none" class="nav-li" v-for="(item,index) in three" :key="index" :url="'/pages/basics/details?Img=' 
					+ item.Img+'&Integral='+item.Integral+'&Price='+item.Price+'&Name='+item.Name+'&Stock='+item.Stock+'&F_SortCode='+item.F_SortCode
					+'&Parameter='+item.Parameter+'&Type='+item.Type+'&F_Description='+item.F_Description+'&ID='+item.ID
					+'&Specifications='+item.Specifications+'&Specifications1='+item.Specifications1+'&Specifications2='+item.Specifications2+'&Specifications3='+item.Specifications3+'&Specifications4='+item.Specifications4
					+'&Number='+item.Number+'&Number1='+item.Number1+'&Number2='+item.Number2+'&Number3='+item.Number3+'&Number4='+item.Number4"
			 navigateTo @tap="rolsySave(item.Specifications5)">
				<view class="rolsy-gift-img">
					<image :src="item.Img" class="response rolsy-gift-img" style="height: 247rpx;"></image>
				</view>
				<view class="bg-white padding rolsy-gift-content">
					<view class="nav-title">{{item.Name}}</view>
					<view class="nav-name text-rolsy">{{item.Integral}}积分<span class="rolsy-delete">￥{{item.Price}}</span></view>
				</view>
			</navigator>
		</view>
	</view>

</template>

<script>
	export default {
		name: "basics",
		data() {
			return {
				two: Object,
				three: Object,
				rows: Object,
				F_Description: Object,
				dotStyle: false,
				towerStart: 0,
				direction: '',
				swiperListData: [],
				swiperHeight: 0,
				avatarUrl: uni.getStorageSync('avatarUrl'),
				nickName: uni.getStorageSync('nickName'),
				openid: uni.getStorageSync('openid'),
				opId: ''
			};
		},
		onShow() {
			this.update()
		},
		onLoad(option) {
			let that = this;
			wx.login({
				success: (res) => {
					if (res.code) { //微信登录成功 已拿到code  
						this.jsCode = res.code //保存获取到的code  
						uni.request({
							url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetCode',
							data: {
								json_code: res.code
							},
							header: {
								'content-type': 'application/x-www-form-urlencoded'
							},
							method: 'GET',
							dataType: 'json',
							success: (res) => {
								console.log('json_code', res)
								const json_code = JSON.parse(res.data.data)
								console.log(json_code.openid)
								uni.setStorage({
									key: "openid",
									data: json_code.openid
								});

							}
						});
					} else {
						console.log('登录失败！' + res.errMsg)
					}
				}
			})

			that.opId = option.id
			// this.getUserData()
		},
		onReady() {
			let that = this;
			if (that.opId) {
				console.log('积分兑换跳转过来的===============', that.opId)
				this.toHomePage()
			}
		},
		methods: {
			//转到通知列表 Rolsy
			NoticeListPage() {
				uni.navigateTo({
					url: '/pages/basics/noticelist'
				});
			},
			//转到今日菜谱 Rolsy
			MenuPage() {
				uni.navigateTo({
					url: '/pages/basics/menu'
				});
			},
			//转到菜品点评 Rolsy
			RatedPage() {
				uni.navigateTo({
					url: '/pages/basics/rated'
				});
			},
			//转到新菜投票 Rolsy
			NewFoodPage() {
				uni.navigateTo({
					url: '/pages/basics/newfood'
				});
			},
			//转到更多商品5000 Rolsy
			MorePage1() {
				uni.navigateTo({
					url: '/pages/basics/more?id=1'
				});
			},
			//转到更多商品5000-10000 Rolsy
			MorePage2() {
				uni.navigateTo({
					url: '/pages/basics/more?id=2'
				});
			},
			//转到更多商品10000 Rolsy
			MorePage3() {
				uni.navigateTo({
					url: '/pages/basics/more?id=3'
				});
			},
			update() {
				//获取banner
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetActivityList',
					data: {},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						const that = this
						that.swiperListData = res.data.data.rows
						console.log(that.swiperListData)
					}
				});
				//获取积分商品 传level=1 5000积分以下
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetPointsMallFour',
					data: {
						level: 1
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						const that = this
						if (res.data.data.rows) {
							that.rows = res.data.data.rows;
						}

					}
				});
				//获取积分商品 传level=2 5000-10000积分
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetPointsMallFour',
					data: {
						level: 2
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						const that = this
						if (res.data.data.rows) {
							that.two = res.data.data.rows;
							console.log(that.two)
						}

					}
				});
				//获取积分商品 传level=3 10000积分以上
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetPointsMallFour',
					data: {
						level: 3
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						const that = this
						if (res.data.data.rows) {
							that.three = res.data.data.rows;
						}

					}
				});
				//通知
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetNIoticeList',
					data: {

					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						if (res.data.data.rows) {
							this.F_Description = res.data.data.rows[0].F_Description;
						}
					}
				});

			},
			bannerRouter(item) {
				// 这里要改，传值 rolsy
				uni.setStorage({
					key: "Img",
					data: item.Img,
				});
				uni.setStorage({
					key: "Ingredients",
					data: item.Ingredients
				});
				uni.navigateTo({
					url: '/pages/basics/promotion'
				});
			},
			rolsySave(data) {
				uni.setStorage({
					key: "Specifications5",
					data: data
				});
			},
			toHomePage() {
				setTimeout(function() {
					uni.pageScrollTo({
						duration: 0,
						scrollTop: 480
						// selector: '#HomePage'
					});
				}, 500)
			},
			// getUserData() {
			// 	uni.getSetting({
			// 		success(res) {
			// 			console.log('res',res)
			// 			if(res.authSetting['scope.userInfo']){
			// 				uni.getUserInfo({
			// 					success(res) {
			// 						console.log(res)
									// uni.setStorageSync('avatarUrl',res.userInfo.avatarUrl)
									// uni.setStorageSync('nickName',res.userInfo.nickName)
			// 					},
			// 					fail(){
			// 						console.log('失败')
			// 					}
			// 				})
			// 			}
			// 		}
			// 	})
			// }
		}
	}
</script>

<style>
	.padding-rolsy_sm {
		padding: 15rpx;
	}

	.nav-li {
		margin-top: -35upx;
	}

	/deep/.bg-white {
		background-color: #FFFFFF;
	}

	.rolsy-fontsize-075 {
		width: 100%;
	}

	.nav-title {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		min-height: 2.8rem;
	}

	/* .swiper-item image {
		height: 100%;
	} */

	.action {
		height: 78rpx;
		padding: 25rpx;

	}

	.page {
		height: 100vh;
	}

	.text-rolsy {
		color: #FFCE42;
	}

	.rolsy-3text {
		font-size: 1rem;
		text-align: center;
		/* margin-top: 1rem; */
	}

	.rolsy-ml {
		margin-left: 10rem;
	}

	.rolsy-ml2 {
		margin-left: 9rem;
	}

	.rolsy-ml3 {
		margin-left: 9.5rem;
	}

	.rolsy-colorg {
		color: #C8C8C8;
	}

	.rolsy-fontsize-075 {
		font-size: .75rem;
		margin-left: 15rpx;
		margin-bottom: 40upx;
	}

	.rolsy-font-bg::before {
		content: "";
		position: absolute;
		display: block;
		width: 100rpx;
		height: 8px;
		background: #FFCE42;
		opacity: 0.8;
		top: 50rpx;
		z-index: -999;
	}

	.rolsy-font-bg2::before {
		content: "";
		position: absolute;
		display: block;
		width: 100rpx;
		height: 8px;
		background: #FFCE42;
		opacity: 0.8;
		top: 50rpx;
		z-index: -999;
	}

	.rolsy-font-bg3::before {
		content: "";
		position: absolute;
		display: block;
		width: 115rpx;
		height: 8px;
		background: #FFCE42;
		opacity: 0.8;
		top: 50rpx;
		z-index: -999;
	}

	.rolsy-delete {
		text-decoration: line-through;
		color: #C8C8C8;
		margin-left: 1rem;
	}

	.rolsy-gift-img {
		border-top-left-radius: 15upx;
		border-top-right-radius: 15upx;
	}

	.rolsy-gift-content {
		margin-top: -5upx;
		border-bottom-left-radius: 15upx;
		border-bottom-right-radius: 15upx;
	}
</style>

<template name="user">
	<view id="user">
		<view class="rolsy-bg">
			<cu-custom bgColor="bg-white" :isBack2="true">
				<block slot="content">个人中心</block>
			</cu-custom>
			<view class="margin-left-sm cf">
				<image class="cu-avatar xl round margin-left rolsy-border fr" :src="avatarUrl"></image>
				<view class="text-bold text-lg margin-left" style="font-size: 50rpx;">{{nickName}} </view>
				<view class="margin-left text-white margin-top-xs">积分&nbsp;{{ rolsyF_SortCode }}</view>
				<view class="margin-left margin-top-xs text-wbhite rolsy-border2" @tap="HomePage" style="color: #fff;"><i class="iconfont margin-right-xs">&#xe662;</i>兑换好礼</view>
			</view>
			<view class="cf margin-top-xl text-white" @tap="AddressPage">
				<text class="xl fr padding-sm rolsy-bg-color"><text class="cuIcon-location lg"></text>收货地址设置</text>
			</view>
			<view class="padding margin-top-sm text-center" style="padding: 0;margin-top: 60rpx;">
				<text class="rolsy-ba text-lg">兑换记录</text>
			</view>
			<view style="padding-bottom: 2rem;">
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-for="(item,index) in menu" :key="index"
				 style="margin-bottom: 50rpx;box-shadow: 0 0 30rpx #ccc;">
					<view class="cu-item">
						<view class="content cf margin-top">
							<view class="already-image" v-if="item.F_EnabledMark == 2">
								<image src="../../static/user/already.png" style="height: 120rpx"></image>
							</view>
							<view class="rolsy-gift-img rolsy-dis margin-top-xs margin-right-xs">
								<image :src="item.F_Description" mode="widthFix" class="response rolsy-min-img rolsy-gift-radius"></image>
							</view>
							<view class="rolsy-gift-right2 fr rolsy-dis">X{{item.Number}}</view>
							<view class="rolsy-gift-right fr rolsy-dis">
								<view class="nav-name text-rolsy"><span>{{item.F_ModifyUserName}}</span>积分<span class="rolsy-delete">￥{{item.F_ModifyUserName}}</span></view>
								<view class="text-bold text-lg rolsy-text-wrap">{{item.F_CreateUserId}}</view>
								<view class="cu-capsule bg-rolsy">{{item.Specifications}}</view>
							</view>
							<view class="cf margin-left-sm padding">
								<text>配送方式</text>
								<text class="fr" v-if="item.Type=='1'">送货上门</text>
								<text class="fr" v-if="item.Type=='2'">到店自提</text>
								<text class="fr" v-if="item.Type=='3'">快递包邮</text>
								<text class="fr" v-if="item.Type=='4'">快递到付</text>
							</view>
							<view class="cf margin-left-sm padding" v-if="item.Type=='3'">
								<view class="rolsy-dis">配送地址</view>
								<view class="fr rolsy-dis">
									<text>{{item.Name}}</text>
									<text class="margin-left">{{item.Phone}}</text>
									<br>
									<text class="">{{item.Address}}</text>
								</view>
							</view>
							<view class="cf margin-left-sm padding" v-if="item.Type=='4'">
								<view class="rolsy-dis">配送地址</view>
								<view class="fr rolsy-dis">
									<text>{{item.Name}}</text>
									<text class="margin-left">{{item.Phone}}</text>
									<br>
									<text class="">{{item.Address}}</text>
								</view>
							</view>
							<view class="fl padding">
								<text class="rolsy-text-gr">{{item.F_CreateDate}}</text>
							</view>
							<view class="fr padding">
								<text>消耗 <text class="text-rolsy text-lg">{{item.Integral}}</text>积分</text>
							</view>
						</view>
					</view>
				</view>
			</view>


			<!-- <button open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">唤起授权</button> -->
			<!-- 模态框 -->
			<view class="cu-modal" :class="modalName=='Image'?'show':''">
				<view class="cu-dialog" style="margin-top: 25% !important">
					<view class="rolsy-bg-saoma" style="background-image: url('https://7961-yangguang-089kj-1303115238.tcb.qcloud.la/sama1.png?sign=5dba4c0364a0ac8a7ed9fd1a3b2ec17e&t=1599731302');heightheight: 68%;">

						<view class="rolsy-saoma-img rolsy-dis margin-right-xs">
							<image src="https://7961-yangguang-089kj-1303115238.tcb.qcloud.la/test.png?sign=7f517d34a6f17be8f3ecf13b58fabd3b&t=1599635543"
							 class="response" style="margin-top: 83rpx;height: 336rpx;"></image>
						</view>
						<view>
							<text>长按识别二维码</text>
						</view>
						<view class="text-white text-bold">
							<view class="action" @tap="hideModal" style="margin-top: 55rpx;">
								<text class="cuIcon-close rolsy-x"></text>
							</view>
						</view>
					</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "user",
		data() {
			return {
				F_EnabledMark: '',
				image: '',
				title: Object,
				yonghuwx: [],
				modalName: null,
				menu: [],
				avatarUrl: '',
				nickName: '',
				openid: '',
				rolsyF_SortCode: '',
				avatarUrl: uni.getStorageSync('avatarUrl'),
				nickName: uni.getStorageSync('nickName')
			};
		},
		onLoad() {
			console.log('记录===============', this.menu)
			const that = this
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
								})
								//查询用户数据
								uni.request({
									url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetUserList',
									data: {
										OpenId: json_code.openid
									},
									header: {
										'content-type': 'application/x-www-form-urlencoded'
									},
									method: 'POST',
									dataType: 'json',
									success: (res) => {
										const resData = res.data[0].F_SortCode
										that.rolsyF_SortCode = resData.toString()
									}
								});
							}
						});
					} else {
						console.log('登录失败！' + res.errMsg)
					}
				}
			});
			let parem = {
				avatarUrl: uni.getStorageSync('avatarUrl'),
				nickName: uni.getStorageSync('nickName'),
				openid: uni.getStorageSync('openid'),
			};
			uni.request({
				url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/SetUserList',
				data: {
					data: JSON.stringify(parem)
				},
				method: 'POST',
				dataType: 'json',
				success: function(res) {
					console.log(res);
				}
			});
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
					const resData = res.data[0].F_SortCode
					that.rolsyF_SortCode = resData.toString()
				}
			});

			//查询订单数据
			uni.request({
				url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetOrderList',
				data: {
					OpenId: uni.getStorageSync('openid')
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				method: 'POST',
				dataType: 'json',
				success: (res) => {
					that.menu = res.data
					that.F_EnabledMark = res.data[2].F_EnabledMark
					console.log('查询订单数据====================', that.menu)
				}
			});

		},
		methods: {
			//转到通知详情 Rolsy
			NoticePage() {
				uni.navigateTo({
					url: '/pages/basics/notice'
				});
			},
			//转到首页 Rolsy
			HomePage() {
				uni.navigateTo({
					url: '/pages/basics/home?id=HomePage'
				});
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			AddressPage() {
				uni.navigateTo({
					url: '/pages/basics/address'
				});
			}
		},
	}
</script>

<style>
	.rolsy-bg {
		height: 90vh;
		overflow-y: hidden;
	}

	.already-image {
		width: 17%;
		position: absolute;
		right: -10rpx;
		top: -18rpx;
	}

	/* 
	.bg-white {
		background-color: #ffce42;
	
	} */

	.cu-modal {
		text-align: center;
	}

	.page {
		height: 92vh;
	}

	.rolsy-bg {
		background-image: url('https://7961-yangguang-089kj-1303115238.tcb.qcloud.la/top.png?sign=23cc502140fc4f91ddddea0dd4a8fd15&t=1599635567');
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
		width: 30%;
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
		border-radius: 20rpx;
		border: 3px solid #FFCE42;
		left: 280rpx;
		margin-top: 15rpx;
	}

	.rolsy-ba::after {
		content: "";
		position: absolute;
		background: #FFCE42;
		color: #FFCE42;
		border-radius: 20upx;
		border: 3px solid #FFCE42;
		left: 460upx;
		margin-top: 15rpx;
	}

	.rolsy-ba {
		text-align: center;
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
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		min-height: 2.8rem;
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
		max-height: 250upx;
	}

	.cu-dialog {
		background-color: transparent;
		/* width: 500rpx; */
		/* height: 100%; */
		height: 100%;
		margin-top: 50%;

	}

	.rolsy-saoma-img {
		width: 50%;
		margin-top: 65%;
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

	.rolsy-text-gr {
		color: #a3a3a3;
	}

	.rolsy-gift-radius {
		border-radius: 10upx;
	}
</style>

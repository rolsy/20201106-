<template name="address">
	<view id="address">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content">收货地址</block>
		</cu-custom>
		<scroll-view scroll-y class="page">
			<radio-group @change="RadioChange">
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-for="(item,index) in address" :key="index">
					<view class="cu-item" style="width: 690rpx;padding: 37rpx;">
						<view class="content cf">
							<view class="">
								<text>{{item.Name}}</text>
								<text class="margin-left">{{item.Tel}}</text>
							</view>
							<view class="text-gray">{{item.Address}}</view>
							<view class="text-gray cf">
								<view class="fl">
									<view>
										<radio class='rolsy-radio' :class="item.isDefault=='1'?'checked':''" :checked="item.isDefault=='1'?true:false"
										 :value="index"></radio>
										<span>设为默认</span>
									</view>
								</view>
								<view class="fr rolsy-mt">
									<text @click="showModal(index)"><text class="cuIcon-delete margin-left-sm"></text>删除</text>


								</view>
							</view>
						</view>
					</view>
				</view>
			</radio-group>

			<view class="padding flex flex-direction">
				<button class="cu-btn bg-rolsy-color1 lg" @tap="NewAddress" data-target="Image"> +新增收货地址 </button>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "address",
		data() {
			return {
				address: [],
				index: Number
			};
		},
		onShow() {
			const that = this
			that.getAddress()
		},
		methods: {
			RadioChange(e) {
				const that = this
				//e.detail.value是address的数据index；点哪个把哪个的isDefault变为1，其他变为0；然后把改变传给后台
				this.address.forEach(function(item, index) {
					item.isDefault = 0;
					if (e.detail.value == index) {
						item.isDefault = 1;
						that.index = index
					}
				});
				let parem = {
					OpenId: uni.getStorageSync('openid'),
					ID: that.address[that.index].ID
				};
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/UpdateDefault',
					data: {
						data: JSON.stringify(parem)
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						that.getAddress()
					}
				});
			},
			getAddress() {
				const that = this
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetAddressList',
					data: {
						OpenId: uni.getStorageSync('openid')
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						console.log('查询用户数据', res)
						that.address = res.data
					}
				});
			},
			NewAddress() {
				uni.navigateTo({
					url: '/pages/basics/newaddress'
				});
			},
			compile() {
				uni.navigateTo({
					url: '/pages/basics/addressCompile'
				});
			},
			showModal(index) {
				const that = this
				uni.showModal({
					title: '提示',
					content: '是否确认删除？',
					cancelColor: '#CCCCCC',
					confirmColor: '#FED65D',
					success: function(res) {
						if (res.confirm) {
							uni.request({
								url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/DeleteAddress',
								data: {
									ID: that.address[index].ID
								},
								header: {
									'content-type': 'application/x-www-form-urlencoded'
								},
								method: 'POST',
								dataType: 'json',
								success: (res) => {
									that.getAddress()
								}
							});
						} else if (res.cancel) {
							console.log('用户点击取消');

						}
					}
				});
			},
		},
	}
</script>

<style>
	.page {
		height: 92vh;
	}

	.rolsy-radio {
		transform: scale(0.6);
	}

	.rolsy-radio[checked] .wx-radio-input {
		background-color: #FFCE43 !important;
		border-color: #FFCE43 !important;
		color: #ffffff !important;
	}

	.rolsy-mt {
		margin-top: 5rpx;
	}

	.bg-rolsy-color1 {
		background-color: #FED65D;
	}
</style>

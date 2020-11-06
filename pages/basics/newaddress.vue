<template name="newaddress">
	<view id="newaddress">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content">收货地址</block>
		</cu-custom>
		<scroll-view scroll-y class="page">
			<view class="cu-form-group">
				<view class="title">收件人</view>
				<input placeholder="请填写收件人姓名" @input="getName"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input placeholder="请填写收件人的手机号码" @input="getTel"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">所在地区</view>
				<picker mode="region" @change="RegionChange" :value="region" class="rolsy-mr">
					<view class="picker">
						{{region[0]}}，{{region[1]}}，{{region[2]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">详细地址</view>
				<input placeholder="街道、楼牌号等" name="input" @input="getAddress"></input>
			</view>
			<view class="padding">
				<radio-group>
					<label @click="choose">
						<radio class='rolsy-radio' :class="isDefault=='1'?'checked':''" :checked="isDefault"></radio>
					</label>
				</radio-group>

				<span>设置为默认地址</span>
			</view>
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-rolsy-color1 lg" @tap="NewAddress" data-target="Image"> 保存 </button>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "newaddress",
		data() {
			return {
				isDefault: false,
				region: ['山东省', '烟台市', '福山区'],
				Name: '',
				Tel: '',
				Address: ''
			};
		},
		onShow() {
			console.log("通知详情页")
		},
		methods: {
			choose() {
				this.isDefault = !this.isDefault
			},
			refreshData() {
				const that = this
				// that.update()
				setTimeout(() => {
					this.$refs.hrPullLoad.reSet();
				}, 300);
			},
			getName(event) {
				this.Name = event.target.value
			},
			getTel(event) {
				this.Tel = event.target.value
			},
			getAddress(event) {
				this.Address = event.target.value
			},
			RadioChange(e) {
				//e.detail.value是address的数据index；点哪个把哪个的isDefault变为1，其他变为0；然后把改变传给后台
				this.address.forEach(function(item, index) {
					item.isDefault = 0;
					if (e.detail.value == index) {
						item.isDefault = 1;
					}
				});
			},

			NewAddress() {
				const that = this
				let resAddress = ''
				that.region.forEach((item, idx) => {
					resAddress += item
				})
				let NewAddressRes = resAddress + that.Address
				console.log(NewAddressRes)
				console.log(that.Address)
				let parem = {
					OpenId: uni.getStorageSync('openid'),
					Name: that.Name,
					Tel: that.Tel,
					isDefault: that.isDefault = false ? '0' : '1',
					Address: NewAddressRes
				};
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/SetAddressList',
					data: {
						data: JSON.stringify(parem)
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						const that = this
						console.log('===============', res)
						//先上传表单数据，然后跳转到下面这个页面
						uni.navigateTo({
							url: '/pages/basics/address'
						});
					}
				});
			},
			RegionChange(e) {
				this.region = e.detail.value
				console.log(this.region)
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

	.rolsy-mr {
		margin-right: 230rpx;
	}
</style>

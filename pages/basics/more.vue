<template name="more">
	<view id="more">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content"><span v-if="id==1">5000积分以下</span><span v-if="id==2">5000-10000积分</span><span v-if="id==3">10000积分以上</span></block>
		</cu-custom>
		<scroll-view scroll-y class="page">
			<view class="nav-list">
				<navigator hover-class="none" class="nav-li" v-for="(item,index) in rows" :key="index" :url="'/pages/basics/details?Img=' 
					+ item.Img+'&Integral='+item.Integral+'&Price='+item.Price+'&Name='+item.Name+'&Stock='+item.Stock+'&F_SortCode='+item.F_SortCode
					+'&Parameter='+item.Parameter+'&Type='+item.Type+'&F_Description='+item.F_Description+'&ID='+item.ID
					+'&Specifications='+item.Specifications+'&Specifications1='+item.Specifications1+'&Specifications2='+item.Specifications2+'&Specifications3='+item.Specifications3+'&Specifications4='+item.Specifications4
					+'&Number='+item.Number+'&Number1='+item.Number1+'&Number2='+item.Number2+'&Number3='+item.Number3+'&Number4='+item.Number4"
				 navigateTo>
					<view class="rolsy-gift-img">
						<image :src="item.Img" class="response rolsy-gift-img" style="height: 247rpx;"></image>
					</view>
					<view class="bg-white padding rolsy-gift-content" style="box-shadow: 0 0 50px #eee;">
						<view class="nav-title" :url="'/pages/basics/details?jifen={{item.jifen}}'" style="height: 83rpx;">{{item.Name}}</view>
						<view class="nav-name text-rolsy">{{item.Integral}}积分<span class="rolsy-delete">￥{{item.Price}}</span></view>
					</view>
				</navigator>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "more",
		data() {
			return {
				id: Number,
				title: Object,
				rows: Object
			};
		},
		onShow() {
			console.log("更多商品页")
		},

		onLoad(option) {
			/* option 是home页面传的参数：1--500;2--5000-10000;3--10000 */
			this.id = option.id;
			uni.request({
				url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetPointsMalllevel',
				data: {
					level: option.id,
					OpenId: uni.getStorageSync('openid')
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
						console.log('更多====================', that.rows)
					}

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
		},
	}
</script>

<style>
	.nav-title {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;

	}

	.page {
		height: 92vh;
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

	.rolsy-delete {
		text-decoration: line-through;
		color: #C8C8C8;
		margin-left: 1rem;
	}

	.text-rolsy {
		color: #FFCE42;
	}
</style>

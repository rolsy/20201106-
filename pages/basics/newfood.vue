<template name="newfood">
	<view id="newfood">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content">新菜投票</block>
		</cu-custom>
		<scroll-view scroll-y class="page">
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-for="(item,index) in newRows" :key="index">
				<view class="cu-item">
					<view class="content">
						<view class="rolsy-position">
							<text class="text-bold rolsy-font-bg"><text class="rolsy-z">TOP{{index+1}}</text></text>
						</view>
						<view>
							<image :src="item.Img" class="response margin-top margin-right"></image>
						</view>
						<view class="content padding cf">
							<view class="" style="width: 263rpx;">
								<text class="text-black"></text>
								<i class="iconfont rolsy-color1">&#xe600;</i><span class="margin-left-sm text-bold">{{item.Name}}</span>
							</view>
							<view class="margin-left-rolsy" style="float: right;margin-top: 10rpx;">
								<text class="rolsy-text-color">
									{{item.Number==null?'0':item.Number}}人想吃
								</text>
							</view>
						</view>
						<view class="padding text-cut text-content rolsy-text-color" style="width: 713rpx;">
							烹饪食材：{{item.Ingredients}}
						</view>
						<view>
							<text class="padding text-cut text-content rolsy-text-color">
								烹饪方式：{{item.Type}}
							</text>
						</view>
						<view class="padding flex flex-direction">
							<button class="cu-btn bg-rolsy-color1 lg" data-target="Image" :disabled="item.status" @click="wantEat(index)">想吃</button>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "newfood",
		data() {
			return {
				F_Description: '',
				rows: Object,
				Number: '',
				newfood: [{
					Name: '油焖大虾',
					Number: 233,
					Img: '/static/homebg.png',
					Ingredients: '葱、姜、蒜、嫩洋葱、青椒、澳洲小龙虾',
					Type: '过油、焖煮',
					rateded: false
				}, {
					Name: '油焖大虾',
					Number: 233,
					Img: '/static/homebg.png',
					Ingredients: '葱、姜、蒜、嫩洋葱、青椒、澳洲小龙虾',
					Type: '过油、焖煮',
					rateded: true
				}, {
					Name: '油焖大虾',
					Number: 233,
					Img: '/static/homebg.png',
					Ingredients: '葱、姜、蒜、嫩洋葱、青椒、澳洲小龙虾',
					Type: '过油、焖煮',
					rateded: false
				}],
				want: true,
				newRows: [],
			};
		},
		onLoad() {
			uni.request({
				url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetVoteList',
				data: {
					OpenId: uni.getStorageSync('openid')
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				method: 'POST',
				dataType: 'json',
				success: (res) => {
					console.log('新菜投票页=================', res.data.data);
					this.rows = res.data.data.rows;

					this.rows.forEach(item => {
						if (item.F_EnabledMark == 1) {
							this.newRows.push({
								Img: item.Img,
								Name: item.Name,
								Number: item.Number,
								Ingredients: item.Ingredients,
								Type: item.Type,
								status: true,
							})
						} else if (item.F_EnabledMark == 0) {
							this.newRows.push({
								Img: item.Img,
								Name: item.Name,
								Number: item.Number,
								Ingredients: item.Ingredients,
								Type: item.Type,
								status: false,
							})
						}

					}, )
					// 重新返回
					console.log(this.newRows);
				}
			});

		},
		onShow() {
			console.log("新菜投票页")
		},
		methods: {
			refreshData() {
				const that = this
				// that.update()
				setTimeout(() => {
					this.$refs.hrPullLoad.reSet();
				}, 300);
			},
			//转到 Rolsy
			PromotionPage() {
				uni.navigateTo({
					url: '/pages/basics/'
				});
			},
			wantEat(index) {
				const that = this
				that.want = false

				let parem = {
					F_ModifyUserId: uni.getStorageSync('openid'),
					ID: that.rows[index].ID,
				};
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/SetVoteList',
					data: {
						data: JSON.stringify(parem),
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						that.rows = res.data;
						console.log('res==================================', res.data)
						console.log(this.newRows)
						for (var i = 0; i < that.newRows.length; i++) {
							if (index == i) {
								that.newRows[i].status = true
								that.newRows[i].Number = that.rows[i].Number
								uni.setStorage({
									key: 'newRows_status',
									data: this.newRows
								})
								if (that.rows[i].F_Description != '') {
									uni.showModal({
										title: '提示',
										content: '您已经投过票',
										success: function(res) {
											if (res.confirm) {
												console.log('用户点击确定');
											} else if (res.cancel) {
												console.log('用户点击取消');
											}
										}
									});

								}
								break
							}
						}
						// console.log('cli', that.newRows[i].Number);
					}
				});
			},
			// onLoad() {
			// 	if (uni.getStorage('newRows_status')) {
			// 		this.newRows = uni.getStorage('newRows_status');
			// 	}
			// 	// this.newRows = uni.getExtConfigSync();
			// },
		}
	}
</script>

<style>
	.page {
		height: 92vh;
	}

	.cf view {
		display: inline-block !important;
	}

	.response {
		width: 691rpx;
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
		font-size: 1.6rem;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
		font-weight: 100;
		display: inline-block !important;
	}

	.rolsy-color1 {
		color: #FED65D;
	}

	.margin-left-rolsy {
		margin-left: 280rpx;
		font-size: 0.8rem;
	}

	.rolsy-text-color {
		color: #606266;
	}

	.rolsy-font-bg::before {
		content: "";
		position: absolute;
		display: block;
		width: 175rpx;
		height: 30px;
		background: #4F4F4F;
		opacity: 0.7;
		top: -5rpx;
		left: -25rpx;
		z-index: -999;

	}

	.rolsy-position {
		position: relative;
		top: 120rpx;
		left: 15rpx;
		z-index: 999;
		color: #fff;
		font-size: 1.5rem;
	}

	.rolsy-z {
		z-index: 1000;
	}

	.rolsy-fonts {
		font-size: 1.2rem;
	}

	.cu-list.card-menu {
		margin-right: 0rpx !important;
		margin-left: 0rpx !important;
	}

	.bg-rolsy-color1 {
		background-color: #FED65D;
	}
</style>

<template name="details">
	<view id="details">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content">商品详情</block>
		</cu-custom>
		<scroll-view scroll-y class="page">
			<view>
				<image :src="rolsyImg" mode="widthFix" class="response"></image>
			</view>

			<view class="js">
				<view class="jifen">{{rolsyIntegral}}积分<span class="yuanjia">￥{{rolsyPrice}}</span></view>
				<view class="title">{{rolsyName}}</view>
				<view>库存:{{rolsyStock}}<span style="margin-left: 270rpx;">销量:{{rolsyF_SortCode}}</span></view>
			</view>
			<view class="type">配送方式 <span style="margin-left: 18px;"> {{rolsyType}}
				</span></view>
			<view class="cu-form-group text-black" style="padding: 1rpx 40rpx;">
				<!-- <picker> -->
				<view class="title">规格</view>
				<view @click="selectSku" style="margin-left: -295rpx;">
					选择商品规格
				</view>
				<echone-sku :show="popupShow" mode="forbidden" :theme-color="themeColor" :combinations="combinations"
				 :specifications="specifications" :default-select-index="selectedIndex" :combinations-props="combinationsProps"
				 :specifications-props="specificationsProps" @close="handleClose" @confirm="handleConfirm"></echone-sku>
			</view>
			<view class="type">
				<view style="width: 10%;">参数 </view>
				<view><span class="ty-title" style="display: flow-root;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">
						{{rolsyParameter}} </span></view>
			</view>
			<view class="type" id="beizhu">
				<view style="width: 10%;">备注 </view>
				<view><span class="ty-title" style="display: flow-root;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">
						{{rolsyParameter}} </span></view>
			</view>
			<view class="spjs">
				<view class="spjs-font">商品介绍</view>
				<view class="spjs-en">PRODUCTS INTRODUCTION</view>
				<view>
					<rich-text :nodes="rolsySpecifications5"></rich-text>
				</view>
			</view>

			<view class="sku-page">
				<button class="sku-btn" :style="{backgroundColor:themeColor}" @tap="selectSku">点击兑换</button>
				<echone-sku :show="popupShow" mode="forbidden" :theme-color="themeColor" :combinations="combinations"
				 :specifications="specifications" :default-select-index="selectedIndex" :combinations-props="combinationsProps"
				 :specifications-props="specificationsProps" @close="handleClose" @confirm="handleConfirm" @count='count'></echone-sku>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	import echoneSku from '@/components/echone-sku/echone-sku'
	export default {
		components: {
			echoneSku
		},
		data() {
			return {
				index: 0,
				detailsTypeArray: ['一盒三种口味', '一盒一种口味', ],
				detailsTypeIndex: 0,
				detailsTypeArrayType: '选择商品规格',
				themeColor: '#FFCE42',
				popupShow: false,
				combinationsProps: {
					id: 'skuId',
					value: 'skuValue',
					image: 'skuImage',
					price: 'skuPrice',
				},
				specificationsProps: {
					id: 'id',
					list: 'skuList',
					name: 'skuName'
				},
				combinations: [{
						skuId: '1',
						skuValue: '一盒三种口味',
						skuImage: 'https://7961-yangguang-089kj-1303115238.tcb.qcloud.la/gift.png?sign=ad3b81362817bc092aee25a913c3df54&t=1599635244',
						skuPrice: 1000,

					}, {
						skuId: '2',
						skuValue: '一盒一种口味',
						skuImage: 'https://7961-yangguang-089kj-1303115238.tcb.qcloud.la/gift.png?sign=ad3b81362817bc092aee25a913c3df54&t=1599635244',
						skuPrice: 2000,

					}

				],
				specifications: [{
						skuName: '选择规格',
						id: '123',
						skuList: ['一盒三种口味', '一盒一种口味'],
					},

				],
				selectedIndex: 0,
				//前一页面传值
				rolsyImg: '', //图片
				rolsyIntegral: '', //积分
				rolsyPrice: '', //价格
				rolsyName: '', //名称
				rolsyStock: '', //库存
				rolsyF_SortCode: '', //已售
				// rolsyDistribution: '', //配送方式（TODO后台没返回）
				rolsyType: '', //配送方式
				rolsyParameter: '', //参数
				rolsyF_Description: '', //备注
				rolsySpecifications5: '', //商品图文
				Specifications: '', //规格
				Specifications1: '',
				Specifications2: '',
				Specifications3: '',
				Specifications4: '',
				ID: '', //商品ID
				count1: '',
				rolsySKU: '' // SKU

			}
		},
		onLoad(option) {
			console.log('option=================', option)
			const that = this
			that.ID = option.ID
			that.rolsyImg = option.Img
			that.rolsyIntegral = option.Integral
			that.rolsyPrice = option.Price
			that.rolsyName = option.Name
			that.rolsyStock = option.Stock
			that.rolsyF_SortCode = option.F_SortCode == "null" ? '0' : option.F_SortCode
			that.rolsyParameter = option.Parameter
			that.rolsyF_Description = option.F_Description
			that.rolsyType = option.Type

			if (that.rolsyType == '1') {
				that.rolsyType = '送货上门'
			} else if (that.rolsyType == '2') {
				that.rolsyType = '到店自提'
			} else if (that.rolsyType == '3') {
				that.rolsyType = '快递包邮'
			} else if (that.rolsyType == '4') {
				that.rolsyType = '快递到付'
			}
			uni.getStorage({
				key: "Specifications5",
				success(e) {
					let reg = new RegExp('src=&quot;', 'g')
					let newData = (e.data).replace(reg, 'src=&quot;https://www.sunnyhotel.net:8089')
					//富文本改变图片大小
					that.rolsySpecifications5 = that.escape2Html(newData).replace(/<img /g, '<img class="rich_img" ');
					console.log('e', that.rolsySpecifications5)
					console.log(newData)
				}
			});
			that.Specifications = option.Specifications
			that.Specifications1 = option.Specifications1
			that.Specifications2 = option.Specifications2
			that.Specifications3 = option.Specifications3
			that.Specifications4 = option.Specifications4

			if (that.Specifications !== 'null') {
				//清空静态数据
				that.detailsTypeArray = []
				that.combinations = []
				that.specifications[0].skuList = []
				that.combinations.push({
					skuId: '1',
					skuValue: that.Specifications,
					skuImage: that.rolsyImg,
					skuPrice: that.rolsyIntegral,
				})
				that.detailsTypeArray.push(that.Specifications)
				that.specifications[0].skuList.push(that.Specifications)
			}
			if (that.Specifications1 !== 'null') {
				that.combinations.push({
					skuId: '2',
					skuValue: that.Specifications1,
					skuImage: that.rolsyImg,
					skuPrice: that.rolsyIntegral,
				})
				that.detailsTypeArray.push(that.Specifications1)
				that.specifications[0].skuList.push(that.Specifications1)
			}
			if (that.Specifications2 !== 'null') {
				that.combinations.push({
					skuId: '3',
					skuValue: that.Specifications2,
					skuImage: that.rolsyImg,
					skuPrice: that.rolsyIntegral,
				})
				that.detailsTypeArray.push(that.Specifications2)
				that.specifications[0].skuList.push(that.Specifications2)
			}
			if (that.Specifications3 !== 'null') {
				that.combinations.push({
					skuId: '4',
					skuValue: that.Specifications3,
					skuImage: that.rolsyImg,
					skuPrice: that.rolsyIntegral,
				})
				that.detailsTypeArray.push(that.Specifications3)
				that.specifications[0].skuList.push(that.Specifications3)
			}
			if (that.Specifications4 !== 'null') {
				that.combinations.push({
					skuId: '5',
					skuValue: that.Specifications4,
					skuImage: that.rolsyImg,
					skuPrice: that.rolsyIntegral,
				})
				that.detailsTypeArray.push(that.Specifications4)
				that.specifications[0].skuList.push(that.Specifications4)
			}
			console.log(that.combinations)

		},
		onShow() {},
		methods: {
			count(e) {
				console.log('e', e)
				this.count1 = e
			},
			refreshData() {
				const that = this
				// that.update()
				setTimeout(() => {
					this.$refs.hrPullLoad.reSet();
				}, 300);
			},
			detailsType(e) {
				this.detailsTypeIndex = e.target.value;
				this.detailsTypeArrayType = this.detailsTypeArray[this.detailsTypeIndex]
			},

			selectSku(obj) {
				console.log(obj)
				this.popupShow = true
			},
			handleClose() {
				this.popupShow = false
			},
			handleConfirm(obj) {
				const that = this
				that.rolsySKU = obj.skuValue
				that.count = obj.count
				let parem = {
					F_ModifyUserId: uni.getStorageSync('openid'),
					OrderID: that.ID,
					Number: that.count,
				};
				this.popupShow = false
				//TODO这里需要给方工传{Count:兑换数量，ID:商品ID，skuValue：规格，OpenId：用户Id}
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/SetOrder',
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
						if (res.data.Message == '兑换成功') {
							that.rolsyStock = res.data.Stock
							that.rolsyF_SortCode = res.data.F_SortCode
							uni.navigateTo({
								url: '/pages/basics/conversion?rolsyImg=' + that.rolsyImg + '&rolsyIntegral=' +
									that.rolsyIntegral + '&rolsyPrice=' + that.rolsyPrice + '&rolsyName=' + that.rolsyName +
									'&rolsyParameter=' + that.rolsyParameter + '&rolsyType=' + that.rolsyType + '&count=' + that.count +
									'&rolsySKU=' + that.rolsySKU
							});
						} else if (res.data.Message == '兑换失败，积分不够') {
							uni.showToast({
								title: '积分不足，无法兑换',
								duration: 2000,
								icon: 'none'
							});
						}
						//这里处理兑换后的回调逻辑，兑换成功后才能进行下面的跳转

					}
				});
			},
			escape2Html(str) {
				var arrEntities = {
					'lt': '<',
					'gt': '>',
					'nbsp': ' ',
					'amp': '&',
					'quot': '"'
				};
				return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function(all, t) {
					return arrEntities[t];
				});
			}
		},
	}
</script>
<style>
	.rich_img {
		max-width: 694rpx !important;
	}

	.page {
		height: 92vh;
	}

	.js {
		line-height: 57rpx;
		margin-left: 17px;
	}

	.jifen {
		color: red;
		font-size: 35rpx;
	}

	.yuanjia {
		color: #ccc;
		font-size: 28rpx;
		margin-left: 23rpx;
		text-decoration: line-through;
	}

	.title {
		font-size: 36rpx;
	}

	.type {
		background-color: #fff;
		padding: 16rpx 40rpx;
		display: flex;
		align-items: center;
		font-size: 30rpx;
		border-top: 1rpx solid #eee;
	}

	.ty-title {
		margin-left: 80rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		width: 511rpx;
		font-size: 28rpx;

	}

	.guige {
		margin-left: 97rpx;
	}

	#beizhu {
		margin-top: 16rpx;
		margin-bottom: 23rpx;
	}

	.spjs {
		background: #fff;
		text-align: center;
		line-height: 50rpx;
	}

	.spjs-font {
		padding-top: 31rpx;
		font-size: 40rpx;
	}

	.spjs-en {
		padding: 16rpx;
		color: #eee;
	}

	.sku-page button {
		background: #ffce43;
		font-size: 34rpx;

	}

	.sku-btn {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>

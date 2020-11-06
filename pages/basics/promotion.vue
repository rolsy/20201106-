<template name="promotion">
	<view id="conversion">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content">活动详情</block>
		</cu-custom>
		<scroll-view scroll-y class="page">
			<!-- 活动详情图 -->
			<image :src="Img" mode="widthFix" class="response"></image>
			<view>
				<rich-text :nodes="Ingredients"></rich-text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "promotion",
		data() {
			return {
				Img: '',
				Ingredients: ''
			};
		},
		onLoad(option) {
			const that = this
			uni.getStorage({
				key: "Img",
				success(e) {
					e.data
					console.log('Img=====', e.data)
					that.Img = e.data
				}
			});
			uni.getStorage({
				key: "Ingredients",
				success(e) {
					let reg = new RegExp('src=&quot;', 'g')
					let newData = (e.data).replace(reg, 'src=&quot;https://www.sunnyhotel.net:8089')
					//富文本改变图片大小
					that.Ingredients = that.escape2Html(newData).replace(/<img /g, '<img class="rich_img" ');
					console.log('e', that.Ingredients)
					console.log(newData)
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
			getContent(data) {
				const content = document.getElementById('con');
				content.innerHTML = data
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
			},
			splitStr(str) {
				return str.split('src="');
			}
		}
	}
</script>

<style>
	.rich_img {
		max-width: 750rpx !important;
	}

	.page {
		height: 92vh;
	}

	.text-rolsy {
		color: #FFCE42;
	}

	.rolsy-3text {
		font-size: 1rem;
		text-align: center;
		margin-top: 1rem;
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
	}

	.rolsy-font-bg::before {
		content: "";
		position: absolute;
		display: block;
		width: 175rpx;
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
		width: 205rpx;
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
		width: 190rpx;
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

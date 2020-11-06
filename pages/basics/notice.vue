<template name="notice">
	<view id="notice">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content">通知</block>
		</cu-custom>
		<scroll-view scroll-y class="page">
			<!-- 通知 -->
			<view>
				<!-- 标题、时间 -->
				<view class="rolsy-cur1 bg-white padding-xl">
					<view class="">
						<text class="text-black text-bold">{{F_Description}}</text>
					</view>
					<view class="">
						<!-- <text class="text-grey">{{this.HappenTimeFun(new Date())}} 发布</text> -->
						<text class="text-grey">{{Time}} 发布</text>
					</view>
					<image :src="img" mode="widthFix" class="response padding" style="margin-bottom: -30rpx;"></image>
					<!-- 内容 -->
					<view class="rolsy-content padding">
						<text>
							{{content}}
						</text>
					</view>
					<view class="rolsy-footer">
						<!-- <text class="text-gray">{{read}}人已读</text> -->
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "notice",
		data() {
			return {
				// read:16,
				F_Description: '',
				Time: '',
				content: '',
				img: ''
			};
		},
		onLoad(option) {
			console.log('option', option.index)
			var notice = []
			notice = uni.getStorageSync('notice')
			this.F_Description = notice[option.index].F_Description
			this.Time = notice[option.index].Time
			this.content = notice[option.index].content
			this.img = notice[option.index].F_ModifyUserName
		},
		onShow() {
			// console.log("通知详情页"),
		},
		methods: {
			//时间戳数据处理
			HappenTimeFun(num) {

				let date = new Date(num);
				let y = date.getFullYear();
				let MM = date.getMonth() + 1;
				MM = MM < 10 ? ('0' + MM) : MM; //月补0
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d; //天补0
				return y + '-' + MM + '-' + d;

			},
			//转到 Rolsy
			PromotionPage() {
				uni.navigateTo({
					url: '/pages/basics/'
				});
			}
		},
	}
</script>

<style>
	.page {
		height: 92vh;
	}

	.rolsy-content {
		margin-top: 30upx;
	}

	.rolsy-footer::before {
		content: "";
		position: relative;
		display: block;
		width: 85%;
		height: 1px;
		background: #C8C8C8;
		top: 0upx;
		margin-bottom: 40upx;
	}

	.rolsy-footer {
		margin-top: 50upx;
	}
</style>

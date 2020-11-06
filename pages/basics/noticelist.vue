<template name="noticelist">
	<view id="noticelist">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content">通知</block>
		</cu-custom>
		<view>
			<!-- 通知列表 -->
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
				<view class="cu-item arrow" v-for="(item,index) in rows" :key="index">
					<view class="content" @tap="NoticePage(index)">
						<view class="rolsy-top">
							<text class="text-black text-bold">{{item.F_Description}}</text>
						</view>
						<view class="rolsy-bottom">
							<text class="text-grey">{{item.Time}} 发布</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "noticelist",
		data() {
			return {
				rows: Object,
				notice: [{
						F_Description: '阳光酒店自制研发蛋黄月饼一盒',
						Time: this.HappenTimeFun(new Date())
					},
					{
						F_Description: '阳光酒店自制研发蛋黄月饼一盒',
						Time: this.HappenTimeFun(new Date())
					},
					{
						F_Description: '阳光酒店自制研发蛋黄月饼一盒',
						Time: this.HappenTimeFun(new Date())
					}, {
						F_Description: '阳光酒店自制研发蛋黄月饼一盒',
						Time: this.HappenTimeFun(new Date())
					}

				],
			};
		},
		onShow() {
			console.log("通知列表页");
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

					// 查看数据类型
					// console.log(typeof(res.data.data));
					this.rows = res.data.data.rows;
					console.log('test', res.data.data.rows)
					uni.setStorageSync('notice', res.data.data.rows)
					console.log('通知222222222222=======================', res);
				}
			});

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
			//转到通知详情 Rolsy
			NoticePage(val) {
				uni.navigateTo({
					url: '/pages/basics/notice?index=' + val
				});
			}
		},
	}
</script>

<style>
	.page {
		height: 92vh;
	}

	.rolsy-top {
		margin-top: 40upx;
	}

	.rolsy-bottom {
		margin-bottom: 10upx;
	}
</style>

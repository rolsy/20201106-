<template name="ratedindex">
	<view style="margin-bottom: 5rem;" id="ratedindex">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content"><span v-if="id==1">昨日早餐</span><span v-if="id==2">昨日午餐</span><span v-if="id==3">昨日晚餐</span>
			<span v-if="id==11">今日早餐</span><span v-if="id==22">今日午餐</span><span v-if="id==33">今日晚餐</span>
			</block>
		</cu-custom>
		<scroll-view scroll-y class="page">
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-for="(item,index) in breakfastRows"
			 :key="index">
				<view class="cu-item">
					<view class="content">
						<view class="content padding">
							<view class="">
								<text class="text-black"></text>
								<i class="iconfont rolsy-color1">&#xe600;</i><span class="margin-left-sm text-bold">{{item.item.Name}}</span>
							</view>
							<view class="margin-left-rolsy"> 
								<text class="text-black">厨师:{{item.item.Cook}}</text>
							</view>
						</view>
						<view class="flex padding justify-around">
							<radio-group @change="Rated($event,index)">
								<label class="margin-left-sm">
									<radio class="rolsy-orange radio" value="1" checked></radio>
									<text class="margin-left-sm">好</text>
								</label>
								<label class="margin-left-sm">
									<radio class="rolsy-orange radio" value="2"></radio>
									<text class="margin-left-sm">一般</text>
								</label>
								<label class="margin-left-sm">
									<radio class="rolsy-orange radio" value="3"></radio>
									<text class="margin-left-sm">差</text>
								</label>
							</radio-group>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-for="(item,index) in lunchRows" :key="index">
				<view class="cu-item">
					<view class="content">
						<view class="content padding">
							<view class="">
								<text class="text-black"></text>
								<i class="iconfont rolsy-color1">&#xe600;</i><span class="margin-left-sm text-bold">{{item.item.Name}}</span>
							</view>
							<view class="margin-left-rolsy">
								<text class="text-black">厨师:{{item.item.Cook}}</text>
							</view>
						</view>
						<!-- <view>
							<image :src="item.item.Img" mode="widthFix" class="response"></image>
						</view> -->
						<view class="flex padding justify-around">
							<radio-group @change="Rated($event,index)">
								<label class="margin-left-sm">
									<radio class="rolsy-orange radio" value="1" checked></radio>
									<text class="margin-left-sm">好</text>
								</label>
								<label class="margin-left-sm">
									<radio class="rolsy-orange radio" value="2"></radio>
									<text class="margin-left-sm">一般</text>
								</label>
								<label class="margin-left-sm">
									<radio class="rolsy-orange radio" value="3"></radio>
									<text class="margin-left-sm">差</text>
								</label>
							</radio-group>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-for="(item,index) in dinnerRows"
			 :key="index">
				<view class="cu-item">
					<view class="content">
						<view class="content padding">
							<view class="">
								<text class="text-black"></text>
								<i class="iconfont rolsy-color1">&#xe600;</i><span class="margin-left-sm text-bold">{{item.item.Name}}</span>
							</view>
							<view class="margin-left-rolsy">
								<text class="text-black">厨师:{{item.item.Cook}}</text>
							</view>
						</view>
						<view class="flex padding justify-around">
							<radio-group @change="Rated($event,index)">
								<label class="margin-left-sm">
									<radio class="rolsy-orange radio" value="1" checked></radio>
									<text class="margin-left-sm">好</text>
								</label>
								<label class="margin-left-sm">
									<radio class="rolsy-orange radio" value="2"></radio>
									<text class="margin-left-sm">一般</text>
								</label>
								<label class="margin-left-sm">
									<radio class="rolsy-orange radio" value="3"></radio>
									<text class="margin-left-sm">差</text>
								</label>
							</radio-group>
						</view>
					</view>
				</view>
			</view>
			<view class="">
				<i class="iconfont rolsy-color2 margin-left">&#xe646;</i><span class="margin-left-sm">顾客意见反馈</span>
			</view>
			<view class="cu-form-group margin-top padding rolsy-border margin" style="position: relative;">
				<textarea maxlength="-1" @input="TextareaRated" placeholder=" 为了提升更优质的就餐服务,请填写您的意见或建议"></textarea>
			</view>
			<view class="padding flex flex-direction" style="position: Fixed;bottom: 0;width: 100%;padding: 0;">
				<button class="cu-btn bg-rolsy-color1 lg" @tap="showModal" data-target="Image">提交</button>
			</view>

			<!-- 模态框 -->
			<view class="cu-modal" :class="modalName=='Image'?'show':''" v-if="message==''">
				<view class="cu-dialog">
					<view class="bg-img" style="background-image: url('https://7961-yangguang-089kj-1303115238.tcb.qcloud.la/dialog.png?sign=6d91d273c51a06b798ffe8c8dd492e20&t=1599635900');height:494rpx;">
						<text class="rolsy-txt1" style="margin-left: 1%;">提交成功</text>
						<text class="rolsy-txt2">奖励您5积分~</text>
						<button class="cu-btn bg-rolsy-color1 lg rolsy-txt3" @tap="hideModal">返回首页</button>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "ratedindex",
		data() {
			return {
				id: Number,
				rate: String,
				rows: [],
				message: '',
				menu: [],
				rated: '',
				modalName: null,
				ratedTxt: '',
				newRows: [],

				// 早
				breakfastRows: [],
				// 中
				lunchRows: [],
				// 晚
				dinnerRows: [],
				today:Number
			};
		},
		onShow() {
			this.breakfastRows = [];
			this.lunchRows = [];
			this.dinnerRows = [];
			console.log("菜品评价详情页")
			

		},
		onLoad(option) {
			/* option 是rated页面传的参数：1早餐2午餐3晚餐 */
			this.id = option.id;
			this.today = option.today;
			if(option.today==1){
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetTodayCommentList',
					data: {},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						console.log(res)
						// 接口返回的数据
						this.rows = res.data.data.rows;
						this.rows.forEach(item => {
							if (this.id == 11 && item.F_Description == 1) {
								this.breakfastRows.push({
									item
								})
								this.newRows.push({
									ID: item.ID,
									MenuID: item.MenuID,
									MenuName: '',
									Good: 1
				
								})
							} else if (this.id == 22 && item.F_Description == 2) {
								this.lunchRows.push({
									item
								})
								this.newRows.push({
									ID: item.ID,
									MenuID: item.MenuID,
									MenuName: '',
									Good: 1
								})
							} else if (this.id == 33 && item.F_Description == 3) {
								this.dinnerRows.push({
									item
								})
								this.newRows.push({
									ID: item.ID,
									MenuID: item.MenuID,
									MenuName: '',
									Good: 1
								})
							}
						})
						console.log('this.newRows', this.newRows)
					},
				})
				
			}else{
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetCommentList',
					data: {},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						console.log(res)
						// 接口返回的数据
						this.rows = res.data.data.rows;
						this.rows.forEach(item => {
							if (this.id == 1 && item.F_Description == 1) {
								this.breakfastRows.push({
									item
								})
								this.newRows.push({
									ID: item.ID,
									MenuID: item.MenuID,
									MenuName: '',
									Good: 1
				
								})
							} else if (this.id == 2 && item.F_Description == 2) {
								this.lunchRows.push({
									item
								})
								this.newRows.push({
									ID: item.ID,
									MenuID: item.MenuID,
									MenuName: '',
									Good: 1
								})
							} else if (this.id == 3 && item.F_Description == 3) {
								this.dinnerRows.push({
									item
								})
								this.newRows.push({
									ID: item.ID,
									MenuID: item.MenuID,
									MenuName: '',
									Good: 1
								})
							}
						})
						console.log('this.newRows', this.newRows)
					},
				})
			}
		},
		methods: {
			//点评
			Rated(e, index) {
				for (var i = 0; i < this.newRows.length; i++) {
					if (index == i) {
						this.newRows[i].Good = e.detail.value
					}
				}
			},
			//顾客意见反馈
			TextareaRated(e) {
				this.ratedTxt = e.detail.value;
			},

			showModal(e) {
				var that = this
				for (var i = 0; i < that.newRows.length; i++) {
					that.newRows[i].MenuName = that.ratedTxt,
						that.newRows[i].F_ModifyUserId = uni.getStorageSync('openid')
				}

				const requestTask = uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/SetCommentList',
					data: {
						data: JSON.stringify(that.newRows),
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						console.log(res.data);
						that.message = res.data.Message
					}
				});
				that.modalName = e.currentTarget.dataset.target;
			},
			//返回首页
			hideModal(e) {
				this.modalName = null;
				uni.reLaunch({
					url: '/pages/basics/home'
				});
			},
		},
	}
</script>

<style>
	.text-bold {
		width: 210rpx;
	}

	.page {
		height: 92vh;
	}

	.cf view {
		display: inline-block !important;
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
		font-size: 1rem;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
		font-weight: 100;
		display: inline-block !important;
	}

	.margin-left-rolsy {
		margin-left: 200upx;
	}

	.rolsy-color1 {
		color: #FED65D;
	}

	.rolsy-color2 {
		color: #F3A048;
		font-size: 1.5rem;
	}


	.bg-rolsy-color1 {
		background-color: #FED65D;
	}

	.rolsy-ib {
		display: inline-block !important;
	}

	.rolsy-border {
		border: 1px solid #F2F6FC;
		border-radius: 15upx;
	}

	switch.rolsy-orange[checked] .wx-switch-input,
	checkbox.rolsy-orange[checked] .wx-checkbox-input,
	radio.rolsy-orange[checked] .wx-radio-input,
	switch.rolsy-orange.checked .uni-switch-input,
	checkbox.rolsy-orange.checked .uni-checkbox-input,
	radio.rolsy-orange.checked .uni-radio-input {
		background-color: #FFCE43 !important;
		border-color: #FFCE43 !important;
		color: #ffffff !important;
	}

	.cu-dialog {
		background-color: transparent;
	}

	.bg-img {
		background-size: 80%;
		background-position: center;
		background-repeat: no-repeat;
	}

	.rolsy-txt1 {
		position: relative;
		top: 5.5rem;
		left: 2.5rem;
		font-size: 1rem;
	}

	.rolsy-txt2 {
		position: relative;
		top: 7.2rem;
		left: -2.15rem;
		color: #F3A048;
		font-size: 0.8rem;

	}

	.rolsy-txt3 {
		position: relative;
		top: 9rem;
		left: 0rem;
	}

	.cu-btn.lg {
		padding: 0 140upx !important;
	}
</style>

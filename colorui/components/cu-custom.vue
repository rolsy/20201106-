<template>
	<view>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="cuIcon-back"></text>
					<slot name="backText"></slot>
				</view>
				<button class="action" @tap="appLoginWx" v-if="isUser" open-type="getUserInfo" style="padding-top: 0;margin-left: -22rpx;margin-top: 0;background: #ffffff;">
					<text class="cuIcon-myfill"></text>					
				</button>
				<view class="action" @tap="UserPage1" v-if="isBack1">
					<text class="cuIcon-back"></text>
					<slot name="backText"></slot>
				</view>
				<view class="action" @tap="hPage" v-if="isBack2">
					<text class="cuIcon-back"></text>
					<slot name="backText"></slot>
				</view>
				<view class="content" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			},
			isUser: {
				type: [Boolean, String],
				default: false
			},
			isBack1: {
				type: [Boolean, String],
				default: false
			},
			isBack2: {
				type: [Boolean, String],
				default: false
			}
		},
		methods: {
			getphonenumber(e){
				console.log('e',e)
			},
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			},
			//自定义转到用户中心 Rolsy
			UserPage() {
				// uni.navigateTo({
				// 	url: '/pages/basics/user'
				// });
				uni.reLaunch({
				    url: '/pages/basics/user'
				});
			},
			UserPage1(){
				// uni.navigateTo({
				// 	url: '/pages/basics/user'
				// });
				uni.reLaunch({
				    url: '/pages/basics/user'
				});
			},
			hPage(){
				// uni.navigateTo({
				// 	url: '/pages/basics/home'
				// });
				uni.reLaunch({
				    url: '/pages/basics/home'
				});
			},
			appLoginWx(){
			                // #ifdef MP-WEIXIN
			                    uni.getProvider({
			                      service: 'oauth',
			                      success: function (res) {
			                        if (~res.provider.indexOf('weixin')) {
			                            uni.login({
			                                provider: 'weixin',
			                                success: (res2) => {
			                                    
			                                    uni.getUserInfo({
			                                        provider: 'weixin',
			                                        success: (info) => {//这里请求接口
														uni.setStorageSync('avatarUrl',info.userInfo.avatarUrl)
														uni.setStorageSync('nickName',info.userInfo.nickName)
			                                            uni.reLaunch({
			                                                url: '/pages/basics/user'
			                                            });
			                                        },
			                                        fail: () => {
			                                            uni.showToast({title:"微信登录授权失败",icon:"none"});
			                                        }
			                                    })
			                            
			                                },
			                                fail: () => {
			                                    uni.showToast({title:"微信登录授权失败",icon:"none"});
			                                }
			                            })
			                            
			                        }else{
			                            uni.showToast({
			                                title: '请先安装微信或升级版本',
			                                icon:"none"
			                            });
			                        }
			                      }
			                    });
			                    //#endif
			            }
		}
	}
</script>

<style>
	
	button::after{
		border: none;
		/* background-color: #FFFFFF; */
	}
	button{
		background-color: #fff;

	}
.cuIcon-myfill{
	border: 1px solid #FFCE42;
	border-radius: 20px;
	padding: 4px;
	color: #FFCE42;
}
.cu-custom{
	z-index: 99999;
}
</style>

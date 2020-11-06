<template name="todaymenu">
	<view id="todaymenu">
		<view class="bg-img" style="background-image: url('https://7961-yangguang-089kj-1303115238.tcb.qcloud.la/bg.png?sign=503d5f4296e0634f4304cd4d970e7ec8&t=1599635798)">
			<cu-custom bgColor="bg-white" :isBack="true">
				<block slot="content">今日菜谱</block>
			</cu-custom>
			<scroll-view scroll-x class="bg-white nav text-center fixed rolsy-text36" :style="[{top:CustomBar + 'px'}]" style="background: #FFFFFF;">
				<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabNav" :key="index" @tap="tabSelect"
				 :data-id="index">
					{{tabNav[index]}}
				</view>
			</scroll-view>
			<!-- 早餐 -->
			<block v-if="TabCur==0">
				<!-- 热菜 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" :style="[{marginTop:CustomBar + 'px'}]"
				 v-if="baKind1 != 0">
					<view class="cu-item" v-for="(item,index) in vegetable1" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{type1}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{baKind1}}种</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 面食 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="baKind2 != 0">
					<view class="cu-item" v-for="(item,index) in vegetable2" :key="index" :class="{'bg-yellow-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{type2}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{baKind2}}种</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 特色区 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="baKind3 != 0">
					<view class="cu-item" v-for="(item,index) in vegetable3" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{type3}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{baKind3}}种</text>
							</view>
						</view>
					</view>
				</view>

				<!-- 12元A套餐 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="baKind4 != 0">
					<view class="cu-item" v-for="(item,index) in vegetable4" :key="index" :class="{'bg-yellow-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{type4}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{baKind4}}种</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 12元B套餐 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="baKind5 != 0">
					<view class="cu-item" v-for="(item,index) in vegetable5" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{type5}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{baKind5}}种</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 6 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="baKind6 != 0">
					<view class="cu-item" v-for="(item,index) in vegetable6" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{type6}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{baKind6}}种</text>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="baKind7 != 0">
					<view class="cu-item" v-for="(item,index) in vegetable7" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{type7}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{baKind7}}种</text>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="baKind8 != 0">
					<view class="cu-item" v-for="(item,index) in vegetable8" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{type8}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{baKind8}}种</text>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="baKind9 != 0">
					<view class="cu-item" v-for="(item,index) in vegetable9" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{type9}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{baKind9}}种</text>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="baKind10 != 0">
					<view class="cu-item" v-for="(item,index) in vegetable10" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{type10}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{baKind10}}种</text>
							</view>
						</view>
					</view>
				</view>
			</block>
			<!-- 中餐 -->
			<block v-if="TabCur==1">
				<!-- 热菜 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" :style="[{marginTop:CustomBar + 'px'}]"
				 v-if="noKind1 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableNoon1" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typeNoon1}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{noKind1}}种</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 面食 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="noKind2 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableNoon2" :key="index" :class="{'bg-yellow-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typeNoon2}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{noKind2}}种</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 特色区 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="noKind3 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableNoon3" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typeNoon3}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{noKind3}}种</text>
							</view>
						</view>
					</view>
				</view>

				<!-- 12元A套餐 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="noKind4 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableNoon4" :key="index" :class="{'bg-yellow-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typeNoon4}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{noKind4}}种</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 12元B套餐 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="noKind5 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableNoon5" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typeNoon5}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{noKind5}}种</text>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="noKind6 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableNoon6" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typeNoon6}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{noKind6}}种</text>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="noKind7 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableNoon7" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typeNoon7}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{noKind7}}种</text>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="noKind8 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableNoon8" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typeNoon8}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{noKind8}}种</text>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="noKind9 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableNoon9" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typeNoon9}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{noKind9}}种</text>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="noKind10 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableNoon10" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typeNoon10}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{noKind10}}种</text>
							</view>
						</view>
					</view>
				</view>
			</block>
			<!-- 晚餐 -->
			<block v-if="TabCur==2">
				<!-- 热菜 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" :style="[{marginTop:CustomBar + 'px'}]"
				 v-if="neiKind1 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableneight1" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typenei1}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{neiKind1}}种</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 面食 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="neiKind2 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableneight2" :key="index" :class="{'bg-yellow-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typenei2}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{neiKind2}}种</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 特色区 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="neiKind3 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableneight3" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typenei3}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{neiKind3}}种</text>
							</view>
						</view>
					</view>
				</view>

				<!-- 12元A套餐 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="neiKind4 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableneight4" :key="index" :class="{'bg-yellow-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typenei4}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{neiKind4}}种</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 12元B套餐 -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="neiKind5 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableneight5" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typenei5}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{neiKind5}}种</text>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="neiKind6 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableneight6" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typenei6}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{neiKind6}}种</text>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="neiKind7 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableneight7" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typenei7}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{neiKind7}}种</text>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="neiKind8 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableneight8" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typenei8}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{neiKind8}}种</text>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="neiKind9 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableneight9" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typenei9}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{neiKind9}}种</text>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" v-if="neiKind10 != 0">
					<view class="cu-item" v-for="(item,index) in vegetableneight10" :key="index" :class="{'bg-orange-rolsy':index==0}">
						<view class="content cf">
							<view class="">
								<text class="text-black" v-if="index!==0">{{index}}.{{item.Name}}</text>
								<i class="iconfont" v-if="index==0">&#xe600;</i><span class="margin-left-sm" v-if="index==0">{{typenei10}}</span>
							</view>
							<view class="fr">
								<text class="text-grey">{{item.Cook}}</text>
								<text class="" v-if="index==0">{{neiKind10}}种</text>
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		name: "todaymenu",
		data() {
			return {
				baKind1: '',
				baKind2: '',
				baKind3: '',
				baKind4: '',
				baKind5: '',
				baKind6: '',
				baKind7: '',
				baKind8: '',
				baKind9: '',
				baKind10: '',
				noKind1: '',
				noKind2: '',
				noKind3: '',
				noKind4: '',
				noKind5: '',
				noKind6: '',
				noKind7: '',
				noKind8: '',
				noKind9: '',
				noKind10: '',
				neiKind1: '',
				neiKind2: '',
				neiKind3: '',
				neiKind4: '',
				neiKind5: '',
				neiKind6: '',
				neiKind7: '',
				neiKind8: '',
				neiKind9: '',
				neiKind10: '',
				row: Object,
				Type: [{
					Type: '热菜',
					num: '4'
				}, {
					Type: '面食',
					num: '3'
				}, {
					Type: '特色区',
					num: '2'
				}, {
					Type: '12元A套餐',
					num: '2'
				}, {
					Type: '12元B套餐',
					num: '6'
				}],
				Vegetables1: [{
					Name: '',
					Cook: '',
				}, {
					Name: '葱油鲽鱼',
					Cook: '001厨师'

				}, {
					Name: '土豆酥肉',
					Cook: '001厨师'
				}, {
					Name: '丸子大菜',
					Cook: '002厨师'
				}, {
					Name: '回锅肉',
					Cook: '003厨师'
				}],
				Vegetables2: [{
					Name: '',
					Cook: '',
				}, {
					Name: '米饭',
					Cook: '001厨师'
				}, {
					Name: '馒头',
					Cook: '001厨师'
				}, {
					Name: '花卷',
					Cook: '002厨师'
				}],
				Vegetables3: [{
					Name: '',
					Cook: '',
				}, {
					Name: '排骨砂锅',
					Cook: '002厨师'
				}, {
					Name: '丸子砂锅',
					Cook: '003厨师'
				}],
				Vegetables4: [{
					Name: '',
					Cook: '',
				}, {
					Name: '黄瓜拌酱肉',
					Cook: '002厨师'
				}, {
					Name: '撕手拌菜',
					Cook: '003厨师'
				}],
				Vegetables5: [{
					Name: '',
					Cook: '',
				}, {
					Name: '地瓜面馒头',
					Cook: '002厨师'
				}, {
					Name: '花卷',
					Cook: '003厨师'
				}, {
					Name: '米饭',
					Cook: '003厨师'
				}],
				CustomBar: this.CustomBar,
				TabCur: 0,
				tabNav: ['早餐', '中餐', '晚餐'],

				//早餐类型
				type1: '',
				type2: '',
				type3: '',
				type4: '',
				type5: '',
				type6: '',
				type7: '',
				type8: '',
				type9: '',
				type10: '',
				//午餐类型
				typeNoon1: '',
				typeNoon2: '',
				typeNoon3: '',
				typeNoon4: '',
				typeNoon5: '',
				typeNoon6: '',
				typeNoon7: '',
				typeNoon8: '',
				typeNoon9: '',
				typeNoon10: '',
				//晚餐类型
				typenei1: '',
				typenei2: '',
				typenei3: '',
				typenei4: '',
				typenei5: '',
				typenei6: '',
				typenei7: '',
				typenei8: '',
				typenei9: '',
				typenei10: '',
				//空数组
				emptyArr: [{
					Name: '',
					Cook: '',
				}],
				//早餐菜品
				veg1: [],
				veg2: [],
				veg3: [],
				veg4: [],
				veg5: [],
				veg6: [],
				veg7: [],
				veg8: [],
				veg9: [],
				veg10: [],
				vegetable1: [],
				vegetable2: [],
				vegetable3: [],
				vegetable4: [],
				vegetable5: [],
				vegetable6: [],
				vegetable7: [],
				vegetable8: [],
				vegetable9: [],
				vegetable10: [],

				//午餐菜品
				vegNoon1: [],
				vegNoon2: [],
				vegNoon3: [],
				vegNoon4: [],
				vegNoon5: [],
				vegNoon6: [],
				vegNoon7: [],
				vegNoon8: [],
				vegNoon9: [],
				vegNoon10: [],
				vegetableNoon1: [],
				vegetableNoon2: [],
				vegetableNoon3: [],
				vegetableNoon4: [],
				vegetableNoon5: [],
				vegetableNoon6: [],
				vegetableNoon7: [],
				vegetableNoon8: [],
				vegetableNoon9: [],
				vegetableNoon10: [],

				//晚餐菜品
				vegNei1: [],
				vegNei2: [],
				vegNei3: [],
				vegNei4: [],
				vegNei5: [],
				vegNei6: [],
				vegNei7: [],
				vegNei8: [],
				vegNei9: [],
				vegNei10: [],
				vegetableneight1: [],
				vegetableneight2: [],
				vegetableneight3: [],
				vegetableneight4: [],
				vegetableneight5: [],
				vegetableneight6: [],
				vegetableneight7: [],
				vegetableneight8: [],
				vegetableneight9: [],
				vegetableneight1: [],

				//菜单ID
				menuID: ''
			};
		},
		onShow() {
			const that = this
			that.update()
			that.SetUserBrowset()
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				if (this.row[this.TabCur].ID) {
					this.menuID = this.row[this.TabCur].ID
				}
				this.SetUserBrowset()
			},
			// 获取数据
			update() {
				uni.request({
					url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetMenuList',
					data: {
						level: 1,
						testList: [],

					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						this.row = res.data.data.rows;
						if (res.data.data.rows.length > 0) {
							//早餐面食
							for (var i = 0; i < res.data.data.rows.length; i++) {
								if (res.data.data.rows[i].Time == 1) {
									this.type1 = res.data.data.rows[i].Type1 //取早餐种类
									this.veg1 = JSON.parse(res.data.data.rows[i].Vegetables1) //取早餐菜品
									this.vegetable1 = this.emptyArr.concat(this.veg1) //空数组
									this.baKind1 = this.vegetable1.length - 1
									//早餐热菜
									this.type2 = res.data.data.rows[i].Type2 //把从接口取得type赋值到type2里
									this.veg2 = JSON.parse(res.data.data.rows[i].Vegetables2)
									this.vegetable2 = this.emptyArr.concat(this.veg2)
									this.baKind2 = this.vegetable2.length - 1
									//早餐特色菜
									this.type3 = res.data.data.rows[i].Type3
									this.veg3 = JSON.parse(res.data.data.rows[i].Vegetables3)
									this.vegetable3 = this.emptyArr.concat(this.veg3)
									this.baKind3 = this.vegetable3.length - 1
									//早餐咸菜
									this.type4 = res.data.data.rows[i].Type4
									this.veg4 = JSON.parse(res.data.data.rows[i].Vegetables4)
									this.vegetable4 = this.emptyArr.concat(this.veg4)
									this.baKind4 = this.vegetable4.length - 1
									//早餐稀饭
									this.type5 = res.data.data.rows[i].Type5
									this.veg5 = JSON.parse(res.data.data.rows[i].Vegetables5)
									this.vegetable5 = this.emptyArr.concat(this.veg5)
									this.baKind5 = this.vegetable5.length - 1

									this.type6 = res.data.data.rows[i].Type6
									this.veg6 = JSON.parse(res.data.data.rows[i].Vegetables6)
									this.vegetable6 = this.emptyArr.concat(this.veg6)
									this.baKind6 = this.vegetable6.length - 1

									this.type7 = res.data.data.rows[i].Type7
									this.veg7 = JSON.parse(res.data.data.rows[i].Vegetables7)
									this.vegetable7 = this.emptyArr.concat(this.veg7)
									this.baKind7 = this.vegetable7.length - 1

									this.type8 = res.data.data.rows[i].Type8
									this.veg8 = JSON.parse(res.data.data.rows[i].Vegetables8)
									this.vegetable8 = this.emptyArr.concat(this.veg8)
									this.baKind8 = this.vegetable8.length - 1

									this.type9 = res.data.data.rows[i].Type9
									this.veg9 = JSON.parse(res.data.data.rows[i].Vegetables9)
									this.vegetable9 = this.emptyArr.concat(this.veg9)
									this.baKind9 = this.vegetable9.length - 1

									this.type10 = res.data.data.rows[i].Type10
									this.veg10 = JSON.parse(res.data.data.rows[i].Vegetables10)
									this.vegetable10 = this.emptyArr.concat(this.veg10)
									this.baKind10 = this.vegetable10.length - 1



								} 
								else if (res.data.data.rows[i].Time == 2) {
									//午餐面食
									this.typeNoon1 = res.data.data.rows[i].Type1
									this.vegNoon1 = JSON.parse(res.data.data.rows[i].Vegetables1)
									this.vegetableNoon1 = this.emptyArr.concat(this.vegNoon1)
									this.noKind1 = this.vegetableNoon1.length - 1
									//午餐热菜
									this.typeNoon2 = res.data.data.rows[i].Type2
									this.vegNoon2 = JSON.parse(res.data.data.rows[i].Vegetables2)
									this.vegetableNoon2 = this.emptyArr.concat(this.vegNoon2)
									this.noKind2 = this.vegetableNoon2.length - 1
									//午餐特色区
									this.typeNoon3 = res.data.data.rows[i].Type3
									this.vegNoon3 = JSON.parse(res.data.data.rows[i].Vegetables3)
									this.vegetableNoon3 = this.emptyArr.concat(this.vegNoon3)
									this.noKind3 = this.vegetableNoon3.length - 1
									//午餐咸菜
									this.typeNoon4 = res.data.data.rows[i].Type4
									this.vegNoon4 = JSON.parse(res.data.data.rows[i].Vegetables4)
									this.vegetableNoon4 = this.emptyArr.concat(this.vegNoon4)
									this.noKind4 = this.vegetableNoon4.length - 1
									//午餐稀饭
									this.typeNoon5 = res.data.data.rows[i].Type5
									this.vegNoon5 = JSON.parse(res.data.data.rows[i].Vegetables5)
									this.vegetableNoon5 = this.emptyArr.concat(this.vegNoon5)
									this.noKind5 = this.vegetableNoon5.length - 1

									this.typeNoon6 = res.data.data.rows[i].Type6
									this.vegNoon6 = JSON.parse(res.data.data.rows[i].Vegetables6)
									this.vegetableNoon6 = this.emptyArr.concat(this.vegNoon6)
									this.noKind6 = this.vegetableNoon6.length - 1

									this.typeNoon7 = res.data.data.rows[i].Type7
									this.vegNoon7 = JSON.parse(res.data.data.rows[i].Vegetables7)
									this.vegetableNoon7 = this.emptyArr.concat(this.vegNoon7)
									this.noKind7 = this.vegetableNoon7.length - 1

									this.typeNoon8 = res.data.data.rows[i].Type8
									this.vegNoon8 = JSON.parse(res.data.data.rows[i].Vegetables8)
									this.vegetableNoon8 = this.emptyArr.concat(this.vegNoon8)
									this.noKind8 = this.vegetableNoon8.length - 1

									this.typeNoon9 = res.data.data.rows[i].Type9
									this.vegNoon9 = JSON.parse(res.data.data.rows[i].Vegetables9)
									this.vegetableNoon9 = this.emptyArr.concat(this.vegNoon9)
									this.noKind9 = this.vegetableNoon9.length - 1

									this.typeNoon10 = res.data.data.rows[i].Type10
									this.vegNoon10 = JSON.parse(res.data.data.rows[i].Vegetables10)
									this.vegetableNoon10 = this.emptyArr.concat(this.vegNoon10)
									this.noKind10 = this.vegetableNoon10.length - 1
								} 
								else if (res.data.data.rows[i].Time == 3) {
									//晚餐面食
									this.typenei1 = res.data.data.rows[i].Type1
									this.vegNei1 = JSON.parse(res.data.data.rows[i].Vegetables1)
									this.vegetableneight1 = this.emptyArr.concat(this.vegNei1)
									this.neiKind1 = this.vegetableneight1.length - 1
									//晚餐热菜
									this.typenei2 = res.data.data.rows[i].Type2
									this.vegNei2 = JSON.parse(res.data.data.rows[i].Vegetables2)
									this.vegetableneight2 = this.emptyArr.concat(this.vegNei2)
									this.neiKind2 = this.vegetableneight2.length - 1
									//晚餐特色区
									this.typenei3 = res.data.data.rows[i].Type3
									this.vegNei3 = JSON.parse(res.data.data.rows[i].Vegetables3)
									this.vegetableneight3 = this.emptyArr.concat(this.vegNei3)
									this.neiKind3 = this.vegetableneight3.length - 1
									//晚餐咸菜
									this.typenei4 = res.data.data.rows[i].Type4
									this.vegNei4 = JSON.parse(res.data.data.rows[i].Vegetables4)
									this.vegetableneight4 = this.emptyArr.concat(this.vegNei4)
									this.neiKind4 = this.vegetableneight4.length - 1
									//晚餐稀饭
									this.typenei5 = res.data.data.rows[i].Type5
									this.vegNei5 = JSON.parse(res.data.data.rows[i].Vegetables5)
									this.vegetableneight5 = this.emptyArr.concat(this.vegNei5)
									this.neiKind5 = this.vegetableneight5.length - 1
									
									this.typenei6 = res.data.data.rows[i].Type6
									this.vegNei6 = JSON.parse(res.data.data.rows[i].Vegetables6)
									this.vegetableneight6 = this.emptyArr.concat(this.vegNei6)
									this.neiKind6 = this.vegetableneight6.length - 1
									
									this.typenei7 = res.data.data.rows[i].Type7
									this.vegNei7 = JSON.parse(res.data.data.rows[i].Vegetables7)
									this.vegetableneight7 = this.emptyArr.concat(this.vegNei7)
									this.neiKind7 = this.vegetableneight7.length - 1
									
									this.typenei8 = res.data.data.rows[i].Type8
									this.vegNei8 = JSON.parse(res.data.data.rows[i].Vegetables8)
									this.vegetableneight8 = this.emptyArr.concat(this.vegNei8)
									this.neiKind8 = this.vegetableneight8.length - 1
									
									this.typenei9 = res.data.data.rows[i].Type9
									this.vegNei9 = JSON.parse(res.data.data.rows[i].Vegetables9)
									this.vegetableneight9 = this.emptyArr.concat(this.vegNei9)
									this.neiKind9 = this.vegetableneight9.length - 1
									console.log(this.typenei9)
									console.log(this.vegNei9)
									console.log(this.vegetableneight9)
									console.log(this.neiKind9)
									
									this.typenei10 = res.data.data.rows[i].Type10
									this.vegNei10 = JSON.parse(res.data.data.rows[i].Vegetables10)
									this.vegetableneight10 = this.emptyArr.concat(this.vegNei10)
									this.neiKind10 = this.vegetableneight10.length - 1									
									console.log(this.typenei10)
									console.log(this.vegNei10)
									console.log(this.vegetableneight10)
									console.log(this.neiKind10)

								}
							}
							//刷新
							this.$forceUpdate();
						}
					}
				});
			},
			// 获取用户浏览记录
			SetUserBrowset() {
				if (this.menuID !== '') {
					//提交用户浏览记录
					uni.request({
						url: 'https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/SetUserBrowset',
						data: {
							ID: this.menuID
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						method: 'POST',
						dataType: 'json',
						success: (res) => {}
					});
				}

			}
		},
	}
</script>

<style>
	scroll-view ::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	}

	.bg-img {
		width: 100%;
		min-height: 100vh;
		padding-bottom: 100rpx;
		/* overflow-y: hidden; */
	}

	/deep/.bg-white {
		background-color: #FFFFFF;
	}

	/* 	/deep/.data-v-0bc86364 {
		height: 100vh;
	}
 */


	.page {
		height: 100vh;
	}

	.rolsy-text36 {
		font-size: 36rpx !important;
	}

	.bg-orange-rolsy {
		background-color: #F2A148 !important;
		color: #FFFFFF;
	}

	.bg-yellow-rolsy {
		background-color: #FFCE43 !important;
		color: #FFFFFF;
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
	}

	.text-blue,
	.line-blue,
	.lines-blue {
		color: #FED04D;
	}
</style>

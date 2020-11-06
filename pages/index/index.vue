<template>
    <view>
  <view v-for="(item, index) in newsList" class="newslist">{{item}}</view>
 </view>
</template>
<script>
var _self;
export default {
 data:{
  newsList:[]
 },
    onLoad:function(){
  _self = this;
    },
 onPullDownRefresh:function(){
  this.getnewsList();
 },
 methods:{
  getnewsList : function(){
   uni.showNavigationBarLoading();
   uni.request({
    url: 'https://demo.hcoder.net/index.php?user=hcoder&pwd=hcoder&m=list1&page=1',
    method: 'GET',
    success: function(res){
     console.log(res);
     _self.newsList = res.data.split('--hcSplitor--');
     uni.hideNavigationBarLoading();
     uni.stopPullDownRefresh();
    }
   });
  }
 },
}
</script>
<style>
.newslist{padding:10px; font-size:28px;}
</style>
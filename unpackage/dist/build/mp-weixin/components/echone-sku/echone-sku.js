(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/echone-sku/echone-sku"],{1879:function(t,i,n){"use strict";var e=n("a552"),s=n.n(e);s.a},a2e6:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=function(){n.e("components/echone-sku/popup-bottom").then(function(){return resolve(n("0ba8"))}.bind(null,n)).catch(n.oe)},s={components:{PopupBottom:e},filters:{toFixed2:function(t){return t?Number(t).toFixed(2):"0.00"}},props:{show:{type:Boolean,default:!1},themeColor:{type:String,default:"#1ac792"},combinations:{type:Array,default:function(){return[]}},specifications:{type:Array,default:function(){return[]}},defaultSelectIndex:{type:Number,default:0},combinationsProps:{type:Object,default:function(){return{id:"id",value:"value",image:"image",price:"price",stock:"stock"}}},specificationsProps:{type:Object,default:function(){return{id:"id",list:"list",name:"name"}}}},data:function(){return{buyCount:1,selectedIndex:0,borderWidth:t.upx2px(2),mySpecifications:[],selectSkuInfo:{}}},watch:{specifications:function(t){this.initSkuData()}},computed:{speId:function(){return this.specificationsProps.id},speList:function(){return this.specificationsProps.list},speName:function(){return this.specificationsProps.name},cbValue:function(){return this.combinationsProps.value},cbImage:function(){return this.combinationsProps.image},cbPrice:function(){return this.combinationsProps.price},cbStock:function(){return this.combinationsProps.stock}},created:function(){this.specifications.length&&this.initSkuData()},methods:{initSkuData:function(){var i=this;this.selectedIndex=this.defaultSelectIndex,this.selectSkuInfo=this.combinations[this.selectedIndex],this.mySpecifications=JSON.parse(JSON.stringify(this.specifications)),this.mySpecifications.forEach((function(n,e){var s=i.combinations[i.selectedIndex][i.cbValue].split(","),o=n[i.speList].indexOf(s[e]);-1!==o?i.$set(n,"sidx",o):t.showToast({title:"默认规格值不存在"})}))},selectSku:function(t,i){var n=this;this.mySpecifications[t].sidx=i;var e=this.mySpecifications.reduce((function(t,i){return t?t+","+i[n.speList][i.sidx]:i[n.speList][i.sidx]}),"");this.selectedIndex=this.combinations.findIndex((function(t){return t[n.cbValue]===e})),this.selectSkuInfo=this.combinations[this.selectedIndex],0===this.selectSkuInfo[this.cbStock]&&(this.buyCount=0),0!==this.selectSkuInfo[this.cbStock]&&1*this.buyCount===0&&(this.buyCount=1)},handleBuyCount:function(t){if("minus"===t){if(this.buyCount<=1)return;this.buyCount=1*this.buyCount-1}if("add"===t){if(this.buyCount>=this.selectSkuInfo[this.cbStock])return;this.buyCount=1*this.buyCount+1}var i=this.buyCount?this.buyCount:1;this.$emit("count",i)},closeSkuBox:function(){this.$emit("close")},handleConfirm:function(){var t=this.selectSkuInfo;t.count=1*this.buyCount,this.$emit("confirm",t)}}};i.default=s}).call(this,n("543d")["default"])},a552:function(t,i,n){},a90b:function(t,i,n){"use strict";n.r(i);var e=n("cc82"),s=n("daa2");for(var o in s)"default"!==o&&function(t){n.d(i,t,(function(){return s[t]}))}(o);n("1879");var c,u=n("f0c5"),a=Object(u["a"])(s["default"],e["b"],e["c"],!1,null,"4e615ede",null,!1,e["a"],c);i["default"]=a.exports},cc82:function(t,i,n){"use strict";var e,s=function(){var t=this,i=t.$createElement;t._self._c},o=[];n.d(i,"b",(function(){return s})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}))},daa2:function(t,i,n){"use strict";n.r(i);var e=n("a2e6"),s=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/echone-sku/echone-sku-create-component',
    {
        'components/echone-sku/echone-sku-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a90b"))
        })
    },
    [['components/echone-sku/echone-sku-create-component']]
]);

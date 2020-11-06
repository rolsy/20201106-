<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				testList: [{
					name:'one',
					id:1
				}, {
					name:'two',
					id:2
				},{
					name:'three',
					id:3
				},{
					name:'four',
					id:4
				},{
					name:'five',
					id:5
				},],
				//定义新数组
				newList:[],
			}
			
			methods:{
				getList(){
					//循环数组
					this.testList.forEach(item =>{
						//循环拿出id，并放进新数组
						this.newList.push({
							id:item.id
						})
					})
					console.log(this.newList)
				}
			}
		}
	}
</script>

<style>
</style>

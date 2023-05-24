<template>
	<view class="uni-container">
		<button @click="handleRead">111</button>
	</view>
</template>
<script>
	const pluginImpl = uni.requireNativePlugin('UHFModule');
	
	export default {
		data() {
			return {
			}
		},
		onLoad() {},
		
		methods: {
			handleRead(){
				console.log(pluginImpl.readSingleTag((data)=>{
					console.log(data)
				}))
			}
			
		}
	}
</script>

<style>
</style>

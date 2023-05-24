<script>
	export default {
		onLaunch: function() {
			const pluginImpl = uni.requireNativePlugin('UHFModule');
			pluginImpl.openKeyDownService();
			console.log(pluginImpl.openUHF())
			pluginImpl.addEventListener('key-down', e => {
				uni.showToast(JSON.stringify(e));
				pluginImpl.showApp();
			})
			pluginImpl.addEventListener('error', e => {
				uni.showToast(JSON.stringify(e));
				console.log(e)
			})
			pluginImpl.addEventListener('open', e => {
				uni.showToast(JSON.stringify(e));
				console.log(e)
				// pluginImpl.closeUHF()
			})
			pluginImpl.addEventListener('close', e => {
				uni.showToast(JSON.stringify(e));
				console.log(e)
			})
			// require插件名称
			// 使用插件  

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni-nvue.css';
</style>
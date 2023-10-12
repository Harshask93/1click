export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		windowMessageListener("https://harshask93.github.io/embeddedApp/",(message)=> showAlert(JSON.stringify(message)))
		showAlert("Subscription Done")
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}
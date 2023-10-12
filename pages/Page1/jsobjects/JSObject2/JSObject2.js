export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		return (appsmith.user.roles);
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
			return (appsmith.user.groups); 
		//	await storeValue('varName', 'hello world')
	}
}
// 引入jQuery  const $ = require('jquery');    // 问题function printProblemMessage() {    var q = '猫会喵喵叫，狗会汪汪叫，鸡会什么？' 
  console.log(q)}  

// 答案
function printAnswerMessage() {  
  // 例如，在DOM加载完成后打印欢迎消息  
  var a = '鸡会留给有准备的人' 
  console.log(a)
}   // 暴露函数作为模块的公开API  module.exports = {
	printProblemMessage,
	printAnswerMessage
}; 
//当你提交一个表单的，浏览器会跳到另一个页面，然后在这个新页面里告诉你，操作成功or失败
//一次HTTP请求对应一个页面
//让用户在当前页面，同时发送新的HTTP请求，接到数据之后，用JS更新页面
//写AJAX主要依靠XMLHttpRequest对象， Ajax请求是异步的，要通过回调函数获得响应
//IE的ajax依靠ActiveXObject

var request
if (window.XMLHttpRquest) {
  request = new XMLHttpRquest()
} else {
  request = new ActiveXObject('Microsoft.XMLHTTP')
}

function success(text) {
  //成功时调用的函数
  alert(text)
}

function fail(code) {
  //响应失败时调用的函数
  alert('Error code: ' + code)
}

request.onreadystatechange = function() {
  if (request.readyState === 4) { //成功完成
    //判断响应结果
    if (request.status === 200) {
      //成功，通过responseText拿到响应文本
      return success(request.responseText)
    } else {
      //失败
      return fail(request.status)
    }
  } else {
    //http请求还在继续...
  }
}

function secuCode(box) {
  	var codeStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  	function rand(min, max) {
  		return Math.round(Math.random() * (max - min) + min);
  	}
  	function getCode() {
  		var str = '';	 
  		for (var i = 0; i < 4; i++) {
  			str += codeStr.charAt(rand(0, 62));
  		}
  		box.innerHTML = str;
  	}
  	getCode(); // 调用函数，页面刷新也会刷新验证码
  	// 点击刷新验证码
  }

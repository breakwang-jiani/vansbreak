let oCode = document.querySelector(".code button");
secuCode(oCode)
oCode.onclick = function() {
	secuCode(oCode)
}
let oInput = document.querySelectorAll(".message li input");
let oSpan = document.querySelectorAll(".message li span");
console.log(oInput,oSpan)
let flag1 = false;
oInput[0].onblur = function() {
	let reg = /^1\d{10}$/;
	if (this.value == "") {
		oSpan[0].innerHTML = "必填信息";
		flag1 = false;
	} else {
		if (reg.test(this.value)) {
			oSpan[0].innerHTML = " ";
			flag1 = true;
		} else {
			oSpan[0].innerHTML = "手机号码格式不正确";
			flag1 = false;
		}
	}

}
let flag2 = false;
oInput[1].onblur = function() {
	if (this.value == "") {
		oSpan[1].innerHTML = "必填信息";
		flag2 = false;
	} else {
		if (this.value == oCode.innerHTML) {
			oSpan[1].innerHTML = " ";
			flag2 = true;
		} else {
			oSpan[1].innerHTML = "验证码输入不正确";
			flag2 = false;
		}
	}

}
let flag3= false;
oInput[2].onblur = function() {
	let regNum = /\d+/;
	let regLetter = /[a-zA-Z]/;
	if (this.value == "") {
		oSpan[2].innerHTML = "必填信息";
		flag3= false;
	} else {
		if (this.value.length >= 8 && this.value.length <= 16) {
			if (regNum.test(this.value) && regLetter.test(this.value)) {
				oSpan[2].innerHTML = " ";
				flag3 = true;
			}
		} else {
			oSpan[2].innerHTML = "密码输入错误";
			flag3 = false;
		}
	}
}
let flag4 = false;
oInput[3].onclick = function() {
	if (this.checked) {
		oSpan[3].innerHTML = " ";
		flag4 = true;
	} else {
		oSpan[3].innerHTML = "请勾选并确保已阅读以上声明";
		flag4 = false;
	}

}

let oBtn = document.querySelector(".message li>button");
function getUrlParam(name) {
		let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		let r = window.location.search.substr(1).match(reg); //匹配目标参数
		if (r != null) return unescape(r[2]);
		return null; //返回参数值
	}
	let Id = getUrlParam('oHD');
	// $(".login-box-right .cre").click(function(){
		
	// 		 location.href=`LoginRegistration.html`;
	// })
// console.log(flag1, flag2, flag3, flag4, flag5, flag6, flag7);
oBtn.onclick = function() {
	 
	// console.log($(oInput[2]).val(),$(oInput[4]).val())
	// console.log(flag1, flag2, flag3, flag4, flag5, flag6, flag7);
	 
	if (flag1 && flag2 && flag3 && flag4) {
		 // console.log($(oInput[0]).val(),$(oInput[2]).val(),$(oInput[1]).val(),$(oInput[4]).val(),$(oI).html())
		$.ajax({
			url: "login.php",
			data: {
				userPhone:$(oInput[0]).val(),
				userPwd:$(oInput[2]).val(),
			},
			type: "post",
			success: function(resText) {
 
				if(resText=="1"){
						 
					location.href = `homepage1.html`;	 
				 
				}else{
					alert("密码错误");
				}
				 
				 
			}
		});
		 
 
	} else{
		alert("请输入信息");
	}
	 
}
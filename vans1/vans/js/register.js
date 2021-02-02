let oCode = document.querySelector(".code");
secuCode(oCode)
oCode.onclick = function() {
	secuCode(oCode)
}
let oInput = document.querySelectorAll(".main-caption li input");
let oSpan = document.querySelectorAll(".main-caption li span");
let flag1 = false;
oInput[0].onblur = function() {
	let reg = /[\u4e00-\u9fa5]{1,}/;
	if (this.value == "") {
		oSpan[0].innerHTML = "必填信息";
		flag1 = false;
	} else {
		if (reg.test(this.value)) {
			oSpan[0].innerHTML = " ";
			flag1 = true;
		} else {
			oSpan[0].innerHTML = "格式输入不正确";
			flag1 = false;

		}
	}
}
let flag2 = false;
oInput[1].onblur = function() {
	let reg = /[\u4e00-\u9fa5]{1,}/;
	if (this.value == "") {
		oSpan[1].innerHTML = "必填信息";
		flag2 = false;
	} else {
		if (reg.test(this.value)) {
			oSpan[1].innerHTML = " ";
			flag2 = true;
		} else {
			oSpan[1].innerHTML = "格式输入不正确";
			flag2 = false;

		}
	}
}
let flag3 = false;
oInput[2].onblur = function() {
	let reg = /^1\d{10}$/;
	if (this.value == "") {
		oSpan[2].innerHTML = "必填信息";
		flag3 = false;
	} else {
		if (reg.test(this.value)) {
			oSpan[2].innerHTML = " ";
			flag3 = true;
		} else {
			oSpan[2].innerHTML = "手机号码格式不正确";
			flag3 = false;
		}
	}

}
let flag4 = false;
let oGender = document.querySelector(".gender");
let oI = document.querySelector(".gender-text");
let op = document.querySelectorAll("option");
oGender.onclick = function() {
	for (let i = 0; i < op.length; i++) {
		if (op[i].selected) {
			oI.innerHTML = op[i].innerHTML;
			if (oI.innerHTML == "选择称谓") {
				oSpan[3].innerHTML = "请选择";
				flag4 = false;
			} else {
				oSpan[3].innerHTML = " ";
				flag4 = true;
				break;
			}
		}
	}
	if (oI.innerHTML == "选择称谓") {
		oSpan[3].innerHTM = "请选择";
		flag4 = false;
	} else {
		oSpan[3].innerHTML = " ";
		flag4 = true;
	}

}
let flag5 = false;
oInput[3].onblur = function() {
	if (this.value == "") {
		oSpan[4].innerHTML = "必填信息";
		flag5 = false;
	} else {
		if (this.value == oCode.innerHTML) {
			oSpan[4].innerHTML = " ";
			flag5 = true;
		} else {
			oSpan[4].innerHTML = "验证码输入不正确";
			flag5 = false;
		}
	}

}
let flag6 = false;
oInput[4].onblur = function() {
	let regNum = /\d+/;
	let regLetter = /[a-zA-Z]/;
	if (this.value == "") {
		oSpan[5].innerHTML = "必填信息";
		flag6 = false;
	} else {
		if (this.value.length >= 8 && this.value.length <= 16) {
			if (regNum.test(this.value) && regLetter.test(this.value)) {
				oSpan[5].innerHTML = " ";
				flag6 = true;
			}
		} else {
			oSpan[5].innerHTML = "密码需由8-16位数字和字母组成";
			flag6 = false;
		}
	}
}
let flag7 = false;

oInput[5].onclick = function() {
	if (this.checked) {
		console.log(8);
		oSpan[6].innerHTML = " ";
		flag7 = true;
	} else {
		console.log(9);
		oSpan[6].innerHTML = "请勾选并确保已阅读以上声明";
		flag7 = false;
	}

}
function getUrlParam(name) {
		let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		let r = window.location.search.substr(1).match(reg); //匹配目标参数
		if (r != null) return unescape(r[2]);
		return null; //返回参数值
	}
	let Id = getUrlParam('oHD');
// console.log($("oInput[2]").value,$("oInput[4]").value)
let oBtn = document.querySelector(".right-btn");
let ls=localStorage;
// console.log(flag1, flag2, flag3, flag4, flag5, flag6, flag7);
oBtn.onclick = function() {
	 
	// console.log($(oInput[2]).val(),$(oInput[4]).val())
	// console.log(flag1, flag2, flag3, flag4, flag5, flag6, flag7);
	if (flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7) {
		 // console.log($(oInput[0]).val(),$(oInput[2]).val(),$(oInput[1]).val(),$(oInput[4]).val(),$(oI).html())
		$.ajax({
			url: "register.php",
			data: {
				userNameFirst:$(oInput[0]).val(),
				userName:$(oInput[1]).val(),
				userPhone: $(oInput[2]).val(),
				userSex:$(oI).html(),
				userPwd: $(oInput[4]).val(),
			},
			type: "post",
			success: function(resText) {
				 console.log(resText);
				if(resText=="1"){
					 
					ls.setItem("userPhone",$(oInput[2]).val());
					ls.setItem("userPwd",$(oInput[4]).val());
					 location.href = `homepage1.html`;
					 
					// location.href="hrefpage.html";
				}else{
					alert("此账号已经存在");
				}
				 
				 
			}
		});
 
	}else{
		alert("请输入信息");
		 
	}
}

// $("header").load("./commonheader.html", function(responseText, textStates, XMLHttpRequest) {
 
//  // $(".header-right .icon-gouwudai").click(function(){
// 	//  location.href=	`./cartpage.html?oHD=${Id}`;
	 
//  // })
  
// })
$("footer").load("./commonfooter.html", function(responseText, textStates, XMLHttpRequest) {

})
//放大镜
class MF {
	constructor(newSmallBox, newBigBox, newMask) {
		this.smallBox = newSmallBox;
		this.bigBox = newBigBox;
		this.mask = newMask;
		this.eventBind();
	}
	onmouseover() {
		let that = this;
		this.smallBox.onmouseover = function() {
			that.mask.style.display = "block";
			that.bigBox.style.display = "block";
		}



	}
	onmouseout() {
		let that = this;
		this.smallBox.onmouseout = function() {
			that.mask.style.display = "none";
			that.bigBox.style.display = "none"
		}

	}
	onmousemove() {
		let that = this;
		this.smallBox.onmousemove = function(evt) {
			let e = evt || event;
			let left = e.pageX - (window.innerWidth - 1440) / 2 - this.offsetLeft - that.mask.offsetWidth / 2;
			let top = e.pageY - 131 - 30 - this.offsetTop - that.mask.offsetHeight / 2;
			if (left < 0) {
				left = 0;

			}
			let maxLeft = this.offsetWidth - that.mask.offsetWidth;

			if (left > maxLeft) {
				left = maxLeft
			}
			let maxTop = this.offsetHeight - that.mask.offsetHeight;
			if (top > maxTop) {
				top = maxTop

			}
			if (top < 0) {
				top = 0

			}
			let x = that.bigBox.offsetWidth * left / that.mask.offsetWidth;
			let y = that.bigBox.offsetHeight * top / that.mask.offsetHeight;
			that.bigBox.style.backgroundPositionX = -x + "px";
			that.bigBox.style.backgroundPositionY = -y + "px";
			that.mask.style.left = left + "px";
			that.mask.style.top = top + "px";

		}
	}

	eventBind() {
		this.onmouseover();
		this.onmouseout();
		this.onmousemove()
	}
}
let smallbox1 = document.querySelector("#small-box");
let bigBox1 = document.querySelector("#big-box")
let mask = document.querySelector("#mask");

let mf = new MF(smallbox1, bigBox1, mask);

//正则判断
function getUrlParam(name) {
	let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	let r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null) return unescape(r[2]);
	return null; //返回参数值
}
let Id = getUrlParam('oid');
let oSmallBox = document.querySelector("#small-box");
let oBigBox = document.querySelector("#big-box");
let oDetailMain = document.querySelector(".detail-main-right");
let oBoximg = document.querySelector(".box-img li img");

new Ajax({
	type: "get",
	url: "detail.php",
	isAsyn: true,
	data: "",
	callBack: function(resText) {
		let str = resText;
		let json = JSON.parse(str);
		let tmp2 = json.map(function(value, index, arr) {
			if (value.Id == Id) {
				oBoximg.src = `${value.goodsurl}`;
				oSmallBox.style.backgroundImage = `url(${value.goodsurl})`;
				oBigBox.style.backgroundImage = `url(${value.goodsurl})`;
				return `
  							<div class="product-titles">
  								<p>${value.goodstag}</p>
  								<p>#新品</p>
  								<h2>${value.googstitle}</h2>
  								<p>${value.goodsh2}</p>
  							</div>
  							<div class="product-intro">
  								<p class="price">￥${value.shopprice}</p>
  								<div id="">
  									<span class="btn">
  										加入购物车
  									</span>
  									<span class="iconfont icon-like-line"></span>
  								</div>
  								<ul class="advantage">
  									<li><span class="iconfont icon-liwu1"></span> <a href="">试用及旅行装礼赠
  										所有订单均获享2件试用装礼赠，订购满指定金额，即享迪奥明星产品旅行装</a> </li>
  									<li><span class="iconfont icon-liwu"></span><a href="">免费配送
  										所有订单均享免费顺丰速递</a> </li>
  									<li><span class="iconfont icon-baoguodingdanpeisong"></span><a href="">艺术包装
  										尊享Dior艺术包装</a> </li>
  								</ul>
  							</div>
  							<div class="product-bottom">
  								<h2>描述</h2>
  							 <p>${value.goodsstro}</p>
  							</div>	
  					 `
			}
		}).join('');

		$(oDetailMain).html(tmp2);
		$(".product-intro .btn").click(function() {
			new Ajax({
				type: "get",
				url: "cart.php",
				isAsyn: true,
				data: "oad="+Id,
				callBack: function(resText) {
					alert("添加成功，在购物车等亲")
				 
				}



			}).myAjax()

		})
	}

}).myAjax();
 
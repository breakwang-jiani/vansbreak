//轮播图
 




$(function() {
	let index = 0;
	let time;
	// $.setInter();

	$(".prev-next .icon-youjiantou1").click(function() {

		// index++;
		$.setBgcNext();
		$.setPointer();
	})
	$(".prev-next .icon-youjiantou").click(function() {
		// index--;
		$.setBgcPrev();
		$.setPointer();

	})
	$(".slick-bottom-pointer .po").eq(0).click(function() {

		// index++;
		$.setBgcNext();
		$.setPointer();
	})
	$(".slick-bottom-pointer .po").eq(1).click(function() {
		// index--;
		$.setBgcPrev();
		$.setPointer();
	})
	$(".slick-list").mouseover(function() {
		clearInterval(time);
	})
	$(".slick-list").mouseout(function() {
		$.setInter();
	})
	$(".slick-bottom-btn").click(function() {
		clearInterval(time);
	})
	$.extend({
		setPointer: function() {
			$(".slick-bottom-pointer .po").eq(index).css({
				width: 10,
				height: 10,
				"backgroundColor": "#000000",
			}).siblings().css({
				width: 6,
				height: 6,
				"backgroundColor": "#757575",
			})

		},
		setBgcNext: function() {
			index++;
			if (index == 2) {
				index = 0;

			}
			$("#main .slick-list .list").css({
				left: -1082 * index
			})

		},
		setBgcPrev: function() {

			index--;
			if (index == -1) {
				index = 1;

				$("#main .slick-list .list").css({
					left: -1082 * index
				})
			} else {
				$("#main .slick-list .list").css({
					left: 1082 * index
				})
			}


		},
		setInter: function() {
			time = null;
			time = setInterval(function() {
				$.setBgcNext();
				$.setPointer();
			}, 3000)

		}
	})

	$.setInter();

	$(".nav-content .list .pop").hide()
	$(".nav-content .list").mouseover(function() {
		$(this).children("a").css({
			"borderBottom": "2px solid black"
		})
		$(this).children(".pop").show();


	})

	$(".nav-content .list").mouseout(function() {
		$(this).children("a").css({
			"borderBottom": "none"
		})

		$(this).children(".pop").hide();



	})



	// $(".header-right a").eq(1).click(function(){
	//    console.log(localStorage);
	// })


})
var dfgd = document.querySelector(".slick-list .list");
new Ajax({
	type: "get",
	url: "detail.php",
	isAsyn: true,
	data: " ",
	callBack: function(resText) {
		
		let str = resText;
		let json = JSON.parse(str);
		let tmp = json.map(function(value, index, arr) {
			return `
			 <li>
			 	<a href="detailspage.html?oid=${value.Id}">
			 <img src="${value.goodsurl}" alt="">
			 		<div class="txt">
			 			<p>${value.goodstag}</p>
			 			<p>${value.googstitle}</p>
						<p>${value.goodsh2}</p>
			 			<p class="price">${value.shopprice}</p>
			 			<div class="con">
			 				<span class="iconfont icon-gouwudai"></span>
			 				<span>立即购买</span>
			 			</div>
			 		</div>
			 		<div class="like">
			 			<span class="iconfont icon-like-line"></span>
			 
			 		</div>
			 	</a>
			 	</li>`;
				 
		}).join('');
		$(dfgd).html(tmp)  ;
		
	}
}).myAjax();

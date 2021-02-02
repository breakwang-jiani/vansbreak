// class Cart {
// 		constructor(arg) {
// 			this.eventbind();

// 		}
// 		totalNumber() {
// 			let oNumber = document.getElementsByClassName("number");
// 			let sumNumber = 0;
// 			for (let i = 0; i < oNumber.length; i++) {
// 				sumNumber = sumNumber + Number(oNumber[i].innerHTML);
// 			}
// 			let oTotalNumber = document.getElementById("totalNumber");
// 			oTotalNumber.innerHTML = sumNumber;
// 		}
// 		totalMoney() {
// 			let oSmallPrice = document.getElementsByClassName("smallPrice");
// 			let totalPrice = 0;
// 			for (let i = 0; i < oSmallPrice.length; i++) {
// 				totalPrice = totalPrice + Number(oSmallPrice[i].innerHTML);
// 			}
// 			let oTotalMoney = document.getElementById("totalMoney");
// 			oTotalMoney.innerHTML = totalPrice;
// 		}
// 		smallPrice(number, singlePrice) {
// 			return number * singlePrice;
// 		}
// 		addNumber(btn) {
// 			// 数量
// 			let addNumber = btn.previousElementSibling;
// 			addNumber.innerHTML = Number(addNumber.innerHTML) + 1;
// 			// 小计
// 			let smallPrice = btn.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
// 			// 单价
// 			let singlePrice = btn.parentElement.nextElementSibling.firstElementChild;
// 			// 计算小计
// 			smallPrice.innerHTML = this.smallPrice(addNumber.innerHTML, singlePrice.innerHTML);

// 			this.totalNumber();
// 			this.totalMoney();
// 		}
// 		minNumber(btn) {
// 			let minNumber = btn.nextElementSibling;
// 			if (minNumber.innerHTML > 0) {
// 				minNumber.innerHTML = Number(minNumber.innerHTML) - 1;
// 				// 小计
// 				let smallPrice = btn.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
// 				// 单价
// 				let singlePrice = btn.parentElement.nextElementSibling.firstElementChild;
// 				// 计算小计
// 				smallPrice.innerHTML = this.smallPrice(minNumber.innerHTML, singlePrice.innerHTML);

// 				this.totalNumber();
// 				this.totalMoney();
// 			}

// 		}
// 		del(btn) {
// 			let oTr = btn.parentElement.parentElement;
// 			oTr.remove();
// 			this.totalNumber();
// 			this.totalMoney();
// 		}
// 		menuAdd(btn) {
// 			let that = this;
// 			let oMenuAdd = document.getElementsByClassName("menuAdd");
// 			// 菜单商品名称
// 			let menuName = btn.parentElement.parentElement.firstElementChild.nextElementSibling;
// 			// 菜单商品单价
// 			let menuPrice = btn.parentElement.previousElementSibling.firstElementChild;
// 			// 创建tr
// 			let oTr = document.createElement("tr");
// 			// 获取购物车
// 			let oShop = document.getElementById("shop");
// 			let oLastTr = oShop.children[0].lastElementChild;

// 			// 获取购物车中商品名称
// 			let oShopName = document.getElementsByClassName("shopName");
// 			let oId = document.getElementsByClassName("id");


// 			let flag = false; //列表没有重复则flase
// 			for (let i = 0; i < oShopName.length; i++) {
// 				if (oShopName[i].innerHTML == menuName.innerHTML) {
// 					that.addNumber(oShopName[i].nextElementSibling.lastElementChild);
// 					flag = true; //列表重复
// 					break;
// 				}

// 			}

// 			if (flag == false) {
// 				// oId[oId.length-1].innerHTML=Number(oId[oId.length-1].innerHTML) +1;

// 				oTr.innerHTML = 
// 					`<td class="id"><input type="checkbox" name="" id="" value="" /></td><td class="shopName">${menuName.innerHTML}</td>
// 				<td>
// 					<button class="butt" type="button">-</button>
// 					<span class="number">0</span>
// 					<button class="butt" type="button">+</button>
// 				</td>
// 				<td><span class="singlePrice">${menuPrice.innerHTML}</span></td>
// 				<td>小计：<span class="smallPrice">0</span></td>
// 				<td><input class="del" type="button" value="X"></td>`
// 				oShop.children[0].insertBefore(oTr, oLastTr);
// 				that.eventbind();
// 			}
// 		}
// 		eventbind() {
// 			let that = this;
// 			let button = document.querySelectorAll(".butt");
// 			// for (let i = 0; i < button.length; i++) {
// 				if (i % 2 == 0) {
// 					button[i].onclick = function() {
// 						that.minNumber(this);
// 					}
// 				} else {
// 					button[i].onclick = function() {
// 						that.addNumber(this);
// 					}

// 				}

// 			}
// 			let oDel = document.querySelectorAll(".del");
// 			for (let i = 0; i < oDel.length; i++) {
// 				oDel[i].onclick = function() {
// 					that.del(this);
// 				}

// 			}
// 			let oAdd = document.querySelectorAll(".menuAdd");
// 			for (let i = 0; i < oAdd.length; i++) {
// 				oAdd[i].onclick = function() {
// 					that.menuAdd(this);
// 				}
// 			}
// 			that.totalNumber();
// 			that.totalMoney();
// 		}
// 	}
//   let oIn=document.querySelectorAll(".id>input");
//   let allSelect=document.querySelector(".allSelect");
//    allSelect.onclick=function(){
// 	    if(this.checked){
// 			for(let i=0;i<oIn.length;i++){
// 				oIn[i].checked=true;
				
// 			} 
			
			 
// 		}else{
// 			for(let i=0;i<oIn.length;i++){
// 				oIn[i].checked=false;
				
// 			} 
// 		}
//    }
	  
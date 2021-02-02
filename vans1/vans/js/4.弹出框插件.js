class PopBox{
	constructor(newBox) {
	    this.box = newBox;
		this.delBtn = null;
	}
	
	setPosition(){
		//注意事项:所有和offset有关的属性，必须保证元素显示在页面
		this.box.style.display = "block";
		this.box.style.left = window.innerWidth/2 - this.box.offsetWidth/2 + "px";
		this.box.style.top = window.innerHeight/2 - this.box.offsetHeight/2+ "px";
		this.createDelBtn();
	}
	
	createDelBtn(){
		if(this.delBtn == null){
			this.delBtn = document.createElement("button");
			this.box.appendChild(this.delBtn);
			this.delBtn.innerHTML = "X";
			this.delBtn.style.position = "absolute";
			this.delBtn.style.width = "50px";
			this.delBtn.style.height = "25px";
			this.delBtn.style.left = this.box.offsetWidth - this.delBtn.offsetWidth + "px";
			this.delBtn.style.top = 0;
			this.closeBox();
		}
	}
	
	closeBox(){
		let that = this;
		this.delBtn.onclick = function(){
			that.box.style.display = "none";
		}
	}
}
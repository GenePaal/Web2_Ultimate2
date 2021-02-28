var Simg = document.getElementsByClassName("Simg");
var Bimg = document.getElementById("Bimg").getElementsByTagName("img");
var banner = document.getElementById("banner");
var nextImg = document.getElementById("right");
var previousImg = document.getElementById("left");
var nowImg = 0;
var descriptipon = document.getElementById("description");
var arr = ["简约", "低调", "内涵"];

function toNextImg() {
    Simg[nowImg].style.display = "none";
    nowImg = (nowImg + 1) % Simg.length;
    Simg[nowImg].style.top = 0;
    Simg[nowImg].style.left = 0;
    Simg[nowImg].style.display = "";
    descriptipon.innerHTML = arr[nowImg];
}
function toPreviousImg() {
    Simg[nowImg].style.display = "none";
    nowImg = (nowImg - 1 + Simg.length) % Simg.length;
    Simg[nowImg].style.top = 0;
    Simg[nowImg].style.left = 0;
    Simg[nowImg].style.display = "";
}
var bannerResult = setInterval(function () {
    toNextImg();
}, 1500);

nextImg.onclick = function () {
    toNextImg();
}
previousImg.onclick = function () {
    toPreviousImg();
}

banner.onmouseover = function () {
    clearInterval(bannerResult);
}
banner.onmouseout = function () {
    bannerResult = setInterval(function () {
        toNextImg();
    }, 1500);
}

var box = document.getElementById("box");
var slider = document.getElementById("slider");

box.onmouseover = function () {
    slider.style.display = "block";
}
box.onmouseout = function () {
    slider.style.display = "none";
    Bimg[nowImg].style.display = "none";
}

var bg1 = document.getElementById("bg1");
console.log(bg1.offsetLeft);
console.log(box.offsetLeft);
// console.log()
box.onmousemove = function (e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    var sliderWidth = slider.offsetWidth;
    var sliderHeight = slider.offsetHeight;
    var sliderLeft = mouseX - bg1.offsetLeft - box.offsetLeft - sliderWidth / 2;
    var sliderTop = mouseY - bg1.offsetTop - sliderHeight / 2;
    if (sliderLeft <= 0) {
        sliderLeft = 0;
    }
    else if (sliderLeft >= (box.offsetWidth - slider.offsetWidth)) {
        sliderLeft = box.offsetWidth - slider.offsetWidth;
    }

    if (sliderTop <= 0) {
        sliderTop = 0;
    }
    else if (sliderTop >= (box.offsetHeight - slider.offsetHeight)) {
        sliderTop = box.offsetHeight - slider.offsetHeight;
    }
    slider.style.left = sliderLeft + "px";
    slider.style.top = sliderTop + "px";
    Bimg[nowImg].style.display = "";
    Bimg[nowImg].style.left = "-" + (sliderLeft * 2) + "px";
    Bimg[nowImg].style.top = "-" + (sliderTop * 2) + "px";
}

var center = document.getElementById("center");
var logorryArr = [0, 1, 2, 3, 6, 8, 12, 11, 10, 9, 7, 4];
var td = document.getElementsByTagName("td");
// 点击中间开始抽奖
var i = 0;
// 当前是否在抽奖
var tag = false;
center.onclick = function () {
    if (tag) { // 若tag == true 说明当前正在抽奖，不能再抽
        alert("请等待当前抽奖结束后再进行抽奖");
    } else {
        tag = true;
        td[logorryArr[i]].style.backgroundColor = "#ccc";
        // 每次转的时间  是 3 + [0, 3] 的值
        var sumTime = (2 + Math.random() * 2) * 1000;
        var nowTime = 0;
        var logerryResult = setInterval(function () {
            nowTime += 50;
            if (nowTime > sumTime) {
                if (td[logorryArr[i]].innerHTML == "空") {
                    alert("谢谢惠顾");
                    clearInterval(logerryResult);
                } else if (isNaN(parseInt(td[logorryArr[i]].innerHTML)) && (nowTime % 200 == 0) && (Date.now() % 3 == 0)) {  
                    // 降低获得手表的概率， 黑心商家哈哈哈
                    alert("恭喜获得" + td[logorryArr[i]].innerHTML + "手表!");
                    clearInterval(logerryResult);
                } else if (isNaN(parseInt(td[logorryArr[i]].innerHTML))) { 
                    // 如何走到这，说明是抽到了手表但是不符合后边的条件，不能让用户把奖品拿走，所以，把手表下一个格子里的东西给用户
                    td[logorryArr[i]].style.backgroundColor = "";
                    i = (i + 1) % logorryArr.length;
                    td[logorryArr[i]].style.backgroundColor = "#CCC";
                } else {
                    alert("恭喜获得现金" + td[logorryArr[i]].innerHTML + "元!");
                    clearInterval(logerryResult);
                }
                tag = false;
            } else {
                td[logorryArr[i]].style.backgroundColor = "";
                i = (i + 1) % logorryArr.length;
                td[logorryArr[i]].style.backgroundColor = "#CCC";
            }
        }, 50);
    }

}
var timer = null,
    index = 0,
    pics = document.getElementsByTagName("li"),
    left = document.querySelector('.left'),
    right = document.querySelector('.right');

left.onclick = function() {
    if (index === 0) {
        index = pics.length-1;
        changeImg();
        // pics[index].style.display = 'none';
        // pics[index=pics.length-1].style.display = 'block';
    } else {
        --index;
        changeImg();
    }
}

right.onclick = function() {
    if (index === pics.length -1) {
        index = 0;
        changeImg();
    } else {
        ++index;
        changeImg();
    }
}

function slideImg() {
    var banner = document.querySelector('.banner');
    startAutoPlay();
    banner.onmouseout = function(){
        startAutoPlay();
    }
    banner.onmouseover = function(){
        stopAutoPlay();
    }
}
//开始播放轮播图
function startAutoPlay(){
    timer = setInterval(function(){
        index++;
        if(index === pics.length){
            index = 0;
        }
        changeImg();
    },1500);
}
//暂停播放
function stopAutoPlay(){
    if (timer) {
        clearInterval(timer);
    }
}
//改变轮播图
function changeImg(){
    for(var i=0;i<pics.length;i++){
        pics[i].style.display = "none";
    }
    pics[index].style.display = "block";
}
slideImg();

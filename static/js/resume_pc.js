//禁用回弹
document.body.addEventListener('touchmove', function (e) {
    e.preventDefault()
}, { passive: false })

start()
var timer = null;
var time = 0
var pageNow = 1

function start() {
    var obj = document.getElementById('page-1')
    var classname = obj.className;
    classname = classname.replace('hide', "");
    obj.className = classname;
    timer=setInterval(() => {
        console.log(time)
        ++time;
        // 友情提醒
        if (time == 4) {
            nextPage()
        }
        // 千万不要眨眼
        if (time == 6) {
            nextPage()
        }
        if (time == 7) {
            flash()
        }
        // 321go
        if (time == 8) {
            nextPage()
        }
        // 我的名字叫做杨杰
        if (time == 10) {
            nextPage()
        }
        if (time == 12) {
            flash()
        }
        // 这就是我，不好意思，放错了
        if (time == 13) {
            nextPage()
        }
        if (time == 18) {
            flash()
        }
        if (time == 19) {
            closeFlash()
        }
        // 接下来详细介绍下自己
        if (time == 21) {
            nextPage()
        }
        // come on，篮球，游泳，跑步
        if (time == 28) {
            nextPage()
        }
        // 这些都不是我的爱好
        if (time == 32) {
            nextPage()
        }
        // 我的爱好……学习，学习，学习
        if (time == 34) {
            nextPage()
        }
        // 这才是我的爱好
        if (time == 38) {
            nextPage()
        }
        // 好了好了不装逼了……
        if (time == 40) {
            nextPage()
        }
        // 最后祝您生活愉快万事如意
        if (time == 43) {
            nextPage()
            clearInterval(timer);//清除定时器
        }
    }, 1000)
}

function nextPage() {
    var nextPage = pageNow * 1 + 1
    var obj1 = document.getElementById('page-' + pageNow)
    var obj2 = document.getElementById('page-' + nextPage)

    // 当前page添加 hide
    var classname1 = obj1.className;
    classname1 = classname1 == '' ? 'hide' : classname1 + ' hide';
    obj1.className = classname1;

    // 下一个page删除 hide
    var classname2 = obj2.className;
    classname2 = classname2.replace('hide', "");
    obj2.className = classname2;

    ++pageNow
}

function flash() {
    var classname = document.getElementById('page-' + pageNow).className;
    //添加 flash 样式
    classname = classname == '' ? 'flash' : classname + ' flash';
    document.getElementById("page-" + pageNow).className = classname;
}

function closeFlash() {
    var classname = document.getElementById('page-' + pageNow).className;
    //添加 flash 样式
    classname = classname.replace('flash', "");
    document.getElementById("page-" + pageNow).className = classname;
}
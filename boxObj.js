function getScrollOffsets(w) {
    w=w||window;
    //除了IE8-,其它浏览器兼容
    if(w.pageXOffset!=null)return{x:w.pageXOffset,y:w.pageYOffset}

    //标准模式IE（获其它浏览器）
    var d=w.document;
    if (document.compatMode == 'CSS1Compat')
        return{x:d.documentElement.scrollHeight,y:d.documentElement.scrollTop};

    //怪异模式的浏览器
    return {x:d.body.scrollLeft,y:d.body.scrollTop}
}
function getViewportSize(w) {
    w = w || window;
    //IE8+ 或其它浏览器
    if (w.innerWidth !== null)return {w: w.innerWidth, h: w.innerHeight};

    //标准模式IE（获其它浏览器）
    var d = w.document;
    if (document.compatMode == 'CSS1Compat')
        return{w:d.documentElement.clientWidth,h:d.documentElement.clientHeight};

    //怪异模式的浏览器
    return {w:d.body.clientWidth,h:d.body.clientHeight}
}
function getRectPosition(e) {
    var box =e.getBoundingClientRect();//获取在窗口坐标中的位置 IE5+
    var offsets =getScrollOffsets(w);

    //文档坐标
    var x=box.left+offsets.x;
    var y=box.top+offsets.y;

    //W3C标准中getBoundingClientRect()返回的对象包括width和height 原始IE未实现，因此
    var w=box.width||(box.right-box.left);
    var h=box.height||(box.bottom-box.top);

    return{x:x,y:y,w:w,h:h};

}

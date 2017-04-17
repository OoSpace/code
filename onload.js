function _addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
_addLoadEvent(spring_x);

_addLoadEvent(spring_m);

_addLoadEvent(spring_h);

function spring_x() {
    document.write('x');
}

function spring_m() {
    document.write('m');
}

function spring_h() {
    document.write('h');
}

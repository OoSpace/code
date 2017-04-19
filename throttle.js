//函数节流
const throttle = (fun, delay) => {
    let last = null;
    return () => {
        const now = + new Date();
        if (now - last > delay) {
            fun();
            last = now;
        }
    }
}
//实例
const throttleExample  = throttle(() => console.log(1), 1000);
//调用
throttleExample();
throttleExample();
throttleExample();
//函数防抖
cosnt debouce = (fun, delay) => {
    let timer = null;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun();
        }, delay);
    }
}
//实例
const debouceExample = debouce(() => console.log(1), 1000);
//调用
debouceExample();
debouceExample();
debouceExample();

function method(arg1, arg2, arg3, arg4){
    console.log(this, arg1, arg2, arg3,arg4);
}
var obj = {};
obj.method = method;


function bind(){
    var arg = Array.prototype.slice.call(arguments);
    var method = arg.shift();
    var self = arg.shift();
    return function(){
        return method.apply(self, arg.concat(Array.prototype.slice.call(arguments)));
    }
}
obj.method1 = bind(method, window);
obj.method2 = bind(method, obj, 1, 2);

obj.method1(1, 2, 3, 4);

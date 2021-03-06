/**
 * Created by oosap on 2016/10/6.
 */
(function(){
    var root =this;// window or exports
    var previousUnderscore=root._;
    var ArrayProto=Array.prototype,ObjProto=Object.prototype,FuncProto=Function.prototype;
    var push=ArrayProto.push,
        slice=ArrayProto.slice,
        toString=ObjProto.toString;
        hasOwnProperty=ObjProto.hasOwnProperty;

    var nativeIsArray=Array.isArray,
        nativeKeys=Object.keys,
        nativeBind=FuncProto.bind,
        nativeCreate=Object.create;
    var Ctor=function () {

    }
    var _=function(obj){
        if(obj instanceof _) return obj;
        if(!(this instanceof _))return new _(obj);
        this._wrapped=obj;
    }

    if(typeof exports !=='undefined'){
        if(typeof module !== 'undefined' && module.exports){
            exports=module.exports=_;
        }
        exports._=_;
    }else{
        root._=_;
    }
    _.VERSION='1.8.2';

    var optimizeCb=function(func,context,argCount){
        if(context=== void 0) return func;
        switch (argCount==null ? 3:argCount){
            case 1:return function(value){
                return func.call(context,value);
            };
            case 2:return function(value,other){
                return func.call(context,value,other);
            };
            case 3:return function (value,index,collection) {
                return  func.call(context,value,index,collection);
            };
            case 4:return function (accumulator, value,index,collection) {
                return func.call(context,accumulator,value,index,collection);
            };
        };
        return function () {
            return func.apply(context,arguments);
        }

    }
}.call(this))
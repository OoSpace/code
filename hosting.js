function foo() { 
var x = 1; 
if (x) { 
(function () { 
var x = 2; 
// some other code
}()); 
}
console.log(x)
// x is still 1.
}
foo();//在我们写js code 的时候，我们有2中写法，一种是函数表达式，另外一种是函数声明方式。我们需要重点注意的是，只有函数声明形式才能被提升

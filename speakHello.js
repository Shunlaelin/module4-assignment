(function(window){
	var yaakovHello={};
var paulHello={};
var frankHello={};
var larryHello={};
var paulaHello={};
var lauraHello={};

yaakovHello.name="Yaakov";
paulHello.name="Paul";
frankHello.name="Frank";
larryHello.name="Larry";
paulaHello.name="Paula";
lauraHello.name="Laura";

var hello = "Hello ";

yaakovHello.sayHello = function(){
	console.log(hello+ yaakovHello.name);
}
paulHello.sayHello = function(){
	console.log(hello+ paulHello.name);
}
frankHello.sayHello = function(){
	console.log(hello+ frankHello.name);
}
larryHello.sayHello = function(){
	console.log(hello+ larryHello.name);
}
paulaHello.sayHello = function(){
	console.log(hello+ paulaHello.name);
}
lauraHello.sayHello = function(){
	console.log(hello+ lauraHello.name);
}
window.yaakovHello = yaakovHello;
window.paulHello = paulHello;
window.frankHello = frankHello;
window.larryHello = larryHello;
window.paulaHello = paulaHello;
window.lauraHello = lauraHello;



})(window);


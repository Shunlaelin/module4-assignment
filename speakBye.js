(function(window){
	var johnGoodbye={};
var jenGoodbye={};
var jasonGoodbye={};
var jimGoodbye={};

johnGoodbye.name="John";
jenGoodbye.name="Jen";
jasonGoodbye.name="Jason";
jimGoodbye.name="Jim";

var goodBye ="Good Bye ";

johnGoodbye.sayGoodbye = function(){
	console.log(goodBye+ johnGoodbye.name);
}
jenGoodbye.sayGoodbye = function(){
	console.log(goodBye+ jenGoodbye.name);
}
jasonGoodbye.sayGoodbye = function(){
	console.log(goodBye+ jasonGoodbye.name);
}
jimGoodbye.sayGoodbye = function(){
	console.log(goodBye+ jimGoodbye.name);
}

window.johnGoodbye = johnGoodbye;
window.jenGoodbye = jenGoodbye;
window.jasonGoodbye = jasonGoodbye;
window.jimGoodbye = jimGoodbye;


})(window);


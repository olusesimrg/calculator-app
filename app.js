var display = "";
var result;
var number1 = document.getElementById("num-1");
var number2 = document.getElementById("num-2");
var number3 = document.getElementById("num-3");
var number4 = document.getElementById("num-4");
var number5 = document.getElementById("num-5");
var number6 = document.getElementById("num-6");
var number7 = document.getElementById("num-7");
var number8 = document.getElementById("num-8");
var number9 = document.getElementById("num-9");
var number0 = document.getElementById("num-0");

//selecting the sign id
var sumNumber = document.getElementById("sum");
var divNumber = document.getElementById("div");
var multNumber = document.getElementById("mult");
var subtNumber = document.getElementById("subt");
var numberDot = document.getElementById("dot");

// selecting the clear and submit id

var clearAll = document.getElementById("clear");
var submit = document.getElementById("result");
var backNumber = document.getElementById("back");

//adding eventListener to each number

number1.addEventListener("click", function(){key_pressed(1)});
number2.addEventListener("click", function(){key_pressed(2)});
number3.addEventListener("click", function(){key_pressed(3)});
number4.addEventListener("click", function(){key_pressed(4)});
number5.addEventListener("click", function(){key_pressed(5)});
number6.addEventListener("click", function(){key_pressed(6)});
number7.addEventListener("click", function(){key_pressed(7)});
number8.addEventListener("click", function(){key_pressed(8)});
number9.addEventListener("click", function(){key_pressed(9)});
number0.addEventListener("click", function(){key_pressed(0)});


// addding eventListener to each signs

sumNumber.addEventListener("click", function(){op_pressed("+")});
divNumber.addEventListener("click", function(){
	op_pressed("/");
});
multNumber.addEventListener("click", function(){
	op_pressed("*");
});
subtNumber.addEventListener("click", function(){
	op_pressed("-");
});
numberDot.addEventListener("click", function(){key_pressed(".")});
//adding eventLister to clear sign
 clearAll.addEventListener("click", function(){
 	reset();
 });
 //backspace Number
  backNumber.addEventListener("click", function(){
 	   backSpace(); 
 });
 //adding eventListener to submit sign
 submit.addEventListener("click", function(){
    equal();
 });
  submit.addEventListener("dblclick", function(){
  	displayBoard.value = (solved.value);
  	solve.value = "";

  	//display = eval(display);
 	//displayBoard.value = (display);
 	//display = (display) + "";
 	//solved.value = "= " + display;
    
 });
// var h1 = document.getElementById("head");

 //selecting display board
  var displayBoard = document.getElementById("display");
  var solved = document.getElementById("solve");
  // setting my called functions

  function op_pressed(x){
  	display += x
  	//display += " " + x + " ";
  	displayBoard.value = display;
  	
  };
// function number buuton 
   function key_pressed(x){
   	// for continues adding of keys
   	display += String(x);
   	// setting display board to variable display
   	displayBoard.value = display;
   
   	
   };
// the clear function which is also known as reset button
   function reset(){
   	// var display back to nothing
   	display = "";
   	// setting displayboard back to 0 value
   	displayBoard.value = "0";
   	// solution board back to nothing
   	solved.value = "";
   
   };
// function for backspacing number or signs
function backSpace(){
	// creation a new variable and giving it the value of displayboard.
		var num = displayBoard.value;
		// calculating the length of the displayboard then minus 1 from it
    var lnth= num.length-1
		var newNum = num.substring(0, lnth);
		displayBoard.value = newNum;
		display = displayBoard.value
	};

	function equal(){
	display = eval(display);
 	//displayBoard.value = (display);
 	display = (display) + "";
 	solved.value = display
	};


// var str = "" + "" + "";
// 	if (displayBoard == str){
// 		solved.value = "=" + display;
// 	}

	/*function backSpace() {
  
  var number = box.value;
  
  var len = number.length - 1;
  
  var newNumber = number.substring( 0, len );
  
  box.value = newNumber;

} function backspace() {
numbers=document.getElementById('num1').value; 
lnth=numbers.length-1;
newnum=numbers.substring(0,lnth);
document.getElementById('num1').value=newnum;
}
*/
//backNumber.substr(0, backNumber.length - 1)
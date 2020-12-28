function gettemp(){
	return document.getElementById("temp-value").innerText;
}

function printtemp(num){
	document.getElementById("temp-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printtemp("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var temp=gettemp();
			if(output==""&&temp!=""){
				if(isNaN(temp[temp.length-1])){
					temp= temp.substr(0,temp.length-1);
				}
			}
			if(output!="" || temp!=""){
				output= output==""?output:reverseNumberFormat(output);
				temp=temp+output;
				if(this.id=="="){
					var answer=eval(temp);
					printOutput(answer);
					printtemp("");
				}
				else{
					temp=temp+this.id;
					printtemp(temp);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}
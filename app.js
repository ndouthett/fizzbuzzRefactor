$(document).ready(function() {
	var firstNum =  (prompt("Enter a number: "));
   numCheck(firstNum);
   
});

function fizzBuzz(firstNum) {
for (var i = 1; i <= firstNum; i++) {

		if (i % 15 === 0) {
			$('.results').append('FizzBuzz');

		}
        else if (i % 3 === 0) {
			$('.results').append('Fizz');

		} 
        else if (i % 5 === 0) {
			$('.results').append('Buzz');

		} 
        else {
			$('.results').append(i);
		}
		$('.results').append('<br />');
	}
}

function numCheck(firstNum) {
    if (firstNum%1 != 0 || firstNum == 0 || firstNum[0] == " ") {
		alert("Please try again with an integer number.");
    }else
        fizzBuzz(firstNum);
}





    

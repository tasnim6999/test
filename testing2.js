<!DOCTYPE html>
<html>
<body>

<h2>My First JavaScript</h2>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>


// Try to extract the repeating code as a function. 
// Do note that your function should give dynamic output depends on the input.
// You should be calling your function for 3 times.

// Hint: To create a function, first observe what are the repeating code. Once you identified the repeating part, put them into a function


// Define a function to print year information
function printYearInfo(currentYear) {
  console.log(`This is the year ${currentYear}`);
  console.log(`Next year is ${currentYear + 1}`);
}

// Call the function three times with different years
printYearInfo(2022);
printYearInfo(1998);
printYearInfo(2036);



</body>
</html> 

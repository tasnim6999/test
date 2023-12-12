/*
  Conditionals 2
  ---------------------------------
  Write a function that checks if a student has passed
  - if the grade is less than 50 then return "failed"
  - if 50 or higher then return "passed"

*/

// Step 1: define a function named "studentPassed" and takes in one input (score)
// Step 2: Complete the function logic based on the instructions
// Add your code below

function studentPassed(score)
{
    if (score>50)
    {
        return "passed";
    }else{
        return "failed";
    }
}
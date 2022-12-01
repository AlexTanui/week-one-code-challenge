
// global variable for congratualation messages
const fail = 'you have failed ! 🖐️'
const pass = "Congratulation! you have passed this module 💪"

// function to check student grades when marks is inserted 
function studentGrade () {
    
    
    let score = parseInt(document.getElementById("marks").value)
    if (score>100){
        document.getElementById("result").innerHTML = "Not valid"
        alert('you cannot have marks higher than 100')
       
    }
    if ( score >= 79){
   
    document.getElementById("result").innerHTML = 'your grade is A'
    document.getElementById("message").innerHTML = `${pass}`
 }
 else if ( score  >=60 ){
    
    document.getElementById("result").innerHTML = "your grade is B"
 }
 

 else if ( score  >=49){
    document.getElementById("result").innerHTML = "your grade is C"
 
 }
 else if ( score  >=40 ){
    document.getElementById("result").innerHTML = "your grade is D" 
 
 }
 else if ( score  <= 39 ){
    document.getElementById("result").innerHTML = 'your grade is E'
    document.getElementById("message").innerHTML = `${fail}`
 }


}
// event listener for button to check grade
document.getElementById("btn").addEventListener('click',studentGrade)

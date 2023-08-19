//Question 1:
// Write a JavaScript program that takes a person's age as input and then outputs 
// whether they are a child (age less than 12), a teenager (age between 12 and 19), or an adult (age 20 or above)


// let age =90;


// if(age<12){
//     console.log("You are a child")
// }
// else if( age>=12 && age<=19){
//     console.log("You are a teenager")
// }

// else{
//     console.log("You are an adult")
// }

// //Question 2:
// Create a program that prompts the user for a number and checks whether it's
//  positive, negative, or zero. Print an appropriate message based on the input.


// let num1=19;
// let num2=-0;
// let num3=0;
// let num4=-23.67;

// function num_check(num){
//     if (num>0){
//         console.log("positive  Numnber")
//     }
//     else if (num<0){
//         console.log("Negative  Numnber")
//     }
//     else  {
//         console.log("It's a  Zero")
//     }
// }

// num_check(num1);
// num_check(num2);
// num_check(num3);
// num_check(num4);
 


// Write a function that takes a day of the week as a parameter and returns whether it's a weekday or a weekend.

// function Day_check(day){
//     if (day=="Sunday" ||day=="Saturday"  ){
//         console.log("It's a weekend")
//     }
//     else if(day=="Monday" ||day=="Tuesday"){
//         console.log("It's a week_day")
//     }
//     else if(day=="Thursday" ||day=="Wednesday"){
//         console.log("It's a week_day")
//     }
//     else if(day==Friday){
//         console.log("It's a week_day")
//     }
// }
// let day1= "Sunday";
// let day2= "Monday";
// let day3= "Wednesday";
// let day4= "Thursday";
// Day_check(day1)
// Day_check(day2)
// Day_check(day3)
// Day_check(day4)

// Create a program that helps a user choose a suitable clothing outfit based on the weather temperature. 
// Prompt the user to enter the temperature, and then suggest an outfit like "shorts and a t-shirt" if 
// it's hot (above 25°C), "jeans and a sweater" if it's cool (10-25°C), and "coat and scarf" if it's cold (below 10°C).

function cloth_check(temp){
    
if(temp<10){
    console.log("coat and scarf" );}
    
 else if(temp>25){
    console.log("shorts and a t-shirt")
}
else if(temp>=10 && temp <=25){
    console.log("jeans and a sweater" )
}


}
temp1=80//shorts and a t-shirt
temp2=8//coat and scarf
temp3=25//jeans and a sweater
temp4=10//jeans and a sweater

cloth_check(temp1)
cloth_check(temp2)
cloth_check(temp3)
cloth_check(temp4)




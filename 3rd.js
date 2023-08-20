// Write a function that takes a day of the week as a parameter and returns whether it's a weekday or a weekend.

function Day_check(day){
    if (day=="Sunday" ||day=="Saturday"  ){
        console.log("It's a weekend")
    }
    else if(day=="Monday" ||day=="Tuesday"){
        console.log("It's a week_day")
    }
    else if(day=="Thursday" ||day=="Wednesday"){
        console.log("It's a week_day")
    }
    else if(day==Friday){
        console.log("It's a week_day")
    }
}
let day1= "Sunday";
let day2= "Monday";
let day3= "Wednesday";
let day4= "Thursday";
Day_check(day1)
Day_check(day2)
Day_check(day3)
Day_check(day4)
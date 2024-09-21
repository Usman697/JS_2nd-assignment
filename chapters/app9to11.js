// Q=1
document.write('//Q=1<br>')
var cityname=prompt('enter your city name')
if(cityname==='karachi'){document.write('you belongs to city of lights<br>')}
else{document.write('you belongs to normal city <br>')}

//Q=2
document.write('//Q=2<br>')
var gender=prompt('please enter your gender')
if(gender==='male'){document.write('good morning sir!<br>')}
else if(gender==='female'){document.write("good morning ma'am!<br> ")}

//Q=3
document.write('//Q=3<br>')
var signalcolor=prompt('enter the color from green,red and yellow')
if(signalcolor==='red'){document.write('must stop!<br>')}
else if(signalcolor==='green'){document.write('move now!<br>')}
else if(signalcolor==='yellow'){document.write('ready to move!<br>')}

//Q=4
document.write('//Q=4<br>')
var remainingfuel=+prompt('enter the remaining fuel quantity')
if(remainingfuel<0.25){document.write('please refill the fuel in your car<br>')}
else{document.write('enjoy driving<br>')}

//Q=5
document.write('//Q=5<br>')
var a = 4;
if (++a === 5) { alert("given condition for variable a is true") }
var b = 82;
if (b++ === 83) { alert("given condition for variable b is true") }
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true")
}
if (c === 13) { alert("condition 2 is true") }
if (++c < 14) { alert("condition 3 is true") }
if (c === 14) { alert("condition 4 is true") }
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) { alert("The cost equals") }
if (true) {
    alert("True");
}
if (false) { alert("False") }
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//Q=6
document.write('//Q=6<br>')
var grade
var remarks
var marksofmath=+prompt('enter the obtained marks of math')
var marksofeng=+prompt('enter the obtained marks of english')
var marksofurdu=+prompt('enter the obtained marks of urdu')
var totalmarks=300
var totalobtainedmarks=marksofeng+marksofmath+marksofurdu
var totalpercentage=(totalobtainedmarks/totalmarks)*100
if(totalpercentage>=80){remarks='excellent';grade='A-one'}
else if(totalpercentage>=70){remarks='good';grade='A'}
else if(totalpercentage>=60){remarks='you need to improve';grade='B'}
else if(totalpercentage<60){remarks='sorry';grade='fail'}
document.write(`<h1>Marks Sheet</h1>
    <p>Total Marks = ${totalmarks}<br>
    Marks Obtained = ${totalobtainedmarks}<br>
    Percentage = ${totalpercentage}%<br>
    Grade = ${grade}<br>
    Remarks = ${remarks}<br></p>
    `)

//Q=7
document.write('//Q=7<br>')
var mynum=4
var guessnum=+prompt('enter a number from 1 to 10 0nly')
if(mynum===guessnum){document.write('bingo! correct answer<br>')}
else if(guessnum===++mynum){document.write('close enough to correct answer<br>')}
else if(guessnum===--mynum){document.write('close enough to correct answer<br>')}
else{document.write('wrong answer<br>')}

//Q=8
document.write('//Q=8<br>')
var num8=+prompt('enter any number to check is it divisible by 3 or not')
if(num8%3===0){document.write('yes '+num8+ ' is divisible by 3<br>')}
else{document.write('sorry '+num8+' is not divisible by 3<br>')}

//Q=9
document.write('//Q=9<br>')
var num9=+prompt('enter a number to check is it even or odd')
if(num9%2===0){document.write(num9+' is even number<br>')}
else{document.write(num9+' is odd number<br>')}

//Q=10
document.write('//Q=10<br>')
var temp=+prompt('enter the value of temperature')
if(temp>40){document.write('“It is too hot outside.”<br>')}
 else if(temp>30){document.write('“The Weather today is Normal.”<br>')}
 else if(temp>20){document.write('“Today’s Weather is cool.”<br>')}
 else if(temp>10){document.write('“OMG! Today’s weather is so Cool.”<br>')}

//Q=11
document.write('//Q=11<br>')
var firstnum=+prompt('enter first number')
var secondnum=+prompt('enter second number')
var operation=prompt('please enter the mathematics operation you want, like addition,subtraction,multipily,divide and modulus')
if(operation==='addition'){var result=firstnum+secondnum;document.write('Result = '+result)}
else if(operation==='subtraction'){var result=firstnum-secondnum;document.write('Result = '+result)}
else if(operation==='multipily'){var result=firstnum*secondnum;document.write('Result = '+result)}
else if(operation==='divide'){var result=firstnum/secondnum;document.write('Result = '+result)}
else if(operation==='modulus'){var result=firstnum%secondnum;document.write('Result = '+result)}
else{document.write('this operation is not available')}
//CH=6 to 9
//Q=1
document.write('//Q=1<br>')
var a=+prompt('enter a number')
document.write('the value of a is '+a+'<br>')
++a
document.write('now the value of a is '+a+'<br>')
a++
document.write('now the value of a is '+a+'<br>')
--a
document.write('now the value of a is '+a+'<br>')
a--
document.write('now the value of a is '+a+'<br>')

//Q=2
document.write('//Q=2<br>')
var a=+prompt('enter first number')
var b=+prompt('enter second number')
document.write('a = '+a+'<br>')
document.write('b = '+b+'<br>')
var result = --a - --b + ++b + b--;
document.write('result = '+result+'<br>')

//Q=3
document.write('//Q=3<br>')
var username=prompt('please enter your name')
document.write('hi '+username+'! how are you '+username+'<br>')

//Q=5
document.write('//Q=5<br>')
var number=+prompt('enter a number for table counting')
var num=5
if(number>0){document.write(number+'x1 = '+ number*1+'<br>')
     document.write(number+'x2 = '+ number*2+'<br>')
     document.write(number+'x3 = '+ number*3+'<br>')
     document.write(number+'x4 = '+ number*4+'<br>')
     document.write(number+'x5 = '+ number*5+'<br>')
     document.write(number+'x6 = '+ number*6+'<br>')
     document.write(number+'x7 = '+ number*7+'<br>')
     document.write(number+'x8 = '+ number*8+'<br>')
     document.write(number+'x9 = '+ number*9+'<br>')
     document.write(number+'x10 = '+ number*10+'<br>')
    }
    else{document.write(num+'x1 = '+ num*1+'<br>')
        document.write(num+'x2 = '+ num*2+'<br>')
        document.write(num+'x3 = '+ num*3+'<br>')
        document.write(num+'x4 = '+ num*4+'<br>')
        document.write(num+'x5 = '+ num*5+'<br>')
        document.write(num+'x6 = '+ num*6+'<br>')
        document.write(num+'x7 = '+ num*7+'<br>')
        document.write(num+'x8 = '+ num*8+'<br>')
        document.write(num+'x9 = '+ num*9+'<br>')
        document.write(num+'x10 = '+ num*10+'<br>')}

//Q=6
document.write('//Q=6<br>')
var sub1=prompt('enter first subject name')
var sub2=prompt('enter second subject name')
var sub3=prompt('enter third subject name')
var totalmarksofsub1=100
var totalmarksofsub2=100
var totalmarksofsub3=100
var obtainedmarksofsub1=+prompt("enter the marks of subject 1")
var obtainedmarksofsub2=+prompt("enter the marks of subject 2")
var obtainedmarksofsub3=+prompt("enter the marks of subject 3")
var totalmarks=totalmarksofsub1+totalmarksofsub2+totalmarksofsub3
var totalobtainedmarks=obtainedmarksofsub1+obtainedmarksofsub2+obtainedmarksofsub3
var perofsub1=(obtainedmarksofsub1/totalmarksofsub1)*100
var perofsub2=(obtainedmarksofsub2/totalmarksofsub2)*100
var perofsub3=(obtainedmarksofsub3/totalmarksofsub3)*100
var totalpercentage=(totalobtainedmarks/totalmarks)*100
document.write(`
    <table border=2px>
    <tr>
    <th>SUBJECTS</th>
    <th>TOTAL MARKS</th>
    <th>OBTAINED MARKS</th>
    <th>PERCENTAGE</th>
    </tr>
    <tr>
    <th> ${sub1}</th> 
    <td>${totalmarksofsub1}</td>
    <td>${obtainedmarksofsub1}</td>
    <td>${perofsub1}%</td>
    </tr>
    <tr>
    <th> ${sub2}</th> 
    <td>${totalmarksofsub2}</td>
    <td>${obtainedmarksofsub2}</td>
    <td>${perofsub2}%</td>
    </tr>
    <tr>
    <th> ${sub3}</th> 
    <td>${totalmarksofsub3}</td>
    <td>${obtainedmarksofsub3}</td>
    <td>${perofsub3}%</td>
    </tr>
    <tr>
    <th> FINAL RESULTS</th> 
    <td>${totalmarks}</td>
    <td>${totalobtainedmarks}</td>
    <td>${totalpercentage}%</td>
    </tr>
    </table>
    `)

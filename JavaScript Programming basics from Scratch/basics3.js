let marks = Array(6)
var marks = new Array(20,40,35,12,37,100)

var marks = [20,40,35,12,37,100]
subMarks = marks.slice(2,5)
console.log(subMarks)



console.log (marks[2]) //35
marks[3] = 14
console.log(marks) //[20,40,35,14,37,100]
console.log(marks.length) //6 
marks.push(65)
console.log(marks) // [20,40,35,14,37,100]
marks.pop()//[20,40,35,14,37,100]
marks.unshift(12)
console.log(marks)
console.log(marks.indexOf(100))
//120 in the array
console.log(marks.includes(120))
var sum = 0
marks.slice(2,5)
for(let i=0;i<marks.length;i++)
{
    //console.log(marks[i])
    sum = sum + marks[i] //32+40
}
console.log(sum)
//reduce filter map
let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)
var scores = [12,13,14,16]
//create new array with even numbers of scores array [12,14,16]
var evenScores
for(let i = 0;i<scores.length;i++)
{
    if (scores [i] %2 == 0)
    {
        evenScores.push(scores[i])
    } 
}
console.log(evenScores)
let newFilterEvenScores = scores.filter(score=>score%2==0)
console.log(newFilterEvenScores) //[12,14,16]=>[36,52,48]

//map
let mappedArrey=newFilterEvenScores.map(score=>score*3)
console.log(mappedArrey)
let totalVal=mappedArrey.reduce((sum,val)=>sum+val,0)
console.log(totalVal)
var scores = [12,13,14,16]

let sumValue=scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue)

let fruiits = ["Banana","mango","pomegrante","apple"]

fruits.sort()
fruits.reserve()


var scores1= [12,13,19,16,14] //9
console.log(scores1.sort())
scores1.sort((a,b)=> a-b)































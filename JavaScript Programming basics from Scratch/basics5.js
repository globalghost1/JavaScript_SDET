let day = 'tuesday'
console.log(day.length)  //8
let subDay = day.slice(0,5)
console.log(subDay)
console.logh(day[1]) //u
//tue day
let splitDay = day.split("s")
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString()

let newQuote = day + "is Funday"
console.log(newQuote)
let val = newQuote.indexOf("day",5)
console.log(val)
//tuesday is Funday
let count = 0
let val = newQuote.indexOf("day")
while(val!== -1){
    count++
    val = newQuote.indexOf("day",val+1)
}

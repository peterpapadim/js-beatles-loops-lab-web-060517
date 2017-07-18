 var theBeatlesPlay = (musicians, instruments) => {
   var newArray = []
   for (i = 0; i < musicians.length; i++){
     newArray.push(`${musicians[i]} plays ${instruments[i]}`)
   }
   return newArray
 }

var johnLennonFacts = (array) => {
  var newArray = []
  i = 0
  while (i < array.length) {
    newArray.push(`${array[i]}!!!`)
    i++
  }
  return newArray
}

var iLoveTheBeatles = (number) => {
  var newArray = []
  i = number
  do {
    newArray.push("I love the Beatles!")
    i++
  }
  while (i < 15)

  return newArray
}

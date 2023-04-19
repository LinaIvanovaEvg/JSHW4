// Task 1

// function cutStr(str) {
//   return str.split("").slice(0, 30).join("") + "...";
// }
// console.log(cutStr("Because they could stand that these were not monsters."));



// Task 2

// function upStr(str) {
//   let Arr = str.split("").map((i) => {
//     if (i === i.toUpperCase()) {
//       i = i.toLowerCase();
//       return i
//     } else {
//       i = i.toUpperCase();
//       return i
//     }
//   }).join ('')
//   return Arr
//   }
// console.log(upStr("C&C Red Alert 3"));



// Task 3

// function aboutString(str) {
//   let Sign = str.split("")[str.split("").length - 1];
//   let Sent;
//   if (Sign === ".") {
//     Sent = "affirmative";
//   } else if (Sign === "?") {
//     Sent = "question";
//   } else if (Sign === "!") {
//     Sent = "exclamatory ";
//   } else {
//     Sent = null;
//   }
//   return {
//     allSymbals: str.length,
//     symbolsWithoutSpaces: str.split(" ").join("").length,
//     quantityOfWords: str.split(" ").length,
//     sentenceType: Sent,
//   };
// }
// console.log(
//   aboutString("Because they could stand that these were not monsters:")
// );



// Task 4

//  function replaceWord(str,word){
//    let Arr=str.split(' ').map((item)=>{
//     if (item.toUpperCase()===word.toUpperCase()){
//            return item.split('').map((i)=>i='*').join('')
//          } else {
//           return item
//          }
//          }).join(' ')
// return Arr
//  }
//  console.log( replaceWord('Repent before bloody rabbi punish you!', 'rabbi') );

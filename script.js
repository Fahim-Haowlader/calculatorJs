
// console.log("hi")

//  let expression = document.getElementById('expression');
//  let result = document.getElementById ('result')
//  let clear = document.getElementById('clear');

//  clear.addEventListener("click",()=>{
//    expression.innerHTML = "0"
//    result.innerHTML = " 0"
//  })

// let number1 = document.getElementById('one')
// let num1Value = number1.innerText
// number1.addEventListener("click",()=>{
//     expression.innerHTML += num1Value
// })
// let number2 = document.getElementById('two')
// number2.addEventListener("click",()=>{
//     expression.innerHTML += number2.innerText
// })
// let number3 = document.getElementById('three')
// number3.addEventListener("click",()=>{
//     expression.innerHTML += number3.innerText
// })
// let number4 = document.getElementById('four')
// number4.addEventListener("click",()=>{
//     expression.innerHTML += number4.innerText
// })
// let number5 = document.getElementById('five')
// number5.addEventListener("click",()=>{
//     expression.innerHTML += number5.innerText
// })
// let number6 = document.getElementById('six')
// number6.addEventListener("click",()=>{
//     expression.innerHTML += number6.innerText
// })
// let number8 = document.getElementById('eight')
// number8.addEventListener("click",()=>{
//     expression.innerHTML += number8.innerText
// })
// let number7 = document.getElementById('seven')
// number7.addEventListener("click",()=>{
//     expression.innerHTML += number7.innerText
// })
// let number9 = document.getElementById('nine')
// number9.addEventListener("click",()=>{
//     expression.innerHTML += number9.innerText
// })
// let number0 = document.getElementById('zero')
// number0.addEventListener("click",()=>{
//     expression.innerHTML += number0.innerText
// })
// let decimal = document.getElementById('decimal')
// decimal.addEventListener("click",()=>{
//     expression.innerHTML += decimal.innerText
// })

// let add = document.getElementById('add')
// add.addEventListener("click",()=>{
//     expression.innerHTML += add.innerText
// })
// let subtract = document.getElementById('subtract')
// subtract.addEventListener("click",()=>{
//     expression.innerHTML += subtract.innerText
// })
// let multiply = document.getElementById('multiply')
// multiply.addEventListener("click",()=>{
//     expression.innerHTML += multiply.innerText
// })
// let openingBbracket = document.getElementById('opening-bracket')
// openingBbracket.addEventListener("click",()=>{
//     expression.innerHTML += "("
// })
// let closingBracket = document.getElementById('closing-bracket')
// closingBracket.addEventListener("click",()=>{
//     expression.innerHTML += closingBracket.innerText
// })
// let percentage = document.getElementById('percentage')
// percentage.addEventListener("click",()=>{
//     expression.innerHTML += percentage.innerText
// })
// let divide = document.getElementById('divide')
// divide.addEventListener("click",()=>{
//     expression.innerHTML += "/"
// })

// let equals = document.getElementById('equals')
// equals.addEventListener("click",()=>{
//     result.innerHTML= expression.innerText
// })
// console.log(number3.innerText)

let buttons = document.querySelectorAll('.number')
console.log(buttons)
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
       
        if (e.target.innerText == "=") {
            if (Array.from(document.querySelector('input').value) < 1){
                document.getElementById('result').innerText = "0"
            }
            else {
            try {
                document.getElementById('result').innerText = eval(document.querySelector('input').value)
               
            }
            catch (error) {
                document.getElementById('result').innerText = "Error"
            }
            finally {
                document.querySelector('input').value = " "
            }
            }
        }
        else if (e.target.innerText == "C") {
            document.querySelector('input').value = ""
        }
        else {
           document.querySelector('input').value += e.target.innerText

                

            // console.log(document.querySelector('input').value )
            // document.querySelector('input').value += e.target.innerText
        
        }
    })
})

// Todo: Make M+ M- and MC functional
// let string = "";
// let buttons = document.querySelectorAll('.button');
// // console.log(buttons)
// // Array.from(buttons).forEach((button)=>{
// //   button.addEventListener('click', (e)=>{
// //     if(e.target.innerHTML == '='){
// //         console.log(e.target.innerHTML)
// //       string = eval(string);
// //       document.querySelector('input').value = string;
// //     }
// //     else if(e.target.innerHTML == 'C'){
// //       string = ""
// //       document.querySelector('input').value = string;
// //     }
// //     else{ 
// //     console.log(e.target)
// //     string = string + e.target.innerHTML;
// //     document.querySelector('input').value = string;
// //  }
// //      console.log
// //   })
// // })

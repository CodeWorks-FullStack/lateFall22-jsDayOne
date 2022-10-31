console.log('js loaded')


console.log('mick', 'shannahan')

// PRIMITIVE data types
let string = "hello"
let number = 5
let number2 = 5.678704
let bool = true // or false
let dontKnow = undefined // unknown nothing
let variable1
let nothing = null // known nothing
let variable2 = null

// REFERENCE Types
// ARRAY
// stores information by index/position/order (0,1,2)
let strArr = ['Howdy', 'Hello', 'What is up']
let numArr = [5, 10, 687]
let mixArr = ['5', 10, ['sup']] // try to avoid mixed type arrays

// OBJECT
// stores information by KEY VALUE pair. 
let person = {
  age: 28,
  name: 'Mick',
  costume: 'Mega-Mind'
}

function doSomething() {
  console.log('I did something')
}

// NOTE concepts for the future
// let funky = function () {
//   console.log('this is a funky way to do it')
// }
// let funcArr = [funky]

function returnSomething() {
  return 'something' // returns value from function to where the function was called
}

function sum() {
  return 5 + 10
}
console.log(returnSomething(), sum())

// STUB the real app begins below

let secretCode = '👻🎃🎃🧟'

let yourCode = ''

function ghost() {
  yourCode += '👻'
  console.log(yourCode)
  drawCode()
}

function zombie() {
  yourCode += '🧟'
  console.log(yourCode) // if you change data, console log the data.
  drawCode()
}

function pumpkin() {
  yourCode += '🎃'
  console.log(yourCode)
  drawCode()
}

function spider() {
  yourCode += '🕷️'
  console.log(yourCode)
  drawCode()
}

function submit() {
  // debugger
  let isCodeCorrect = yourCode == secretCode
  console.log('code check', isCodeCorrect);
  if (isCodeCorrect) {
    console.log('correct')
    window.alert('correct')
  } else {
    console.log('inccorect')
    window.alert('inccorect')
  }
}

function clearCode() {
  // debugger // pause your code in action to watch the changes happen.
  yourCode = ''
  // console.log(yourCode)? maybe, you feeling lucky?
  drawCode()
}

function drawCode() {
  let codeElm = document.getElementById('your-code')
  console.log(codeElm);
  codeElm.innerText = yourCode
}
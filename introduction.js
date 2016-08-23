const name = 'Keith Wade'
const genderFemale = false
const age = 23
const major = 'Computer Science'
const school = 'Union College'
const standings = ['freshman', 'sophomore', 'junior', 'senior', 'graduate']
const yearsCompleted = 4
const vowels = ['a', 'e', 'i', 'o', 'u']

const message = `Hello, my name is ${name}. I am ${age} years old and I am ${vowels.indexOf(major.charAt(0).toLowerCase()) > -1 ? 'an' : 'a'} ${major} ${standings[yearsCompleted]} ${yearsCompleted > 3 ? 'from' : 'at'} ${school}.`

console.log(message)

// Fancyish things
let wrapper = document.createElement('div')

let textElement = document.createElement('h1')
textElement.textContent = message

let button = document.createElement('button', '', {})
button.textContent = 'Click me!'
button.onclick = function () {
  const voice = genderFemale ? 'UK English Female' : 'UK English Male'
  responsiveVoice.speak(message, voice)
}

wrapper.appendChild(textElement)
wrapper.appendChild(button)

document.body.appendChild(wrapper)

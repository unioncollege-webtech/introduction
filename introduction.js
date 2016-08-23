// Variables
let name = 'Keith Wade'
let age = 23
let major = 'Computer Science'
let school = 'Union College'
let yearsCompleted = 4

// Constants
const classStanding = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Alumnus']
const vowels = ['a', 'e', 'i', 'o', 'u']

// Message
const message = `Hello! My name is ${name}. I'm ${age} years old, and I am ${vowels.indexOf(major.charAt(0).toLowerCase()) > -1 ? 'an' : 'a'} ${classStanding[yearsCompleted]} ${major} major ${yearsCompleted > 3 ? 'from' : 'at'} ${school}.`

console.log(message)

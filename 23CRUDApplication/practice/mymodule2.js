export const person = {
  name: 'Usman',
  age: 25,
  email: 'ehmusman@gmail.com'
}


export function sayHello(){
  return `Hello ${person.name}`
}

const greeting = `Hello ${person.name}, i heared that you have become ${person.age} years old`

export default greeting;


const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function toArray(string) {
  //Converts a given string into an array
  return string.split(' ')
}

function capitaliseFirstElement(array) {
  //Converts the first element of an array to UPPERCASE and adds the rest of the elements as the originals
  return array[0].toUpperCase() + array.slice(1)
}

const titleCased = () => {
  //Create an array that contains each string element into a sub-array
  let tutorialsArrays = tutorials.map(toArray)
  
  //Create an array that will contain the strings with uppercased first letters
  const finalArray = []
  
  //Loop over the sub-arrays, capitalises first letters with .map method and converts back to string with .join method
  for (let i=0; i<= tutorialsArrays.length - 1; i++) {
    finalArray.push(tutorialsArrays[i].map(capitaliseFirstElement).join(' '))
  }
  return finalArray
}

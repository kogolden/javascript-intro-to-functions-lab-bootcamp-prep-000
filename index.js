function shout(string) { 
  return string.toUpperCase() 
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  const spy = 'HELLO'
  console.log(spy)
}
function logWhisper(string) {
  const spy = 'hello'
  console.log(spy)
}
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    console.log("I can't hear you!")
  }
  else if (string.toUpperCase() === string) {
    console.log("YES INDEED!")
  }
  else if (string === "I love you, Grandma.") {
    console.log("I love you, too.")
  }
}
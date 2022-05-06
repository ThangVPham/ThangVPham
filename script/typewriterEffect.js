

let typewriterSection = document.querySelector('.typewriterSection');
console.log(typewriterSection);

let typewriter = new Typewriter(typewriterSection, {
    loop: false,
    delay: 75,
  });

    typewriter
    .pauseFor(1000)
    .typeString("I Am A Creative Thinker.")
    .pauseFor(2000)
    .deleteChars(17) 
    .typeString("Problem Solver.")
    .pauseFor(2000)
    .deleteChars(15)
    .typeString("Web Developer.")
    .start();

let typewriterSection = document.querySelector('.typewriterSection');

let typewriter = new Typewriter(typewriterSection, {
    loop: false,
    delay: 40,
    deleteSpeed: 10,
  });

    typewriter
    .pauseFor(200)
    .typeString("I Am A <strong><span style='color: #c58512;'>Tech Enthusiast.</span></strong>")
    .pauseFor(1000)
    .deleteChars(16) 
    .typeString("<strong><span style='color: #c58512;'>Problem Solver.</span></strong>")
    .pauseFor(1000)
    .deleteChars(15)
    .typeString("<strong><span style='color: #c58512;'>Software Developer.</span></strong>")
    .start();


const quotes = ["The only difference between a good day and a bad day is your attitude.", "Change your thoughts and you'll change your world.","Doubt kills more dreams than failure ever will.","Mistakes are proof that you're trying.", "Your attitude, not aptitude, will determine your altitude."];

let quoteSection = document.querySelector('.quoteSection');

// quoteSection.innerHTML = quotes[0];

let typewriter = new Typewriter(quoteSection, {
    loop: true,
    delay: 75,
  });

for(let i =0; i<quotes.length; i++){
    typewriter
    .pauseFor(2500)
    .typeString(quotes[i])
    .pauseFor(3500)
    .deleteChars(quotes[i].length)
    .start();
}


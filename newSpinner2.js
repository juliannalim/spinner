process.stdout.write('hello from newspinner1.js... \rheyyy\n');

// const spinner2 = function () {

//   let delay = 0;
//   // running through how many times to spin the spinner aka how many times it will "loop"/spin
//   for (i = 0; i < 2; i++) {
//     setTimeout(() => {
//       process.stdout.write('\r|   '), delay;
//     }, delay += 100);

//     setTimeout(() => {
//       process.stdout.write('\r/   '), delay;
//     }, delay += 200);

//     setTimeout(() => {
//       process.stdout.write('\r-   '), delay;
//     }, delay += 200);

//     setTimeout(() => {
//       // Need to escape the backslash since it's a special character.
//       process.stdout.write('\r\\   '), delay;
//     }, delay += 200);

//     // the start of the next cycle, the end of the first cycle
//     setTimeout(() => {
//       process.stdout.write('\r|   '), delay;
//     }, delay += 200);

//   }
//   setTimeout(() => console.log(), delay);
// }

const spinner2 = function (symbols) {

  let delay = 0;

  for (i = 0; i < 2; i++) {
    for (let symbol of symbols) {
      setTimeout(() => {
        process.stdout.write(symbol), delay;
      }, delay += 200);
    }
  }
  setTimeout(() => console.log(), delay);
};

symbols = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
spinner2(symbols);


process.stdout.write('hello from spinner2.js... \rheyyy\n');

// const spinner = function () {
//   let delay = 0;
//   for (i = 0; i < 2; i++) {
//       setTimeout(() => {
//         process.stdout.write('\r|   ');
//       }, delay += 200);

//       setTimeout(() => {
//         process.stdout.write('\r/   ');
//       }, delay += 200);

//       setTimeout(() => {
//         process.stdout.write('\r-   ');
//       }, delay += 200);

//       setTimeout(() => {
//         // Need to escape the backslash since it's a special character.
//         process.stdout.write('\r\\   '); 
//       }, delay += 200);
//   }
// }

const spinner = function(symbols) {
  let delay = 0;

  for (let i = 0; i < 3; i++) {
    for (const symbol of symbols) {
        setTimeout(() => {
          process.stdout.write(symbol);
        }, delay += 200);
    }
  }
}

const symbols = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

spinner(symbols);
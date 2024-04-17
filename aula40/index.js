// let control = 0;

// while (control <= 10) {
//     console.log(control);
//     control++;
// }

function random(min, max) {
    const aleatory = Math.random() * (max - min) + min;
    return Math.floor(aleatory);
}

const min = 1;
const max = 50;

let infrequent = random(min, max);
console.log(infrequent);

console.log('!!!!!!!!!!!!!!!!!!!!!!!!');

do {
    infrequent = random(min, max);
    console.log(infrequent);
} while (infrequent !== 10);
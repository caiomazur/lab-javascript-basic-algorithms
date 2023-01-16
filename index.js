// Iteration 1: Names and Input
// 1.1 to 1.4:
const hacker1 = 'Caio';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Tomás';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
// 2.1

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1
// Name separated by space and capital letters:
let newHacker1 = '';
for (i = 0; i < hacker1.length; i++) {
    newHacker1 += `${hacker1[i]} `;
}
console.log(newHacker1.toUpperCase());

// 3.2 Reverse string order:
let newHacker2 = '';
for (i = hacker2.length - 1; i >= 0; i--) {
    newHacker2 += `${hacker2[i]}`;
}
console.log(newHacker2);

// 3.3 Depending on the lexicographic order of the strings:
if (hacker1.localeCompare(hacker2) === -1) {
    //console.log("The driver's name goes first.");
} 
else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("Yo, the navigator goes first definitely.");
}

// 4 Bonus TIme!

// Bonus 1
// 1.1 Generate 3 paragraphs:
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis, tellus et volutpat scelerisque, augue mi interdum leo, consectetur malesuada sem nunc in mauris. In euismod fringilla ornare. Nunc feugiat enim id velit sollicitudin, ac ornare mauris interdum. Nulla facilisi. Maecenas eu dolor quis justo fermentum vestibulum ut sed nibh. Vivamus consectetur egestas dignissim. Aenean vitae gravida urna. Nam quis laoreet mi. Etiam vulputate mi quis orci ultrices eleifend. Proin sed venenatis est. Pellentesque eget leo sed ante hendrerit varius vitae eu tortor. Nunc consectetur risus et neque congue, non placerat ligula feugiat. Sed in enim sodales, scelerisque lectus vel, euismod dolor. Integer ac molestie felis, eu vehicula metus. Donec sit amet gravida metus.

Aliquam ac lacinia justo, in vulputate felis. Sed a ornare neque. Vivamus a condimentum nibh. Donec scelerisque, sem ac tincidunt luctus, mi ligula semper arcu, egestas placerat tellus metus a enim. Donec dui erat, rhoncus at rutrum ut, pulvinar at mi. Praesent ullamcorper volutpat quam sit amet posuere. Curabitur mollis elit tortor, a placerat est rhoncus ut.

Nunc consectetur, nulla a ornare tristique, purus felis mollis libero, nec imperdiet purus mi ac ipsum. Praesent commodo molestie risus egestas finibus. Nullam eu sapien nunc. Etiam eget enim massa. Aliquam vel placerat mi. Vestibulum tincidunt velit vel ipsum laoreet semper. Vestibulum molestie tristique magna, in imperdiet eros hendrerit ac. Integer nunc dui, elementum eu eros ut, consectetur tincidunt neque. Ut nec tortor a ante lobortis gravida sed vitae diam. Morbi mattis nec lectus non sollicitudin.`;

// 1.2 Word Count: 
let count = 0;
for (i = 0; i < longText.length; i++) {
    if (longText[i] === ` `) {
        count++;
    }
}
console.log(count);

let countEt = 0;

for (i = 0; i < longText.length; i++) {
    if (longText[i] + longText[i + 1] + longText[i + 2] + longText[i + 3] === ' et ') {
        countEt++;
    }
}
console.log(countEt);

// Bonus 2! Palindrome:

let phraseToCheck = 'Amor';
phraseToCheck = phraseToCheck.toLowerCase();

let wordReversed = '';
 
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  let ltrRev = phraseToCheck[i];
  wordReversed += ltrRev;
}
console.log(wordReversed);

let wordReReversed = '';

for (let j = wordReversed.length - 1; j >= 0; j--) {
let ltrRev = wordReversed[j];
wordReReversed += ltrRev;
}

if (phraseToCheck.localeCompare(wordReReversed) === 0 ) {
    console.log(`${phraseToCheck} is a palindrome! :)`)
}
else {
    console.log(`Ohh sorry ${phraseToCheck} is not a palindrome!`);
}



let message1 = " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";
let message2 = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";
let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";

let decoded1 = message1.split('').reverse().join('');
let decoded2 = message2.split('').reverse().join('');
let decoded3 = message3.split('').reverse().join('');
let decoded4 = message4.split('').reverse().join('');

console.log("===== Task 1: Decoded Messages =====");
console.log("");
console.log("Message 1:");
console.log(decoded1);
console.log("");
console.log("Message 2:");
console.log(decoded2);
console.log("");
console.log("Message 3:");
console.log(decoded3);
console.log("");
console.log("Message 4:");
console.log(decoded4);
console.log("");

let myMessage1 = "Live, Laugh, Love.";
let myMessage2 = "You can do it.";
let myMessage3 = "Anything is possible.";

let chars1 = myMessage1.split('');
chars1.reverse();
let reversed1 = chars1.join('');

let chars2 = myMessage2.split('');
chars2.reverse();
let reversed2 = chars2.join('');

let chars3 = myMessage3.split('');
chars3.reverse();
let reversed3 = chars3.join('');

console.log("===== Task 2: My Reversed Messages =====");
console.log("");
console.log("Original: " + myMessage1);
console.log("Reversed: " + reversed1);
console.log("");
console.log("Original: " + myMessage2);
console.log("Reversed: " + reversed2);
console.log("");
console.log("Original: " + myMessage3);
console.log("Reversed: " + reversed3);
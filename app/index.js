// app/index.js
console.log("Hello World!");

let notUsed = "not used";
const notUsedConst = "not used";

for (let i = 0; i < 10; i++) {
    console.log(i);
    notUsed += i;
}
let foo = 0;
if (foo) foo++;

for (let i = 0; i < 10; i++) {
    console.log(i);
}
let a = 2;
switch (a) {
    case 1:
        /* code */
        break;
}

console.log(notUsedConst);
console.log(notUsed);

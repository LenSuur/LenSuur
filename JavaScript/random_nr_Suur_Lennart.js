let randomNr = Math.floor(Math.random() * 10) + 1;
let userNr;
for (let i = 0; i<3; i++) {
     userNr = prompt("Sisesta üks number 1-10-ni");
     if (userNr == randomNr) {
         console.log("Yay! Arvasid õige numbri ära!");
         break;
     } else if (userNr == randomNr -1 || userNr == randomNr +1){
         console.log("Ai, sa pakkusid väga lähedale.");
     }else {
         console.log(`Sorry, ${userNr} ei ole õige number.`);
     }
}
console.log(randomNr);
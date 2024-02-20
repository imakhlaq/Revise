//for

for (let i = 0; i < 10; i++) {}

//enchance
const arr = [12, 3, 4, 2, 332];

for (let i of arr) {
  console.log(i);
}

//while

let j = 0;

while (j < 0) {
  //code

  j--;
}

//dowhile

//do {} while (i < 0);

//exp

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;

  if (i === 7) break;

  console.log(i);
}

//nested loop
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
    if (j === 0) console.log(`i run for ${i} time`);
    console.log(`j run for ${j} time`);
  }
}

// two player game

//create two player

//generate a number 100

//start

//player 1
// 100-4=96

//player 2
//100-10=90

//..

///p1
//10-10=0

//p2
//won

function getName() {
  const name = prompt("Enter name");

  return function (e) {
    e.target.textContent = name;
  };
}

document.getElementById("0011").addEventListener("click", getName());

/*console.log({ i });

var i = 10;

const j = 20;

let k = 30;

function f() {
  l = 20;
}

f();

console.log({ i, j, k, l });*/

//
for (var l = 0; l < 5; l++) {
    setTimeout(function () {
        console.log(l);
    }, 1000);
}
/*

l=5
{
  setTimeout(function () {
    console.log(l);
  }, 1000);
}
{
  setTimeout(function () {
    console.log(l);
  }, 1000);
}
{
  setTimeout(function () {
    console.log(l);
  }, 1000);
}
{
  setTimeout(function () {
    console.log(l);
  }, 1000);
}
 */
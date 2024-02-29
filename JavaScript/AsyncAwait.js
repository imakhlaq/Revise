/*
//setTimeout
console.log("Outside");

const id = setTimeout(() => {
  console.log("after 2sec");
}, 2000);

console.log("end");

clearTimeout(id);

//setInterval
const id2=setInterval(() => {
  console.log("after every 2sec");
}, 2000);

clearInterval(id2)

*/

// async await
/*
async function getData(url) {
  const res = await fetch(url);
  const res2 = await fetch(res.url);
  const res3 = await fetch(res2.url);

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

async function ran() {
  await getData("www.google.com");
}*/

//promise

const myPromise = new Promise((resolve, reject) => {
  const data = "ipl";
  if (data === "ipl") {
    resolve(data);
  } else {
    reject("no data");
  }
});

/*myPromise.then((data) => console.log(data)).catch((err) => console.log(err));*/

/*async function getSomething() {
  try {
    const data = await myPromise;
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("resetting state");
  }
}

getSomething();*/

//promise combinators

//big task

//important task

/*
Promise.resolve(function () {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }
}).then((data) => console.log(data()));

console.log("important");

Promise.reject(function () {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }
}).then((data) => console.log(data()));
*/

//promise combinators

const data = Promise.race([fetch(), fetch(), fetch()]);
Promise.any();

async function getData(url) {
  const res = fetch(url[0]); //100ms
  const res2 = fetch(url[1]); //200ms
  const res3 = fetch(url[2]); //300ms

  const data = await Promise.all([res, res2, res3]);

  const data2 = await Promise.allSettled([res, res2, res3]);

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

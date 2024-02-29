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
/*async function getData(url) {
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


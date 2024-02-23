//callback hell
function getName(cb) {
  const ans = Promise.resolve("akhleq");
  cb(ans, profile);
}

function getPass(name, cb) {
  const ans = Promise.resolve(true);
  cb(ans);
}

function profile(ans) {
  return Promise.resolve("registered");
}

getName(getPass);

function f() {
  function g() {
    function h() {
      function gk() {
        function gj() {}
      }
    }
  }
}

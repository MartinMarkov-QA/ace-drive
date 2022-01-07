
let seconds = document.getElementById('seconds');

setInterval(() => {
  seconds.innerHTML--;
  if (seconds.innerHTML < 1) {
    location.replace("https://martin-markov1980.github.io/ace-drive/");
  }
  console.log(1);
}, 1000)


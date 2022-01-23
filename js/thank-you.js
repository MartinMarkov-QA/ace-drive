// Redirect the 'Thank you' page to the home page after 10 seconds. 
let seconds = document.getElementById('seconds');

setInterval(() => {
  seconds.innerHTML--;
  if (seconds.innerHTML < 1) {
    location.replace("https://acedrivedt.co.uk");
  }
  console.log(1);
}, 1000)

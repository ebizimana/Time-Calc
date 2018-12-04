var el = document.getElementById('time_span')
var input = document.getElementById("minIn");

setInterval(function() {
  var currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes(),
    ampm = hours > 11 ? 'PM' : 'AM';

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (hours > 12) {
    hours -= 12
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  el.innerHTML = hours + ":" + minutes + " " + ampm;
}, 1000);

// To make sure the "Enter Key" Works
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("myBtn").click();
  }
});

function time_limite() {
  var currentTime = new Date();
  var hourIn = document.getElementById("hourIn").value;
  var minIn = document.getElementById("minIn").value;
  var resulth = document.getElementById("resulth");

  var result = new Date(currentTime.getTime() + (hourIn * 3600000) + (minIn * 60 * 1000));

  var newhour = result.getHours();
  var newmin = result.getMinutes();
  var ampm = newhour > 11 ? 'PM' : 'AM';
  if (newmin < 10) {
    newmin = "0" + newmin;
  }

  if (newhour <= 12) {
    resulth.innerHTML = ("Hour: " + newhour + ":" + newmin + " " + ampm);
  } else if (newhour > 12 && newhour < 17) {
    var hourn = newhour - 12;
    resulth.innerHTML = ("Hour: " + hourn + ":" + newmin + " " + ampm);
  } else if (newhour >= 17) {
    resulth.innerHTML = ("5:00 WE ARE CLOSED");
  }

}

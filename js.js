// let time = "aug 20,2022 :00:00" ;

//Set the date we're counting down to
let button = document.getElementById('button');
let button1 = document.getElementById('stopbutton');
button.addEventListener('click', (e) => {
  e.preventDefault();
  let hour = document.getElementById('Hour').value;
  let minute = document.getElementById('Minutes').value;
  let second = document.getElementById('Seconds').value;
  let month = document.getElementById('month').value;
  let date = document.getElementById('date').value;
  let year = document.getElementById('year').value;
  console.log(hour)
  
  if(hour==24){
    var time = `"` + month + " " + date + "," + year + " " + hour + ":" + minute + ":" + second + `"`;
  }
  
  else if((hour>=0)&&(hour<24)&&(minute>=0)&&(minute<60)&&(second>=0)&&(second<60)){
    var time = month + " " + date + " " + "," + year + " " + hour + ":" + minute + ":" + second;
  }

  console.log(time);

  var countDownDate = new Date(time).getTime();
  console.log(countDownDate)

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();
    console.log(now)


    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Wake up my boy";
      let audio = new Audio("alarmring.mp3");
      audio.play();
    }
  }, 1000);
})


button1.addEventListener('click',stpit);

function stpit(){
  audio = '';
}

// without timer normal alarm clock like mobile phone. ..........................................

// let audio1 = new Audio("alarmring.mp3");

//after click buuton 
// let diff = time - now;  // it will give us diff in miliseconds -- jo uper distance hai thik vaise he yaha diff hai--
// setTimeout(() => {
//   audio1.play();
// }, diff);

//...............................................................................................



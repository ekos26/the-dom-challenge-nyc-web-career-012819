document.addEventListener("DOMContentLoaded", function(){
  let counter = document.getElementById('counter');
  let negativity = document.getElementById('-');
  let positivity = document.getElementById('+');
  let submit = document.getElementById('submit');
  let pause = document.getElementById('pause');

  negativity.addEventListener('click', function () {
     counter.innerText--;
   })

   positivity.addEventListener('click', function () {
      counter.innerText++;
    })

  let myTimer = setInterval(setTimer, 1000)

  function setTimer() {
    counter.innerText++;
  }

  let clickCount = 0

  pause.addEventListener('click', function () {
    clickCount++
    if (clickCount % 2 === 0) {
      myTimer = setInterval(setTimer, 1000)
      pause.innerText = 'pause';
      document.getElementById('+').disabled = false;
      document.getElementById('-').disabled = false;
      document.getElementById('<3').disabled = false;
      document.getElementById('submit').disabled = false;
    }
    else {
      clearInterval(myTimer);
      pause.innerText = 'resume';
      document.getElementById('+').disabled = true;
      document.getElementById('-').disabled = true;
      document.getElementById('<3').disabled = true;
      document.getElementById('submit').disabled = true;
    }
  })

  submit.addEventListener('click', function(event) {
    event.preventDefault();
    let input = document.getElementsByTagName('input')[0].value

    commentList = document.getElementById('list');
    let para = document.createElement('P');
    let t = document.createTextNode(input);
    para.appendChild(t);
    document.body.appendChild(para);
  })

})

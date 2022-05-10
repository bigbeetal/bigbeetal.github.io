let input = document.getElementById('feedbackInput');
let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', submit);
function submit () {
  console.log('click')
  text=input.value;
  let url='mailto:bigbeetal.co@gmail.com?body='+text;
  window.open( url)
}
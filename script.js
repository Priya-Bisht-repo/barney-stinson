const awesomeWords = ["legendary", "suit up", "awesome", "bro", "epic", "wait for it"];
const lameWords = ["boring", "meh", "lame", "bad"];

const sunglasses = document.getElementById('sunglasses');
const tear = document.getElementById('tear');
const message = document.getElementById('message');
const inputBox = document.getElementById('inputBox');
const submitBtn = document.getElementById('submitBtn');
const suitSound = document.getElementById('suitSound');
const displayImage = document.getElementById("barneyImg");

function resetVisuals() {
  sunglasses.classList.remove('drop');
  sunglasses.style.display = 'none';
  tear.style.display = 'none';
  message.classList.remove('typing');
  document.body.style.backgroundColor = '#f0f0f0';
}

submitBtn.addEventListener('click', () => {
  const text = inputBox.value.toLowerCase();
  const isAwesome = awesomeWords.some(word => text.includes(word));
  const isLame = lameWords.some(word => text.includes(word));

  resetVisuals();
  message.classList.add('typing');

  if (isAwesome) {
    displayImage.src = 'barney-happy.png';
    sunglasses.style.display = 'block';
    setTimeout(() => {
      sunglasses.classList.add('drop');
    }, 50);
    suitSound.play();
    message.textContent = "That was awesome. You may proceed, bro!";
    document.body.style.backgroundColor = "#d4edda";
  } else if (isLame) {
    displayImage.src = 'barney-sad.png'
    tear.style.display = 'block';
    message.textContent = "Barney is not impressed. Try again!";
    document.body.style.backgroundColor = "#f8d7da";
  } else {
    displayImage.src = 'barney-neutral.png'
    message.textContent = "";
  }
});

inputBox.addEventListener("keypress", (e) =>{
  if(e.key == "Enter") submitBtn.click();
})

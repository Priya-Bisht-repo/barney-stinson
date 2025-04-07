const awesomeWords = ["legendary", "suit up", "awesome", "bro", "epic", "wait for it"];
const lameWords = ["boring", "meh", "lame", "bad"];

const inputBox = document.getElementById('inputBox');
const barneyImg = document.getElementById('barney');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
  const text = inputBox.value.toLowerCase();
  let isAwesome = awesomeWords.some(word => text.includes(word));
  let isLame = lameWords.some(word => text.includes(word));

  if (isAwesome) {
    barneyImg.src = 'barney-happy.png';
    message.textContent = 'That was awesome. You may proceed, bro!';
  } else if (isLame) {
    barneyImg.src = 'barney-sad.png';
    message.textContent = 'Barney is not impressed. Try again!';
  } else {
    barneyImg.src = 'barney-neutral.png';
    message.textContent = '';
  }
});

const yesBtn = document.getElementById("yes");

const noBtn = document.getElementById("no");

const yayText = document.getElementById("yay");

const yayText1 = document.getElementById("yay1");

const can1 = document.getElementById("can1");

const can = document.getElementById("can");

noBtn.addEventListener("click", () => {
  yesBtn.style.width = `${yesBtn.offsetWidth + 40}px`;

  yesBtn.style.height = `${yesBtn.offsetHeight + 40}px`;

  const emojis = ["😢", "😭", "😞", "😔", "😩"];
  let index = 0;

  const displayEmoji = () => {
    document.getElementById("can").textContent = emojis[index];
    index = (index + 1) % emojis.length; // Loop through the emojis
  };

  // Start displaying emojis every second after the "No" button is clicked
  const intervalId = setInterval(displayEmoji, 1000);

  // Stop displaying emojis after 5 seconds (adjust as needed)
  setTimeout(() => {
    clearInterval(intervalId);
    document.getElementById("can").textContent = "please 🥺??"; // Reset text
  }, 3000);
});

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDelay = Math.random() * 3 + "s"; // Randomize animation delay
    document.body.appendChild(confetti);
  
    // Remove confetti element after animation ends
    confetti.addEventListener("animationend", () => {
      confetti.remove();
    });
  }

yesBtn.addEventListener("click", () => {
  yayText.style.display = "block";

  yayText1.style.display = "block";

  can.style.display = "none";

  can1.style.display = "none";

  for (let i = 0; i < 50; i++) {
    createConfetti();
  }

  fetch('http://localhost:1000/api/v1/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: 'User clicked Yes button' })
  })
  .then(response => {
    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.error('Failed to send email');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var card = document.querySelector(".card");

  card.addEventListener("click", function() {
    card.classList.toggle('is-flipped');
  });

  setTimeout(function() {
    beardedBoo();
  }, 300);
});

function beardedBoo() {
  var body = document.body,
      image = document.getElementById("image");

  body.classList.remove("no", "maybe");
  image.classList.remove("benefits", "certificate");

  var answer = prompt("Will you be my valentine? Yes, No, Maybe?").toLowerCase();

  if (answer === "yes" || answer === 'y') {
    body.classList.add("yes");
    image.classList.add("certificate");
  } else if (answer === "maybe" || answer === 'm') {
    body.classList.add("maybe");
    setTimeout(function() {
      alert("Perhaps you are not aware of the many benefits");
      image.classList.add("benefits");
    }, 200);
    setTimeout(beardedBoo, 6000);
  } else {
    body.classList.add("no");
    setTimeout(function() {
      alert("Say it isn't so. Please try again.");
      beardedBoo();
    }, 200);
  }
}

function askForValentine() {
  // body.classList.remove("container");
  var response = prompt("Will you be my Valentine? (Type 'yes' or 'no')");

  if (response.toLowerCase() === 'yes') {
      showLoveLetter();
  } else {
      alert("Wrong answer woman");
  }
}

// Function to show the love letter
function showLoveLetter() {
  document.getElementById('container').style.display = 'block';
}

// Ask for Valentine when the page loads
askForValentine();

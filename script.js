// Typing Effect

let text = ["Web Developer", "Frontend Developer", "UI Designer"];

let i = 0;
let j = 0;

function typing() {
  if (j < text[i].length) {
    document.getElementById("typing").innerHTML += text[i][j];

    j++;

    setTimeout(typing, 150);
  } else {
    setTimeout(remove, 1000);
  }
}

function remove() {
  if (j > 0) {
    document.getElementById("typing").innerHTML = text[i].substring(0, j - 1);

    j--;

    setTimeout(remove, 100);
  } else {
    i++;

    if (i == text.length) {
      i = 0;
    }

    setTimeout(typing, 300);
  }
}

typing();

// Mobile Menu

function toggleMenu() {
  let menu = document.getElementById("menu");

  menu.classList.toggle("active");
}

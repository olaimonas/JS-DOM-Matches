var cardsArray = [
    {    'name': 'CSS',    'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true',  },
    {    'name': 'HTML',    'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true',  },
    {    'name': 'jQuery',    'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true',  },
    {    'name': 'JS',    'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true',  },
    {    'name': 'Node',    'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true',  },
    {    'name': 'Photo Shop',    'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true',  },
    {    'name': 'PHP',    'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true',  },
    {    'name': 'Python',    'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true',  },
    {    'name': 'Ruby',    'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true',  },
    {    'name': 'Sass',    'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true',  },
    {    'name': 'Sublime',    'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true',  },
    {    'name': 'Wordpress',    'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true',  },
  ];

var gameCards = cardsArray.concat(cardsArray);
gameCards.sort(() => 0.5 - Math.random());

var gameFrame = document.getElementById("game-board");

var grid = document.createElement("section");
grid.setAttribute("class", "grid");

gameFrame.appendChild(grid);

gameCards.forEach(item => {
  var card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;

  var front = document.createElement("div");
  front.classList.add("front");

  var back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${item.img})`;

  card.appendChild(front);
  card.appendChild(back);

  grid.appendChild(card);
});

var count = 0;
var firstChoice = "";
var secondChoice = "";
var delay = 500;

function match() {
  var selected = document.querySelectorAll(".selected");
  selected.forEach(item => item.classList.add("match"));
}

function resetGuesses() {
  var selected = document.querySelectorAll(".selected");
  selected.forEach(item => item.classList.remove("selected"));

  count = 0;
  firstChoice = "";
  secondChoice = "";
}

grid.addEventListener("click", function(event) {
  var clicked = event.target;

  if(clicked.nodeName === "SECTION" || clicked.parentNode.classList.contains("selected") || clicked.parentNode.classList.contains("match")) {
    return;
  }

  if(count < 2) {
    count ++;
    if(firstChoice === "") {
      firstChoice = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    } else {
      secondChoice = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }
  } 

  if(firstChoice != "" && secondChoice != "") {
    if(firstChoice === secondChoice) {
      setTimeout(match, delay);
      setTimeout(resetGuesses, delay);
    } else {
      setTimeout(resetGuesses, delay);
    }
  }
});
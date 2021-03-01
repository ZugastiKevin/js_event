
// Exercice 1

footer = document.querySelector("footer");
footer.addEventListener("click", function() {
	console.log("clique");
})

// Exercice 1 bis

footer = document.querySelector("footer");
increment = 1
footer.addEventListener("click", function() {
	console.log("clic numéro " + increment);
	increment++
})

// Exercice 2

findNav = document.getElementById("navbarHeader");
clicButton = document.querySelector("button", ".navbar-toggler");
clicButton.addEventListener("click", function () {
  findNav.classList.toggle("collapse");
})

// Exercice 3

editCard = document.querySelectorAll(".btn-outline-secondary")[0];
onRed = document.querySelectorAll(".card-text")[0];
editCard.addEventListener("click", function() {
  onRed.style.color = "red" ;
})

// Exercice 4

editCardTwo = document.querySelectorAll(".btn-outline-secondary")[1];
onGreen = document.querySelectorAll(".card-text")[1];
editCardTwo.addEventListener("click", function() {
	if( onGreen.style.color === 'green') {
		onGreen.style.color = ' ' ;
	} else {
		onGreen.style.color = "green" ;
	}
})

/*editCardTwo = document.querySelectorAll(".btn-outline-secondary")[1];
onGreen = document.querySelectorAll(".card-text")[1];
color = 1
editCardTwo.addEventListener("click", function() {
	color++
	if( color % 2 == 0) {
		onGreen.style.color = "green"
	} else {
		onGreen.style.color = "rgb(33, 37, 41)"
	}
})*/

// Exercice 5

navbar = document.querySelector("header");
body = document.querySelector("body");
bootstrap = document.querySelector("head").querySelector("link");
noZero = 1
navbar.addEventListener("dblclick", function () {
	noZero++
	if( noZero % 2 == 0) {
		bootstrap.setAttribute("href", "#");
    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/73909/nuclear-weapons-test-nuclear-weapon-weapons-test-explosion-73909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
	} else {
		bootstrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
	}
})

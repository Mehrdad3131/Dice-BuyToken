    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage = "dice" + randomNumber1 + ".png";

    var randomImageSource = "images/" + randomDiceImage;
    
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
    
   
        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "press f5 to win";
        }
        else if (randomNumber2 > randomNumber1) {
            document.querySelector("h1").innerHTML = "press f5 to win";            
        }
        else if (randomNumber1 === 6 && randomNumber2 === 6) {
            document.querySelector("h1").innerHTML = "🌈You win, now you can buy token🌈";
            document.querySelector("a").style.visibility = "visible";
        }
        else {
            document.querySelector("h1").innerHTML = "press f5 to win";
        }


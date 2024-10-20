var x;
var distanceToTravel = 0;
var destinationPosition = 0;

function moveDestination() {
    distanceToTravel = parseInt(document.getElementById("distanceInput").value);
    if (isNaN(distanceToTravel) || distanceToTravel <= 0) {
        alert("Please enter a valid distance.");
        return;
    }

    // Only set destinationPosition when moving the destination
    destinationPosition = distanceToTravel;
    document.getElementById("dest").style.marginLeft = destinationPosition + 'px';
    clearFeedback();
}

function randomDistance() {
    var randomDistance = Math.floor(Math.random() * 1000) + 1;

    document.getElementById("randomDistanceBox").textContent = randomDistance;
    document.getElementById("randomDistanceBox").style.display = "block";

    distanceToTravel = randomDistance;
    clearFeedback();
    moveCar();
}


function moveCar() {
    var carPosition = parseInt(document.getElementById("im").style.marginLeft || 0);
    var carWidth = 160; // Width of the car image

    if (carPosition >= destinationPosition + carWidth) {
        showFeedback(true); // Car has fully crossed Dhaka
        return;
    }

    if (carPosition >= distanceToTravel + carWidth) {
        showFeedback(false); // Car has not fully crossed Dhaka
        return;
    }

    carPosition += 60;
    document.getElementById("im").style.visibility = "visible";
    document.getElementById("im").style.marginLeft = carPosition + 'px';
    setTimeout(moveCar, 100);
}





function hasCrossedDestination() {
    var carPosition = parseInt(document.getElementById("im").style.marginLeft || 0);
    return carPosition >= destinationPosition;
}

function showFeedback(crossed) {
    var crossedText = document.getElementById("crossedText");
    if (crossed) {
        document.getElementById("crossedText").textContent = "Dhaka Crossed";
    } else {
        document.getElementById("crossedText").textContent = "Not crossed Dhaka";
    }
    document.getElementById("crossedText").style.display = "block";
}

function clearFeedback() {
    document.getElementById("crossedText").style.display = "none";
    //document.getElementById("im").style.visibility = "hidden"; // Set visibility to hidden
}
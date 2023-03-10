// Prompt the user to click ahead to hear a random fact
    let numberPrompt = prompt("Pick a number between 1 and 10.");

  // Check the user's input and display the corresponding fact
switch (parseInt(numberPrompt)) {
    case 1:
        alert("You're cute.");
        break;
    case 2:
        alert("Buzz Lightyears original name is Lunar Larry.");
        break;
    case 3:
        alert("Cookie Monsters real name is Sid.");
        break;
    case 4:
        alert("Avocados are technically berries.");
        break;
    case 5:
        alert("I kind of like you or whatever.");
        break;
    case 6:
        alert("The lead singer of The Offspring started attending school to achieve a doctorate in molecular biology while still in the band.");
        break;
    case 7:
        alert("The red Sour Patch Kids are the same candy as Swedish Fish, but with sour sugar.");
        break;
    case 8:
        alert("I would 1000% win if we played guitar hero.");
        break;
    case 9:
        alert("I need a nap.");
        break;
    case 10:
        alert("There is no period in Dr. Pepper. It was removed because the old logo font made it look like Di: Pepper.");
        break;
    default:
        alert("I literally told you to pick a number between 1 and 10. What are you even doing? Its okay, you can leave.");
        break;
    }
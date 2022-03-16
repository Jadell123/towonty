var cwins = 0;

var uwins = 0;

do {
    var ctotal = 0;

    var utotal = 0;

    alert(`It is now the computer turn.`)

    do {
        var newnum = Math.floor(Math.random() * 10);
        alert(`The computer rolled ${newnum}`)
        var ctotal = ctotal + newnum
        alert(`The new total is ${ctotal}`)
    } while (ctotal <= 16)

    alert(`The computer will now stop at ${ctotal}`)

    alert(`It is now the users turn`)

    
do {
    var newnum = Math.floor(Math.random() * 10);
    var utotal = utotal + newnum;
    alert(`The user rolled ${newnum}. The users total is ${utotal}`);
    var kp = prompt(`Do you want to continue? Say "No" if no and say "Yes" if yes.`);
    if (utotal >= 20) break;
} while (kp != "No")

    if (ctotal > 20) {
        if (utotal > 20) {
            if (utotal > ctotal) {
                alert("The computer won because the user was farther away from 20")
                var cwins = cwins++
            } else {
                alert("The user won because the computer was farther away from 20")
                var uwins = uwins++
            }
        } else {
            alert(`The computer rolled a number greater than 20. The user automatically wins`)
        }
    } else if (ctotal <= 20){
        if (ctotal == utotal) {
            alert("The user and the computer tied")
        } else if (utotal == 20) {
            alert("The user one because their total was 20")
            var uwins = uwins++
        } else if (utotal > ctotal) {
            alert("The user won because their total was closer to 20")
            var uwins = uwins++
        } else if (ctotal > utotal) {
            alert("The computer won because their total was closer to 0")
            var cwins = cwins++
        }
    }
    var pa = prompt(`Do you want to play agin? say "No" if no.`)
} while (pa != "No")



/*

1. User and computer will stop after 20 automatically.
2. Make sure there is a counter after every game. Example: computer 1; user 0. 
3. Needs a do/while loop for the entire. You are going to ask again if the user wants to play.
4. Combine computer number and total in one alert

*/

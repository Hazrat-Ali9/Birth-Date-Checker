
function getDayOfWeek(year, month, day) {
    const date = new Date(year, month - 1, day);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[date.getDay()];
}

function checkBirthDate() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);
    const day = parseInt(document.getElementById("day").value);
    const result = document.getElementById("result");

    if (isNaN(year) || year < 1700 || year > 2050) {
        result.textContent = "Please enter a year between 1700 and 2050.";
        return;
    }

    if (isNaN(month) || month < 1 || month > 12) {
        result.textContent = "Please enter a valid month (1-12).";
        return;
    }

    if (isNaN(day) || day < 1 || day > 31) {
        result.textContent = "Please enter a valid day (1-31).";
        return;
    }

    try {
        const dayOfWeek = getDayOfWeek(year, month, day);
        result.textContent = `Hey Mr.${firstName} ${lastName}, you were born on '${dayOfWeek}' of the '${month}th' month of ${year}. :)`;
    } catch (error) {
        result.textContent = "Invalid date, please enter a valid date.";
    }
}



// try on tarminal
/*
function getDayOfWeek(birtDate){
    const date = new Date(birtDate);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
}
         //   yyyy-mm-dd formetion
const birtDate = '2006-9-1';
console.log(`you were born on a ${getDayOfWeek(birtDate)}`);
*/

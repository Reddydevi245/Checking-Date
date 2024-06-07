function isValidDate(year, month, day) {
    // Create a new Date object
    var date = new Date(year, month - 1, day);

    // Check if the year, month, and day match the input
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 !== 0) {
        return false;
    }
    // Check if the year is divisible by 100 but not by 400
    else if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    }
    // If the year is divisible by 4 and either not divisible by 100 or divisible by 400, it's a leap year
    else {
        return true;
    }
}

// Example usage:
var year = 2024;
var month = 2; // February
var day = 29; // Leap year day

if (isValidDate(year, month, day)) {
    console.log(year + "-" + month + "-" + day + " is a valid date.");
    if (isLeapYear(year)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
} else {
    console.log(year + "-" + month + "-" + day + " is not a valid date.");
}
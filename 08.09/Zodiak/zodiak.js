const day = +(prompt("Enter your birth day (1-31):"));
const month = +(prompt("Enter your birth month (1-12):"));

let zodiak = "";

if (!isNaN(day) && !isNaN(month) && day >= 1 && day <= 31 && month >= 1 && month <= 12) {

    switch (true) {
        case (month == 3 && day >= 21) || (month == 4 && day <= 19):
            zodiak = "Aries";
            break;
        case (month == 4 && day >= 20) || (month == 5 && day <= 20):
            zodiak = "Taurus";
            break;
        case ((month == 5 && day >= 21) || (month == 6 && day <= 20)):
            zodiak = "Gemini";
            break;
        case (month == 6 && day >= 21) || (month == 7 && day <= 22):
            zodiak = "Cancer";
            break;
        case (month == 7 && day >= 23) || (month == 8 && day <= 22):
            zodiak = "Leo";
            break;
        case (month == 8 && day >= 23) || (month == 9 && day <= 22):
            zodiak = "Virgo";
            break;
        case (month == 9 && day >= 23) || (month == 10 && day <= 22):
            zodiak = "Libra";
            break;
        case (month == 10 && day >= 23) || (month == 11 && day <= 21):
            zodiak = "Scorpio";
            break;
        case (month == 11 && day >= 22) || (month == 12 && day <= 21):
            zodiak = "Sagittarius";
            break;
        case (month == 12 && day >= 22) || (month == 1 && day <= 19):
            zodiak = "Capricorn";
            break;
        case (month == 1 && day >= 20) || (month == 2 && day <= 18):
            zodiak = "Aquarius";
            break;
        case (month == 2 && day >= 19) || (month == 3 && day <= 20):
            zodiak = "Pisces";
            break;
        default:
            alert("Maybe, I made a mistake");
    }
    alert("Your Sign is " + zodiak);
}
else
    alert("Your date of birth is invalid. Try again!");

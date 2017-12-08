// point 01
var sender = 'łukasz',
    receiver = 'łukasz',
    sms = '    Cześć Łukasz. Czy ta funkcja działa prawidłowo? ',
    from = 'from: ',
    to = 'to: ';

sender = sender.charAt(0).toUpperCase() + sender.substring(1).toLowerCase();
receiver = receiver.charAt(0).toUpperCase() + sender.substring(1).toLowerCase();
sms = sms.trim();
from = from.toUpperCase();
to = to.toUpperCase();


function message(sender, sms, receiver){
    return '(' + from + sender + ') (' + to + receiver + ') (' + sms + ')';
}

console.log(message(sender, sms, receiver));


// point02
var firstName = 'Łukasz',
    lastName = 'Sztormowski';


function initials(firstName, lastName){
    firstName = firstName.charAt(0).toUpperCase();
    lastName = lastName.charAt(0).toUpperCase();

    return firstName + '.' + lastName;
}

console.log('Initials: ' + initials(firstName, lastName));

//point 03
function randomNumber(){
    var number = Math.random() * 10;
    number = number.toFixed(2);
    return number;
}

console.log('Twoja szczęśliwa liczba to: ' + randomNumber());

// point 04
function getDinnerPrice() {
    var tip = 20;
    var price = 100;
    var totalPrice = tip + price;

    totalPrice = Number(totalPrice);
    return totalPrice;
}

console.log(getDinnerPrice());

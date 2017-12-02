// point 01
var sender = 'łukasz',
    receiver = 'łukasz',
    sms = 'Cześć Łukasz. Czy ta funkcja działa prawidłowo? ',
    from = 'from: ',
    to = 'to: ';

sender = sender.charAt(0).toUpperCase() + sender.substring(1).toLowerCase();
receiver = receiver.charAt(0).toUpperCase() + sender.substring(1).toLowerCase();
sms.trim();
from = from.toUpperCase();
to = to.toUpperCase();


function message(sender, sms, receiver) {
    return '(' + from + sender + ') (' + to + receiver + ') (' + sms + ')';
}

console.log(message(sender, sms, receiver));

// "(FROM: sender) (TO: receiver) (MESSAGE: sms)"



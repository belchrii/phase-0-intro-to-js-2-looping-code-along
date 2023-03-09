const value = [];
const messageNames = [];
function writeCards(names, value) {
    for (let i = 0; i < names.length; i++) {
        messageNames.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
        debugger;
    }
    return messageNames
}
 

function countDown(number) {
    let value = number 
    while (value >= 0) {
        console.log(value--);
    }
    return number;
}
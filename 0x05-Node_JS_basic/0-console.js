module.exports = function displayMessage(theMessage){
    if (typeof theMessage !== 'string') throw TypeError('Input must be a string');
    console.log(theMessage);
}

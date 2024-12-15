module.exports = function displayMessage(theMessage){
    if (!theMessage === String) throw TypeError;
    console.log(theMessage);
}

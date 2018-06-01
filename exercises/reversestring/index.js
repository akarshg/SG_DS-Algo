// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
      //1st  // var arr = str.split('');
        // arr.reverse();
        // return arr.join('');

      //2nd  //  return str.split('').reverse().join('');

      //3rd
        var reversed = '';
        for (var character of str){
            reversed = character + reversed;
        }
    return reversed;
}


module.exports = reverse;

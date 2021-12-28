let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];

module.exports = function toReadable (number) {
    let arr = String(number).split('');
    let hundred = tens[tens.length - 1];
    if (number <= 20) {
      return units[number];
    }
    else if (number > 20 && number < 100) {
        let resultTens = [];
        if (arr[1] ==0) {
          resultTens.push(tens[arr[0]]);
        } else {
          resultTens.push(tens[arr[0]], units[arr[1]]);
        }
        return resultTens.join(' ');
      }
    else if (number >= 100) {
      let resultHundreds = [];
      if (arr[1] == 0 && arr[2] == 0) {
        resultHundreds.push(units[arr[0]], hundred);
      } 
      else if (arr[1]<2) {
        if (arr[1]==0) {
          resultHundreds.push(units[arr[0]], hundred, units[arr[2]]);
        }
        else if (arr[1]==1) {
          resultHundreds.push(units[arr[0]], hundred, units[arr[1]+arr[2]]);
        }
      }
      else if (arr[2]==0) {
        resultHundreds.push(units[arr[0]], hundred, tens[arr[1]]);
      }
      else if (arr[1] !== 1 && arr[2] !== 0) {
        resultHundreds.push(units[arr[0]], hundred, tens[arr[1]], units[arr[2]]);

      }
      return resultHundreds.join(' ');      
    }    
}

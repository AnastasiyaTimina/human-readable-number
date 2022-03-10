module.exports = function toReadable (number) {
    let numbers = {
        0 : "zero",
        1 : "one",
        2 : "two",
        3 : "three",
        4 : "four",
        5 : "five",
        6 : "six",
        7 : "seven",
        8 : "eight",
        9 : "nine",
        10 : "ten",
        11 : "eleven",
        12 : "twelve",
        13 : "thirteen",
        14 : "fourteen",
        15 : "fifteen",
        16 : "sixteen",
        17 : "seventeen",
        18 : "eighteen",
        19 : "nineteen",
        20 : "twenty",
        30 : "thirty",
        40 : "forty",
        50 : "fifty",
        60 : "sixty",
        70 : "seventy",
        80 : "eighty",
        90 : "ninety",
        100 : "hundred"
      };
  
      if (number > -1 && number < 21) {
          return numbers[number];
      } else if (number > 20 && number < 100) { 
          if (number % 10 == 0) {
              return numbers[number];
          } else {
            let x=number%10;
            let n=Math.floor(number/10);
            return numbers[n*10] + " " + numbers[x];
          }
      } else if (number > 99 && number < 1000) {
          let y = Math.floor(number/100); 
          let nn = number - y*100;
          if (nn == 0) {
            return numbers[y] + " hundred";
          } else if (nn>-1 && nn < 20) {
              return numbers[y] + " hundred " + numbers[nn];
          } else if(nn%10 == 0) {
            return numbers[y] + " hundred " + numbers[nn];
          } else {
            let x = number%10;
            let n = Math.floor((number/10)%10);
            return numbers[y] + " hundred " + numbers[n*10] + " " + numbers[x];
          }
    }
};

let cardBalance = 0;

function cardHolderValid(value){
    let isValid = false;
    if(value && value.length <= 10 ) isValid = true; 
    return isValid;
    }
    

    function basicValidNum(num){
        let isValid = false;
    if(num.length >= 12 && num.length <= 16)  isValid = true;
    
    let digits = num.toString().split('').map(Number);
    digits.forEach(digit => {
        if(digit >=0 && digit <=9) isValid = true; 
    })
    return isValid;
    }

    function cardNumberValid(num){
    let digits = num.toString().split('').map(Number);

    if(digits.length % 2 === 0){
        digits = digits.map((digit, index) => index % 2 ===0 ? digit * 2 : digit);
    }else{
        digits = digits.map((digit, index) => index % 2 === 1 ? digit * 2 : digit);
    }
    
    digits = digits.map(digit => digit > 9 ? digit - 9 : digit);
    
    const sum = digits.reduce((acc, digit) => acc += digit, 0);
    
    return sum % 10 === 0
    }


    
    function cardLimitValid(num){
    let isValid = false;
    if(num >=1 && num <= 3000) isValid = true;
    return isValid;
    }
    
    function newBalance1(amount){
        let b = amount.replace(/\D/g, '');
        let c = parseInt(b);
        let sum = `$${cardBalance + c}`;
        return sum;
        }

        //let myBalance1 = newBalance1("$100");
        //console.log(myBalance1);
        
    function newBalance2(amount){
        let b = amount.replace(/\D/g, '');
        let c = parseInt(b);
        let sum = `$${cardBalance - c}`;
          return sum;
        }
        
        //let myBalance2 = newBalance2("$100");
        //console.log(myBalance2);


function solution([operations]){
    let result = [];
    let creditCard = [];
    
   operations.forEach((arr, index) =>{
    index = 0;
    let isValid = false;
    arr[index] === "Add" ? creditCard.push([arr[index+1], arr[index+2], arr[index+3]]) : 0;

    (cardHolderValid(arr[index+1]) && cardNumberValid(arr[index+2]) && basicValidNum(arr[index+2]) && cardLimitValid(arr[index+3])) ? isValid = true : false;
    
    (arr[index] === "Charge" && isValid) ? result.push(arr[index+1], newBalance1(arr[index+2])) : result.push(arr[index+1], "Error");

    (arr[index] === "Credit" && isValid) ? result.push(arr[index+1], newBalance2(arr[index+2])) : result.push(arr[index+1], "Error");
    
   })
   
    return result;
}

operations = [["Add", "Tom", "4111111111111111", "$1000"],
["Add", "Lisa", "5454545454545454", "$3000"],
["Add", "Quincy", "12345678901234", "$2000"],
["Charge", "Tom", "$500"],
["Charge", "Tom", "$800"],
["Charge", "Lisa", "$7"],
["Credit", "Lisa", "$100"],
["Credit", "Quincy", "$200"]]

console.log(solution([operations]));

/*  
This code is supposed to display the output: solution(operations) = [["Lisa", "$-93"],
["Quincy", "error"],
["Tom", "$500"]]

Whenever I run the code, it displays the output: solution(operations) = [
  'Tom',    'Error', 'Tom',    'Error',
  'Lisa',   'Error', 'Lisa',   'Error',
  'Quincy', 'Error', 'Quincy', 'Error',
  'Tom',    'Error', 'Tom',    'Error',
  'Tom',    'Error', 'Tom',    'Error',
  'Lisa',   'Error', 'Lisa',   'Error',
  'Lisa',   'Error', 'Lisa',   'Error',
  'Quincy', 'Error', 'Quincy', 'Error'
]

What could be wrong with my code? 
I suspect a problem with line 77 and line 79 but I can't figure it out. Can someone help me out?
*/
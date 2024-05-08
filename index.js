let sideBarElementNameList = [];
let answerTag;
window.onload = () => {
    const sideBarHtmlCollection = document.querySelector(".sidebar").children;
    answerTag = document.querySelector("#answer");
    Array.from(sideBarHtmlCollection).forEach((element) => {
        sideBarElementNameList.push(element.textContent);
    });
    for(let i = 0;i < sideBarHtmlCollection.length; i++) {
        sideBarHtmlCollection[i].onclick = () => {
            routeRequest(sideBarElementNameList[i]);
        }
    }

}

var routeRequest = (name) => {
    switch (name) {
        case sideBarElementNameList[0]:
            answerTag.innerHTML = name + " : " + multiplesOf3or5([3, 5], 1000);
            break;
        case sideBarElementNameList[1]:
            answerTag.innerHTML = name + " : " + evenFibonacciNumbers([1, 2], 4000000);
            break;
        case sideBarElementNameList[2]:
            answerTag.innerHTML = name + " : " + largestPrimeFactor(600851475143);
            break;
        case sideBarElementNameList[3]:
            answerTag.innerHTML = name + " : " + largestPalindromeProduct(3);
            break;
        case sideBarElementNameList[4]:
            answerTag.innerHTML = name + " : " + smallestMultiple(1, 20);
            break;
        case sideBarElementNameList[5]:
            answerTag.innerHTML = name + " : " + sumSquareDifference(100);
            break;
        case sideBarElementNameList[6]:
            answerTag.innerHTML = name + " : " + getNThPrimeNumber(10001);
            break;
        default:
            break;
    }
}

/**
 * @param {Array} coefficents
 * @param {Number} bound
 * @returns {Number}
 */
var multiplesOf3or5 = (coefficents ,bound) => {

    if(bound <= 2) {
        return 0;
    } else {
        let result = 0;
        for(let i = 2;i < bound; i++) {
            for(let j = 0;j < coefficents.length; j++) {
                if(i % coefficents[j] === 0) {
                    result += i;
                    break;
                }
            }
        }
        return result;
    }
}


/**
 * @param {Array} firstTerms
 * @param {Number} bound
 * @returns {Number}
 */
var evenFibonacciNumbers = (firstTerms, bound) => {
    let prev1 = firstTerms[0];
    let prev2 = firstTerms[1];
    let next;
    let total = 2;
    while((next = prev1 + prev2) < bound) {
        if(next % 2 === 0) {
            total += next;
        }
        prev1 = prev2;
        prev2 = next;
    }
    return total;
}

/**
 * 
 * @param {Number} num
 * @returns {Number} 
 */
var largestPrimeFactor =  (num) =>  {
    let largestPrime = 0;
    if(num <= 1) {
        return largestPrime;
    }
    else if(num === 2) {
        largestPrime = 2;
        return largestPrime;
    }
    else {
        let i = 2;
        while(num !== 1) {
            if(num % i === 0 && isPrime(i)) {
                num /= i
                while(num % i === 0) {
                    num /= i;
                }
                largestPrime = i;
            }
            i++;
        }
        return largestPrime;
    }
}

/**
 * 
 * @param {Number} num
 * @returns {boolean} 
 */
var isPrime = (num) => {

    if(num <= 1) {
        return false;
    }
    else {
        let result = true;
        for(let i = 2;i < parseInt(Math.sqrt(num))+1; i++) {
            if(num % i === 0) {
                result = false;
            }
        }
        return result;
    }
}

/**
 * 
 * @param {Number} digitCount 
 * @returns {Number}
 */
var largestPalindromeProduct = (digitCount) => {
    let numStrFormatMax = "", numStrFormatMin = "";
    let max, min, candidate, maxPalindrome = 0;
    for(let i = 0;i < digitCount; i++) {
        numStrFormatMax += "9";
        if(numStrFormatMin.length === 0){
            numStrFormatMin += "1";
        }
        else {
            numStrFormatMin += "0";
        }
    }
    max = Number(numStrFormatMax);
    min = Number(numStrFormatMin);

    for(let i = min;i <= numStrFormatMax; i++) {
        for(let j = min;j <= numStrFormatMax; j++) {
            candidate = i * j;
            if(isPalindrome(candidate) && candidate > maxPalindrome) {
                maxPalindrome = candidate;
            }
        }
    }
    return maxPalindrome;
}

/**
 * 
 * @param {Number} num
 * @returns {Boolean} 
 */
var isPalindrome = (num) => {
    const strForm = String(num);
    let length;
    let result = true;
    if(strForm.length % 2 === 0){
        length = strForm.length / 2;
    }
    else {
        length = (strForm.length - 1) / 2;
    }

    for(let i = 0;i < length; i++) {
        if(strForm.charAt(i) !== strForm.charAt(strForm.length - i - 1)) {
            result = false;
        }
    }
    return result;
}

/**
 * 
 * @param {Number} max
 * @param {Number} min
 * @returns {Number}  
 */
var smallestMultiple = (min, max) => {

    let wasItFound = false;
    let num = 2520;
    while(!wasItFound) {
        wasItFound = true;
        for(let i = min;i <= max; i++) {
            if(num % i !== 0) {
                wasItFound = false;
            }
        }
        if(!wasItFound){
            num+=2;
        }
    }
    return num;
}

/**
 * 
 * @param {Number} bound
 * @returns {Number} 
 */
var sumSquareDifference = (bound) => {
    let sumOfTheSquares = 0;
    let squareOfTheSum = 0;

    for(let i = 1;i <= bound; i++) {
        sumOfTheSquares += Math.pow(i, 2);
        squareOfTheSum += i;
    }

    return Math.pow(squareOfTheSum, 2) - sumOfTheSquares;
}

/**
 * 
 * @param {Number} n
 * @returns {Number} 
 */
var getNThPrimeNumber = (n) => {
    let counter = 0;
    let num = 2;
    let wasItFound = false;
    while(!wasItFound) {
        if(isPrime(num)) {
            counter++;
            if(counter === n) {
                wasItFound = true;
            }
        }
        if(!wasItFound) {
            num++;
        }
    }
    return num;
}

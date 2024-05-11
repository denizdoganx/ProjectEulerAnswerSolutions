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
        case sideBarElementNameList[7]:
            answerTag.innerHTML = name + " : " + getMaxProductWithGivenDigit(13);
            break;
        case sideBarElementNameList[8]:
            answerTag.innerHTML = name + " : " + findSpecialPythagoreanTriplet(1000);
            break;
        case sideBarElementNameList[9]:
            answerTag.innerHTML = name + " : " + summationOfPrimes(2000000);
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

/**
 * @param {Number} digitCount
 * @returns {Number}
 */
var getMaxProductWithGivenDigit = (digitCount) => {
    let maxProduct = 0, tempProduct = 1;
    const constantNum = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
    for(let i = 0;i < constantNum.length - 1 - digitCount; i++) {
        tempProduct = 1;
        for(let j = 0;j < digitCount; j++) {
            tempProduct *= Number(constantNum.charAt(i + j));
        }
        if(tempProduct > maxProduct) {
            maxProduct = tempProduct;
        }
    }
    return maxProduct;
};

/**
 * 
 * @param {Number} edgeTotal
 * @returns {Number} 
 */
var findSpecialPythagoreanTriplet = (edgeTotal) => {
    /**
     * we can use a general formula to find out all pythagorean triplet.
     **     a = m^2 - n^2
     **     b = 2 * m * n
     **     c = m^2 + n^2
     **     a + b + c = 2*m^2 + 2*m*n
     */
    let abcTotal = 0;
    let isFound = false;
    let m = 0 , n = 0;
    let a, b, c;
    for(let i = 1;i < 1000; i++) {
        for(let j = 1;j <= i; j++) {
            abcTotal = 2*i*i + 2*i*j;
            if(abcTotal === edgeTotal) {
                isFound = true;
                m = i;
                n = j;
                break;
            }
        }
        if(isFound) {
            break;
        }
    }
    a = m*m - n*n;
    b = 2*m*n;
    c = m*m + n*n;
    return a*b*c;
};

/**
 * 
 * @param {Number} bound 
 */
var summationOfPrimes = (bound) => {
    let total = 10;
    for(let i = 3;i < bound; i+=2) {
        if(i % 3 === 0 || i % 5 === 0) {
            continue;
        }
        if(isPrime(i)) {
            total += i;
        }
    }
    return total;
};

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
        case sideBarElementNameList[10]:
            answerTag.innerHTML = name + " : " + getLargestProductInAGrid();
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
    for(let i = 0;i < constantNum.length - digitCount; i++) {
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

/**
 * @returns {Number}
 */
var getLargestProductInAGrid = () => {
    const grid = `
    08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
    49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
    81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
    52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
    22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
    24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
    32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
    67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
    24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
    21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
    78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
    16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
    86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
    19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
    04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
    88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
    04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
    20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
    20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
    01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48`;
    const parsedGrid = grid.split(" ");
    const matrix = [];
    let tempCell;
    let tempRowArray = [];
    const cleanedMatrix = [];
    let counter = 0; 
    let maxProduct = 0;
    parsedGrid.forEach((element) => {
        if(element != '\n' && element != '') {
            tempCell = "";
            for(let i = 0;i < element.length; i++) {
                if(element.charAt(i) != "\n") {
                    tempCell += element.charAt(i);
                }
            }
            matrix.push(tempCell);
        }
    });
    
    for(let i = 0;i < matrix.length; i++) {
        if(counter != 20) {
            tempRowArray.push(matrix[i]);
            counter++;
            if(counter == 20) {
                cleanedMatrix.push(tempRowArray);
                counter = 0;
                tempRowArray = [];
            }
        }
    }

    

    console.log(cleanedMatrix);
    console.log(cleanedMatrix.length);



    for(let i = 0;i < cleanedMatrix.length - 4; i++) {
        for(let j = 0;j < cleanedMatrix[i].length - 4; j++) {
            const tempProduct = getMaxProductWithGivenMatrix([
                [cleanedMatrix[i][j], cleanedMatrix[i][j+1], cleanedMatrix[i][j+2], cleanedMatrix[i][j+3]],
                [cleanedMatrix[i+1][j], cleanedMatrix[i+1][j+1], cleanedMatrix[i+1][j+2], cleanedMatrix[i+1][j+3]],
                [cleanedMatrix[i+2][j], cleanedMatrix[i+2][j+1], cleanedMatrix[i+2][j+2], cleanedMatrix[i+2][j+3]],
                [cleanedMatrix[i+3][j], cleanedMatrix[i+3][j+1], cleanedMatrix[i+3][j+2], cleanedMatrix[i+3][j+3]]
            ]);
            if(tempProduct > maxProduct) {
                maxProduct = tempProduct;
            }
        }
    }
    return maxProduct;
};


/**
 * 
 * @param {Array} matrix
 * @returns {Number} 
 */
var getMaxProductWithGivenMatrix = (matrix) => {

    let rowMax = 0, columnMax = 0, diagonalMax = 0;
    let tempProduct = 1, firstDiagonalProduct = 1, secondDiagonalProduct = 1;
    for(let i = 0;i < matrix.length; i++) {
        tempProduct = 1;
        for(let j = 0;j < matrix[i].length; j++){
            tempProduct *= matrix[i][j];
            if(i == j) {
                firstDiagonalProduct *= matrix[i][j];
            }
            if((i + j) == matrix.length-1) {
                secondDiagonalProduct *= matrix[i][j];
            }
        }
        if(tempProduct > rowMax) {
            rowMax = tempProduct;
        }
    }

    if(firstDiagonalProduct > secondDiagonalProduct) {
        diagonalMax = firstDiagonalProduct;
    } else {
        diagonalMax = secondDiagonalProduct;
    }

    for(let i = 0;i < matrix.length; i++) {
        tempProduct = 1;
        for(let j = 0;j < matrix[i].length; j++) {
            tempProduct *= matrix[j][i];
        }
        if(tempProduct > columnMax) {
            columnMax = tempProduct;
        }
    }


    return Math.max(rowMax, columnMax, diagonalMax);
};

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
            console.log(sideBarElementNameList[2]);
            break;
        case sideBarElementNameList[3]:
            console.log(sideBarElementNameList[3]);
            break;
        case sideBarElementNameList[4]:
            console.log(sideBarElementNameList[4]);
            break;
        default:
            break;
    }
}

/**
 * @param {Array} coefficents
 * @param {number} bound
 * @returns {number}
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
 * @param {number} bound
 * @returns {number}
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

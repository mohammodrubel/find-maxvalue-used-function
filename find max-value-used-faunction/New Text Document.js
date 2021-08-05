const fast = 456
const second = 495
const third = 3845


    if (fast > second && fast > third){
        console.log(fast+' is greter than all')
    }else if (second >third && second>fast){
        console.log(second +' is greater than all')
    }else{
        console.log(third +' is allawas greter than all')
    }
var result = Math.max(fast,second,third)
console.log(result)



    function maxFunction(fastNumber,secondNumber,thirdNumber){
        if (fastNumber > secondNumber && fastNumber > thirdNumber){
            return fastNumber
        }else if(secondNumber > fastNumber && secondNumber > thirdNumber) {
            return secondNumber
        }else{
            return thirdNumber
        }
    }

    var totalResult =maxFunction(345,34567,23456)
    console.log(totalResult) 
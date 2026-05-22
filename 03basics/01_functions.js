// function saymyname(){
//     console.log("Govind Yadav")
// }
// saymyname()
// // function add(number1,number2){// parameters
// //     console.log(number1+number2);
// // }
// function add(number1,number2){// parameters
//     let result=number1+number2
//     return result
    
// }
// // add(2,3)//arguments
// console.log(add(4,5));

function login(name="papa"){
    return `${name} is just logged in`;
}
console.log(login("govind"))
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

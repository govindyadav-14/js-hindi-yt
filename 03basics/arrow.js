function add(num1,num2){
    return num1+num2;
}
console.log(add(1,2))

const add2 = function(num1,num2){
    console.log("dusara call ai");
}
add2(12,2)
const add1 = () => {
        console.log("add1 called")
}

add1();
const add4 = (num1, num2) => num1+num2
console.log(add4(4,5));
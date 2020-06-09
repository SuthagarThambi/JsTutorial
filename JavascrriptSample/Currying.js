
Pattern1
let multiply=function(x,y){
    console.log(x*y);
}


let multiplyByTwo=multiply.bind(this, 2);
multiplyByTwo(4);
let multiplyByThree=multiply.bind(this, 3);
multiplyByThree(4);

C

let multiply=(x)=>{
    return (y)=>{
        console.log(x*y);
    }
}


let multiplyByTwo=multiply(2);
multiplyByTwo(4);
let multiplyByThree=multiply(3);
multiplyByThree(4);
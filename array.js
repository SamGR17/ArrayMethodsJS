//1. push
let numbers = [1, 3, 5]

push(8);


console.log(numbers);       

function push(newElement){
    numbers[numbers.length] = newElement
}

//2. pop
let nums = [2, 1, 4, 5]

pop();


function pop(){
    let newArray = [];
        
    for(let i = 0; i < nums.length - 1; i++){
        newArray[i] = nums[i];    
    }
    console.log(newArray);
}


//3. toString
let strings = ["lorem", "hunger", "owl"];

toString();


function toString(){
    let wholeString = "";

    for(let i = 0; i < strings.length; i++){
        wholeString += ", " + strings[i];
    }
    console.log(wholeString);
}


//4. join
let stringsPart2 = ["mango", "bread", "water", "soup"];

join();


function join(){
    let joinedStrings = "";

    for(let i = 0; i < stringsPart2.length; i++){
        joinedStrings += "/" + stringsPart2[i];
    }
    console.log(joinedStrings);
}


//5. concat
let words = ["potato", "tomato", "tato"];
let wholeNums = [5, 8, 10];

concat();

function concat(){
    let wordsAndNums = "";

    wordsAndNums = "[" + words + "," + wholeNums + "]";

    console.log(wordsAndNums);
}
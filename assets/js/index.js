/*let max = 5
let product = 11
for(let i=1;i<product;i++){
    console.log(max*i)
}*/
/*for(let i =1; i<=10; i++){
	console.log(`15 * ${i} = ${15*i}`)
}*/
//entered number table.
let enter = prompt("Enter a Number")
for(let table = 1;table<=10; table++){
    console.log(`${enter}*${table} = ${enter*table}`)
}

//99 - 0 print value
let reversed_numbers = 100
for(let reverse = 0;reverse<reversed_numbers; reverse++){
    console.log(reverse)
}

// 0-99
let sequenced_num = 99
for(let sequence = 0; sequence<=sequenced_num; sequence++){
    console.log(sequence)
}

//even 1-100
/*
var myArray = [];
for (var i = 2; i < 100; i += 2){
    myArray.push(i);
}
console.log(myArray);*/ // console output [ 1, 3, 5, 7, 9 ]
for(let i= 2; i<100;i+=2){
    console.log(i)
}

//odd 1-100
for(let i= 1; i<10;i+=2){
    console.log(i)
}

//odd 1-100 reversed
for(let i= 100; i>1;i-=2){
    console.log(i)
}

// get factorial of entered number
let factorial = prompt('Enter a No. to get it\'s factorial')
fax = 1
for(let i = 1;i<=factorial;i++){
    fax = fax*i
    console.log(fax)
}

//sum till entered
let sum = prompt('enter a no. to get it\'s sum till 1')
let summer = 1
for(let i = 0;i<=sum;i++){
    summer = summer + i
    console.log(summer-1)
}
let arr = [1, 2, 4, 5, null, ""]
let arr2 = [
    [1, 2, 4],
    [1, 5, 7]
]


//  export let name = "dastan"


//  function sum(a,b){
//     console.log(a+b)
//  }

//  sum(1,4)


// for (let i = 0; i < 100; i++) {
// console.log("dastan")
// }


// class Animal{
//     leg=4
//     hand=4
//     eyes=2
//     constructor(name, color){
//         this.name = name
//         this.color = color
//     }
//     voice(){
//         console.log("vooov")
//     }
// }

// class While extends Animal{

// }

// let cat = new Animal("tom","green")
// let dog = new Animal()

// let kit  = new While()

// // cat.voice()

// console.log(cat)
// console.log(dog)
// console.log(kit)



// create 3 arr 

let cats = ["cat1", "cat2"]
let cats1 = ["cat1", "cat2"]
let cats2 = ["cat1", "cat2"]

// creqte2 func

// function summ(a,b){
//     console.log(a+b);
// }
// function summ(a,b){
//     console.log(a+b);
// }

// for (let index = 0; index < 3; index++) {
//     console.log(index)
// }


let a = 8
// let b = 7

// if(a===5 || b==7){
//     console.log("good")
// }
// else{
//     console.log("foo")
// }

// a===6?console.log("6"):console.log("i don't know")
a===8?console.log(true):console.log(false)

// let age = 15
// if(age>=18){
//     console.log("заходи")
// }



let name = "Dastan"

// setInterval(()=>{console.log(name)}, 2000)


let x = 5_000
let y = 2_000
console.log(x+y);
let z = [1,2,3,4]
z[z.length-3]

const maskCard=(card, mask)=>{
    let newWord = ''
    for(let i = 0;i<card.length;i++){
        if(i>5&&i<11){
            newWord+=mask
        }
        else{
            newWord+=card[i]
        }
    }
    return newWord
}

console.log(maskCard("13456789876543", "*"))
let fruits =["apple","bannana","peach","orange","grape","lychy"];

//  fruits[3] = "kivi"

//  console.log(fruits)



 //syntax = .push()
// გა,ოიყენება მასივში 1 ან მეტი ელემენტის დასატებლად იგი ცვლის მასივ და ამატებს ამატებს ახალ ელემენტებს 


// fruits.push("kivi")


// .pop
//ეს მეთოდი გამოიყენება მასივში ბოლო ელემენტის წასაშლელად 
// fruits.pop()

// fruits.shift()  
// fruits.unshift("flame")
// console.log(fruits.length)

// for(let i = 0; i < fruits.length; i++){
//     document.write(`<p>${fruits[i]}</p>`)
// }

// .shift()
// ეს მეთოდი შლის პირველ ელემენტს მასივში და გადაყვავს ყვლეა ელემენტი 1 ინდექსით ქვემოთ

// unshift 
// ეს მეთოდი ამატებს 1 ან მეტ ელემტს მასივის დასაწყისში და არესებულ ელემენტებს
//ემატებატ ინდექსი


//matrix
//მრავალგანზომიერებადი მასივი
// ეს მასივის ტიპია რომელიც შეიცავს სხვა მასივებს 

// let matrix =[
// [1,2,3] //index 1
// [4,5,6] // index 2
// [7,8,9] // index 3
// ]
// console.log(matrix[1][2])

// fruits.join("*")

// let numbers = [1,2,3,4,5,6,7,8,5,4,3,5,6,7,5,4,,45,7,];

// console.log(numbers.sort()) 

//OBJECTS

let car = {
    brand:"BMW",
    model:"x6",
    date:2009,
    price:40000,
    color:"black",
    engine: 4.2,
    fullinfo:function(){
        return this.brand + " " + this.model + " " + this.price 
    }
}

console.log(car)

document.getElementById("tr2").innerHTML = car.fullinfo()

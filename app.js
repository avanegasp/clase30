// // CLASES EN JS
//
// function Dog(name,age){
//   this.name = name
//   this.age = age
//   this.color = "Brown"
//   this.bark = function(){
//       return "wuaf, wuaf"
//   }
// }
//
// //NEW
// // crea un objeto vacío
// // la función que se llame con new, devuelva el objeto
// let spot = new Dog("Spot", 3)
// console.log(spot)
// console.log(spot.bark())

// Multiple Constructors

// function Car(model, year, color){
//   this.model = model
//   this.year = year
//   this.color = color
//   this.numWheels = 4
//   this.doors = 4
// }
//
// //la línea 29 remplaza la línea 21 y 22
// function Motorcycle(model, year, color){
//   Car.call(this, model, year, color)
//   this.numWheels = 2
//   this.doors = 0
// }
//
// let twingo = new Car("Renault", 2018, "Black")
// let mercedes = new Car("Mercedes", 2012, "Black")
// console.log(twingo)
// console.log(mercedes)
//
// let bmw = new Motorcycle("BMW Bike", 2012, "Black")
// let dukaki = new Motorcycle("Mega Duk", 2018, "Black")
// console.log(bmw)
// console.log(dukaki)



//PROTOTYPE

// function Animal(){
// }
//
// Animal.prototype.bark = function(){
//   console.log("wuaf, wuaf")
// }
//
// oliva = new Animal()
// console.log(oliva.bark)
// console.log(Animal.prototype.bark)


// much better :)

function Person(name){
  this.name = name
}

let joshua = new Person("Joshua")

Person.prototype.sayHi = function(){
  return "Hi " + this.name
}

console.log(joshua.sayHi())

// let hannah = new Person("Johny")
// let rebe = new Person("Johny")
// let august = new Person("Johny")
// let german = new Person("Johny")
//
// console.log(john.sayHi())
// console.log(hannah.sayHi())
// console.log(rebe.sayHi())
// console.log(august.sayHi())
// console.log(german.sayHi())

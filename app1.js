// function Dog(name, age){
//   this.name = name
//   this.age = age
//   this.bark = function(){
//     console.log(`${this.name} just barked`)
//   }
// }

classroom = {
  students : ["Cris", "Andrés", "Yony", "Miguel" ],
  study: function(city){
    setTimeout(function(){
      console.log(`Estamos estudiando en ${city} con ${this.students[1]}`)
    }.bind(this), 3000)
  }
}
// console.log(classroom.students[1])
// classroom.study("New york")

classroom2 = {
  students: ["Wilmer", "Jhonatan", "Felipe", "Carlos"]
}
classroom.study.call(classroom2,"Bogotá")

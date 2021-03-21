// An object is a container that encapulates data referencing to one thing(aperson or something )

// Example of an object student
student={
    name:"Sindet",
    school:"AkiraChix",
    class:"lovelace",
    age:19,

}
// accessing elements/properties  of an object
console.log(student.name)    //Sindet
console.log(student.school)        // AkiraChix

// Methods in an object are simply properties that are defined as a function.Below is an example:
var answer = {
    name: "Sarah Sindet",
    speak: function() {
      return "Speak in this case is a method!"
    
    }
  }
  
  console.log(answer.speak())

//   A function performs an Action and they are called by them selves , not attached to any object unlike methods
// Below is an example of a function
function identity( ) { /*parent function*/
   var firstName="Sarah";
   var block="LoveLace";
// Nested function
   function fullName(){
       var SecondName="Sindet";
       var c =firstName +" " + SecondName + " " +"is"+ " "  + "in" + " " + "LovelaceLab";
       console.log(c)
   }
   fullName()


 }
 identity()
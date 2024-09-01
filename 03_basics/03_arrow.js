const user = {
    username: "Saniya",
    age: 20,

    welcomeMessage : function (){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "San"
// user.welcomeMessage()

// console.log(this);

// function one() {
//     let username = "Saniya"
//     console.log(this.username);
// }

// one()


// const one = function () {
//     let username = "Saniya"
//     console.log(this.username);
// }


const one = () => {
    let username = "Saniya"
    console.log(this);
}

// one()

// const two = (num1, num2) => {                //basic arrow function
//     return num1 + num2
// }

// const two = (num1, num2) => (num1 + num2)              //  implicit return arrow function (no curly braces)

const two = (num1, num2) => ({username : "Saniya"})       //to write obj in arrow func it must be in parenthisis
console.log(two(6, 12));


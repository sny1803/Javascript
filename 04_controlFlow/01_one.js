//if condition

// const temp = 10
// if(temp > 40){
//     console.log("hot");
// }

// else {
//     console.log("cool");
// }

// const marks = 5
// if (marks >= 80) {
//     console.log("A");   
// } 

// else if (marks >= 60) {
//     console.log("B");
// }

// else if (marks >= 40) {
//     console.log("C");
// }

// else{
//     console.log("D");
// }


const userLoggedIn = true
const debitCard = true
const google = false
const email = true

if (userLoggedIn && debitCard) {
    console.log("Allowed");
}

if (google || email) {
    console.log("Logged In");
}
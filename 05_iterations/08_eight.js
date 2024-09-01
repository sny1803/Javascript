const num = [1, 2, 3]

// const myTotal = num.reduce(function (acc, cv) {
//     console.log(`acc: ${acc} and cv: ${cv}`);
    
//     return acc + cv
// }, 0)

// console.log(myTotal);



const cart = [
    {
        item : "book",
        prize: 500
    },

    {
        item : "dumbell",
        prize: 1000
    },

    {
        item : "tshirt",
        prize: 500
    },

    {
        item : "helmet",
        prize: 6000
    }
]

const toPay = cart.reduce( (acc, item) => acc + item.prize, 0)
console.log(toPay);

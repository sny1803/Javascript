const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = num.filter( (num) => {
//     return num > 5})
//  console.log(newNum);


// const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// num.forEach((num) => {
//     if (num > 5) {
//     newNums.push(num)
    
//     }
// })

// console.log(newNum);


const movie = [
    {title : "Ironman", Actor : "Robert Downey Jr."},
    {title : "Captain America : The First Avenger", Actor : "Chris Evans"},
    {title : "Thor", Actor : "Chris Hemsworth"},
    {title : "Ironman 2", Actor : "Robert Downey Jr."},
    {title : "Captain America : The Winter Soldier", Actor : "Chris Evans"},
    {title : "Thor : The Dark World", Actor : "Chris Hemsworth"},
    {title : "Ironman 3", Actor : "Robert Downey Jr."},
    {title : "Captain America : Civil War", Actor : "Chris Evans"},
    {title : "Thor : The Ragnarok", Actor : "Chris Hemsworth"},
]

const watch = movie.filter( (mov) => mov.Actor === "Robert Downey Jr.")

console.log(watch);

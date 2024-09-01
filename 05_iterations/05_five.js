const marvel = ["Ironman","Captain America", "Hulk", "Thor", "Black Widow", "Hawkeye"]

marvel.forEach( function (val) {
    // console.log(val);
} )

marvel.forEach((item) => {
    // console.log(item);
    
})

// function print(item) {
//     console.log(item);
    
// }
// marvel.forEach(print) 

marvel.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )


const mcu = [
    {
        movie : "Ironman",
        actor : "Robert Downey Jr."
    },

    {
        movie : "Thor : Ragnarok",
        actor : "Chris Hemsworth"
    },

    {
        movie : "Captain America : Civil War",
        actor : "Chris Evans"
    }
]

mcu.forEach( (item) => {
    console.log(item.movie);
    
})
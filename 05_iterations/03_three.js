//for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);   
}


const greetings = "Hello Saniya"

for (const greet of greetings) {
    // console.log(greet);   
}


//Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('UK', 'United Kingdom')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const myObj = {
    'Game1' : 'NFS',
    'Game2' : 'Spiderman',
    'Game3' : 'Valorant'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
    
// }       *****not working*****
const buttons = document.querySelector('.button')
const body = document.querySelector("body")

buttons.array.forEach(function(button) {
    console.log(button);
    button.addEventListner('click', function(s){
        console.log(s);
        console.log(s.target);
        if(s.target.id === 'green'){
            body.style.backgroundColor = 'green'
        }
    })
});


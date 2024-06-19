
let counter = 0;

const counter_color = document.getElementById('count');


function increase() {
    counter++;
   document.querySelector('p').innerHTML = counter;
   counter_color.style.color = 'green';
}

function decrease() {
    counter--;
    document.querySelector('p').innerHTML = counter;
    if(counter > 0) {
        counter_color.style.color = 'green';

    }else {
        counter_color.style.color = 'red';
    }
        
       
}
function reset() {
    counter = 0;
    document.querySelector('p').innerHTML = counter;
        counter_color.style.color = 'black';
}









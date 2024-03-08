let display = document.getElementById('result');
let buttons = document.querySelectorAll('.calcButtons');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            display.innerHTML = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            display.innerHTML = string ;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length-1);
            display.innerHTML = string;
        }
        else {
            string += e.target.innerHTML ;
            display.innerHTML = string ;
        }
    })
})
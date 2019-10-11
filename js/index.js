const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .buttons button')
    .forEach( btn => btn.addEventListener('click', btnClicked));

function btnClicked(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.calc .eq').addEventListener('click' ,
  () => display.value = eval(display.value) );


document.querySelector('.calc .clean').addEventListener('click' ,
  () => display.value = '');


document.querySelector('.calc .backSpace').addEventListener('click' ,
() => {
    const back = display.value;
    display.value = back.substring(0, back.length-1);
});

document.querySelector('.calc .eq').addEventListener('click' ,
() =>{
    let checkInfinity = display.value;
    if(checkInfinity == Infinity){
        display.value = 'Error';
    } else{
        display.value = eval(checkInfinity);
    }
}
);
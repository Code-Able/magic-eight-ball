let button = document.querySelector('button');
let formInput = document.querySelector('input');
let eightBall = document.querySelector('.eight-ball');
let interval;


button.addEventListener("click", (e) => {
    e.preventDefault();
    clearInterval(interval);
    let randomNumber = Math.floor(Math.random() * 5) + 1;

    if(randomNumber === 1){
        document.querySelector('.prediction').innerHTML = `<span>Yes</span>`;
    } else if (randomNumber === 2){
        document.querySelector('.prediction').innerHTML = `<span>No</span>`;
    } else if (randomNumber === 3){
        document.querySelector('.prediction').innerHTML = `<span>Maybe</span>`;
    } else if (randomNumber === 4){
        document.querySelector('.prediction').innerHTML = `<span>Outlook Uncertain</span>`;
    } else {
        document.querySelector('.prediction').innerHTML = `<span>Ask Again Later</span>`;
    }
   
    
    eightBall.classList.add("apply-shake");
    formInput.value = '';

    function removeShakeClass(){
        eightBall.classList.remove("apply-shake");
    }

    interval = setInterval(removeShakeClass, 1000);
    

});






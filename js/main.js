

let btnCoffee1 = document.querySelector('#btn-coffee1');
let btnCoffee2 = document.querySelector('#btn-coffee2');
let btnCoffee3 = document.querySelector('#btn-coffee3');

let desCon = document.querySelector('.des-section-div');

let des1 = document.querySelector('#des1');
let des2 = document.querySelector('#des2');
let des3 = document.querySelector('#des3');

let img = document.querySelector('#img');

btnCoffee1.addEventListener('click', coffeeButton1);
btnCoffee2.addEventListener('click', coffeeButton2);
btnCoffee3.addEventListener('click', coffeeButton3);

function coffeeButton1(){
    img.classList.add("coffee-button1");
    desCon.classList.add("coffee-button1");
    btnCoffee1.style.border = '3px solid #eeebe6';
    btnCoffee2.style.border = 'none';
    btnCoffee3.style.border = 'none';

    imgOut1();
}

function coffeeButton2(){
    img.classList.add("coffee-button2");
    desCon.classList.add("coffee-button2");
    btnCoffee1.style.border = 'none';
    btnCoffee2.style.border = '3px solid #eeebe6';
    btnCoffee3.style.border = 'none';

    imgOut1();
    
}

function coffeeButton3(){
    img.classList.add("coffee-button3");
    desCon.classList.add("coffee-button3");
    btnCoffee1.style.border = 'none';
    btnCoffee2.style.border = 'none';
    btnCoffee3.style.border = '3px solid #eeebe6';

    imgOut1();
}

function imgOut1(){
    img.classList.add('img-coffee-out');
    img.addEventListener('animationend', imgIn);
    desCon.classList.add('des-container-out');
    img.addEventListener('animationend', imgIn);
}

function imgIn(){
    if(img.classList.contains('coffee-button1')){
        img.src = 'imgs/coffee1-min.png';
        img.classList = '';
        img.classList.add('img-coffee-in');
    }
    else if(img.classList.contains('coffee-button2')){
        img.src = 'imgs/coffee4-min.png';
        img.classList = '';
        img.classList.add('img-coffee-in');
    }
    else if(img.classList.contains('coffee-button3')){
        img.src = 'imgs/coffee2-min.png';
        img.classList = '';
        img.classList.add('img-coffee-in');
    }

    if(desCon.classList.contains('coffee-button1')){
        des1.style.display = "flex";
        des2.style.display = "none";
        des3.style.display = "none";
        desCon.classList = '';
        desCon.classList.add('des-container-in', 'des-section-div');
    }
    else if(desCon.classList.contains('coffee-button2')){
        des1.style.display = "none";
        des2.style.display = "flex";
        des3.style.display = "none";
        desCon.classList = '';
        desCon.classList.add('des-container-in', 'des-section-div');
    }
    else if(desCon.classList.contains('coffee-button3')){
        des1.style.display = "none";
        des2.style.display = "none";
        des3.style.display = "flex";
        desCon.classList = '';
        desCon.classList.add('des-container-in', 'des-section-div');
    }
}


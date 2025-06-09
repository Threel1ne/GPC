let a = document.getElementById("input");
let v = a.value;
let g;
let p = document.getElementById("p1")

function calc() {
    if (a.value > 100) {
        a.value = 100
    }else if (a.value < 0) {
        a.value = 0;
    }
    console.log(a.value);
    if (a.value < 50) {
        g = 0;
    } else if(a.value < 55) {
        g = 1;
    } else if(a.value < 60) {
        g = 1.5;
    }else if (a.value < 65) {
        g = 2;
    }else if (a.value < 70) {
        g = 2.5;
    }else if (a.value < 75) {
        g = 3;
    }else if (a.value < 80) {
        g = 3.5;
    }else {
        g = 4; 
    }
    p.innerHTML= `<h1>${g}</h1>`;
}




'use strict';
let divs = document.getElementsByClassName('gameElement');
for(let i = 0; i < divs.length; i++){
   divs[i].addEventListener('click', mouseclick);
}

function mouseclick(){
    let div = this;
    let empty = document.getElementsByClassName('empty')[0];
    let emptyTop = empty.style.top;
    let emptyLeft = empty.style.left;
    let divTop = div.style.top;
    let divLeft = div.style.left;

    if(divTop === emptyTop && difference(divLeft, emptyLeft) <= 120 ||
        divLeft === emptyLeft && difference(divTop, emptyTop) <= 120){
            div.style.top = empty.style.top;
            div.style.left = empty.style.left;
            empty.style.top = divTop;
            empty.style.left = divLeft;
    }
}

function difference(aa, bb){
    let a = aa.slice(0, aa.length - 2);
    let b = bb.slice(0, bb.length - 2);
    return a > b ? a - b : b - a;
}



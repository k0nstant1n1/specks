'use strict';
let properlyXCoord = [20, 140, 260, 380, 20, 140, 260, 380, 20, 140, 260, 380, 20, 140, 260];
let properlyYCoord = [20, 20, 20, 20, 140, 140, 140, 140, 260, 260, 260, 260, 380, 380, 380];
for(let i = 0; i < divs.length; i++){
    divs[i].properlyLeft = properlyXCoord.shift() + 'px';
    divs[i].properlyTop = properlyYCoord.shift() + 'px';
    divs[i].checkPlace = function(){
        if(this.properlyLeft === this.style.left && this.properlyTop === this.style.top){
            this.style.backgroundColor = '#00cc00';
        }else{
        this.style.backgroundColor = 'grey';
        }
    };
    divs[i].addEventListener('click', divs[i].checkPlace);
}



'use strict';  // этот файл подкрашивает пятнашку, когда она встает на свое место

(function(){      // следующие два массива содержат координаты правильного расположения пятнашек
    let properlyXCoord = [20, 140, 260, 380, 20, 140, 260, 380, 20, 140, 260, 380, 20, 140, 260];
    let properlyYCoord = [20, 20, 20, 20, 140, 140, 140, 140, 260, 260, 260, 260, 380, 380, 380];
    let divs = document.getElementsByClassName('gameElement');
    for(let i = 0; i < divs.length; i++){  // в этом цикле добавляем каждой пятнашке
        // информацию о ее правильном местоположении и метод проверки
        // стоит она на своем месте или нет
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
        divs[i].checkPlace();
    }
})();
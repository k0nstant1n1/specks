
'use strict';  // этот файл отвечает за динамику игры
(function(){
    let divs = document.getElementsByClassName('gameElement'); // получаем из DOM коллекцию пятнашек
    for(let i = 0; i < divs.length; i++){                      // и добавляем к каждой обработчик событий
       divs[i].addEventListener('click', mouseclick);
    }

    function mouseclick(){   // эта функция отвечает за перемещение пятнашек при клике мыши
        let div = this;
        let empty = document.getElementsByClassName('empty')[0];
        let emptyTop = empty.style.top;
        let emptyLeft = empty.style.left;
        let divTop = div.style.top;
        let divLeft = div.style.left;

        if(divTop === emptyTop && difference(divLeft, emptyLeft) <= 120 || // тут проверяем стоит ли пятнашка
            divLeft === emptyLeft && difference(divTop, emptyTop) <= 120){ // рядом с пустой клеткой
                div.style.top = empty.style.top;                           // и если да, то меняем их местами
                div.style.left = empty.style.left;
                empty.style.top = divTop;
                empty.style.left = divLeft;
        }
    }

    function difference(aa, bb){            //эта функция возвращает разницу между двумя полученными координатами
        let a = aa.slice(0, aa.length - 2); // в формате "aapx, bbpx"
        let b = bb.slice(0, bb.length - 2);
        return a > b ? a - b : b - a;
    }
})();



'use strict';
/* Этот файл выводит формирует и выводит элементы игры на экран
 */
(function(){         // обернём наш код в самовызывающуюся функцию чтобы избежать создания глобальных переменных
    let container = document.getElementsByClassName('gameContainer')[0]; // достаем из DOM div элемент который будет контейнером
    container.style.backgroundColor = '#005580';                         // и зададим ему стили
    container.style.width = '500px';
    container.style.height = '500px';
    container.style.borderRadius = '7px';
    // следующие два массива содержат координаты будущих пятнашек
    const coordX = [20, 20, 20, 20, 140, 140, 140, 140, 260, 260, 260, 260, 380, 380, 380, 380];
    const coordY = [20, 20, 20, 20, 140, 140, 140, 140, 260, 260, 260, 260, 380, 380, 380, 380];

    function createDiv(){                     // функция создает и возвращает пятнашку
        let x = document.createElement('div');
        let xst = x.style;
        xst.float = 'left';
        xst.width ='100px';
        xst.height ='100px';
        xst.backgroundColor='grey';
        xst.fontSize = '50px';
        xst.fontWeight = 'bold';
        xst.color = '#1a000d';
        xst.display = 'flex';
        xst.alignItems = 'center';
        xst.justifyContent = 'center';
        xst.margin = '7px';
        xst.transition = 'all .2s';
        xst.borderRadius = '5px';
        xst.position = 'absolute';
        x.className = 'gameElement';
        x.tabIndex = '1';
        xst.zIndex = '100';
        return x;
    }

    function getRandomCoord(div){                  //эта функция выдает передаваемому диву случайные координаты
        div.style.left = `${coordX.splice(Math.floor(Math.random()*coordX.length), 1)}px`;
        div.style.top = `${coordY.splice(Math.floor(Math.random()*coordY.length), 1)}px`;
    }

    function checkCoord(div){                   // эта функция проверяет есть ли на игровом поле див с такими же координатами
        let divs = container.children;          // и если такой див есть она возвращает true
        for(let i = 0; i < divs.length; i++){
            if(div.style.left === divs[i].style.left && div.style.top === divs[i].style.top){
                coordX.push(div.style.left.match(/\d/g).join(''));
                coordY.push(div.style.top.match(/\d/g).join(''));
                return true;
            }
        }
        return false;
    }

    function divArrange(){                  // эта функция расставляет на игровом поле пятнашки случайным образом
        for(let i = 1; i < 16; i++){
            let x = createDiv();
            x.innerHTML = i;
            do{
                getRandomCoord(x)
            }
            while (checkCoord(x));

            container.appendChild(x);
        }
        container.appendChild(createEmptyDiv());
    }

    function createEmptyDiv(){           // эта функция создает прозрачный элемент, который нужен для того чтобы
        let x = document.createElement('div');// хранить в нем координаты
        let xst = x.style;
        xst.float = 'left';
        xst.width ='100px';
        xst.height ='110px';
        xst.backgroundColor='transparent';
        x.className = 'empty';
        xst.position = 'absolute';
        xst.margin = '7px';
        xst.left = coordX[0] + 'px';
        xst.top = coordY[0] + 'px';
        xst.zIndex = '1';
        return x;
    }

    divArrange();
})();
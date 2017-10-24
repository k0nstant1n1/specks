
'use strict';
(function(){
let container = document.getElementsByClassName('gameContainer')[0];
container.style.backgroundColor = '#005580';
container.style.width = '500px';
container.style.height = '500px';
container.style.borderRadius = '7px';
const coordX = [20, 20, 20, 20, 140, 140, 140, 140, 260, 260, 260, 260, 380, 380, 380, 380];
const coordY = [20, 20, 20, 20, 140, 140, 140, 140, 260, 260, 260, 260, 380, 380, 380, 380];
function createDiv(){                     // функция возвращает див
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
    xst.zIndex = '10';
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

function createEmptyDiv(){
    let x = document.createElement('div');
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
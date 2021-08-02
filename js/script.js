"use strict";//cстрогий режим , режим современного программирования
const quaWatmel = +prompt('Сколько арбузов вы уже купили?','');

const perQuaWatmel = {
count:quaWatmel,
watmel:{},//арбуз
kind:{},//вид
cap:[],//качество
cont: false//удовлетворенность
};
const ve = prompt('Покупали ли вы арбуз в этом году?',''),
        vo = prompt('Какой вид арбуза(ов) вы покупали?',''),
        vi = prompt('Какой он был по качеству?',''),
        va = prompt('Были ли вы доволни покупкой арбуза?','');
perQuaWatmel.watmel[ve]=vo;      
perQuaWatmel.watmel[vi]=va;

console.log(perQuaWatmel);

        




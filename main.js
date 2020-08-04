//Задание 1
var n = Number(prompt('Введите число n: ', 100));
var arrayNumbers = new Array();
for (i = 2; i <= n; i++){
    arrayNumbers.push(i);
}
/*for (i = 1; i < arrayNumbers.length; i++) {
    for (j = 2; j < arrayNumbers[i]; j++){
        if (arrayNumbers[i] % j == 0){
            arrayNumbers.splice(i, 1);
            --i;
        }
        
    }
}
*/
var i = 1;
while(i < arrayNumbers.length){
    for (j = 2; j < arrayNumbers[i]; j++){
        if (arrayNumbers[i] % j == 0){
            arrayNumbers.splice(i, 1);
            --i;
        }
    }
    i++;
}
console.log(arrayNumbers);

//Задание 2+3
var arrayTrash = new Array();

function addToTrash (item, prise){
    arrayTrash.push([item, prise]);
}

addToTrash('boots', 15);
addToTrash('shorts', 20);

function countBasketPrice(arrayTrash){
    var sum = 0;
    for (i = 0; i <= arrayTrash.length; i++){
        console.log(arrayTrash[i][1]); 
        /*Выдает ошибку Uncaught TypeError: Cannot read property '1' of undefined
    at countBasketPrice (main.js:42)
    at <anonymous>:1:1 
    Т.е. он не может найти элемент массива. Однако console.log данные вытягивает. Ручной подсчет arrayTrash[1][1]+arrayTrash[0][1] дает верный результат. Еще посижу, подумаю, но что-то не понимаю, почему выпадает ошибка*/
        sum += arrayTrash[i][1];
    }
    return sum;
}
//Задание 4
for (i = 0; i < 10; console.log(i++));

//Задание 5
var star = '*';
for (i = 1; i <= 20; i++){
    console.log(star, '\n');
    star += '*';
}

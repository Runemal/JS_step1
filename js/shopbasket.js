var myTrash = new Map();
var myCatalog = new Map();

function Product(productId, productName, productPrise, productDiscount, productHtml, productImage, productOpisanie, productCharakteristick, productDostavka,) {
    this.productId = productId;
    this.productName = productName;
    this.productPrise = productPrise;
    this.productDiscount = productDiscount;
    this.productHtml = productHtml;
    this.productImage = productImage;
    this.productOpisanie = productOpisanie;
    this.productCharakteristick = productCharakteristick;
    this.productDostavka = productDostavka;
 };

function countBasketPrice(){
     var sum = 0;
     for (i of myTrash.keys()){
         sum += (myTrash.get(i)[2] - myTrash.get(i)[2] / 100 * myTrash.get(i)[3]) * myTrash.get(i)[1];
     };
     return(sum);
 }
function countBasketProduct(){
    var count = 0;
    for (i of myTrash.keys()){
        count += myTrash.get(i)[1];
     };
     return(count);
}

function addToTrash(item){
    var count = Number(prompt('Введите количество товара: ' + item.productName, 1));
    myTrash.set(item.productId, [item.productName, count, item.productPrise, item.productDiscount]);
    //localStorage.setItem(item.productId, count); //Эту часть добавить на каждую страницу, где будет совершаться покупка.
 }

function takeTrash(){
    for (i = 0; i < localStorage.length; i++){
        if (localStorage.key(i) == myCatalog.get(i)){
            myTrash.set(myCatalog.get(i), [myCatalog.get(i)[0], localStorage.get(i), myCatalog.get(i)[1], myCatalog.get(i)[2],]);
        }
    }
    //Нужен массив всех данных для поиска и востановления состояния корзины при обрыве сесии. Следует ли расширить массив каталога или создать новый отдельный массив. Возможно при работе с БД этой проблемы не было бы.
}

 function addToCatalog(item){
     myCatalog.set(item.productId, [item.productName, item.productHtml, item.productImage,]);
 }

function visionInTrash(){
     if (myTrash.size != 0){
         alert("Итого в корзине " + myTrash.size + " товара/ов на сумму " + countBasketPrice + " рублей.");
     }
     else{
         alert("Корзина пуста.");
     }
 }

var carob = new Product(1, "Сироп семян дерева Кэроб", 7, 3, "carob.html", "../img/carob.jpg", "Дары солнечного Крита нашли свое воплощение в деревьях Кэроб. Его семена уникальны своей идентичностью и потому в древности они использовались для измерения веса - карат. Семена богаты витаминами и минералами. Сироп тонизирует, улучшает память и придает сил организму. Разливается в стеклянные бутылки объемом 250 мл. Рекомендуется хранить в темном прохлодном месте.", "<p>Сироп Кэроба, стеклання банка (Dorica Bottle), 250 ml. Производство: Крит. Цена: 7€. При оптовой поставке: 12 шт в коробке, 120 коробок в палетте 80 х 120 или 155 коробок в палетте 100 х 120.</p><ul><li>Био-производство</li><li>Первый отжим</li><li>Экстра-фильтрация</li></ul><p class='big_text'>При оптовой поставке:</p></div><table><tr><td>Количество товара в коробке</td><td>Размер палетты</td><td>Количество коробок в палетте</td></tr><tr><td>12</td><td>80 х 120</td><td>120</td></tr><tr><td>12</td><td>100 х 120</td><td>155</td></tr></table>", "<p class='big_text'>Доставка осуществляется транспортными компаниями. Оплата доставки не входит в стоимость и расчитыается индивидуально.</p>",);

var mythos5L = new Product(2, "Оливковое масло Cretan Mythos Bio", 55, 5, "5l_green.html", "../img/5l_green.jpg", "Дары солнечного Крита нашли свое воплощение в оливковом масле Cretan Mythos Bio. Используется первый отжим и первоклассная фильтрация, благодаря чему, масло получается густым с насыщенным ароматом и ярким вкусом. Разливается в жестяные бутыли объемом 5000 мл. Рекомендуется хранить в темном прохладном месте.", "<p>Оливковое масло Organic Extra Virgin жестяная канистра (Tin Canister) объемом 5 lit. Производство Крит. Цена 55€. </p><ul><li>Био-производство</li><li>Первый отжим</li><li>Экстра-фильтрация</li></ul> <p class='big_text'>При оптовой поставке:</p><table><tr><td>Количество товара в коробке</td><td>Размер палетты</td><td>Количество коробок в палетте</td></tr><tr><td>4</td><td>80 х 120</td><td>55</td></tr><tr><td>4</td><td>100 х 120</td><td>75</td></tr></table>", "<p class='big_text'>Доставка осуществляется транспортными компаниями. Оплата доставки не входит в стоимость и расчитыается индивидуально.</p>",);

var vios = new Product(3, "Оливковое масло VIOS", 14, 5, "vios.html", "img/vios.jpg", "Дары солнечного Крита нашли свое воплощение в оливковом масле VIOS. Используется первый отжим и первоклассная фильтрация, благодаря чему, масло получается густым с насыщенным ароматом и ярким вкусом. Разливается в стеклянные бутылки объемом 500 мл и фасуется в подарочную упаковку. Рекомендуется хранить в темном прохладном месте.", "<p>Оливковое масло VIOS Organic Extra Virgin в стеклянной бутылке (Virginia Bottle) объемом 500 ml. Производство Крит. Цена 14€.</p><ul><li>Био-производство</li><li>Первый отжим</li><li>Экстра-фильтрация</li></ul><p class='big_text'>При оптовой поставке: </p><table><tr><td>Количество товара в коробке</td><td>Размер палетты</td><td>Количество коробок в палетте</td></tr><tr><td>12</td><td>80 х 120</td><td>55</td></tr><tr><td>12</td><td>100 х 120</td><td>75</td></tr></table>", "<p class='big_text'>Доставка осуществляется транспортными компаниями. Оплата доставки не входит в стоимость и расчитыается индивидуально.</p>",);

var title = document.getElementById('title');
title.innerHTML = 'Корзина';
var basketH1 = document.getElementById('basketH1');
basketH1.innerHTML = 'Корзина';
var footer = document.getElementById('footer');
footer.innerHTML = '&copy; Все права защищены.';
var catalog = document.getElementById('catalog');

addToCatalog(vios);
addToCatalog(carob);
addToCatalog(mythos5L);

addToTrash(vios);
addToTrash(carob);
addToTrash(mythos5L);



if (myTrash.size != 0){
    for (i of myTrash.keys()){
    basketcatalog.insertAdjacentHTML('beforeend','<a href="' + myCatalog.get(i)[2] + '"><img src="" alt="" height="200" width="150"><br>' + myTrash.get(i)[0] +'</a>' +'<div style="display:inline-table; float: right;"> <div id="delProduct"></div<div id="editCount"></div>' + myTrash.get(i)[1] + ' шт.<br></div>' );
    }
    basketprise.insertAdjacentHTML('beforeend', '<hr>Итого в корзине ' + myTrash.size +' позиция/и/й и ' + countBasketProduct(myTrash) + ' товар/а/ов на сумму ' + Math.floor(countBasketPrice(myTrash)) + ' рублей.');
}
else {
    basketcatalog.insertAdjacentHTML('beforeend','Ваша корзина пуста!');
}

var delProduct = document.getElementById('delProduct');
delProduct.innerHTML = '&#9746';

function Busket(){
    delProduct;
}


var buyNow = document.getElementById('delProduct');
buyNow.onclick = Busket;

function delProduct(productId){
    myTrash.delete(productId);
}

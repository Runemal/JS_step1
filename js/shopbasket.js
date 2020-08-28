function Product(productName, productPrise, productDiscount, productHtml, productImage, productOpisanie, productCharakteristick, productDostavka,) {
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
     for (i of myBusket.keys()){
         sum += (myBusket.get(i)[1] - myBusket.get(i)[1] / 100 * myBusket.get(i)[2]) * myBusket.get(i)[0];
     };
     return(sum);
 }
function countBasketProduct(){
    var count = 0;
    for (i of myBusket.keys()){
        count += myBusket.get(i)[0];
     };
     return(count);
}

var myStock = new Map();
var myBusket = new Map();

function addToStock(item){
    myStock.set(item.productName, [item.productPrise, item.productDiscount, item.productHtml, item.productImage, item.productOpisanie, item.productCharakteristick, item.productDostavka,])
}

function takeTrash(){
    for (i = 0; i < localStorage.length; i++){
        myBusket.set(localStorage.key(i), [Number(localStorage.getItem(localStorage.key(i))), myStock.get(localStorage.key(i))[0], myStock.get(localStorage.key(i))[1]]);
    }
}


function visionInTrash(){
     if (myBusket.size != 0){
         alert("Итого в корзине " + myBusket.size + " товара/ов на сумму " + countBasketPrice + " рублей.");
     }
     else{
         alert("Корзина пуста.");
     }
 }

var carob = new Product("Сироп семян дерева Кэроб", 7, 3, "carob.html", "../img/carob.jpg", "Дары солнечного Крита нашли свое воплощение в деревьях Кэроб. Его семена уникальны своей идентичностью и потому в древности они использовались для измерения веса - карат. Семена богаты витаминами и минералами. Сироп тонизирует, улучшает память и придает сил организму. Разливается в стеклянные бутылки объемом 250 мл. Рекомендуется хранить в темном прохлодном месте.", "<p>Сироп Кэроба, стеклання банка (Dorica Bottle), 250 ml. Производство: Крит. Цена: 7€. При оптовой поставке: 12 шт в коробке, 120 коробок в палетте 80 х 120 или 155 коробок в палетте 100 х 120.</p><ul><li>Био-производство</li><li>Первый отжим</li><li>Экстра-фильтрация</li></ul><p class='big_text'>При оптовой поставке:</p></div><table><tr><td>Количество товара в коробке</td><td>Размер палетты</td><td>Количество коробок в палетте</td></tr><tr><td>12</td><td>80 х 120</td><td>120</td></tr><tr><td>12</td><td>100 х 120</td><td>155</td></tr></table>", "<p class='big_text'>Доставка осуществляется транспортными компаниями. Оплата доставки не входит в стоимость и расчитыается индивидуально.</p>",);

var mythos5L = new Product("Оливковое масло Cretan Mythos Bio", 55, 5, "5l_green.html", "../img/5l_green.jpg", "Дары солнечного Крита нашли свое воплощение в оливковом масле Cretan Mythos Bio. Используется первый отжим и первоклассная фильтрация, благодаря чему, масло получается густым с насыщенным ароматом и ярким вкусом. Разливается в жестяные бутыли объемом 5000 мл. Рекомендуется хранить в темном прохладном месте.", "<p>Оливковое масло Organic Extra Virgin жестяная канистра (Tin Canister) объемом 5 lit. Производство Крит. Цена 55€. </p><ul><li>Био-производство</li><li>Первый отжим</li><li>Экстра-фильтрация</li></ul> <p class='big_text'>При оптовой поставке:</p><table><tr><td>Количество товара в коробке</td><td>Размер палетты</td><td>Количество коробок в палетте</td></tr><tr><td>4</td><td>80 х 120</td><td>55</td></tr><tr><td>4</td><td>100 х 120</td><td>75</td></tr></table>", "<p class='big_text'>Доставка осуществляется транспортными компаниями. Оплата доставки не входит в стоимость и расчитыается индивидуально.</p>",);

var vios = new Product("Оливковое масло VIOS", 14, 5, "vios.html", "img/vios.jpg", "Дары солнечного Крита нашли свое воплощение в оливковом масле VIOS. Используется первый отжим и первоклассная фильтрация, благодаря чему, масло получается густым с насыщенным ароматом и ярким вкусом. Разливается в стеклянные бутылки объемом 500 мл и фасуется в подарочную упаковку. Рекомендуется хранить в темном прохладном месте.", "<p>Оливковое масло VIOS Organic Extra Virgin в стеклянной бутылке (Virginia Bottle) объемом 500 ml. Производство Крит. Цена 14€.</p><ul><li>Био-производство</li><li>Первый отжим</li><li>Экстра-фильтрация</li></ul><p class='big_text'>При оптовой поставке: </p><table><tr><td>Количество товара в коробке</td><td>Размер палетты</td><td>Количество коробок в палетте</td></tr><tr><td>12</td><td>80 х 120</td><td>55</td></tr><tr><td>12</td><td>100 х 120</td><td>75</td></tr></table>", "<p class='big_text'>Доставка осуществляется транспортными компаниями. Оплата доставки не входит в стоимость и расчитыается индивидуально.</p>",);

var title = document.getElementById('title');
title.innerHTML = 'Корзина';
var basketH1 = document.getElementById('basketH1');
basketH1.innerHTML = 'Корзина';
var footer = document.getElementById('footer');
footer.innerHTML = '&copy; Все права защищены.';
var catalog = document.getElementById('catalog');
//var basketcatalog = document.getElementById('basketcatalog');

addToStock(vios);
addToStock(carob);
addToStock(mythos5L);

takeTrash(localStorage)

function renderBasket(){
    if (myBusket.size != 0){
        for (i of myBusket.keys()){
        basketcatalog.insertAdjacentHTML('beforeend','<a href="' + myStock.get(i)[2] + '"><img src="" alt="" height="200" width="150"><br>' + i +'</a>' + '<div style="display: inline; float: right; width: 1em; height: 1em; color: red;" type="button" onclick="deleteProduct(\'' + i + '\')" >&#215</div><div style=" display: inline; float: right; width: 1em; height: 1em;  color: blue;" type="button" onclick="editProduct(\'' + i + '\')">&#177</div>' + '<div style="float: right;">' + myBusket.get(i)[0] + ' шт. &#8195<br></div>');
        }
        basketprise.insertAdjacentHTML('beforeend', '<hr>Итого в корзине ' + myBusket.size +' позиция/и/й и ' + countBasketProduct(myBusket) + ' товар/а/ов на сумму ' + Math.floor(countBasketPrice(myBusket)) + ' рублей.');
    }
    else {
        basketcatalog.insertAdjacentHTML('beforeend','Ваша корзина пуста!');
    }
}



function editProduct(i) {
    var count = Number(prompt('Введите количество товара: ', 0));
    if (count > 0){
        localStorage.setItem(i, count);
    }
    location.reload()
  }


function deleteProduct(productName){
    localStorage.removeItem(productName);
    location.reload()
}

window.onload = renderBasket;

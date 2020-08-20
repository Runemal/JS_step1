var myTrash = new Map();

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
     for (i of myTrash.keys()){
         sum += (myTrash.get(i)[1] - myTrash.get(i)[1] / 100 * myTrash.get(i)[2]) * myTrash.get(i)[0];
     };
     return(sum);
 }

function addToTrash(){
    var count = Number(prompt('Введите количество товара: ', 1));
    myTrash.set(vios.productName, [count, vios.productPrise, vios.productDiscount]);
 }

function visionInTrash(){
     if (myTrash.size != 0){
         alert("Итого в корзине " + myTrash.size + " товара/ов на сумму " + countBasketPrice + " рублей.");
     }
     else{
         alert("Корзина пуста.");
     }
 }

function Busket(){
    addToTrash;
}


var buyNow = document.getElementById('buyNow');
buyNow.onclick = Busket;

var vios = new Product("Оливковое масло VIOS", 14, 5, "vios.html", "../img/vios.jpg", "Дары солнечного Крита нашли свое воплощение в оливковом масле VIOS. Используется первый отжим и первоклассная фильтрация, благодаря чему, масло получается густым с насыщенным ароматом и ярким вкусом. Разливается в стеклянные бутылки объемом 500 мл и фасуется в подарочную упаковку. Рекомендуется хранить в темном прохладном месте.", "<p>Оливковое масло VIOS Organic Extra Virgin в стеклянной бутылке (Virginia Bottle) объемом 500 ml. Производство Крит. Цена 14€.</p><ul><li>Био-производство</li><li>Первый отжим</li><li>Экстра-фильтрация</li></ul><p class='big_text'>При оптовой поставке: </p><table><tr><td>Количество товара в коробке</td><td>Размер палетты</td><td>Количество коробок в палетте</td></tr><tr><td>12</td><td>80 х 120</td><td>55</td></tr><tr><td>12</td><td>100 х 120</td><td>75</td></tr></table>", "<p class='big_text'>Доставка осуществляется транспортными компаниями. Оплата доставки не входит в стоимость и расчитыается индивидуально.</p>",);

var title = document.getElementById('title');
title.innerHTML = vios.productName;
var producrH1 = document.getElementById('productH1');
producrH1.innerHTML = vios.productName;
var opisanieH3 = document.getElementById('opisanieH3');
opisanieH3.innerHTML = 'Описание товара';
var opisanieKratko = document.getElementById('opisanieKratko');
opisanieKratko.innerHTML = vios.productOpisanie;
var charakH3 = document.getElementById('charakH3');
charakH3.innerHTML = 'Характеристика товара';
var characTovar = document.getElementById('characTovar');
characTovar.innerHTML = vios.productCharakteristick;
var dostavkaH3 = document.getElementById('dostavkaH3');
dostavkaH3.innerHTML = 'Доставка';
var dostavkaTovar = document.getElementById('dostavkaTovar');
dostavkaTovar.innerHTML = vios.productDostavka;
var footer = document.getElementById('footer');
footer.innerHTML = '&copy; Все права защищены.';

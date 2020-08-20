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

function addToTrash(){
    var count = Number(prompt('Введите количество товара: ', 1));
    myTrash.set(carob.productName, [count, carob.productPrise, carob.productDiscount]);
 }
var myTrash = new Map();
var buyNow = document.getElementById('buyNow');
buyNow.onclick = addToTrash;

var carob = new Product("Сироп семян дерева Кэроб", 7, 3, "carob.html", "../img/carob.jpg", "Дары солнечного Крита нашли свое воплощение в деревьях Кэроб. Его семена уникальны своей идентичностью и потому в древности они использовались для измерения веса - карат. Семена богаты витаминами и минералами. Сироп тонизирует, улучшает память и придает сил организму. Разливается в стеклянные бутылки объемом 250 мл. Рекомендуется хранить в темном прохлодном месте.", "<p>Сироп Кэроба, стеклання банка (Dorica Bottle), 250 ml. Производство: Крит. Цена: 7€. При оптовой поставке: 12 шт в коробке, 120 коробок в палетте 80 х 120 или 155 коробок в палетте 100 х 120.</p><ul><li>Био-производство</li><li>Первый отжим</li><li>Экстра-фильтрация</li></ul><p class='big_text'>При оптовой поставке:</p></div><table><tr><td>Количество товара в коробке</td><td>Размер палетты</td><td>Количество коробок в палетте</td></tr><tr><td>12</td><td>80 х 120</td><td>120</td></tr><tr><td>12</td><td>100 х 120</td><td>155</td></tr></table>", "<p class='big_text'>Доставка осуществляется транспортными компаниями. Оплата доставки не входит в стоимость и расчитыается индивидуально.</p>",);

var title = document.getElementById('title');
title.innerHTML = carob.productName;
var producrH1 = document.getElementById('productH1');
producrH1.innerHTML = carob.productName;
var opisanieH3 = document.getElementById('opisanieH3');
opisanieH3.innerHTML = 'Описание товара';
var opisanieKratko = document.getElementById('opisanieKratko');
opisanieKratko.innerHTML = carob.productOpisanie;
var charakH3 = document.getElementById('charakH3');
charakH3.innerHTML = 'Характеристика товара';
var characTovar = document.getElementById('characTovar');
characTovar.innerHTML = carob.productCharakteristick;
var dostavkaH3 = document.getElementById('dostavkaH3');
dostavkaH3.innerHTML = 'Доставка';
var dostavkaTovar = document.getElementById('dostavkaTovar');
dostavkaTovar.innerHTML = carob.productDostavka;
var footer = document.getElementById('footer');
footer.innerHTML = '&copy; Все права защищены.';

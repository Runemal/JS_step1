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
    myTrash.set(mythos5L.productName, [count, mythos5L.productPrise, mythos5L.productDiscount]);
 }
var myTrash = new Map();
var buyNow = document.getElementById('buyNow');
buyNow.onclick = addToTrash;

var mythos5L = new Product("Оливковое масло Cretan Mythos Bio", 55, 5, "5l_green.html", "../img/5l_green.jpg", "Дары солнечного Крита нашли свое воплощение в оливковом масле Cretan Mythos Bio. Используется первый отжим и первоклассная фильтрация, благодаря чему, масло получается густым с насыщенным ароматом и ярким вкусом. Разливается в жестяные бутыли объемом 5000 мл. Рекомендуется хранить в темном прохладном месте.", "<p>Оливковое масло Organic Extra Virgin жестяная канистра (Tin Canister) объемом 5 lit. Производство Крит. Цена 55€. </p><ul><li>Био-производство</li><li>Первый отжим</li><li>Экстра-фильтрация</li></ul> <p class='big_text'>При оптовой поставке:</p><table><tr><td>Количество товара в коробке</td><td>Размер палетты</td><td>Количество коробок в палетте</td></tr><tr><td>4</td><td>80 х 120</td><td>55</td></tr><tr><td>4</td><td>100 х 120</td><td>75</td></tr></table>", "<p class='big_text'>Доставка осуществляется транспортными компаниями. Оплата доставки не входит в стоимость и расчитыается индивидуально.</p>",);

var title = document.getElementById('title');
title.innerHTML = mythos5L.productName;
var producrH1 = document.getElementById('productH1');
producrH1.innerHTML = mythos5L.productName;
var opisanieH3 = document.getElementById('opisanieH3');
opisanieH3.innerHTML = 'Описание товара';
var opisanieKratko = document.getElementById('opisanieKratko');
opisanieKratko.innerHTML = mythos5L.productOpisanie;
var charakH3 = document.getElementById('charakH3');
charakH3.innerHTML = 'Характеристика товара';
var characTovar = document.getElementById('characTovar');
characTovar.innerHTML = mythos5L.productCharakteristick;
var dostavkaH3 = document.getElementById('dostavkaH3');
dostavkaH3.innerHTML = 'Доставка';
var dostavkaTovar = document.getElementById('dostavkaTovar');
dostavkaTovar.innerHTML = mythos5L.productDostavka;
var footer = document.getElementById('footer');
footer.innerHTML = '&copy; Все права защищены.';

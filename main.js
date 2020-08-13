//Задание 4-5

function Product(productName, productPrise, productDiscount) {
    this.productName = productName;
    this.productPrise = productPrise;
    this.productDiscount = productDiscount;
};

function addToCatalog(product, count){
    myCatalog.set(product.productName, [count, product.productPrise]);
}

function addToTrash(item, count){
    myTrash.push([item.productName,
    item.productPrise,
    count,
    item.productDiscount,]);
}

function countBasketPrice(){
    var sum = 0;
    for (i = 0; i < myTrash.length; i++){
        sum += (myTrash[i][1] - myTrash[i][1] / 100 * myTrash[i][3]) * myTrash[i][2];
    }
    return(sum);
}

var myTrash = new Array();
var myCatalog = new Map();

var boots = new Product('boots', 115, 5,);
var shorts = new Product('shorts', 200, 10,);

addToCatalog(boots, 15);
addToCatalog(shorts, 20);
addToTrash(boots, 3);
addToTrash(shorts, 4);

console.log(myCatalog);
console.log(myTrash);

function visionInTrash(myTrash){
    if (myTrash.length != 0){
        alert("Итого в корзине " + myTrash.length + " товара/ов на сумму " + countBasketPrice(myTrash) + " рублей.");
    }
    else{
        alert("Корзина пуста.");
    }
}
document.getElementById("Trash").classList.add("fa", "fa-shopping-basket", "fa-3x");
//Trash.innerHTML='&#128465';
document.getElementById("Trash").onclick = visionInTrash;

console.log("В нашем каталоге представлены:\n");
for (var [name, count] of myCatalog){
    console.log(count[0] + ' '+ name + ' по цене ' + count[1] + ' рублей.');
}

console.log("Итого в корзине " + myTrash.length + " товара на сумму " + countBasketPrice(myTrash) + " рублей.");


&#128094; - обувь
&#128086; - джинсы

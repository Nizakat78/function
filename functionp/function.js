function mobile() {
    var mobilescreen = 90 + 90 + 90;
    return mobilescreen;
}
var response = mobile();
console.log(response);
function calculatetotalprice() {
    var Mobileprice = 200;
    var ComputerPrice = 90;
    var laptopPrice = 80;
    var totalprice = Mobileprice + ComputerPrice + laptopPrice;
    return totalprice;
}
var totalprice = calculatetotalprice();
console.log("Here is Total price:", totalprice);
function calculatetotalprice1(MobilePrice, Computerprice, laptopPrice) {
    return MobilePrice + Computerprice + laptopPrice;
}
var response1 = calculatetotalprice1(90, 78, 500);
console.log("Here is Total price", response1);
if (calculatetotalprice > calculatetotalprice1) {
    console.log("Here is Your First message");
}
else if (mobile < calculatetotalprice1) {
    console.log("Here is Second Message");
}
else if (mobile > calculatetotalprice) {
    console.log("Here is Third message");
}
else {
    console.log("Here is Fourth message");
}

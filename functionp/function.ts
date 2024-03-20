function mobile():number{
    let mobilescreen =90+90+90
    return mobilescreen
}
let response = mobile()
console.log(response)


function calculatetotalprice():number{
    let Mobileprice = 200
    let ComputerPrice =90
    let laptopPrice =80
    let totalprice=Mobileprice+ComputerPrice+laptopPrice
    return totalprice
}
let  totalprice=calculatetotalprice()
console.log(`Here is Total price:`, totalprice)

function calculatetotalprice1(MobilePrice :number,Computerprice:number,laptopPrice:number):number{
    return MobilePrice+Computerprice+laptopPrice
}
let response1=calculatetotalprice1(90,78,500)
console.log(`Here is Total price`, response1)

if(calculatetotalprice>calculatetotalprice1){
    console.log(`Here is Your First message`)
}
else if(mobile<calculatetotalprice1){
    console.log(`Here is Second Message`)
}
else if(mobile>calculatetotalprice){
    console.log(`Here is Third message`)
}
else{
    console.log(`Here is Fourth message`)
}
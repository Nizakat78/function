function book(biologyPage: number, MathameticsPages: number, ProgrammarPages:number){
    return biologyPage + MathameticsPages+ProgrammarPages

}

let response:number= book(10,80,10)
console.log(`Here is all Pages Which you study:`, response)



function book1():number{
    let BiologyPages =10+80+15;
    return BiologyPages
}
let response1:number=book1()
console.log(response1)

if(book1!=book&& book>book1){
    console.log(`Great you are Study All book`)
}
else if(book==book1||book!=book1){
    console.log(`Your are great Man`)
}else{
    console.log(`Your are not Good Man`)
}

function computer( name1part: number,name2part:string ="Monitor", name3part: string ="CPU"){
     
return name1part+name2part+name3part
};
let response3:string=computer(90+90+10)
console.log(response3)
    

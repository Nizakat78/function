function book(biologyPage, MathameticsPages, ProgrammarPages) {
    return biologyPage + MathameticsPages + ProgrammarPages;
}
var response = book(10, 80, 10);
console.log("Here is all Pages Which you study:", response);
function book1() {
    var BiologyPages = 10 + 80 + 15;
    return BiologyPages;
}
var response1 = book1();
console.log(response1);
if (book1 != book && book > book1) {
    console.log("Great you are Study All book");
}
else if (book == book1 || book != book1) {
    console.log("Your are great Man");
}
else {
    console.log("Your are not Good Man");
}
function computer(name1part, name2part, name3part) {
    if (name2part === void 0) { name2part = "Monitor"; }
    if (name3part === void 0) { name3part = "CPU"; }
    return name1part + name2part + name3part;
}
;
var response3 = computer(90 + 90 + 10);
console.log(response3);

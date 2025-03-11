let cats =["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function appendCat(name) {
    return cats.concat(name); 
}
function prependCat(name) {
    return [name].concat(cats); 
}
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}
function removeFirstCat() {
    return cats.slice(1); 
}





let dishes=["pizza", "spaghetti", "fried chicken", "salad"]
console.log(dishes); //print log

console.table(dishes);// print table
let i = parseFloat(prompt("chon mon an theo thu tu"));
if (i < 1 || i > dishes.length) {
    console.log("hay chon lai mon an");
} else {
    console.log("mon an ma ban chon la:", dishes[i - 1]);
}
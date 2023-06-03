let menu = ["Cristiano Ronaldo","Mason Mount"," Eden Hazard"];
console.log(menu);
let selection = prompt("Bạn có muốn nhập thêm tên cầu thủ? Chọn Y để thêm, N để từ chối");
if(selection==="Y"){
    let add = prompt("Tên cầu thủ bạn muốn thêm")
    menu.push(add);
    console.log(menu);
} else if(selection==="N"){
    console.log("Goodbye!")
}
let xoa = prompt("Nhap ten cau thu ban muon xoa");
if (xoa==="Y") {
    let index = prompt("Vi tri cau thu ban muon xoa");
    if (typeof players[index]!== "undefined") {
        players.splice(index, 1);
        console.log(players);
    } else if (typeof players[index] === "undefined") {
        alert("Khong tim thay cau thu");
    } 
} else if (xoa ==="N"){
    console.log("Good Bye!");
}

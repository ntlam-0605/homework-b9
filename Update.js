let fix = prompt("nhap Y de sua ten cau thu, N de tu choi");

if (fix==="Y") {
    let index = prompt("Nhap vi tri cau thu ma ban muon thay doi");
    let fixedPlayer = prompt("Nhap ten cau thu ban muon thay doi");
    if (typeof players[index]!== "undefined") {
        players[index] = fixedPlayer;
        console.log(players);
    } else if (typeof players[index] === "undefined") {
        alert("Khong tim thay cau thu");
    }
} else if (fix==="N"){
    console.log("Good Bye!");
}
console.log(typeof players[10]);
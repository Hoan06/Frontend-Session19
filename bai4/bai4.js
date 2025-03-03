
let input = prompt("Mời bạn nhập vào số muốn kiểm tra : ");

if (!isNaN(input)){
    if (input % 3 == 0 && input % 5 == 0){
        alert(` Số ${input} chia hết cho cả 3 và 5.`);
    } else {
        alert(` Số ${input} không chia hết cho cả 3 và 5.`);
    }
} else {
    alert("Dữ liệu nhập vào không hợp lệ");
}
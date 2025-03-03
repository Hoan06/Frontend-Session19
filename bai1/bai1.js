
let input = prompt("Mời bạn nhập vào tháng muốn kiểm tra : ");

if (input == 1 || input == 3 || input == 5 || input == 7 || input == 8 || input == 10 || input == 12 ){
    alert(` Tháng ${input} có 31 ngày .`);
} else if (input == 4 || input == 6 || input == 9 || input == 11 ){
    alert(` Tháng ${input} có 30 ngày .`);
} else if (input == 2){
    let inputCheck = prompt("Mời bạn nhập năm : ");
    if ((inputCheck % 4 == 0 && inputCheck % 100 != 0) || inputCheck % 400 == 0 ){
        alert("Tháng 2 có 29 ngày vì là năm nhuận ");
    } else {
        alert("Tháng 2 có 28 ngày vì không phải năm nhuận ");
    }
} else {
    alert("Dữ liệu nhập không hợp lệ !");
}
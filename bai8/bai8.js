
let input = prompt("Mời bạn nhập vào 1 tháng bất kì trong năm : ");

if (input < 1 || input > 12 || input == " " || isNaN(input)){
    alert(` Dữ liệu nhập vào không hợp lệ !`);
} else {
    if (input >=1 && input <= 3){
        alert(` Tháng ${input} thuộc mùa xuân .`);
    } else if (input >=4 && input <= 6){
        alert(` Tháng ${input} thuộc mùa hạ .`);
    } else if (input >=7 && input <= 9){
        alert(` Tháng ${input} thuộc mùa thu .`);
    } else {
        alert(` Tháng ${input} thuộc mùa đông .`);
    }
}
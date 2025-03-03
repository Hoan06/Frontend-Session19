
let input = prompt(` Nhập vào lựa chọn quy đổi của bạn : 
    1 . VND-->USD
    2 . USD-->VND`);

if (input == 1){
    let answerOne = Number(prompt("Nhập vào số tiền việt muốn quy đổi : "));
    let outputOne = answerOne / 23000;
    alert(` Số tiền khi quy đổi là : ${outputOne} USD `);
} else if (input == 2){
    let answerTwo = Number(prompt("Nhập vào số tiền việt muốn quy đổi : "));
    let outputTwo = answerTwo * 23000;
    alert(` Số tiền khi quy đổi là : ${outputTwo} Vnđ `);
} else {
    alert("Dữ liệu nhập không hợp lệ !");
}
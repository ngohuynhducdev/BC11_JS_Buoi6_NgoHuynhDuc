/**
 * Đầu vào 
 *      +Tạo thẻ button
 *      + In ra 10 thẻ div (chẵn màu Đỏ; lẻ màu Xanh)
 * Xử lý
 * 1.tạo biến div
 * 2.Dùng for
 *      +Nếu biến (i+1)%2 => đỏ
 *      +Còn lại => xanh
 */

document.getElementById("btnDoiMau").onclick = function (event) {
    event.preventDefault();
    var taodiv = document.getElementsByClassName("theDiv");
    for (var i = 0; i < taodiv.length; i++) {
        if ((i + 1) % 2 == 0) {
            taodiv[i].style.background = "red";
        } else {
            taodiv[i].style.background = "blue";
        }

    }
}
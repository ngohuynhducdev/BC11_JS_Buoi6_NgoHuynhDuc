/**
 * Đầu vào : tong <10000
 * Xử lý
 * 1. Tạo bien tong ,n
 *      tong = 0;
 *      n = 1;
 * 2.Dùng while (tong < 10000)
 *      tong = tong + n
 */
function submit(event) {
    event.preventDefault();
    var tong = 0;
    var n = 1;
    while (tong < 10000) {
        tong = tong + n;
        n++;
    }
    document.getElementById("divSoNguyen").innerHTML = "Tổng là: " + tong;
    document.getElementById("divSoNguyen1").innerHTML = "Số n là: " + n;
}
document.getElementById("btnSoNguyen").onclick = submit;
/**
 * Đầu vào:
 *  + Nhập vào x , n;( Với x là kiểu Float,n là Int)
 * Xử Lý:
 * 1.Tạo biến S là tổng dãy số
 * 2.Tạo biến L là lũy thừa x^1...x^n
 * 3.Gán S=0;
 *      L=1;
 * 4.Dùng For
 *  L = L * x;
 *  S = S + L;
 */

document.getElementById("btnTong").onclick = function (event) {
    event.preventDefault();
    var x = parseFloat(document.getElementById("txtSoX").value);
    var n = parseInt(document.getElementById("txtSoN").value);
    var S = 0;
    var L = 1;
    for (var i = 0; i < n; i++) {
        L = L * x;
        S += L;
    }
    document.getElementById("divTong").innerHTML = "Tổng là: " + S;
}
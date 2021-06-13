/**
 * Đầu vào 
 *      + Nhập vào n 
 * Xử lý
 * 1.Cho người dùng nhập vào n bất kì
 * 2.Tạo biến giaiThua = 1
 * 3. Dùng for()
 *      giaiThua = giaiThua * i
 * 
 */

function giaithua(event) {
    event.preventDefault();
    var n = document.getElementById("txtN").value;
    n = parseInt(n);
    var giaiThua = 1;
    for (var i = 1; i <= n; i++) {
        giaiThua *= i;
    }
    document.getElementById("divGiaiThua").innerHTML = n + '! =' + giaiThua;
}
document.getElementById("btnGiaiThua").onclick = giaithua;
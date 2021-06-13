/**
 * Đầu vào 
 *  + nhập vào biến n 
 * Xử lý:
 * 1.Tạo function kiemtrSNT 
 *      + tạo biến check
 *      +if (x<2) =>false
 *      else if( x==2) =>true
 *              (x % 2 == 0) => false
 *      else{ Dùng for ktra căn bậc 2 biến x
 *          }        
 * 2.Tạo biến n cho ng dùng nhập vào
 *  Dùng for (Nếu kiemtrSNt(n))
 *  => gán biến In += i + ""(Để in ra số từ n-1 => n)
 *  Lưu ý :bước nhảy là 2
 */
//Hàm Ktra SNT
function kiemTraSoNguyenTo(x) {
    var check = true;
    //Nếu <2 thì ko phải SNT
    if (x < 2) {
        check = false;
    } else if (x == 2) {
        check = true;
    } else if (x % 2 == 0) {
        check = false;
    } else {
        //lặp từ 3 tới n-1 với bước nhảy là 2
        for (var i = 3; i <= Math.sqrt(x); i += 2) {
            if (x % i == 0) {
                check = false;
                break;
            }
        }
    }
    return check;
}



function submit(event) {
    event.preventDefault();
    var n = document.getElementById("txtInput").value * 1;
    var In = "";
    //In kết quả từ số đầu tiên đến n
    for (var i = 1; i <= n; i++) {
        //Số nguyên tố
        if (kiemTraSoNguyenTo(i)) {
            In += i + " ";
        }
    }

    document.getElementById("divIn").innerHTML = "Các số nguyên tố tới n gồm: " + In;
}

document.getElementById("btnIn").onclick = submit;
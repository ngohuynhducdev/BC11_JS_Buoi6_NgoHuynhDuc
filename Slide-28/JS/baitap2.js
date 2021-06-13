//Cấu trúc for
function submit(event) {
    event.preventDefault();
    var number = document.getElementById("txtNumber").value * 1;

    var tong = 0;
    for (var i = 0; i <= number; i++) {
        if (i % 2 == 0)
            tong += i;
    }
    document.getElementById("divTong").innerHTML = "Tổng số chẵn từ 1 tới " + number + " là: " + tong;
}
document.getElementById("btnTong").onclick = submit;

//Cấu trúc while
function tinhTong(event) {
    event.preventDefault();
    var number = document.getElementById("txtNumber").value * 1;
    var tong1 = 0;
    var index = 0;

    while (index <= number) {

        if (index % 2 == 0) {
            tong1 += index;
        }
        index++;
    }

    document.getElementById("divTong1").innerHTML = "Tổng số chẵn từ 1 tới " + number + " là: " + tong1;
}
document.getElementById("btnTong1").onclick = tinhTong;



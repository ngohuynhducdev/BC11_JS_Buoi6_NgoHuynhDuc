//Cấu trúc for
function submit(event) {
    event.preventDefault();
    var num = 0;


    for (var i = 0; i <= 1000; i++) {
        if (i % 3 == 0) {
            num++;
        }
    }



    document.getElementById("divChia3").innerHTML = "Các số chia hết cho 3 gồm: " + num;
}
document.getElementById("btnChia3").onclick = submit;
//Cấu trúc While
function demSoChiaHetCho3(event) {
    event.preventDefault();
    var num1 = 1000;
    var tong = 0
    var i = 0;
    while (i <= num1) {
        if (i % 3 == 0) {
            tong++;
        }
        i++;
    }
    document.getElementById("divChia3-1").innerHTML = "Các số chia hết cho 3 gồm: " + tong;
}
document.getElementById("btnChia3-1").onclick = demSoChiaHetCho3;
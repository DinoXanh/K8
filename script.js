function tinhBMI() {

    let canNang = parseFloat(document.getElementById("canNang").value);
    let chieuCao = parseFloat(document.getElementById("chieuCao").value);

    if (isNaN(canNang) || isNaN(chieuCao) || chieuCao <= 0) {
        document.getElementById("ketQua").innerHTML = "Vui lòng nhập đúng dữ liệu!";
        return;
    }

    let bmi = canNang / (chieuCao * chieuCao);
    let phanLoai = "";

    if (bmi < 18.5) {
        phanLoai = "Thiếu cân";
    } else if (bmi < 25) {
        phanLoai = "Bình thường";
    } else {
        phanLoai = "Thừa cân";
    }

    document.getElementById("ketQua").innerHTML =
        "BMI: " + bmi.toFixed(2) + "<br>Phân loại: " + phanLoai;
}

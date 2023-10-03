function displayAllProduct() {
    let data = "<table class='productTable'>";
    data += "<tr>";
    data += "<th id='heading'>Ảnh minh họa</th>";
    data += "<th id='heading'>Tên sản phẩm</th>";
    data += "<th id='heading'>Giá</th>";
    data += "<th id='heading'>Tình trạng</th>";
    data += "</tr>";

    for (let i = 0; i < arrProduct.length; i++) {
        data += "<tr>";
        data += "<td class='product'><img style='width:120px;height:100px;' src='"+ arrProduct[i].image + "' alt='Lỗi'></a></td>";
        data += "<td class='product'>" + arrProduct[i].name + "</td>";
        data += "<td class='product'>" + arrProduct[i].price + "</td>";
        data += "<td class='product'>" + arrProduct[i].status + "</td>";
        data += "</tr>";
    }
    data += "</table>";
    document.getElementById("result").innerHTML = data;
}
let start = 0
let quantity = 3

function displayAllProduct() {
    let data = "<table class='productTable'>";
    data += "<tr>";
    data += "<th id='heading'>Ảnh minh họa</th>";
    data += "<th id='heading'>Tên sản phẩm</th>";
    data += "<th id='heading'>Giá</th>";
    data += "<th id='heading'>Tình trạng</th>";
    data += "</tr>";

    for (let i = start; i < quantity; i++) {
        if (arrGiaDung[i] == undefined) {
            data += "<tr>";
            data += "<td class='product'><img style='width:120px;height:100px;' src='https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/386822703_342042388289961_3916378996455758188_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=qosiIS8N6-wAX9s2vkE&_nc_ht=scontent.fhan2-3.fna&oh=03_AdRofRyRer7VGOwfcUk0qrxPyirdJM3kgHdmfdjN6Mx9hg&oe=6545F63C' alt='Lỗi'></td>";
            data += "<td class='product'></td>";
            data += "<td class='product'></td>";
            data += "<td class='product'></td>";
            data += "</tr>";
        } else {
            data += "<tr>";
            data += "<td class='product'><a target='_blank' href='" + arrGiaDung[i].src + "'><img style='width:120px;height:100px;' src='"+ arrGiaDung[i].image + "' alt='Lỗi'></a></td>";
            data += "<td class='product'>" + arrGiaDung[i].name + "</td>";
            data += "<td class='product'>" + arrGiaDung[i].price + "</td>";
            data += "<td class='product'>" + arrGiaDung[i].status + "</td>";
            data += "</tr>";
        }
    }
    data += "</table>";
    document.getElementById("productGiaDung").innerHTML = data;
}

function nextPage() {
    if (start < arrGiaDung.length - 3) {
        start += 3
        quantity += 3
        displayAllProduct()
    }
}

function previousPage() {
    if (quantity > 3) {
        start -= 3
        quantity -= 3
        displayAllProduct()
    }
}
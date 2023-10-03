function displayAllProduct() {
    let data = "<table>";
    data += "<tr>";
    data += "<th id='title'>Product Name</th>";
    data += "<th id='title'>Product Price</th>";
    data += "<th id='title'>Product Quantity</th>";
    data += "<th id='title'>Product Image</th>";
    data += "<th colspan='2' id='action'>" + arrProduct.length + " products</th>";
    data += "</tr>";

    for (let i = 0; i < arrProduct.length; i++) {
        data += "<tr>";
        data += "<td>" + arrProduct[i].name + "</td>";
        data += "<td>" + arrProduct[i].price + "</td>";
        data += "<td>" + arrProduct[i].quantity + "</td>";
        data += "<td><img style='width:120px;height:100px;' src='"+ arrProduct[i].image + "' alt='Lỗi'></td>";
        data += "</tr>";
    }
    data += "</table>";
    document.getElementById("result").innerHTML = data;
}
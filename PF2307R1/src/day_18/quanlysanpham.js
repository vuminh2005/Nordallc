let arrProduct = ["Nokia 11", "OPPO Extra", "Iphone 15", "Samsung Galaxy"];
let indexEdit = -1

function displayAllProduct() {
  let data = "<table>";
  data += "<tr>";
  data += "<th id='title'>Product Name</th>";
  data +=
    "<th colspan='2' id='action'>" + arrProduct.length + " products</th>";
  data += "</tr>";

  for (let i = 0; i < arrProduct.length; i++) {
    data += "<tr>";
    data += "<td>" + arrProduct[i] + "</td>";
    data += "<td><button onclick='editGet(" + i + ")'>Edit</button></td>";
    data += "<td><button onclick='deleteP(" + i + ")'>Delete</button></td>";
    data += "</tr>";
  }
  data += "</table>";
  document.getElementById("result").innerHTML = data;
}

function add() {
  let productName = document.getElementById("add").value;
  arrProduct.push(productName);
  document.getElementById("add").value = "";
  displayAllProduct();
}

function editGet(index) {
  indexEdit = index
  document.getElementById("edit").value = arrProduct[index]
}

function editPost() {
  let newProduct = document.getElementById("edit").value
  if (newProduct != "") {
    arrProduct[indexEdit] = newProduct
  }
  indexEdit = -1
  document.getElementById("edit").value = ""
  displayAllProduct()
}

function deleteP(index) {
  if (
    confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrProduct[index] + "?")
  ) {
    arrProduct.splice(index, 1);
  }
  displayAllProduct();
}
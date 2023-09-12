    let arr = []
    let data = ""
    let count = 0
    let index = null

    function show() {
        let data = "<table><tr class='heading'><td class='heading' colspan='2'>Product Name</td><td id='quantity' class='heading' colspan='2'>" + (count) + " Product(s)</td></tr>"
        for (let i = 0; i < arr.length; i++) {
            data += "<tr><td class='number'>" + (i + 1) + "</td><td class='name'>" + arr[i] + '</td><td><button class="edit" onclick="edit(' + i + ')">Edit</button></td><td><button class="delete" onclick="del(' + i + ')">Delete</button></td></tr>'
        }
        data += "</table>"
        document.getElementById("list").innerHTML = data
    }

    function add() {
        let item = document.getElementById("addvalue").value
        if (item == "") {
            alert("Please enter something")
        } else {
            arr.push(item)
            count++
            show()
        }
        document.getElementById("addvalue").value = ""
    }

    function edit(a) {
        document.getElementById("editvalue").value = arr[a]
        index = a
    }

    function update() {
        let change = document.getElementById("editvalue").value
        if (change == "") {
            alert("Please enter something")
            return
        } else if (index == null) {
            alert("Please choose a product")
        } else {
            arr.splice(index,1,change)
        }
        show()
        document.getElementById("editvalue").value = ""
    }

    function del(a) {
        let check = confirm("Are you sure to delete this product?")
        if (check) {
            arr.splice(a,1)
            count--
        } else {
            return
        }
        show()
    }
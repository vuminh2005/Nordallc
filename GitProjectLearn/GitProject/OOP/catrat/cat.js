class Cat {
    name
    weight
    speed

    constructor(name, weight, speed) {
        this.name = name
        this.weight = weight
        this.speed = speed
        this.check = false
    }

    noise() {
        console.log(this.name + " kêu meo meo")
    }

    catch(rat) {
        if (this.speed > rat.speed && rat.check === false && this.check === false) {
            rat.check = true
            this.check = true
            rat.speed = 0
            alert(this.name + " bắt chuột thành công")
        } else if (this.speed <= rat.speed && rat.check === false && this.check === false) {
            alert(this.name + " chưa đủ nhanh")
        } else if (this.check === true) {
            alert(this.name + " không thể bắt thêm chuột")
        } else if (rat.check === true && rat.status === true) {
            alert("Bắt không thành công, " + rat.name + " đã bị bắt trước đó")
        } else {
            alert("Bắt không thành công, " + rat.name + " đã chết")
        }
    }

    eat(rat) {
        if (rat.check === true && rat.status === true && this.check === true) {
            rat.status = false
            this.weight += rat.weight
            rat.weight = 0
            this.check = false
            alert(this.name + " đã ăn " + rat.name)
        } else if (this.check === false) {
            alert(this.name + " chưa bắt được con chuột nào")
        } else if (rat.status === false) {
            alert(rat.name + " đã chết")
        } else {
            alert(rat.name + " chưa bị bắt")
        }
    }
}
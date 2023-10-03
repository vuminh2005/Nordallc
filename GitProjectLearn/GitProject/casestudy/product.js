class Product {
    name
    price
    status
    image

    constructor(name, price, status, image) {
        this.name = name
        this.price = price
        this.status = status
        this.image = image
    }
}

let product1 = new Product("Nồi chiên không dầu", "6500 - 9400k", "Còn hàng", "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/384527827_3101439660165042_1133780370358332109_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=fnpZT65G9gIAX9gEHHd&_nc_ht=scontent.fhan14-2.fna&oh=03_AdRs76j2YBdXAXv_4Zjlt5LNXIjjg163ejnN8FGCbz-MEQ&oe=6542B662")
let product2 = new Product("Khay để đũa, thìa, dĩa", "650k", "Còn hàng", "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/385868966_6275823392529398_577710158405815581_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MASfgHHusukAX8Ib0Z2&_nc_ht=scontent.fhan14-3.fna&oh=00_AfB0LdYgDiP8jE_fMxWjcjd6AMp-7hSpftUMQB5Oqz_U8Q&oe=651FD56E")
let product3 = new Product("Giày Tommy nữ đế độn", "1990k", "Còn hàng", "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/386078315_6274969042614833_4771623251530391290_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=M78LtJBOpJ0AX9JcpKS&_nc_ht=scontent.fhan14-1.fna&oh=00_AfD0X-Xi2AZWciuHd8Fc4zbcCUCDODC2WZ9wNevOHbP8VA&oe=652117E7")

let arrProduct = [
    product1,
    product2,
    product3
]
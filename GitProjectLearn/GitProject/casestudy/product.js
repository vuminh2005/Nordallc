class Product {
    name
    price
    status
    image
    src

    constructor(name, price, status, image, src) {
        this.name = name
        this.price = price
        this.status = status
        this.image = image
        this.src = src
    }
}

let product1 = new Product("Nồi chiên không dầu", "6500 - 9400k", "Còn hàng", "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/384527827_3101439660165042_1133780370358332109_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=fnpZT65G9gIAX9gEHHd&_nc_ht=scontent.fhan14-2.fna&oh=03_AdRs76j2YBdXAXv_4Zjlt5LNXIjjg163ejnN8FGCbz-MEQ&oe=6542B662", "https://www.facebook.com/vthoa1977/posts/pfbid081iDKAGoApgYyYwL8HAwzniZBzfoshJrbzLV5UipjKQrFojr3BpPAQTpna6f3p8bl")
let product2 = new Product("Khay để đũa, thìa, dĩa", "650k", "Còn hàng", "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/385868966_6275823392529398_577710158405815581_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_ohc=MASfgHHusukAX8Ib0Z2&_nc_ht=scontent.fhan14-3.fna&oh=00_AfB0LdYgDiP8jE_fMxWjcjd6AMp-7hSpftUMQB5Oqz_U8Q&oe=651FD56E", "https://www.facebook.com/vthoa1977/posts/pfbid0bkA8hHec2ytrVpG4GcjzrTR8Dap1BQqHNjGLKb6WzRajSsdDj174HG19noMst9uZl?__cft__[0]=AZVhgX_cXhiCNxkpS3Sbss__U0DEnQ3KbCuVc-LHHmpqbqlwbw8d8tAPYMrp3MJrZesW9dsLCzs3H_nxNpb7mSZ7st2mM9kdqQQWPwG44IBCRlop2Kj5voXvtoPsb-4ouo4kEFFHApZwlFdD_5OR84UImbewB1NJC5SGdERe5CExa2q30xU7LmKbPSaROdxmI-s&__tn__=%2CO%2CP-R")
let product3 = new Product("Giày Tommy nữ đế độn", "1990k", "Còn hàng", "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/386078315_6274969042614833_4771623251530391290_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=M78LtJBOpJ0AX9JcpKS&_nc_ht=scontent.fhan14-1.fna&oh=00_AfD0X-Xi2AZWciuHd8Fc4zbcCUCDODC2WZ9wNevOHbP8VA&oe=652117E7", "https://www.facebook.com/vthoa1977/posts/pfbid0NHCLpmu9RiMYnwuzhdWTozZe1QX15a6pyKK74P8gkiFiM6SxR83ronXG5HwP5i6fl?__cft__[0]=AZXs_DZsk3LP7cH96_4mEuQMtCoLAxw1KclOHhPsoX8V3Wq2TZTPcltOLTnTUSWkXniP-Pb_jIEJgI3Pk-Wa6GWfkB9P8eBcznXIhCbTm0NnPQ-d1iTXmIwKukhUO9S_m7nrXfWf2SE8_ULc4LblGo7c-f5IL2TLIMGrWmLCMI7f1mHFkPSF2w-fbQqNISZi6PY&__tn__=%2CO%2CP-R")

let product4 = new Product("Ô hai tầng Samsonite", "1190k", "Còn hàng", "https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/370122638_6282006071911130_1325348078643092647_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_ohc=VgoeuX5KHSkAX-PHgrS&_nc_ht=scontent.fhan5-8.fna&oh=00_AfBbb0ccNqdr1by1G3iet4Y98439FrJxFDCVIcvXEIY6uw&oe=65211CB6", "https://www.facebook.com/vthoa1977/posts/pfbid02jTUskxWDNBrcviNSpD56qpJtjqwHddJnyFgwuB4mZR8DF9v9WfF9VvjskuRwHJ6Ll")
let product5 = new Product("Set dĩa hoa quả cầu vồng", "1500k", "Còn hàng", "https://scontent.fhan5-3.fna.fbcdn.net/v/t39.30808-6/386552781_6280215432090194_340802353957646469_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=3bJRzURfn1IAX8KBuMy&_nc_ht=scontent.fhan5-3.fna&oh=00_AfA6pnzOK9vRBmLAC37EXb5LnspX87Lf5Bmxo1DKNst-xg&oe=65223A02", "https://www.facebook.com/vthoa1977/posts/pfbid02ndPeQFUgjtkzVtV9MSb7hXMf1GT76TEoCPD7RNP25f3WLoG598ngFqAo6DoiWEqBl")
let product6 = new Product("Ấm trà Zwilling Sorrento", "2100k", "Còn hàng", "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/385492524_6274928855952185_8133092490422311471_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=cYuWk6sxXHMAX-G_3zP&_nc_ht=scontent.fhan5-2.fna&oh=00_AfDYqZys6p_rLFVKpBRXGyZq8RN8rzmu3dN2_k45I0_QCA&oe=65231126", "https://www.facebook.com/vthoa1977/posts/pfbid0K9MvTLGPh2wHayDJ2aoxU2PtjtwYLhPGsahAmx1AGWHK5YjPzYfoiJjdb2iA4EWtl")

let product7 = new Product("Nồi cơm điện cao tần", "6690k", "Còn hàng", "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/376628639_6182480941863644_8147733225772353544_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=BEULL4_qtZQAX_YtFsw&_nc_ht=scontent.fhan2-3.fna&oh=00_AfD8TxQ3LDH1SKEhJ12h6PjzsLbMvzVfjDaah7oqqdPUrg&oe=65258ACC", "https://www.facebook.com/vthoa1977/posts/pfbid0336tcKs3YdwSWGcLg5dg8nPn4QQDBJRyAUEHScyvrZsiEtAgDqHc3xVhb9mQ8X7xyl?__cft__[0]=AZWN5H278IE2q7OIkbjwVjy-Pjar3B6t_73466oD8-Z0jaUvz8cQoJ1FtWRKstLyyw0Rss9DEVX_M49Y0Cb4HBYgU63l8wtBOA9BxeaMYo4hRFzQ544Z-BDliKVLuFXGHVVYkxM3YT56AIF3p144gtyADiEyxXtkxaQAYKVdOHKvHt1zZqa38l4A5scRkzG_RKmPYToofy100f0UMZdUs3qg&__tn__=%2CO%2CP-y-R")
let product8 = new Product("Ấm đun bếp", "2150k", "Còn hàng", "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/370152524_6286767884768282_4037854275592490117_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_ohc=5R5a36Pl6nsAX8Lrb_3&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCOBJu_J54Vv53DswAHpXTPY6oRsIDpmAVXlP-BDkaeqg&oe=65259590", "https://www.facebook.com/vthoa1977/posts/pfbid02QiWmaGuYz7f67hFeFbqpAudYwsCe34KKdN641qoQUhSEwpgmCMkPibXpiagpA2Hxl?__cft__[0]=AZWgHOK1PfiVv9elQMxK1ZkXfRyNbD0o-KatwIKymFXyeA2Y7qgJwLJYr23H8ZtlKM_bBu9lM2i-y_6Cgd5l0k--JTqSlDQ3AORM0FcIAW-ysc3G5F_WtVKayJRk8CtFE-o647Lg795OEjlyBsI-R_adk4B6QJRfXFJcruhANkxIvyveYCpOxg5ba59WnpVGb_A&__tn__=%2CO%2CP-R")
let product9 = new Product("Bộ bát đĩa sứ châu Âu", "3390k", "Còn hàng", "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/386558678_6284684721643265_9057948668545843118_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_ohc=79W2LGrfEOkAX8FEM25&_nc_ht=scontent.fhan2-4.fna&oh=00_AfByIDb1ve7zyRrAl03Ufa5NvKVgJjS-2EeRY9N2tna0jw&oe=652412DA", "https://www.facebook.com/vthoa1977/posts/pfbid02d112RiSKWL9B2pA1stFjB6yUTQtjZS7Wsoe5S1V3ncUsE3TutvBnsw5ojmfrZWVsl?__cft__[0]=AZWWoXEMzLuvOyPBugtcbC68jYMmMl6x9L0tnFElEP1bKcfLJgUAiAR9ajjHfErQooyBcfLMVviTVrIFLK0ScSQKUTktAbRPC2OXsvAwNMnNckI06NlPP9QJomhyFXyXaVuQPgAggPPEm-_zUu1Aqxy777BkZIKhvavAbKFRLJZ28ulcuFfmBMAnSeuO56YRAGs&__tn__=%2CO%2CP-R")

let product10 = new Product("Mật ong bạc hà", "450k/lít", "Còn hàng", "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/386503614_6283913708387033_5424112259882314615_n.jpg?stp=dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_ohc=WrIIBWKWSuQAX8DUsXP&_nc_ht=scontent.fhan2-3.fna&oh=00_AfCpG5xvcvM74j9xBnqmQCtvQJTFDofil7gwP8jxgAJg9g&oe=65240716", "https://www.facebook.com/vthoa1977/posts/pfbid0DAWcyN9Ui4rqR5uH3AUxhfL5L5qqJbgzcG1Hk1rpmjUwvWAgLma75KJ1GQrY9RSzl?__cft__[0]=AZWVH1DoGH9rUykIa9uHuH280KkHuS2dGhHJqNJDlDZEDQR7qf4uSoNSCBsXLwr7dpo3rqkWi71OVIpmvfyciPsnw0idF69R4rofmLQFTyMra5OGqVBsvdZst1bbF-3rAi9no5G96BRsRxqTI8lVl7wHcdZDOguJSWEpD7Pw--R6Yaf4uQlpl2wfTanDhsrOFbs&__tn__=%2CO%2CP-R")
let product11 = new Product("Bếp từ 4 vùng nấu", "21790k", "Còn hàng", "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/386730761_6283750331736704_7440250733440400308_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Myv8hcAawogAX912AEO&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDpWCP5lI0b3tngsVPl9lIJgn0bXcIg-zPKphIIgo9g8g&oe=65243B62", "https://www.facebook.com/vthoa1977/posts/pfbid0FfyksKTHJ2Rwnq3rYtfNvQxY1TsCxv8gpc7wCm9saAkMBt19ibyJvf3S8hNN25sRl?__cft__[0]=AZXPyPei91O0G8lidgbHaFktk2-DKrIQXj3smmHXSz3ipZJoiLt6Uol9KsZ8AS98rBrfTkngg-aiFoaMHQ3w0fwn9_rk_JcjNvaPngUKrShSQz2i9stRm6C6rSpiR-xlGxP-4-LUoGjdf4jbF7_GV_jWJ_X4WBN_yBo1h1nNgekuL15fsWarOOK4TsCO9qaCFo4&__tn__=%2CO%2CP-R")
let product12 = new Product("Set 12 món thìa cốc Macchiato", "1590k", "Còn hàng", "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/370000367_6283572501754487_7019372685599077896_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=jk846gokS8oAX8saEV9&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAl6mZqt_6PKY9mVjk4l_6Chaf2rWy9UMoGZqvwcMUnMw&oe=65242EE5", "https://www.facebook.com/vthoa1977/posts/pfbid032SZJxj8en5iXSjx5g8UXZ4HHzr1w4iNkRxwnkWXEknX8nZ4g8qEffQm1mXFRpTMvl?__cft__[0]=AZU_Q7BI2E8QPGLff7tExCmg_zVTUiaciXWqxtACFNpLbBgCbQSV8u8a-otodCx69Nhu-C0KgNeTS1f-4wda0vFItSj5agGxgTADVCeY4RRTZsmMTrPsnUvHrc4REgyh9Li2f76gUA1-5oUJEG2_jHlb8yW43SvGxQb12MLgJ5ie0p3sJE1wLJnAS3-qg3RL4As&__tn__=%2CO%2CP-R")

let product13 = new Product("Máy sấy tiệt trùng dao thớt", "1450k", "Còn hàng", "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/386568192_6282417891869948_752594847940953966_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_ohc=3kIbYCuB3HYAX-KZV3l&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBbdfT7qs9Qoq_kYvaMHGIV2_ROcX6AEpfiniSbDG-1bQ&oe=6524A72A", "https://www.facebook.com/vthoa1977/posts/pfbid0hEWK1JLk5CuYHzQhhRoWpAh2m46RLKuviYZH9q8km7XwKH97LiDhLY8kUE99J7KSl?__cft__[0]=AZUpMDDfLtBoF720ihigIE650JwZMDCiD0BipM-nI5uGVFsmjiuBKYblBLRdMYkhZ61A5QYCFQMqx0Be0LMzk3v5Ueb5bUS1DBY__ZsEDHb_ZhqUAD97wuHBqKioegWDozNCnppQeBfzuGom4lvnGTT51OuA3HA1LM_Q-te75Ga5N0qCLztYOaTL0nT6d0VJ0WE&__tn__=%2CO%2CP-R")
let product14 = new Product("Gối DREAMZIE MEMORY FOAM PILLOW", "1750k", "Còn hàng", "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/386075981_6279542402157497_3225678673566574456_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=TaJmyEHHUVwAX-wSokH&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAMRbXP-MmXG-UsaoZiGXcMYYA71DOic5He4BHSFmvlqg&oe=6525482B", "https://www.facebook.com/vthoa1977/posts/pfbid0CTmwkXzSb4fRu4XcJxBp4TwtTuNYKP3jvdVdfeX37SfhqK5e9NUquJ9ycbYf1Rj4l?__cft__[0]=AZUvrDPrKvj9z9SEWSKXGzUxZOw6OuvYWTEkAAZpr2iiabv7NYfS6-yV1vAz8dq6C_64CeXO5OoyJqkV-XP-t_E1LZlltLm0Z5A8W6iqjL9N9ACCblb2Xnw6USIBLsVahfeqRUl5N6i1sEvOwUyj-NaCbVZp74s1ZiOICeSE4Tu6WepMDkQirzK08T4elQxSd_c&__tn__=%2CO%2CP-R")
let product15 = new Product("Đồng hồ treo tường MEBUS", "750k", "Còn hàng", "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/385879178_6278935395551531_2615626712291526986_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=XBlUAma5ya4AX-w18Eu&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAA-68cIDSf05rdqYSe9D7VO_Pys84SXfVRruMD6Cp49g&oe=6524F4AE", "https://www.facebook.com/vthoa1977/posts/pfbid05eSBzsrHtPQE1vjESgbTsdjduTm2MP4TrvTsmd26VW6C9mNQvpKhXhNZoFdtJMGGl?__cft__[0]=AZX4l_y9tPTivnOU_9l6uOzwhomocqChObe8qz8i49zGUtaV8YfRFRjfSe5UevE1Jsit-Ryvn28xZ7-6eq55V9bM178IMNGrlY53gd1XUoSfpdnlDen1g6VHM5YvWsEpzwpD4mseKPPMWveWiz6OT0Yz0Y5KW19mVNeBFfaiwm2TdZLPXyU5-zbBWJC4vZ5KUyw&__tn__=%2CO%2CP-R")

let product16 = new Product("Kem chân L'occitane", "790k", "Còn hàng", "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/384573382_6274576355987435_9053014937709455350_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_ohc=5CbDCgAPu-gAX_kNkrT&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDKfAFe4H83XDvAzh4_zFhaywAa_G9e01CCKpRKvOAmWw&oe=6524B19C", "https://www.facebook.com/vthoa1977/posts/pfbid02FbcL5zN8jADSZcUYwwysTUYM3AdwG2jGBCvjzDa19oUCnF8eLAULKe2jw7XeLEQnl?__cft__[0]=AZXWR6k4FcAA_vfAEvzuO8cF7mOACA4rb5bTs2emFexDR44G8ZjSlZqXaR8dyIy2QIsB0GehCk8siQAIrlbmrHpaDyONsVyM6OoSx1_8ysLHxdW_kQnW4O0CUL9yNKpB3maZAMsY-X4CBp2Q7opaVtQrAy4ALGCfbaKPmkfAbveMdkhUpYgks73C_wLoyWgcN5Q&__tn__=%2CO%2CP-R")
let product17 = new Product("Kem tay L'occitane", "790k", "Còn hàng", "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/385480437_6274554012656336_910397960128044522_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_ohc=IkGnLkq1hmgAX9a8ou2&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAcLDW9Q7uOJeXQyGzHB45rIKf2z7GvhTtGILzhNQJlWw&oe=65256EF8", "https://www.facebook.com/vthoa1977/posts/pfbid02RSn89wdS6yp1CtaadUdq7K2HH9LaQp2Dx6AqLWDDxsqj1PTnAnPVjTAJMr9T16fBl?__cft__[0]=AZUQHnUnG3UKh852rDQ3kiwG4WiJMnMN7ABF2OWJFhZhtiXLD5NrDLjlD0wi9oZvRW0dO_OdxCYvkSDlEZ8pPYSE5ZouK9Jq1TxuKkleOngEBgYoZ03BZQcG14W9waSVJErmOM5h8juEeqfhK8IxCxG9m8qM8yjwtO-GRFXXXv0sAd3Q8pXDM8C7lt2FGW3rxGk&__tn__=%2CO%2CP-R")
let product18 = new Product("Kem đánh răng Marvis", "250k", "Còn hàng", "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/385860303_6274262266018844_4727188586519522585_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=wHMkP3X3WJYAX9qvfFM&_nc_ht=scontent.fhan2-3.fna&oh=00_AfD6xPSrmNsaQTwTvzTC7TJqHhyn7YU0RnRKJU6m-jevAQ&oe=652473DC", "https://www.facebook.com/vthoa1977/posts/pfbid032sg9a75iU1fzjxPyTYBSSKukpux2VMxcmjnbymvXP1pLvA7wmsS7LuLJgyKfqCUAl?__cft__[0]=AZUK_smnlmuG1j17eBvTVpv8DBaRXH5vK6zGyNim9Xewj2j6wAgq5iWqzVGfQt1bcF2ulXcZIcxSbe6Ty3VDvjrmZNtUFR0cZBy8G2QrHgizm4IlawNy60TfKZiBx459iCp_fBSGnGjJyTk1wf6aesUNCeV5_h3XIr8ifqnMylMPzVCxgyX0Q5fbqgaMXeQ4zPA&__tn__=%2CO%2CP-R")

let product19 = new Product("Viên rửa Quantum Finish", "420k/túi", "Còn hàng", "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/383008357_6252367911541613_5669964521940547401_n.jpg?stp=dst-jpg_p960x960&_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=B0XFApuxdSIAX9ZM8TQ&_nc_ht=scontent.fhan2-3.fna&oh=00_AfA3FWOeiqUlc_hkHDlhrz_K3DMzsHtg4gHC_kj0Xbs5GA&oe=65253701", "https://www.facebook.com/vthoa1977/posts/pfbid02aD3RjAAYje7oNFnYS7f9Q4HzsQyC18TsXw6kQ1iUQNzzGu8RgSmQSogKkyTD7rg9l?__cft__[0]=AZUbPxNwRLkLyxeoIkGRsKu4rcifOcMYyXg10Azj3IxGo54Y52dNZk81DE6vq5LHQVPFSnckkjBU6MAzuGB75VXux_ZOqsibtuXjG92ArFwJZaIWadtJwjCqF06pkiPvd--e5E9BA4lf2CpMlr6NYR_aZ_wDB6EfypjvkiOdpVgXqrZGbDmD2REVagVFRSCTNLA&__tn__=%2CO%2CP-R")
let product20 = new Product("Nước giặt Savon de Maseill", "250k", "Còn hàng", "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/382929880_6252246244887113_3289002062334642037_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_ohc=uCZo5tT0TKAAX_3dQoj&_nc_ht=scontent.fhan2-3.fna&oh=00_AfA95jj79dil000jHOvRe4mQn8FZdls3yQKYEzBebzu_ww&oe=652441D9", "https://www.facebook.com/vthoa1977/posts/pfbid0z12GKHtu3brYnVXYNH75SWc27iEZ1P78fnPTumt74Hefh13TZoomrVGoKimtk1hbl?__cft__[0]=AZVtFa4jWoVSF9JenRiZGSaYHsm2RhlF_uByECuLUriBkgtOkJMfZDQ1O2O_PaMNvCWchXzpHrKJ9gtyz8WzO1nBfQji6FYYCXgFMBJ9fLsQdXzkBSbISV4lj7RnCz0kIpLiYq_-g6f_Aombf3zopNd8T4iKUFHnt7DCLdFeFAmFXBCsLkdh_hhnKnLY3WPJ8L0&__tn__=%2CO%2CP-R")
let product21 = new Product("Set mắc phủ nhung Songmics", "1300k/set50c", "Còn hàng", "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/383202714_6251359508309120_7010521145715253498_n.jpg?stp=dst-jpg_p640x640&_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_ohc=GsnM8NKj7LsAX8Se5HD&_nc_ht=scontent.fhan2-4.fna&oh=00_AfB-Uj1gGoVcvNafrU68M25XkAqaLjtJzON7DmPl4b3o6g&oe=6524E04D", "https://www.facebook.com/vthoa1977/posts/pfbid0Uju1XqKCBRSPRGk6Jh1MvhBds1kiFVWFGGwb6DqviVFBzQfQVAfvy1w2PViZmZzol?__cft__[0]=AZWA-wl5Y4zErdVgkQJzi8hD_xGYEU6g0pdjB4bkoiU3_Cq5IaebMfNy9WwbCCKule3SbqTGrwG9Xr2dNltpsNbfptfwTCFCOxxegV37RURimE-h85mDH-VijPiviqdGgJtvDrAnwDAkTahfwV-k4SlDvhBGtiCSXbvwg1SOioOsWzC5O0ayEbINP5PzFlTdORw&__tn__=%2CO%2CP-R")


let arrFlashSale = [
    product4,
    product5,
    product6,
    product10,
    product11,
    product12,
    product16,
    product17,
    product18
]

let arrGiaDung = [
    product1,
    product2,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
    product13
]

let arrThoiTrang = [product3]

let arrTienIch = [
    product4,
    product15,
    product16,
    product17,
    product18,
    product19,
    product20,
    product21
]

let arrProduct = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
    product13,
    product14,
    product15,
    product16,
    product17,
    product18,
    product19,
    product20,
    product21
]
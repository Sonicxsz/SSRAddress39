export const filters = [
	{name:{"EN":'Breakfast',"RU":'Завтрак'}, data:'breakfast'},
	{name:{"EN":'Lenten',"RU":'Постное'}, data:'lenten'},
 	{name:{"EN":'RAW BAR',"RU":'RAW BAR'}, data: 'rawbar'}, 
  {name:{"EN":'Sushi',"RU":'Суши'}, data: 'susi'},
  {name:{"EN":'Rolls',"RU":'Роллы'}, data: 'roll'}, 
  {name:{"EN":'Snacks',"RU":'Закуски'}, data:'snacks'},
  {name:{"EN":'Salads',"RU":'Салаты'}, data:'salads'},
  {name:{"EN":'Bruschetta',"RU":'Брускетты'}, data:'brusshetta'},
  {name:{"EN":'Soups',"RU":'Супы' }, data:'soap'}, 
  {name:{"EN":'Pasta and risotto',"RU":'Паста и ризотто'}, data:'pasta'},
  {name:{"EN":'Noodles',"RU":'Лапша' }, data: 'noodles'}, 
	{name:{"EN":'Fish and seafood',"RU":'Рыба и морепродукты' }, data:'fishSeafood'},
	{name:{"EN":'Meat and poultry',"RU":'Мясо и птица' }, data: 'meatPoultry'},  
	{name:{"EN":'Side dishes',"RU":'Гарниры' }, data:'sideDishes'},
  {name:{"EN": 'Desserts', "RU": 'Десерты'}, data:'desserts'},  
	{name:{"EN":'Children`s menu',"RU":'Детское меню' }, data:'children'}]

export const categories = {
  breakfast:{"EN":'Breakfasts until 14:00',"RU":'Завтраки до 14:00'} ,
  lenten:{"EN":'Lenten',"RU":'Постное'} ,
  rowbar:{"EN":'RAW BAR',"RU":'RAW BAR'} ,
  sushi:{"EN":'Sushi',"RU":'Суши'} ,
  rolls:{"EN":'Rolls',"RU":'Роллы'} ,
  snacks:{"EN":'Snacks',"RU":'Закуски'} ,
  salads:{"EN":'Salads',"RU":'Салаты'} ,
  bruschetta:{"EN":'Bruschetta',"RU":'Брускетты'},
  deserts: {"EN": 'Desserts', "RU": 'Десерты'},
  soups:{"EN":'Soups',"RU":'Супы' } ,
  pastaandrisotta:{"EN":'Pasta and risotto',"RU":'Паста и ризотто'} ,
  noodles:{"EN":'Noodles',"RU":'Лапша' } ,
  fishandseafood:{"EN":'Fish and seafood',"RU":'Рыба и морепродукты' } ,
  meatandpoultry:{"EN":'Meat and poultry',"RU":'Мясо и птица' } ,
  sidedishes:{"EN":'Side dishes',"RU":'Гарниры' } ,
  childrens:{"EN":'Children`s menu',"RU":'Детское меню' } ,

}



export const sushiArray = [
  {
    id: 1,
    name:{'EN': 'Sashimi Shrimp', 'RU': 'Сашими креветка'},
    title: {'EN': 'Shrimp, wasabi, ginger', 'RU':"Креветка, васаби, имбирь"},
    price: 759,
    count: 1,
    grams: 60,
    img: "",
  },
  {
    id: 2,
    name:{'EN': 'Salmon Sashimi', 'RU': "Сашими лосось"},
    title:{'EN': 'Salmon, wasabi, ginger', 'RU': "Лосось, васаби, имбирь"},
    price: 799,
    count: 1,
    grams: 60,
    img: "",
  },
  {
    id: 3,
    name:{'EN': 'Tuna Sashimi', 'RU': "Сашими тунец"},
    title:{'EN': 'Tuna, wasabi, ginger', 'RU': "Тунец, васаби, имбирь"},
    price: 899,
    count: 1,
    grams: 60,
    img: "",
  },
  {
    id: 4,
    name:{'EN': 'Sashimi eel', 'RU': "Сашими угорь"},
    price: 899,
    count: 1,
    grams: 60,
    img: "",
  },
  {
    id: 5,
    name:{'EN': 'Spicy crab', 'RU': "Спайси с крабом"},
    title:{'EN': 'Crab, rice, nori, spicy sauce', 'RU': "Краб, рис, нори, спайси соус"},
    price: 299,
    count: 1,
    grams: 35,
    img: "",
  },
  {
    id: 6,
    name:{'EN': 'Spicy shrimp', 'RU': "Спайси с креветкой"},
    title:{'EN': 'Shrimp, rice, nori, spicy sauce', 'RU': "Креветка, рис, нори, спайси соус"},
    price: 229,
    count: 1,
    grams: 35,
    img: "",
  },
  {
    id: 7,
    name:{'EN': 'Spicy salmon', 'RU': "Спайси с лососем"},
    title:{'EN': 'Salmon, rice, nori, spicy sauce', 'RU': "Лосось, рис, нори, спайси соус"},
    price: 229,
    count: 1,
    grams: 35,
    img: "",
  },
  {
    id: 8,
    name:{'EN': 'Spicy tuna', 'RU': "Спайси с тунцом"},
    title:{'EN': 'Tuna, rice, nori, spicy sauce', 'RU': "Тунец, рис, нори, спайси соус"},
    price: 299,
    count: 1,
    grams: 35,
    img: "",
  },
  {
    id: 9,
    name:{'EN': 'Spicy with eels', 'RU': "Спайси с угрем"},
    title:{'EN': 'Eel, rice, nori, spicy sauce', 'RU': "Угорь, рис, нори, спайси соус"},
    price: 299,
    count: 1,
    grams: 35,
    img: "",
  },
  {
    id: 10,
    name:{'EN': 'Sushi with shrimp', 'RU': "Суши с креветкой"},
    title:{'EN': 'Shrimp, rice', 'RU': "Креветка, рис"},
    price: 199,
    count: 1,
    grams: 30,
    img: "",
  },
  {
    id: 11,
    name:{'EN': 'Sushi with salmon', 'RU': "Суши с лососем"},
    title:{'EN': 'Salmon, rice', 'RU': "Лосось, рис"},
    price: 199,
    count: 1,
    grams: 30,
    img: "",
  },
  {
    id: 12,
    name:{'EN': 'Sushi with tuna', 'RU': "Суши с тунцом"},
    title:{'EN': 'Tuna, rice', 'RU': "Тунец, рис"},
    price: 259,
    count: 1,
    grams: 30,
    img: "",
  },
  {
    id: 13,
    name:{'EN': 'Sushi with eel', 'RU': "Суши с угрем"},
    title:{'EN': 'Eel, rice', 'RU': "Угорь, рис"},
    price: 259,
    count: 1,
    grams: 30,
    img: "",
  },
];

export const breakfastArray = [
  {
    id: 14,
    name:{'EN': 'Bruschetta with poached egg, avocado and salmon', 'RU':"Брускетта с яйцом пашот, авокадо и лососем"},
    title:{'EN': 'Grain bread, salted salmon, poached egg, avocado, mixed salad', 'RU':"Хлеб зерновой, лосось слабосоленый, яйцо пашот, авокадо, микс салатов"},
    price: 679,
    count: 1,
    grams: 180,
    img: "https://avatars.mds.yandex.net/get-eda/3401132/3e3083cbae1c4a9a815a5a88db9ed4ed/450x300",
  },
  {
    id: 15,
    name:{'EN': 'Zucchini dredges with salmon and cream sauce', 'RU':"Драники из цукини с лососем и сливочным соусом"} ,
    title:{'EN': 'Zucchini, egg, lightly salted salmon, cream sauce', 'RU':"Цукини, яйцо, лосось слабосоленый, соус сливочный"},
    price: 729,
    count: 1,
    grams: 160,
    img: "https://avatars.mds.yandex.net/get-eda/2050703/d0fe6a0797b741d1bf85f7b40e079136/450x300",
  },
  {
    id: 16,
    name:{'EN': 'Scramble with prosciutto and tomatoes', 'RU':"Скрамбл с прошутто и помидорами"},
    title:{'EN': 'Chicken eggs, prosciutto, tomatoes', 'RU':"Яйца куриные, прошутто, помидоры"},
    price: 499,
    count: 1,
    grams: 140,
    img: "https://avatars.mds.yandex.net/get-eda/3813301/2309447194f24bc482ee55189d530799/450x300",
  },
  {
    id: 17,
    name:{'EN': 'Tornado omelette with quinoa and vegetables', 'RU':"Торнадо омлет с киноа и овощами"},
    title:{'EN': 'Chicken egg, quinoa, tomato, avocado, cucumber', 'RU':"Яйцо куриное, киноа, томат, авокадо, огурец"},
    price: 349,
    count: 1,
    grams: 170,
    img: "https://avatars.mds.yandex.net/get-eda/3507285/e18b21e6ceaa4236a45d5e46a2758a7f/450x300",
  },
  {
    id: 18,
    name:{'EN': 'Eggs Benedict with salmon on a brioche bun', 'RU':"Яйцо бенедикт с лососем на булочке бриошь"},
    title:{'EN': 'Brioche bun, lightly salted salmon, chicken egg, hollandaise sauce', 'RU':"Булочка бриошь, лосось слабосоленый, яйцо куриное, соус голландский"},
    price: 789,
    count: 1,
    grams: 220,
    img: "https://avatars.mds.yandex.net/get-eda/2353725/9084d606a70e418b9e0a52ce76e08f80/450x300",
  },
  {
    id: 19,
    name:{'EN': 'Oatmeal', 'RU':"Овсяная каша"},
    title:{'EN': 'Oat flakes, milk', 'RU':"Овсяные хлопья, молоко"},
    price: 229,
    count: 1,
    grams: 229,
    img: "",
  },
  {
    id: 20,
    name:{'EN': 'An omelet of three eggs', 'RU':"Омлет из трех яиц"},
    title:{'EN': 'Chicken eggs', 'RU':"Яйца куриные"},
    price: 159,
    count: 1,
    grams: 159,
    img: "",
  },
  {
    id: 21,
    name:{'EN': 'Rice porridge', 'RU':"Рисовая каша"},
    title:{'EN': 'Rice Krispies, milk', 'RU':"Рисовые хлопья, молоко"},
    price: 299,
    count: 1,
    grams: 270,
    img: "",
  },
  {
    id: 22,
    name:{'EN': 'Cheesecakes with melted milk and sour cream', 'RU':"Сырники из топленого молока со сметаной"} ,
    title:{'EN': 'Cottage cheese, flour, chicken egg, sour cream', 'RU':"Творог, мука, яйцо куриное, сметана"} ,
    price: 349,
    count: 1,
    grams: 349,
    img: "",
  },
  {
    id: 23,
    name:{'EN': 'Three egg scrambled eggs', 'RU':"Яишница из трех яиц"} ,
    title:{'EN': 'Chicken eggs', 'RU':"Яйца куриные"} ,
    price: 159,
    count: 1,
    grams: 120,
    img: "",
  },
];

export const rollArray = [
  {
    id: 24,
    name: {'EN': 'Maki and avocado', 'RU': "Маки с авокадо"},
    title:{'EN': 'Avocado, rice, nori', 'RU': "Авокадо, рис, нори"},
    price: 299,
    count: 1,
    grams: 100,
    img: "",
  },
  {
    id: 25,
    name:{'EN': 'Maki with salmon', 'RU': "Маки с лососем"},
    title:{'EN': 'Salmon, rice, nori', 'RU': "Лосось, рис, нори"},
    price: 359,
    count: 1,
    grams: 100,
    img: "",
  },
  {
    id: 26,
    name:{'EN': 'Poppies with cucumber', 'RU': "Маки с огурцом"},
    title:{'EN': 'Cucumber, rice, nori', 'RU': "Огурец, рис, нори"},
    price: 249,
    count: 1,
    grams: 100,
    img: "",
  },
  {
    id: 27,
    name:{'EN': 'Tuna maki', 'RU': "Маки с тунцом"} ,
    title:{'EN': 'Tuna, rice, nori', 'RU': "Тунец, рис, нори"} ,
    price: 399,
    count: 1,
    grams: 100,
    img: "",
  },
  {
    id: 28,
    name:{'EN': 'Poppies with eel', 'RU': "Маки с угрем"},
    title:{'EN': 'Eel, rice, nori', 'RU': "Угорь, рис, нори"},
    price: 399,
    count: 1,
    grams: 100,
    img: "",
  },
  {
    id: 29,
    name:{'EN': 'California Roll', 'RU': "Ролл Калифорния"} ,
    title:{'EN': 'Crab, rice, Japanese mayonnaise, avocado, nori, tobiko', 'RU': "Краб, рис, японский майонез, авокадо, нори, тобико"},
    price: 899,
    count: 1,
    grams: 190,
    img: "",
  },
  {
    id: 30,
    name:{'EN': 'Roll Canada', 'RU': "Ролл Канада"} ,
    title:{'EN': 'Salmon, eel, cream cheese, avocado, nori, unagi yuzu sauce, sesame, rice', 'RU': "Лосось, угорь, сливочный сыр, авокадо, нори, соус унаги юдзу, кунжут, рис"},
    price: 999,
    count: 1,
    grams: 200,
    img: "",
  },
  {
    id: 31,
    name:{'EN': 'Philadelphia Roll', 'RU': "Ролл Филадельфия"},
    title:{'EN': 'Salmon, cream cheese, rice, avocado, nori', 'RU': "Лосось, сливочный сыр, рис, авокадо, нори"},
    price: 899,
    count: 1,
    grams: 200,
    img: "",
  },
  {
    id: 32,
    name:{'EN': 'Seared salmon roll', 'RU': "Ролл с опаленным лососем"} ,
    title:{'EN': 'Salmon, eel, avocado, nori, tobiko, unagi yuzu sauce, sesame, spicy sauce, rice', 'RU': "Лосось, угорь, авокадо, нори, тобико, соус унаги юдзу, кунжут, спайси соус, рис"},
    price: 999,
    count: 1,
    grams: 200,
    img: "",
  },
];

export const noodlesArray = [
  {
    id: 33,
    name:{'EN':'Buckwheat noodles with chicken in Asian sauce', 'RU':"Гречневая лапша с курицей в азиатском соусе"}, 
    title:{'EN':'Buckwheat noodles, chicken thigh bell peppers, carrots, zucchini, pods', 'RU':"Лапша гречневая, куриное бедро болгарский перец, морковь, цукини, стручки"},
    price: 559,
    count: 1,
    grams: 300,
    img: "https://avatars.mds.yandex.net/get-eda/3585205/87d4d6f75bdf4e92ae27b477224d4773/450x300",
  },
  {
    id: 37,
    name:{'EN':'Rice noodles with tiger shrimps', 'RU':"Рисовая лапша с тигровыми креветками"},
    title:{'EN':'Rice noodles, tiger shrimp, bell peppers, carrots, zucchini', 'RU':"Рисовая лапша, тигровые креветки, болгарский перец, морковь, цукини"},
    price: 659,
    count: 1,
    grams: 320,
    img: "https://avatars.mds.yandex.net/get-eda/3534679/c4b043de7c194c62adb9ca24c8ef9ba6/450x300",
  },
]

export const pastaArray = [

  {
    id: 34,
    name:{'EN':'Gnocchi with burrata and red caviar', 'RU':"Ньоки с бурратой и красной икрой"}, 
    title:{'EN':'Gnocchi, burrata, red caviar', 'RU':"Ньоки, буррата, красная икра"}, 
    price: 799,
    count: 1,
    grams: 230,
    img: "https://avatars.mds.yandex.net/get-eda/3559865/986b89f2f917469eb24d9ad6679c161f/450x300",
  },
  {
    id: 35,
    name:{'EN':'Penne with beef, porcini mushrooms and truffle sauce', 'RU':"Пенне с говядиной, белыми грибами и трюфельным соусом"}, 
    title:{'EN':'Penne, beef, parmesan cheese, white mushrooms, white wine, cream', 'RU':"Пенне, говяжья вырезка, сыр пармезан, белые грибы, вино белое, сливки"},
    price: 899,
    count: 1,
    grams: 350,
    img: "https://avatars.mds.yandex.net/get-eda/3529621/42d7ce5ef29040088492e631d6cf1a51/450x300",
  },
  {
    id: 36,
    name:{'EN':'Risotto with duck in truffle sauce', 'RU':"Ризотто с уткой в трюфельном соусе"}, 
    title:{'EN':'Arborio rice, duck, baked pumpkin', 'RU':"Рис арборио, утка, тыква запеченная"},
    price: 899,
    count: 1,
    grams: 220,
    img: "https://avatars.mds.yandex.net/get-eda/3583740/5e50ff6dcc76470a8adc75f5e933d633/450x300",
  },
 
  {
    id: 38,
    name:{'EN':'Tagliatelle with seafood', 'RU':"Тальятелле с морепродуктами"}, 
    title:{'EN':'Tagliatelle, squid, shrimp, mussels, octopus, white wine', 'RU':"Тальятелле, кальмары, кревертки, мидии, осьминог, вино белое"}, 
    price: 999,
    count: 1,
    grams: 390,
    img: "https://avatars.mds.yandex.net/get-eda/3593277/a20e1f6f5a46465c9b66cfc565801bdb/450x300",
  },
  {
    id: 39,
    name:{'EN':'Risotto with porcini mushrooms', 'RU':"Ризотто с белыми грибами"}, 
    title:{'EN':'Arborio rice, porcini mushrooms', 'RU':"Рис арборио, белые грибы"}, 
    price: 899,
    count: 1,
    grams: 190,
    img: "",
  },
  {
    id: 40,
    name:{'EN':'Spaghetti with crab in tomato sauce', 'RU':"Спагетти с крабом в томатном соусе"}, 
    title:{'EN':'Spaghetti, crab, chicken broth, basil, tomato sauce, oil', 'RU':"Спагетти, краб, куриный бульон, базилик, соус томатный, масло"}, 
    price: 999,
    count: 1,
    grams: 300,
    img: "",
  },
];

export const saladsArray = [
  {
    id: 41,
    name:{'EN':'Broken cucumber and salmon', 'RU':"Битый огурец и лосось"}, 
    title:{'EN':'Salmon, cucumbers, onions, mixed greens, cashew nuts', 'RU':"Лосось, огурцы, лук репчатый, зелень микс, орех кешью"}, 
    price: 699,
    count: 1,
    grams: 360,
    img: "https://avatars.mds.yandex.net/get-eda/3491582/25e0dfd69b2e4a4a9b73f952b85df7a4/450x300",
  },
  {
    id: 42,
    name:{'EN':'Greek salad with kalamata olives', 'RU':"Греческий салат с оливками каламата"}, 
    title:{'EN':'Baku tomatoes, cucumbers, bell peppers, red onions, mixed salad', 'RU':"Помидоры бакинские, огурцы, болгарский перец, красный лук, микс салатов"},
    price: 599,
    count: 1,
    grams: 310,
    img: "https://avatars.mds.yandex.net/get-eda/3547279/11fb7fac98ba4b90b0e57f9f59a77f26/450x300",
  },
  {
    id: 43,
    name:{'EN':'Green Bowl', 'RU':"Зеленый боул"},
    title:{'EN':'Avocado, cucumber, chicken egg, chuca lettuce, spinach', 'RU':"Авокадо, огурец, яйцо куриное, чука салат, шпинат"}, 
    price: 499,
    count: 1,
    grams: 170,
    img: "https://avatars.mds.yandex.net/get-eda/3805363/38668bf155ad480288bd1359c6493097/450x300",
  },
  {
    id: 44,
    name:{'EN':'Avocado shrimp and tomato salad', 'RU':"Салат с креветками авокадо и томатами"}, 
    title:{'EN':'Shrimp, Baku tomatoes, avocado, cilantro, sour cream, olive oil', 'RU':"Креветки, помидоры бакинские, авокадо, кинза, сметана, оливковое масло"},
    price: 799,
    count: 1,
    grams: 250,
    img: "https://avatars.mds.yandex.net/get-eda/3559865/16e8aaa2c91d4e1d87a1163fee124891/450x300",
  },
  {
    id: 45,
    name:{'EN':'Grilled shrimp Caesar', 'RU':"Цезарь с креветками на гриле"}, 
    title:{'EN':'Romano salad leaves, shrimp, cherry tomatoes, parmesan cheese, caesar sauce, wheat baguette croutons', 'RU':"Листья салата Романо, креветки, помидоры черри, сыр пармезан, соус цезарь, гренки из пшеничного багета"}, 
    price: 599,
    count: 1,
    grams: 250,
    img: "https://avatars.mds.yandex.net/get-eda/3725642/a7d5b0ec3e6b4f209bb066327c3cce68/450x300",
  },
  {
    id: 46,
    name:{'EN':'Caesar with grilled chicken breast', 'RU':"Цезарь с куриной грудкой на гриле"}, 
    title:{'EN':'Romano salad leaves, chicken fillet, cherry tomatoes, parmesan cheese, sauce', 'RU':"Листья салата Романо, куриное филе, помидоры черри, сыр пармезан, соус"},
    price: 499,
    count: 1,
    grams: 250,
    img: "https://avatars.mds.yandex.net/get-eda/3805363/c70b5268269944d4aa2eeccbc8c89f5e/450x300",
  },
  {
    id: 47,
    name:{'EN':'Nisuaz', 'RU':"Нисуаз"}, 
    title:{'EN':'Tuna fillet, baked potatoes, green beans, olives', 'RU':"Филе тунца, картофель запеченный, фасоль стручковая, оливки"}, 
    price: 999,
    count: 1,
    grams: 220,
    img: "",
  },
];

export const rawbarArray = [
  {
    id: 48,
    name:{'EN':'Sea urchin', 'RU':"Морской ёж"}, 
    title:{'EN':'Sea urchin, quail egg yolk, Ponzu sauce(1pc.)', 'RU':"Морской ёж, желток перепелиного яйца, соус Понзу(1шт.)"}, 
    price: 359,
    count: 1,
    grams: 10,
    img: "https://avatars.mds.yandex.net/get-eda/3805363/82fc446f3def42d7bdf6a79840d52018/450x300",
  },
  {
    id: 52,
    name:{'EN':'Imperial Oyster', 'RU':"Устрица императорская"}, 
    title:{'EN':'Oyster, lemon, wine sauce (1 unit)', 'RU':"Устрица, лимон, соус Винный (1шт.)"}, 
    price: 359,
    count: 1,
    grams: 10,
    img: "https://avatars.mds.yandex.net/get-eda/3506804/3ba638771e994e14be16bbd17fd88590/450x300",
  },
  {
    id: 53,
    name:{'EN':'Oyster Pink Jolie', 'RU':"Устрица Розовая Джоли"},
    title:{'EN':'Oyster, lemon, wine sauce (1 unit)', 'RU':"Устрица, лимон, соус Винный (1шт.)"}, 
    price: 499,
    count: 1,
    grams: 10,
    img: "https://avatars.mds.yandex.net/get-eda/3781088/56f84fb3422f4c688bc61cb1a893c2c5/450x300",
  },
  {
    id: 54,
    name:{'EN':'Khasan Oyster', 'RU':"Устрица Хасанская"}, 
    title:{'EN':'Oyster, lemon, wine sauce (1 unit)', 'RU':"Устрица, лимон, соус Винный (1шт.)"}, 
    price: 359,
    count: 1,
    grams: 10,
    img: "https://avatars.mds.yandex.net/get-eda/3378693/2f86c58f9fa14d4d957448168544b397/450x300",
  },
  {
    id: 49,
    name:{'EN':'Beef tartar', 'RU':"Тартар из говядины"}, 
    title:{'EN':'Beef loin, capers, mustard, tabasco, olive oil, croutons', 'RU':"Говяжья вырезка, каперсы, горчица, табаско, оливковое масло, гренки"},
    price: 699,
    count: 1,
    grams: 160,
    img: "https://avatars.mds.yandex.net/get-eda/3702558/efbdfaa6e41a44e381e6d08b932357ec/450x300",
  },
  {
    id: 50,
    name:{'EN':'Salmon and avocado tartare', 'RU':"Тартар из лосося и авокадо"}, 
    title:{'EN':'Salmon fillet, avocado, sesame, olive oil, ponzu sauce, strawberries', 'RU':"Филе лосося, авокадо, кунжут, оливковое масло, соус понзу, клубника"},
    price: 699,
    count: 1,
    grams: 190,
    img: "https://avatars.mds.yandex.net/get-eda/3774488/873d863faa0f45789ce2dba5393d6c05/450x300",
  },
  {
    id: 51,
    name:{'EN':'Tuna tartar', 'RU':"Тартар из тунца"}, 
    title:{'EN':'Tuna fillet, avocado, guacamole, sesame oil, soy sauce', 'RU':"Филе тунца, авокадо, гуакамоле, кунжутное масло, соевый соус"}, 
    price: 799,
    count: 1,
    grams: 200,
    img: "https://avatars.mds.yandex.net/get-eda/3436037/74e45e0bf868433489bc5e9545a634f0/450x300",
  },
  
];

export const childrenMenuArray = [
  {
    id: 55,
    name:{'EN': 'Beef stroganoff with mashed potatoes', 'RU':"Бефстроганов из говядины с картофельным пюре" },
    title:{'EN': 'Beef loin, mashed potatoes, cream sauce', 'RU':"Говяжья вырезка, картофельное пюре, сливочный соус" },
    price: 589,
    count: 1,
    grams: 240,
    img: "https://avatars.mds.yandex.net/get-eda/3774488/730b6bce9f584119a276fb9f20422bf6/450x300",
  },
  {
    id: 56,
    name:{'EN': 'Chicken cutlets with mashed potatoes', 'RU':"Куриные котлеты с картофельным пюре" },
    title:{'EN': 'Minced chicken, mashed potatoes, butter', 'RU':"Куриный фарш, картофельное пюре, сливочное масло" },
    price: 599,
    count: 1,
    grams: 240,
    img: "https://avatars.mds.yandex.net/get-eda/3559865/d81289567aa14454863b5cbe69461918/450x300",
  },
  {
    id: 57,
    name:{'EN': 'Chicken broth with noodles and vegetables', 'RU':"Куриный бульон с лапшой и овощами" },
    title:{'EN': 'Chicken broth, chicken filet, noodles, vegetables', 'RU':"Куриный бульон, куриное филе, лапша, овощи" },
    price: 219,
    count: 1,
    grams: 230,
    img: "https://avatars.mds.yandex.net/get-eda/3436037/93fce62acc254aee95de5b1827dea56a/450x300",
  },
  {
    id: 58,
    name:{'EN': 'Minestrone', 'RU':"Минестроне" },
    title:{'EN': 'Vegetable broth, vegetables', 'RU':"Овощной бульон, овощи" },
    modifier: {
      "EN": [
        'standard',
        'With chicken meatballs'
      ],
      "RU": [
        'cтандартное',
        'c куриными фрикадельками'
      ]
    },
    price: 229,
    count: 1,
    grams: 240,
    img: "https://avatars.mds.yandex.net/get-eda/3724421/4128d6509dbe49faa7f43205d81a0557/450x300",
  },
  
  {
    id: 59,
    name:{'EN': 'Penne in cream sauce with parmesan cheese', 'RU':"Пенне в сливочном соусе с сыром пармезан" },
    title:{'EN': 'Penne, parmesan cheese, cream sauce', 'RU':"Пенне, сыр пармезан, сливочный соус" },
    price: 249,
    count: 1,
    grams: 210,
    img: "https://avatars.mds.yandex.net/get-eda/3813301/900e522b23a84369b9cd6a96527b6d48/450x300",
  },
  {
    id: 60,
    name:{'EN': 'Vegetable sticks with cream sauce', 'RU':"Овощные палочки с сливочным соусом" },
    title:{'EN': 'Bell peppers, carrots', 'RU':"Перец болгарский, морковь"},
    price: 189,
    count: 1,
    grams: 110,
    img: "",
  },
];

export const brusshettaArray = [
  {
    id: 61,
    name:{'EN': 'With Prosciutto and Strachella', 'RU':"С Прошутто и Страчеллой" },
    title:{'EN': 'Grain bread, Prosciutto, Strachella cheese, cherry tomatoes, lettuce', 'RU':"Хлеб зерновой, Прошутто, сыр Страчелла, помидоры Черри, салат" },
    price: 699,
    count: 1,
    grams: 190,
    img: "https://avatars.mds.yandex.net/get-eda/3593277/5753bda1f86e431db636ba66b1bc757c/450x300",
  },
  {
    id: 62,
    name:{'EN': 'With crab', 'RU':"С крабом" },
    title:{'EN': 'Grain bread, crab meat, tomatoes, Romano salad, Spicy sauce', 'RU':"Хлеб зерновой, крабовое мясо, помидоры, салат Романо, Спайси соус" } ,
    price: 899,
    count: 1,
    grams: 190,
    img: "https://avatars.mds.yandex.net/get-eda/3502800/f9bcd9e54cff443394f97a19aaaf297b/450x300",
  },
  {
    id: 63,
    name:{'EN': 'With salmon and avocado', 'RU':"С лососем и авокадо" },
    title:{'EN': 'Grain bread, lightly salted salmon, avocado, tomato, creamy', 'RU':"Хлеб зерновой, лосось слабосоленый, авокадо, помидоры, сливочный" },
    price: 699,
    count: 1,
    grams: 220,
    img: "https://avatars.mds.yandex.net/get-eda/3436037/a6696af622ca4bfa972e373ad7ea670d/450x300",
  },
  {
    id: 64,
    name:{'EN': 'With roast beef', 'RU':"С ростбифом" },
    title:{'EN': 'Grain bread, roast beef, tomatoes, red onions, mustard, horseradish, olive oil', 'RU':"Хлеб зерновой, ростбиф, помидоры, красный лук, горчица, хрен, оливковое" },
    price: 599,
    count: 1,
    grams: 190,
    img: "https://avatars.mds.yandex.net/get-eda/3504598/687576360af54e0fa44d791c716668ca/450x300",
  },
  {
    id: 65,
    name:{'EN': 'With tomatoes and avocado', 'RU':"С томатами и авокадо" },
    title:{'EN': 'Grain bread, tomatoes, avocado, guacamole sauce, Romano salads, Frise', 'RU': "Хлеб зерновой, помидоры, авокадо, соус Гуакамоле, салаты Романо, Фризе"},
    price: 499,
    count: 1,
    grams: 165,
    img: "https://avatars.mds.yandex.net/get-eda/3781088/e561170d1c754343833e9f34e786ef37/450x300",
  },
];

export const sideDishesArray = [
  {
    id: 66,
    name:{'EN': 'Fried potatoes with oyster mushrooms', 'RU':"Жареный картофель с вешенками" },
    title:{'EN': 'Potatoes, oyster mushrooms, onions, parsley, garlic oil, salt, pepper', 'RU':"Картофель, грибы вешенки, лук, петрушка, чесночное масло, соль, перец" },
    price: 399,
    count: 1,
    grams: 200,
    img: "",
  },
  {
    id: 67,
    name:{'EN': 'Roasted spinach with tomatoes', 'RU':"Жареный шпинат с томатами" },
    title:{'EN': 'Spinach, garlic oil, cherry tomatoes, salt, pepper', 'RU': "Шпинат, чесночное масло, томаты черри, соль, перец"},
    price: 399,
    count: 1,
    grams: 90,
    img: "",
  },
  {
    id: 68,
    name:{'EN': 'Mashed potatoes', 'RU':"Картофельное пюре" },
    title:{'EN': 'Potatoes, butter, cream', 'RU':"Картофель, сливочное масло, сливки" },
    price: 349,
    count: 1,
    grams: 150,
    img: "",
  },
  {
    id: 69,
    name:{'EN': 'Grilled corn', 'RU':"Кукуруза на гриле" },
    title:{'EN': 'Corn', 'RU':"Кукуруза" },
    price: 399,
    count: 1,
    grams: 200,
    img: "",
  },
  {
    id: 70,
    name:{'EN': 'Asparagus', 'RU':"Спаржа" },
    title:{'EN': 'Asparagus, olive oil', 'RU':"Спаржа, оливковое масло" },
    price: 499,
    count: 1,
    grams: 100,
    img: "",
  },
];


export const meatPoultry = [
  {
    id: 71,
    name:{'EN': 'Asian beef with rice', 'RU':"Говядина по-азиатски с рисом" },
    title:{'EN': 'Beef loin, rice, pea pods, soy sprouts, Asian sauce', 'RU':"Говяжья вырезка, рис, стручки гороха, ростки сои, соус азиатский" },
    price: 899,
    count: 1,
    grams: 280,
    img: "https://avatars.mds.yandex.net/get-eda/3377781/0ef9d244a4de42268242ae341246337e/450x300",
  },
  {
    id: 72,
    name:{'EN': 'Chicken curry with rice', 'RU':"Курица карри с рисом" },
    title:{'EN': 'Chicken fillet, rice, curry sauce', 'RU':"Куриное филе, рис, карри соус" },
    price: 699,
    count: 1,
    grams: 280,
    img: "https://avatars.mds.yandex.net/get-eda/2415806/5369455898bc4c4d869b3e4eb81f4f5d/450x300",
  },
  {
    id: 73,
    name:{'EN': 'Ribeye steak with grilled corn', 'RU':"Рибай стейк с кукурузой на гриле" },
    title:{'EN': 'Beef loin, corn cob', 'RU':"Говяжья вырезка, початок кукурузы" },
    price: 2599,
    count: 1,
    grams: 380,
    img: "",
  },
  {
    id: 74,
    name:{'EN': 'Roe deer stew with mashed potatoes', 'RU':"Томленая косуля с картофельным пюре" },
    title:{'EN': 'Tender roe meat, mashed potatoes', 'RU':"Нежное мясо косули, картофельное пюре" },
    price: 1199,
    count: 1,
    grams: 240,
    img: "",
  },
  {
    id: 75,
    name:{'EN': 'Grilled filet mignon with zucchini', 'RU':"Филе миньон с цукини на гриле" },
    title:{'EN': 'Beef loin, zucchini, mushroom sauce, vegetable oil', 'RU':"Говяжья вырезка, цукини, грибной соус, масло растительное" },
    price: 1699,
    count: 1,
    grams: 350,
    img: "",
  },
];

export const snacksArray = [
  {
    id: 76,
    name:{'EN': 'Meat Plateau', 'RU':"Мясное плато"},
    title:{'EN': 'Prosciutto, roast beef, salami', 'RU':"Прошутто, ростбиф, салями" },
    price: 1299,
    count: 1,
    grams: 150,
    img: "https://avatars.mds.yandex.net/get-eda/3506707/3a4692592f0e4b5a9100d490f02a0974/450x300",
  },
  {
    id: 77,
    name:{'EN': 'Chicken liver pate with brioche', 'RU':"Паштет из куриной печени с бриошью" },
    title:{'EN': 'Chicken liver pate, brioche, fig jam', 'RU':"Паштет из куриной печени, бриошь, джем из инжира" },
    price: 399,
    count: 1,
    grams: 120,
    img: "https://avatars.mds.yandex.net/get-eda/3420935/e586c76c33c445259979def0c227b0fd/450x300",
  },
  {
    id: 78,
    name:{'EN': 'Antipasti Set', 'RU': "Сет Антипасти"},
    title:{'EN': 'Kalamata olives, sun-dried tomatoes, artichokes', 'RU':"Оливки каламата, вяленые томаты, артишоки" },
    price: 1199,
    count: 1,
    grams: 250,
    img: "https://avatars.mds.yandex.net/get-eda/3504598/5f54f90f71ff42eeb2bcf0cd3c58a9cc/450x300",
  },
  {
    id: 79,
    name:{'EN': 'Cheese Plateau', 'RU':"Сырное плато" },
    title:{'EN': 'Gorgonzola, Brie, Parmesan, nuts, dried fruit, grapes and honey', 'RU':"Горгонзола, бри, пармезан, орехи, сухофрукты, виноград и мед" },
    price: 1399,
    count: 1,
    grams: 330,
    img: "https://avatars.mds.yandex.net/get-eda/3454897/71660cfbea344b4fbf02ce26adde63b3/450x300",
  },
];

export const fishSeafood = [
  {
    id: 80,
    name:{'EN': 'Grilled shrimp with spicy sauce', 'RU':"Креветки на гриле с соусом спайси"} ,
    title:{'EN': 'Shrimp, soy sauce, sesame oil, spicy sauce, sesame seeds, bamboo leaf', 'RU':"Креветки, соевый соус, масло кунжутное, спайси соус, кунжут, лист бамбука"},
    price: 799,
    count: 1,
    grams: 150,
    img: "https://avatars.mds.yandex.net/get-eda/3583740/eb737a5203734f5e8ec1557bf2c8ef49/450x300",
  },
  {
    id: 81,
    name:{'EN': 'Mussels in wine sauce', 'RU':"Мидии в винном соусе"} ,
    title:{'EN': 'Mussels, chicken broth, wine, coconut milk, rosemary, thyme, cilantro', 'RU':"Мидии, куриный бульон, вино, кокосовое молоко, розмарин, тимьян, кинза"},
    price: 699,
    count: 1,
    grams: 500,
    img: "https://avatars.mds.yandex.net/get-eda/3593277/88a00787ad4647a1a789d184cd12667a/450x300",
  },
 
  {
    id: 125,
    name:{'EN': 'Salmon steak with vegetable salsa', 'RU':"Стейк лосося с овощной сальсой"},
    title:{'EN': 'Salmon fillet, tomato salsa, avocado, cucumber vegetable oil', 'RU':"Филе лосося, сальса из томатов, авокадо, огурец масло растительное"},
    modifier:{'EN':['on the grill', 'steamed'], 'RU':['на гриле','на пару']},
    price: 1199,
    count: 1,
    grams: 200,
    img: "https://avatars.mds.yandex.net/get-eda/3514991/e93a9c2fb26d46e9bfc020cead3f934e/450x300",
  },
 {
  id: 2342,
  name: {'EN': 'Sea bass fillet with red couscous', 'RU': 'Филе сибаса с красным кускусом'},
  title: {'EN': 'Sea bass fillet, zucchini, cilantro, pesto sauce, olive oil, tomato', 'RU': 'Сибас филе, цукини, кинза, соус песто, масло оливковое, томат'},
  price: 899,
  count: 1,
  grams: 300,
  img: "/assets/items/2342.jpg"
 },
 {
  id: 2343,
  name: {'EN': 'Black cod on a bed of spinach', 'RU': 'Черная треска на подушке из шпината'},
  title: {'EN': 'Baked black cod fillet served on a bed of poached spinach surrounded by walnut sauce and almond slices', 'RU': 'Запеченное филе черной трески подается на подушке из припущенного шпината в окружении орехового соуса и слайсов миндаля'},
  price: 890,
  count: 1,
  grams: 180,
  img: "/assets/items/2343.jpg"
 }
];

export const souosArray = [
  {
    id: 84,
    name:{'EN': 'Borscht with roe deer', 'RU':"Борщ с косулей"} ,
    title:{'EN': 'Red borscht with meat, tender roe and sour cream', 'RU':"Красный борщ с мясом, нежной косули и сметаной"} ,
    price: 499,
    count: 1,
    grams: 280,
    img: "https://avatars.mds.yandex.net/get-eda/1962206/f2e77638b023448eb2e6a0689a18733c/450x300",
  },
  {
    id: 85,
    name:{'EN': 'Cream soup of wild mushrooms', 'RU':"Крем-суп из лесных грибов"} ,
    title:{'EN': 'Champignons, porcini mushrooms, cream, rice chips', 'RU':"Шампиньоны, белые грибы, сливки, рисовые чипсы"} ,
    price: 449,
    count: 1,
    grams: 270,
    img: "https://avatars.mds.yandex.net/get-eda/3439767/a990b9337c5941fb8680ed16d95aa479/450x300",
  },
  {
    id: 86,
    name:{'EN': 'Chicken noodle soup', 'RU':"Суп-лапша из цыпленка"} ,
    title:{'EN': 'Chicken broth, vermicelli, chicken fillet, quail egg, herbs', 'RU':"Куриный бульон, вермишель, куриное филе, перепелиное яйцо, зелень"} ,
    price: 399,
    count: 1,
    grams: 450,
    img: "https://avatars.mds.yandex.net/get-eda/3725642/9f060f3824d44083bbdc5dae565dce9f/450x300",
  },
  {
    id: 87,
    name:{'EN': 'Tom Yum with seabass and seafood', 'RU':"Том ям с сибасом и морепродуктами"} ,
    title:{'EN': 'Coconut milk, mussels, shrimp, sea bass, tomatoes, rice, mushrooms', 'RU':"Кокосовое молоко, мидии, креветки, сибас, помидоры, рис, грибы"} ,
    price: 799,
    count: 1,
    grams: 580,
    img: "https://avatars.mds.yandex.net/get-eda/3504598/5007287a0a8a4748b03272697031b647/450x300",
  },
];

export const dessertsArray = [
  {
    id: 89,
    name:{'EN': 'Warm apple pie with an ice cream scoop', 'RU':"Теплый яблочный пирог с шариком мороженого"} ,
    title:{'EN': 'Homemade apple and puff pastry pie, ice cream scoop, nuts', 'RU':"Домашний пирог из яблок и слоеного теста, шарик мороженого, орехи"} ,
    price: 499,
    count: 1,
    grams: 210,
    img: "",
  },
  {
    id: 90,
    name:{'EN': 'Chocolate fondant with vanilla ice cream', 'RU':"Шоколадный фондан с ванильным мороженым"},
    title:{'EN': 'Dark chocolate fondant, vanilla ice cream scoop', 'RU':"Фондан из темного шоколада, шарик ванильного мороженого"},
    price: 599,
    count: 1,
    grams: 270,
    img: "",
  },
];

export const lentenArray = [
  {
    id: 91,
    name:{'EN': 'Baked yams with mushrooms and zazaki sauce', 'RU':"Запеченный батат с грибами и соусом дзадзики"},
    title:{'EN': 'Batat, mushrooms, oyster mushrooms, ceps, vegetable oil, garlic puree, cucumbers, lean sour cream, olive oil, truffle oil, pearl onions, green onions, ground olives, dill, salt, pepper, thyme', 'RU':"Батат, шампиньоны, вешенки, белые грибы, масло растительное, чесночное пюре, огурцы, постная сметана, масло оливковое, масло трюфельное, жемчужный лук, лук зеленый, земля из маслин, укроп, соль, перец, тимьян"},
    price: 590,
    count: 1,
    grams: 270,
    img: "https://eda.yandex.ru/images/3208959/0228a35b95534b8e8a2a9b3f66b1e0b4-450x300.jpeg",
  },  {
    id: 92,
    name:{'EN': 'Pistachio cream with coconut milk', 'RU':"Фисташковый крем на кокосовом молоке"},
    title:{'EN': 'Cream of coconut, pistachio paste, powdered sugar, lean cookie crumb, blueberries, freeze-dried raspberries, sunflower seeds', 'RU':"Сливки из кокоса, фисташковая паста, сахарная пудра, крошка из постного печенья, голубика, малина сублимированная, семечка подсолнечника"},
    price: 370,
    count: 1,
    grams: 120,
    img: "https://eda.yandex.ru/images/3337779/dba9330876324cf2b9fc5837dc33ad9f-450x300.jpeg",
  },  {
    id: 93,
    name:{'EN': 'Baked zucchini with beet coulis', 'RU':"Печёный кабачок со свекольным кули"},
    title:{'EN': 'Beets, avocado, mint, cilantro, zucchini, mini spinach, chuka, borado bread chips, kimchi sesame, garlic fraiche, lean sour cream, pumpkin puree, sunflower seeds, olive oil ground, olive oil, salt, pepper, zatar, honey', 'RU':"Свекла, авокадо, мята, кинза, кабачки, мини шпинат, чука, чипсы из бородинского хлеба, кунжут с кимчи, чесночный фреш, сметана постная, пюре тыквы, семечки подсолнечника, земля из маслин, масло оливковое, соль, перец, затар, мёд"},
    price: 570,
    count: 1,
    grams: 225,
    img: "https://eda.yandex.ru/images/3667559/f78601f42dd94e2fa9788763a06550f2-450x300.jpeg",
  }, {
    id: 94,
    name:{'EN': 'Vegetable salad with your choice of dressing', 'RU':"Овощной салат с заправкой на выбор"},
    title:{'EN': 'Cucumber, tomato, bell pepper, parsley, dill, green onion, fresh basil, red onion, tajas olives, olive oil, salt, black pepper, provan herbs', 'RU':"Огурец, помидор, болгарский перец, петрушка, укроп, лук зелёный, базилик свежий, лук красный, оливки таджасские, масло оливковое, соль, перец черный, прованские травы"},
    price: 590,
    modifier: {
      'RU':[
        'c оливковым маслом',
        'c ароматным маслом',
        'c постной сметаной: 100₽'
      ],
      'EN': [
        'with olive oil',
        'with fragrant oil',
        'with lean sour cream: 100₽'
      ]
    },
    count: 1,
    grams: 188,
    img: "https://eda.yandex.ru/images/3724421/cd721dd431634672b6980a0c65df1da0-450x300.jpeg",
  },  {
    id: 95,
    name:{'EN': 'Lentil cream soup with artichokes and pickled onions', 'RU':"Крем-суп из чечевицы с артишоками и маринованным лучком"},
    title:{'EN': 'Lentils, carrots, onions, potatoes, artichokes, pearl onions, green onions, seeds, ground olives, olive oil, vegetable oil, garlic, salt, pepper', 'RU':"Чечевица, морковь, лук репчатый, картофель, артишоки, лук жемчужный, лук зеленый, семечки, земля из маслин, оливковое масло, масло растительное, чеснок, соль, перец"},
    price: 420,
    count: 1,
    grams: 330,
    img: "https://eda.yandex.ru/images/3580810/96ad18ccda1d42e3b3949d156dbe14f1-450x300.jpeg",
  },
  {
    id: 96,
    name:{'EN': 'Hummus with grilled broccoli', 'RU':"Хумус с брокколи гриль"},
    title:{'EN': 'Chickpeas, tahini, ground cumin, lemon juice, broccoli, olive oil, sea salt, slivered almonds, zatar, sesame oil, sunflower and pumpkin seeds, microgreens', 'RU':"Нут, тахини, кумин молотый, лимонный сок, брокколи, масло оливковое, соль морская, миндаль слайс, затар, масло кунжутное, семечка подсолничника и тыквы, микрозелень"},
    price: 490,
    count: 1,
    grams: 270,
    img: "https://eda.yandex.ru/images/3106738/aa1e9c65855440c8bfc59cc905a5db77-450x300.jpeg",
  },
  {
    id: 97,
    name:{'EN': 'Crispy falafel with babaganoush, dzadziki and fresh tomatoes', 'RU':"Хрустящий фалафель с бабагануш, дзадзики и свежими томатами"},
    title:{'EN': 'Chickpeas, spinach, truffle paste, truffle oil, breadcrumbs, wheat flour, coconut milk, baked eggplant, tomatoes, cilantro, parsley, green onions, garlic puree, cucumber, lean sour cream, olive seeds, tomatoes, basil, black pepper, zatar, olive oil, salt', 'RU':"Нут, шпинат, трюфельная паста, масло трюфельное, панировочные сухари, мука пшеничная, молоко кокосовое, баклажан печёный, томаты, кинза, петрушка, лук зелёный, чесночное пюре, огурец, постная сметана, земля из маслин, помидоры, базилик, перец черный, затар, масло оливковое, соль"},
    price: 690,
    count: 1,
    grams: 340,
    img: "https://eda.yandex.ru/images/3682162/00c3527cf7ee4de79f4ef93660ff3ed9-450x300.jpeg",
  }
]



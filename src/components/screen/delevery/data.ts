
export const filters = [
    {name:{"EN":'Season',"RU":'Сезонное'}, data:'season'},

	{name:{"EN":'Breakfast',"RU":'Завтрак'}, data:'breakfast'},
 	{name:{"EN":'RAW BAR',"RU":'RAW BAR'}, data: 'rawbar'},
  {name:{"EN":'Sushi',"RU":'Суши'}, data: 'susi'},
  {name:{"EN":'Rolls',"RU":'Роллы'}, data: 'roll'}, 
  {name:{"EN":'Starters',"RU":'Закуски'}, data:'starters'},
  {name:{"EN":'Salads',"RU":'Салаты'}, data:'salads'},
  {name:{"EN":'Bruschetta',"RU":'Брускетты'}, data:'brusshetta'},
  {name:{"EN":'Soups',"RU":'Супы' }, data:'soap'}, 
  {name:{"EN":'Pasta and risotto',"RU":'Паста и ризотто'}, data:'pasta'},
  {name:{"EN":'Noodles',"RU":'Лапша' }, data: 'noodles'}, 
	{name:{"EN":'Fish and seafood',"RU":'Рыба и морепродукты' }, data:'fishSeafood'},
	{name:{"EN":'Meat and poultry',"RU":'Мясо и птица' }, data: 'meatPoultry'},  
	{name:{"EN":'Side dishes',"RU":'Гарниры' }, data:'sideDishes'},
  {name:{"EN": 'Desserts', "RU": 'Десерты'}, data:'desserts'},  
	{name:{"EN":'Children`s menu',"RU":'Детское меню' }, data:'children'},
  {name: {"EN":'Autumn menu',"RU":'Осеннее меню' }, data: 'autumn'}
]


export type filter = typeof filters[0]

export const categories = {
    season: {'EN': 'Season menu', 'RU':  'Сезонное меню'},
  breakfast:{"EN":'Breakfasts until 14:00',"RU":'Завтраки до 14:00'} ,
  rowbar:{"EN":'RAW BAR',"RU":'RAW BAR'} ,
  sushi:{"EN":'Sushi',"RU":'Суши'} ,
  rolls:{"EN":'Rolls',"RU":'Роллы'} ,
  starters:{"EN":'Starters',"RU":'Закуски'} ,
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







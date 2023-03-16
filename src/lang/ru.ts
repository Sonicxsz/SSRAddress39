import { messageInterface, modalTitle, navbar } from "./typesLang"


export const NavbarRu: navbar  = {
    links: [{name:'Главная', link: '/'},
        {name:'Забронировать', link: '/booking'},
        {name:'Галерея',link: '/gallery'}, 
        {name:'Меню',link: '/menu'}, 
        {name:'Доставка',link: '/delivery'},  
        {name:'Карьера',link: '/career'}, 
        {name:'Контакты',link: '/', route: true}],

    
}

export const messageRu: messageInterface = {
    status: 'Статус Заявки',
    backBtn: 'Вернутся на главную',
      
  }



export const modalRuTitle: modalTitle = {
    vacancy: 'Заявка на вакансию',
	booking: 'Бесплатный заказ столика',
	delevery: 'Выберите тип доставки'
}


export const cardInterfaceRU = {
    composition: 'Состав',
    grams: 'гр',
    currency: 'руб',
    description: 'Описание',
    addbtn: 'Добавить в заказ',
}


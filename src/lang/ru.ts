import { messageInterface, modalTitle, navbar } from './typesLang';

export const NavbarRu: navbar = {
    links: [
        { name: 'Главная', link: '/' },
        { name: 'Забронировать', link: '/booking' },
        { name: 'Галерея', link: '/gallery' },
        { name: 'Меню', link: '/menuPage' },
        { name: 'Доставка', link: '/delivery' },
        { name: 'Карьера', link: '/career' },
        { name: 'Контакты', link: '/', route: true },
    ],
};

export const messageRu: messageInterface = {
    status: 'Статус Заявки',
    backBtn: 'Вернутся на главную',
};

export const modalRuTitle: modalTitle = {
    vacancy: 'Заявка на вакансию',
    booking: 'Бесплатный заказ столика',
    delevery: 'Выберите тип доставки',
};

export const cardInterfaceRU = {
    composition: 'Состав',
    grams: 'гр',
    currency: 'руб',
    description: 'Описание',
    addbtn: 'Добавить в заказ',
};

export const descriptorRU = {
    title: 'АДРЕС 39',
    description: `- гастрономическое  путешествие по соседству.
    Мы подарим ощущение выходных в другой стране, теперь для этого не обязательно организовывать поездку или заранее решать, чего именно хочется. 
    Наше пространство объединяет не только людей за одним столом, но и кухни мира под одной крышей. 
    Насладитесь морепродуктами, словно заглянули на рыбный рынок Франции, 
    пастой в зоне патио в Итальянской атмосфере или простыми и понятными блюдами в зоне гостиной, словно зашли в гости к другу.
    Ваш новый друг, 
    «Адрес 39»
    `,
    btnBooking: 'Забронировать стол',
    btnDelevery: 'Доставка',
};

export const footerRU =
    '© 2022 Наш адрес: 123423 просп. Маршала Жукова, 39А, корп. 1';

export const contactsRU = {
    worktime: 'Время работы:',
    days: 'Пн-Вс',
    address: 'просп. Маршала Жукова, 39А, корп. 1,',
    addressTitle: 'Адрес:',
};


export const cartRU = {
    order: 'Ваш заказ',
    sum: 'Сумма заказа'
  }


  export const countOfPeopleRU = [
    'на 1 человека',
    'на 2 человека',
    'на 3 человека',
    'на 4 человека',
    'на 5 человек',
    'на 6 человек',
    'на 7 человек',
    'на 8 человек',
    'на 9 человек',
    'на 10 человек',
    'больше 10 человек'
  ]
  
 export const timePickCommon = [
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00'
]


  export const DialogModalMessagesRU = {
    succesMessage:'Ваша заявка успешно отправлена. В ближайшее время вам перезвонит наш менеджер',
    failMessage:'Что-то пошло не так, пожалуйста попробуйте позже или позвоните нам по номеру: + 7(985)039-00-39',
    loadingMessage:'Идет отправка данных',
    notice:'Отправляя форму вы соглашаетесь на обработку ваших данных',
    description:'в ресторане Адрес 39' 
  }





  export const messFieldsRU = {
    name: {
      min:'Минимум 3 символа',
      type: 'Должны быть только буквы',
      type_error: 'Должно быть строкой',
     
    },
    phone: {
      min: 'Укажите полный номер телефона 10 цифр',
      max: 'Введите корректный номер',
     
    },
    comment: {
     
    },
    date: {
      typeError: 'Выберите актуальную дату'
    },
    required: 'Обязательное поле',
    address: {
      min: 'Минимум 3 символа',
    },  
  }
  
  
  export const modalFieldsInterfaceRU = {
      name: 'Имя',
      name_Title: 'Имя и фамилия',
      phone: 'Телефон',
      address: 'Адрес',
      comment:'Комментарий к заказу',
      commentCareer: 'Расскажи нам о себе и вашем опыте работе(при наличии)',
      date: 'Дата',
      datemm: 'дд:мм:гггг',
      commentBooking: 'Пожелания, будут учтены по возможности',
      time: 'Время',
      type: {
          self: 'Самовывоз',
          delevery: 'Доставка'
      }
  } 
  
  
  export const deleveryModalRU = {
    delevery:'Доставка по ЖК Wellton Park', 
    or:'или', 
    self:'Самовывоз', 
    yandex:'Доставка через Яндекс еду', 
  }



  export const MainMenuRU= [
		{
			name: "Детское меню",
			img: "/assets/mainMenu/3.jpg",
			src: "/assets/pdf/Child.pdf",
		},
		{
			name: "Основное меню",		
			img: "/assets/mainMenu/2.jpg",
			src: "assets/pdf/Food.pdf",
		},
		{
			name: "Вино",
			img: "/assets/mainMenu/1.jpg",
			src: "/assets/pdf/Wine.pdf",
		},
	];
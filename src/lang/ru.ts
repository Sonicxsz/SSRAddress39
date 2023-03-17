import { messageInterface, modalTitle, navbar } from './typesLang';

export const NavbarRu: navbar = {
    links: [
        { name: 'Главная', link: '/' },
        { name: 'Забронировать', link: '/booking' },
        { name: 'Галерея', link: '/gallery' },
        { name: 'Меню', link: '/menu' },
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

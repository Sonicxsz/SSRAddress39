import { navbar, modalTitle, messageInterface } from './typesLang';

export const NavbarEN: navbar = {
    links: [
        { name: 'Main', link: '/' },
        { name: 'Booking', link: '/booking' },
        { name: 'Gallery', link: '/gallery' },
        { name: 'Menu', link: '/menuPage' },
        { name: 'Delivery', link: '/delivery' },
        { name: 'Career', link: '/career' },
        { name: 'Contacts', link: '/', route: true },
    ],
};

export const modalEnTitle: modalTitle = {
    vacancy: 'Application for employment',
    booking: 'Free table reservation',
    delevery: 'Select delivery type',
};

export const messageEn: messageInterface = {
    status: 'Application Status',
    backBtn: 'Back to home page',
};

export const cardInterfaceEN = {
    composition: 'Composition',
    grams: 'g.',
    currency: 'rub',
    description: 'Description',
    addbtn: 'Add to order',
};

export const descriptorEN = {
    title: 'ADDRESS 39',
    description: `- a gastronomic trip in the neighborhood.
        We will give you the feeling of a weekend in another country, now you don't have to organize a trip or decide in advance what you want. 
        Our space brings together not only people around one table, but also the cuisines of the world under one roof. 
        Enjoy seafood as if you were stopping by a fish market in France, 
        Pasta in the patio area in an Italian atmosphere, or simple and straightforward dishes in the living room area, as if you were visiting a friend.
        Your new friend, 
        "Address 39."
        `,
    btnBooking: 'Book a table',
    btnDelevery: 'Delivery',
};

export const footerEN =
    '© 2022 Our address: 123423 Marshal Zhukov Avenue, 39A, bldg. 1';

export const contactsEN = {
    worktime: 'Working hours:',
    days: 'Mon-Sun',
    address: '39A Marshal Zhukov Ave. 1,',
    addressTitle: 'Address:',
};


export const cartEN = {
    order: 'Your order',
    sum: 'Order amount'
}

export const countOfPeopleEN = [
    'for 1 person',
    'for 2 persons',
    'for 3 persons',
    'for 4 persons',
    'for 5 persons',
    'for 6 persons',
    'for 7 persons',
    'for 8 persons',
    'for 9 persons',
    'for 10 people',
    'more than 10 people'
]
  


  export const DialogModalMessagesEN = {
    succesMessage:'Your application has been successfully sent. Our manager will call you back shortly',
    failMessage:'Something went wrong, please try again later or call us at the number: + 7(985)039-00-39',
    loadingMessage:'Data sending in progress',
    notice:'By submitting the form you agree to the processing of your data',
    description: 'at the restaurant Address 39' 
  }
  

  export const messFieldsEN = {
    name: {
      min:'Minimum of 3 characters',
      type: 'There should only be letters',
      type_error: 'It should be a line',
     
    },
    phone: {
      min: 'Provide a full 10-digit phone number',
      max: 'Enter the correct number',
     
    },
    comment: {
     
    },
    date: {
      typeError: 'Select the actual date'
    },
    required: 'Required field',
    address: {
      min: 'Minimum of 3 characters',
    }  
  }
  
  
  export const modalFieldsInterfaceEN = {
      name: 'Name',
      name_Title: 'First name and last name',
      phone: 'Phone',
      address: 'Address',
      comment: 'Comment to order',
      commentCareer: 'Tell us about yourself and your work experience (if any)',
      date: 'Date',
      datemm: 'dd:mm:yyyy',
      commentBooking: 'Wishes, will be taken into account if possible',
      time: 'Time',
      type: {
          self: 'Self-delivery',
          delevery: 'Delevery'
      }
  } 
  
  

  export const deleveryModalEN = {
    delevery:'Delivery on Wellton Park Complex', 
    or: 'or', 
    self:'Self-delivery', 
    yandex:'Delivery via Yandex food', 
  }



 export const MainMenuEN = [
		{
			name: "Children's menu",
			img: "/assets/mainMenu/3.jpg",
			src: "/assets/pdf/Child.pdf",
		},
    {
			name:  "Summer menu",
			img: "/assets/mainMenu/summer.jpg",
			src: "/assets/pdf/summer.pdf",
		},
		{
			name: "Main menu",
			img: "/assets/mainMenu/2.jpg",
			src: "/assets/pdf/Food.pdf",
		},
		{
			name:  "Wine",
			img: "/assets/mainMenu/1.jpg",
			src: "/assets/pdf/Wine.pdf",
		},
   
	];


  export const DeleveryLangEN = {
			title: "Delivery menu",
			conditionsTitle: "Delivery terms:",
			deleveyWelton: "Wellton park residential delivery free",
			deleveryYandex: "Delivery in Moscow and Moscow region is carried out by the service",
			conditions: "Check terms and conditions by phone",
			yandex: 'Yandex Food'
		
	}



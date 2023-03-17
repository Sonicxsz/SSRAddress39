import { navbar, modalTitle, messageInterface } from "./typesLang"



export const NavbarEN:navbar = {
        links: [{name:'Main', link: '/'},
        {name:'Booking', link: '/booking'},
        {name:'Gallery',link: '/gallery'}, 
        {name:'Menu',link: '/menu'}, 
        {name:'Delevery',link: '/delivery'},  
        {name:'Career',link: '/career'}, 
        {name:'Contacts',link: '/', route: true}]

}


export const modalEnTitle: modalTitle = {
	vacancy: 'Application for employment',
	booking: 'Free table reservation',
	delevery: 'Select delivery type'
}

export const messageEn: messageInterface = {
    status: 'Application Status',
    backBtn: 'Back to home page'
  }

export const cardInterfaceEN = {
        composition: 'Composition',
        grams: 'g.',
        currency: 'rub',
        description: 'Description',
        addbtn: 'Add to order'
    }


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
        btnDelevery: 'Delivery'}

export const footerEN = '© 2022 Our address: 123423 Marshal Zhukov Avenue, 39A, bldg. 1'

export const contactsEN = {
        worktime: 'Working hours:',
        days: 'Mon-Sun',
        address: '39A Marshal Zhukov Ave. 1,',
        addressTitle: 'Address:'
}
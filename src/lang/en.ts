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
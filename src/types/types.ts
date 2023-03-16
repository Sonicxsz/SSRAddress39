
export type messageProps = {
    message:string, 
    Icon: React.Component, 
    loading:boolean, 
    clearCart:() => void, 
    cart:boolean
}

export interface NavBarProps {
    moveToContact: () => void,  
    openModalCarrer:() => void,
     openModalBooking:() => void, 
     openModalDelevery:() => void
}

export interface PhoneInputProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, 
    value: string, 
    clazz: string
}

export interface MenuItemProps {
    name: string,
    img: string,
    src:string
}
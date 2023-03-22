import Spinner from "@/components/svg/Spinner";

export type messageProps = {
    message: string;
    Icon: Icon;
    loading: boolean;
    clearCart?: () => void;
    cart: boolean;
};

export interface NavBarProps {
    moveToContact: () => void;
    openModalCarrer: () => void;
    openModalBooking: () => void;
    openModalDelevery: () => void;
}

export interface PhoneInputProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    clazz: string;
}

export interface MenuItemProps {
    name: string;
    img: string;
    src: string;
}

export interface CardBase {
    name: {
        RU: string;
        EN: string;
    };
    count: number;
    price: number;
    id: number;
    img: string;
    gramm: number;
    lang: 'RU' | 'EN';
}

export interface CardProps extends CardBase {
    title: string;
    modifier?: {
        RU: string[];
        EN: string[];
    };
}

export interface CartButtonProps {
    openCart: () => void;
}

export interface DescriptorProps {
    openModal: () => void;
    openDelevery: () => void;
}

export interface ImgBlockProps {
    src: string;
    click?: () => void;
    styles?: string;
}

export interface ContactsProps {
    refs: React.LegacyRef<HTMLDivElement>;
}


// export interface ModalProps {
//      closeCart, 
//      closeCartbtn, 
//      succes:() => void, 
//      error:() => void, 
//      loading: () => void
// }

export interface withMessageArgs {
    BaseComponent: JSX.Element,
    cart: boolean,
    lang: string
}

export interface newMessageProps  {
    Icon: Icon, 
    message: string, 
    loading: boolean , 
    finalClose?: () => void
}

type Icon = ({size}:{size:number}) => JSX.Element

export interface HomeProps {
    openModalBooking: () => void, 
    openModalDelevery: () => void
}


export interface ModalProps {
    showModal:boolean,
    type: 'booking' | 'delivery' | 'career',
    closeModal: () => void,
    label: string
}

export interface FormProps {
    closeModal: () => void,
    loadingSend: () => void,
    successSend: () => void,
    errorSend: () => void
}
export interface navbar {
    links: link[]
}

interface link {
    name: string,
    link: string,
    route?: boolean
}

export interface modalTitle {
    vacancy: string,
	booking: string,
	delevery: string
}

export interface messageInterface{
    status: string,
    backBtn: string
}

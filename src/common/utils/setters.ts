export const openModal = (setter:any, value:any): void => {
    setter(value(true))
    
}
export  const closeModal = (setter:any, value:any): void => {
    setter(value(false))
}

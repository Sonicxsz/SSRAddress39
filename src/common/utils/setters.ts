type setter = (state:boolean) => void

export function openModal(setter:setter){
    setter(true)
}
export function closeModal(setter:setter) {
    setter(false)
}